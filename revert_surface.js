const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const files = execSync('find app components -name "*.css"', { cwd: __dirname, encoding: 'utf8' })
  .split('\n').filter(Boolean);

// Reverting the "surface" (background) colors back to their original beige/warm tones
const replacements = [
  ['#f5f7ff', '#faf7f4'],
  ['#eef2ff', '#f5f0ec'],
  ['#eef2ff', '#f1eeea'], // Notice mapping overlap, #f5f0ec will be prioritized if we just match hex. Wait, eef2ff is mapped to two things. Let's just map it to the primary warm beige.
  ['#f0f4ff', '#f8f4f1'],
  ['#dde5f7', '#e8e0db']
];

let totalChanges = 0;
files.forEach(f => {
  const filePath = path.join(__dirname, f);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Revert all surface changes
  content = content.replace(/#f5f7ff/gi, '#faf7f4');
  content = content.replace(/#eef2ff/gi, '#f5f0ec');
  content = content.replace(/#f0f4ff/gi, '#f8f4f1');
  content = content.replace(/#dde5f7/gi, '#e8e0db');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    totalChanges++;
    console.log('Restored surface on:', f);
  }
});
console.log('Done. Files restored:', totalChanges);
