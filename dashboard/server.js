const http = require('http');
const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const PORT = 3333;
const ROOT = path.join(__dirname, '..');
const ARCHIVE_DIR = path.join(ROOT, 'allure-report-archive');
const MAX_ARCHIVES = 10;
let currentProcess = null;

const { networkInterfaces } = require('os');
const localIp = Object.values(networkInterfaces()).flat()
  .find(n => n.family === 'IPv4' && !n.internal)?.address || 'localhost';
const BASE_URL = `http://${localIp}:${PORT}`;
let sseClients = [];

const SCRIPTS = {
  'pcweb-prod-smoke':       'test:smoke',
  'pcweb-prod-regression':  'test:bdd',
  'pcweb-qa-smoke':         'test:qa:smoke',
  'pcweb-qa-regression':    'test:qa',
  'mweb-prod-smoke':        'test:mweb:smoke',
  'mweb-prod-regression':   'test:mweb',
  'mweb-qa-smoke':          'test:mweb:qa:smoke',
  'mweb-qa-regression':     'test:mweb:qa',
};

function pruneOldArchives(maxKeep) {
  if (!fs.existsSync(ARCHIVE_DIR)) return;
  const runs = fs.readdirSync(ARCHIVE_DIR)
    .filter(d => fs.statSync(path.join(ARCHIVE_DIR, d)).isDirectory())
    .sort();
  const toDelete = runs.slice(0, Math.max(0, runs.length - maxKeep));
  for (const dir of toDelete) {
    const target = path.join(ARCHIVE_DIR, dir);
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`[archive] 오래된 리포트 삭제: ${dir}`);
  }
}

function broadcast(data) {
  const msg = `data: ${JSON.stringify(data)}\n\n`;
  sseClients = sseClients.filter(res => {
    try { res.write(msg); return true; }
    catch { return false; }
  });
}

function serveStatic(res, filePath) {
  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('리포트를 찾을 수 없습니다.');
    return;
  }
  const ext = path.extname(filePath);
  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.json': 'application/json',
    '.woff2': 'font/woff2',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.csv': 'text/csv',
    '.txt': 'text/plain',
  }[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': mime });
  fs.createReadStream(filePath).pipe(res);
}

http.createServer((req, res) => {
  const url = req.url.split('?')[0];

  if (req.method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
    return;
  }

  if (req.method === 'GET' && url === '/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    res.write('data: {"type":"connected"}\n\n');
    sseClients.push(res);
    req.on('close', () => { sseClients = sseClients.filter(c => c !== res); });
    return;
  }

  // 최신 리포트로 리다이렉트
  if (req.method === 'GET' && (url === '/results' || url === '/results/latest')) {
    if (!fs.existsSync(ARCHIVE_DIR)) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('아직 실행된 테스트가 없습니다.');
      return;
    }
    const runs = fs.readdirSync(ARCHIVE_DIR)
      .filter(d => fs.statSync(path.join(ARCHIVE_DIR, d)).isDirectory())
      .sort().reverse();
    if (!runs.length) { res.writeHead(404); res.end('리포트 없음'); return; }
    res.writeHead(302, { Location: `/results/${runs[0]}/` });
    res.end();
    return;
  }

  // API: 최신 test-results/results.json 파싱 반환
  if (req.method === 'GET' && url === '/api/results/latest') {
    const resultsFile = path.join(ROOT, 'test-results', 'results.json');
    if (!fs.existsSync(resultsFile)) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'results.json 없음' }));
      return;
    }
    const results = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));
    const stats = {
      passed: results.stats?.expected ?? 0,
      failed: results.stats?.unexpected ?? 0,
      skipped: results.stats?.skipped ?? 0,
      duration: results.stats?.duration ?? 0,
    };
    const failures = [];
    const dynamicSkips = [];
    function extractHomeCtx(suiteTitle) {
      const m = suiteTitle.match(/features\/\d+-홈-\(([^)]+)\)\//);
      if (m) return `홈(${m[1]})`;
      if (/features\/\d+-홈\//.test(suiteTitle)) return '홈';
      return null;
    }
    function walkResults(suites, homeCtx) {
      for (const suite of suites || []) {
        const ctx = homeCtx ?? extractHomeCtx(suite.title);
        for (const spec of suite.specs || []) {
          for (const test of spec.tests || []) {
            const last = test.results?.[test.results.length - 1];
            const m = spec.title.match(/\[TPS-[^\]]+\]/i);
            const suffix = spec.title.replace(m?.[0] ?? '', '').trim();
            const title = m ? `${m[0]}${ctx ? ` ${ctx} >` : ''} ${suffix}` : spec.title;
            if (last?.status === 'failed' || last?.status === 'timedOut') {
              const toRel = p => p ? path.relative(ROOT, p) : null;
              const screenshot = toRel(last.attachments?.find(a => a.contentType === 'image/png')?.path);
              const video = toRel(last.attachments?.find(a => a.contentType === 'video/webm')?.path);
              // 실패 스텝 추출: 에러 발생 스텝 또는 마지막 BDD 키워드 스텝
              let failStep = null;
              function findFailStep(steps) {
                for (const s of steps || []) {
                  if (s.error) failStep = s.title.replace(/^(Given|When|Then|And|But)\s+/i, '').trim();
                  if (s.steps?.length) findFailStep(s.steps);
                }
              }
              findFailStep(last.steps);
              if (!failStep) {
                // fallback: 마지막 When/Then 스텝
                function findLastBdd(steps) {
                  for (const s of [...(steps || [])].reverse()) {
                    if (/^(When|Then|And)\s/i.test(s.title)) { failStep = s.title.replace(/^(Given|When|Then|And|But)\s+/i, '').trim(); return; }
                    if (s.steps?.length) findLastBdd(s.steps);
                  }
                }
                findLastBdd(last.steps);
              }
              failures.push({ title, screenshot, video, failStep });
            }
            const skipAnn = (test.annotations || []).find(a => a.type === 'skip' && a.description);
            if (skipAnn) dynamicSkips.push({ title, reason: skipAnn.description });
          }
        }
        walkResults(suite.suites, ctx);
      }
    }
    walkResults(results.suites);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ stats, failures, dynamicSkips }));
    return;
  }

  // 테스트 아티팩트 서빙 (스크린샷·영상)
  if (req.method === 'GET' && url.startsWith('/artifacts/')) {
    const rel = decodeURIComponent(url.slice('/artifacts/'.length));
    const fullPath = path.join(ROOT, rel);
    if (!fullPath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }
    if (!fs.existsSync(fullPath)) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(fullPath);
    const mime = { '.png': 'image/png', '.webm': 'video/webm', '.zip': 'application/zip' }[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    fs.createReadStream(fullPath).pipe(res);
    return;
  }

  // 아카이브 리포트 서빙
  if (req.method === 'GET' && url.startsWith('/results/')) {
    const after = url.slice('/results/'.length);
    const parts = after.split('/');
    const runId = parts[0];
    const rest = parts.slice(1).join('/') || 'index.html';
    const filePath = path.join(ARCHIVE_DIR, runId, rest);
    serveStatic(res, filePath);
    return;
  }

  // 테스트 실행
  if (req.method === 'POST' && url === '/run') {
    let body = '';
    req.on('data', d => body += d);
    req.on('end', () => {
      if (currentProcess) { res.writeHead(409); res.end('이미 실행 중'); return; }
      let parsed;
      try { parsed = JSON.parse(body); } catch { res.writeHead(400); res.end('Bad JSON'); return; }
      const { platform, env, type, slack } = parsed;
      const script = SCRIPTS[`${platform}-${env}-${type}`];
      if (!script) { res.writeHead(400); res.end('Invalid params'); return; }

      const runId = Date.now().toString();
      console.log(`[run] ${platform}-${env}-${type} (runId: ${runId}, slack: ${!!slack})`);
      broadcast({ type: 'start', platform, env, testType: type, runId });

      currentProcess = spawn('npm', ['run', script], { cwd: ROOT, shell: true });
      currentProcess.stdout.on('data', d => broadcast({ type: 'log', text: d.toString() }));
      currentProcess.stderr.on('data', d => broadcast({ type: 'log', text: d.toString() }));
      currentProcess.on('close', code => {
        currentProcess = null;
        console.log(`[done] exit code: ${code}`);

        // Allure 리포트 생성
        const reportDest = path.join(ARCHIVE_DIR, runId);
        try {
          fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
          execSync(`allure generate allure-results --clean -o "${reportDest}"`, { cwd: ROOT });
          console.log(`[report] 생성 완료 → ${reportDest}`);
          pruneOldArchives(MAX_ARCHIVES);
        } catch (e) {
          console.error('[report] Allure 생성 실패:', e.message);
        }

        broadcast({ type: 'done', code, runId });

        // 슬랙 알림
        if (slack) {
          const platformLabel = platform === 'mweb' ? 'MWeb' : 'PC Web';
          const suiteName = `${platformLabel} / ${env.toUpperCase()} / ${type === 'smoke' ? 'Smoke' : 'Regression'}`;
          const dashboardUrl = `${BASE_URL}/`;
          const allureRunUrl = `${BASE_URL}/results/${runId}/`;
          console.log(`[slack] 전송 중... (${suiteName})`);
          const notifier = spawn(process.execPath, ['scripts/notify-slack.js', suiteName, dashboardUrl, platform, env, allureRunUrl], { cwd: ROOT });
          notifier.stdout.on('data', d => {
            const msg = d.toString().trim();
            console.log('[slack]', msg);
            broadcast({ type: 'log', text: `[슬랙] ${msg}` });
          });
          notifier.stderr.on('data', d => {
            const msg = d.toString().trim();
            console.error('[slack error]', msg);
            broadcast({ type: 'log', text: `[슬랙 오류] ${msg}` });
          });
        }
      });

      res.writeHead(200); res.end('OK');
    });
    return;
  }

  // 중단
  if (req.method === 'POST' && url === '/stop') {
    if (currentProcess) {
      currentProcess.kill('SIGTERM');
      currentProcess = null;
      broadcast({ type: 'stopped' });
    }
    res.writeHead(200); res.end('OK');
    return;
  }

  res.writeHead(404); res.end('Not found');
}).listen(PORT, '0.0.0.0', () => {
  console.log(`\n  Tapas QA Dashboard`);
  console.log(`  로컬:    http://localhost:${PORT}`);
  console.log(`  팀원:    ${BASE_URL}`);
  console.log();
});
