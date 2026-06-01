// Playwright 결과를 읽어 Slack으로 알림 전송
const fs = require('fs');
const path = require('path');
const https = require('https');
// 로컬 실행 시에만 .env 로드 (CI에서는 GitHub Actions 환경변수 사용)
const envPath = path.join(__dirname, '../.env');
if (fs.existsSync(envPath)) require('dotenv').config({ path: envPath });

// Jira 설정
const JIRA_DOMAIN  = 'kakaoent.atlassian.net';
const JIRA_PID     = '11189';   // 프로젝트 TP의 숫자 ID
const JIRA_TYPE_ID = '1';   // Bug

function extractBddSteps(steps) {
  const procedure = [];
  const expected = [];
  let seenThen = false;
  function traverse(list) {
    for (const step of list || []) {
      const t = step.title;
      // 키워드 제거 후 내용만 추출
      const content = t.replace(/^(Given|When|Then|And|But)\s+/i, '').trim();
      // 설명성 스텝 제외: "- " 또는 "ㄴ" 로 시작하는 것
      const isDescriptive = /^[-ㄴ]/.test(content);
      if (!isDescriptive) {
        if (/^Then\b/i.test(t))             { seenThen = true; expected.push(content); }
        else if (/^(Given|When|And|But)\b/i.test(t)) { (seenThen ? expected : procedure).push(content); }
      }
      if (step.steps?.length) traverse(step.steps);
    }
  }
  traverse(steps);
  return { procedure, expected };
}

function makeJiraUrl(test, runUrl) {
  let body = `확인 환경: ${ENV_URL}\nCI Run: ${runUrl || 'N/A'}\n\n상세내용:\n자동화 테스트 실패 — ${test.title}`;
  if (test.steps.procedure.length) body += '\n\n발생 경로:\n' + test.steps.procedure.join('\n');
  if (test.steps.expected.length)  body += '\n\n기대 결과:\n' + test.steps.expected.join('\n');
  return `https://${JIRA_DOMAIN}/secure/CreateIssueDetails!init.jspa` +
    `?pid=${JIRA_PID}&issuetype=${JIRA_TYPE_ID}&summary=${encodeURIComponent(test.title)}&description=${encodeURIComponent(body)}`;
}

const RESULTS_FILE = path.join(__dirname, '../test-results/results.json');
const WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const SUITE_NAME  = process.argv[2] || 'BDD';
const REPORT_URL  = process.argv[3] || null;
const PLATFORM    = process.argv[4] || 'pcweb';  // 'pcweb' | 'mweb'
const ENV         = process.argv[5] || 'prod';   // 'prod' | 'qa'

const ENV_URL = PLATFORM === 'mweb'
  ? (ENV === 'qa' ? 'https://qa-m.tapas.io (MWeb QA)' : 'https://m.tapas.io (MWeb Prod)')
  : (ENV === 'qa' ? 'https://qa.tapas.io (PC Web QA)' : 'https://tapas.io (PC Web Prod)');

if (!WEBHOOK_URL) {
  console.error('SLACK_WEBHOOK_URL이 .env에 없습니다.');
  process.exit(1);
}
if (!fs.existsSync(RESULTS_FILE)) {
  console.error('test-results/results.json 없음. 테스트를 먼저 실행하세요.');
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(RESULTS_FILE, 'utf8'));

// stats에서 직접 집계
const passed  = results.stats?.expected   ?? 0;
const failed  = results.stats?.unexpected ?? 0;
const skipped = results.stats?.skipped    ?? 0;
const total   = passed + failed + skipped;
const totalSec = Math.round((results.stats?.duration ?? 0) / 1000);
const durationMin = Math.floor(totalSec / 60);
const durationRemSec = totalSec % 60;
const durationStr = durationMin > 0 ? `${durationMin}분 ${durationRemSec}초` : `${durationRemSec}초`;

// 실패/동적skip 테스트 수집
const failedTests = [];
const dynamicSkips = [];  // test.skip(true, '사유') — 런타임 skip만 (사유 있는 것)

function walk(suites) {
  for (const suite of suites || []) {
    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        const lastResult = test.results?.[test.results.length - 1];
        const match = spec.title.match(/\[TPS-[\w-]+\]/i);
        const title = match ? `${match[0]} ${spec.title.replace(match[0], '').trim()}` : spec.title;

        if (lastResult?.status === 'failed' || lastResult?.status === 'timedOut') {
          const steps = extractBddSteps(lastResult.steps || []);
          const retryCount = test.results.length - 1;
          failedTests.push({ title, steps, retryCount });
        }

        // 동적 skip: annotations에 type='skip' + description 있는 경우
        const skipAnnotation = (test.annotations || []).find(
          a => a.type === 'skip' && a.description
        );
        if (skipAnnotation) {
          dynamicSkips.push({ title, reason: skipAnnotation.description });
        }
      }
    }
    walk(suite.suites);
  }
}
walk(results.suites);

const allPassed = failed === 0;
const emoji = allPassed ? '✅' : '❌';
const statusText = allPassed ? '전체 통과' : `${failed}개 실패`;

const blocks = [
  {
    type: 'header',
    text: { type: 'plain_text', text: `${emoji} Tapas QA — ${SUITE_NAME} 결과` }
  },
  {
    type: 'section',
    fields: [
      { type: 'mrkdwn', text: `*결과*\n${statusText}` },
      { type: 'mrkdwn', text: `*소요 시간*\n${durationStr}` },
      { type: 'mrkdwn', text: `*실행 시각*\n${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}` },
    ]
  },
  {
    type: 'section',
    text: { type: 'mrkdwn', text: `통과 ${passed}  |  실패 ${failed}  |  Skip ${skipped}` }
  }
];

if (dynamicSkips.length > 0) {
  // reason 기준 그룹핑
  const grouped = {};
  for (const t of dynamicSkips) {
    if (!grouped[t.reason]) grouped[t.reason] = [];
    grouped[t.reason].push(t.title);
  }
  const skipList = Object.entries(grouped).map(([reason, titles]) =>
    `*${reason}*\n` + titles.map(t => ` • ${t}`).join('\n')
  ).join('\n\n');
  blocks.push({
    type: 'section',
    text: { type: 'mrkdwn', text: `*Skip 사유 (${dynamicSkips.length}건)*\n${skipList}` }
  });
}

if (failedTests.length > 0) {
  const failList = failedTests.slice(0, 10).map(t => {
    const retryLabel = t.retryCount > 0 ? ` _(재시도 ${t.retryCount}회 후 실패)_` : '';
    return `• ${t.title}${retryLabel}`;
  }).join('\n');
  const more = failedTests.length > 10 ? `\n외 ${failedTests.length - 10}개 더...` : '';
  blocks.push({
    type: 'section',
    text: { type: 'mrkdwn', text: `*실패 항목*\n${failList}${more}` }
  });

  // 실패 항목별 Jira 등록 버튼 (최대 5개)
  const jiraButtons = failedTests.slice(0, 5).map(t => ({
    type: 'button',
    text: { type: 'plain_text', text: `🐛 ${t.title.match(/\[TPS-[\w-]+\]/i)?.[0] ?? t.title.slice(0, 20)}` },
    url: makeJiraUrl(t, REPORT_URL),
    style: 'danger',
  }));
  blocks.push({ type: 'actions', elements: jiraButtons });
}

if (REPORT_URL) {
  blocks.push({
    type: 'actions',
    elements: [{
      type: 'button',
      text: { type: 'plain_text', text: '📊 대시보드 보기' },
      url: REPORT_URL,
      style: allPassed ? 'primary' : 'danger',
    }]
  });
} else {
  blocks.push({
    type: 'context',
    elements: [{ type: 'mrkdwn', text: '📋 상세 리포트: 터미널에서 `npm run allure`' }]
  });
}

const body = JSON.stringify({ blocks });
const url = new URL(WEBHOOK_URL);
const options = {
  hostname: url.hostname,
  path: url.pathname,
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
};

const req = https.request(options, res => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log(`Slack 알림 전송 완료 — ${statusText} (${passed}/${total}, ${durationStr})`);
    } else {
      console.error(`Slack 전송 실패: ${res.statusCode} ${data}`);
      process.exit(1);
    }
  });
});
req.on('error', e => { console.error('오류:', e.message); process.exit(1); });
req.write(body);
req.end();
