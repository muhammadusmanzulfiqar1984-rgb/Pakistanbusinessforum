const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find app components -name "*.css"', { cwd: __dirname, encoding: 'utf8' })
  .split('\n').filter(Boolean);

const replacements = [
  ['#7a1f2b', '#1e3a8a'],
  ['#6a1825', '#162d6e'],
  ['#9B5A63', '#4a6fa5'],
  ['#faf7f4', '#f5f7ff'],
  ['#f5f0ec', '#eef2ff'],
  ['#f1eeea', '#eef2ff'],
  ['#f8f4f1', '#f0f4ff'],
  ['#e8e0db', '#dde5f7'],
  ['#e6ded8', '#dde5f7'],
  ['rgba(122, 31, 43', 'rgba(30, 58, 138'],
  ['rgba(122,31,43', 'rgba(30,58,138'],
];

let totalChanges = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  replacements.forEach(([from, to]) => {
    content = content.split(from).join(to);
  });
  if (content !== original) {
    fs.writeFileSync(f, content);
    totalChanges++;
    console.log('Updated:', f);
  }
});
console.log('Done. Files changed:', totalChanges);
