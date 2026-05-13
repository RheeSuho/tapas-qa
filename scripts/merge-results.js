// 샤드별 results.json을 하나로 합침
const fs = require('fs');
const path = require('path');

const inputDir = process.argv[2] || 'test-results';
const outputFile = process.argv[3] || 'test-results/results.json';

const files = fs.readdirSync(inputDir)
  .filter(f => f.startsWith('results-shard-') && f.endsWith('.json'))
  .map(f => JSON.parse(fs.readFileSync(path.join(inputDir, f), 'utf8')));

if (files.length === 0) {
  console.error('병합할 shard 결과 파일이 없습니다.');
  process.exit(1);
}

const merged = {
  config: files[0].config,
  stats: {
    startTime: Math.min(...files.map(f => new Date(f.stats?.startTime || Date.now()).getTime())),
    duration:  Math.max(...files.map(f => f.stats?.duration || 0)),
    expected:  files.reduce((s, f) => s + (f.stats?.expected  || 0), 0),
    unexpected:files.reduce((s, f) => s + (f.stats?.unexpected|| 0), 0),
    skipped:   files.reduce((s, f) => s + (f.stats?.skipped   || 0), 0),
    flaky:     files.reduce((s, f) => s + (f.stats?.flaky     || 0), 0),
  },
  suites: files.flatMap(f => f.suites || []),
  errors: files.flatMap(f => f.errors || []),
};

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(merged, null, 2));
console.log(`결과 병합 완료: ${files.length}개 shard → ${outputFile}`);
console.log(`통과 ${merged.stats.expected} | 실패 ${merged.stats.unexpected} | Skip ${merged.stats.skipped}`);
