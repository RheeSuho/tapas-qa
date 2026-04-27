// Playwright 결과를 읽어 Slack으로 알림 전송
const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const RESULTS_FILE = path.join(__dirname, '../test-results/results.json');
const WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const SUITE_NAME = process.argv[2] || 'BDD';

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
const durationSec = ((results.stats?.duration ?? 0) / 1000).toFixed(1);

// 실패 테스트 이름 수집
const failedTests = [];
function walk(suites) {
  for (const suite of suites || []) {
    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        const status = test.results?.[0]?.status;
        if (status === 'failed' || status === 'timedOut') {
          const match = spec.title.match(/\[TPS-\d+\]/);
          failedTests.push(match ? `${match[0]} ${spec.title.replace(match[0], '').trim()}` : spec.title);
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
      { type: 'mrkdwn', text: `*통과 / 전체*\n${passed} / ${total}` },
      { type: 'mrkdwn', text: `*소요 시간*\n${durationSec}초` },
      { type: 'mrkdwn', text: `*실행 시각*\n${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}` },
    ]
  }
];

if (failedTests.length > 0) {
  const failList = failedTests.slice(0, 10).map(t => `• ${t}`).join('\n');
  const more = failedTests.length > 10 ? `\n외 ${failedTests.length - 10}개 더...` : '';
  blocks.push({
    type: 'section',
    text: { type: 'mrkdwn', text: `*실패 항목*\n${failList}${more}` }
  });
}

blocks.push({
  type: 'context',
  elements: [{ type: 'mrkdwn', text: '📋 상세 리포트: 터미널에서 `npm run report`' }]
});

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
      console.log(`Slack 알림 전송 완료 — ${statusText} (${passed}/${total}, ${durationSec}초)`);
    } else {
      console.error(`Slack 전송 실패: ${res.statusCode} ${data}`);
      process.exit(1);
    }
  });
});
req.on('error', e => { console.error('오류:', e.message); process.exit(1); });
req.write(body);
req.end();
