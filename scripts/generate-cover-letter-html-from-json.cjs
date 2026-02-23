#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const [,, inputArg, outputArg] = process.argv;

if (!inputArg || !outputArg) {
  console.error('Usage: node scripts/generate-cover-letter-html-from-json.cjs <input.json> <output.html>');
  process.exit(1);
}

const inputPath = path.resolve(process.cwd(), inputArg);
const outputPath = path.resolve(process.cwd(), outputArg);

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

const esc = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const paragraphs = (data.letter?.bodyParagraphs || []).map((p) => `<p>${esc(p)}</p>`).join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(data.author?.name || 'Cover Letter')} - Cover Letter</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; max-width: 8.5in; margin: 0 auto; padding: 0.75in; color: #111; }
    .meta { margin-bottom: 20px; font-size: 12px; line-height: 1.5; }
    p { font-size: 12px; line-height: 1.55; margin-bottom: 12px; }
  </style>
</head>
<body>
  <div class="meta">
    <strong>${esc(data.author?.name)}</strong><br/>
    ${esc(data.author?.location)}<br/>
    ${esc(data.author?.phone)} | ${esc(data.author?.email)}<br/>
    ${esc(data.author?.website)}<br/><br/>
    ${esc(data.meta?.date)}<br/><br/>
    ${esc(data.meta?.company)}<br/>
    Re: ${esc(data.meta?.position)} ${data.meta?.jobId ? `(${esc(data.meta.jobId)})` : ''}
  </div>

  <p>${esc(data.letter?.greeting)}</p>
  <p>${esc(data.letter?.opening)}</p>
  ${paragraphs}
  <p>${esc(data.letter?.closing)}</p>
  <p>${esc(data.letter?.signoff)},<br/><br/>${esc(data.author?.name)}</p>
</body>
</html>`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html, 'utf8');
console.log(`Generated cover letter HTML: ${outputPath}`);
