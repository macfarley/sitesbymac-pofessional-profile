#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const [,, inputArg, outputArg] = process.argv;

if (!inputArg || !outputArg) {
  console.error('Usage: node scripts/generate-resume-html-from-json.cjs <input.json> <output.html>');
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

const list = (items = []) => items.map((i) => `<li>${esc(i)}</li>`).join('');

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(data.personalInfo?.name || 'Resume')} - Resume</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; max-width: 8.5in; margin: 0 auto; padding: 0.5in; color: #111; }
    h1 { margin: 0 0 6px; font-size: 24px; }
    h2 { margin: 16px 0 8px; font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
    p, li { font-size: 12px; line-height: 1.4; }
    .meta { margin-bottom: 10px; font-size: 12px; color: #333; }
    .item { margin-bottom: 10px; }
    .item-head { display: flex; justify-content: space-between; gap: 16px; }
    .muted { color: #555; }
    a { color: #1d4ed8; text-decoration: none; }
  </style>
</head>
<body>
  <header>
    <h1>${esc(data.personalInfo?.name)}</h1>
    <div class="meta">
      ${esc(data.personalInfo?.title)}<br/>
      ${esc(data.personalInfo?.location)} | ${esc(data.personalInfo?.phone)} | <a href="mailto:${esc(data.personalInfo?.email)}">${esc(data.personalInfo?.email)}</a><br/>
      <a href="${esc(data.personalInfo?.website)}">${esc(data.personalInfo?.website)}</a> | <a href="${esc(data.personalInfo?.linkedin)}">LinkedIn</a> | <a href="${esc(data.personalInfo?.github)}">GitHub</a>
    </div>
    <p>${esc(data.personalInfo?.summary)}</p>
  </header>

  <section>
    <h2>Skills</h2>
    <p>${(data.skills || []).map(esc).join(' • ')}</p>
  </section>

  <section>
    <h2>Experience</h2>
    ${(data.experience || []).map((job) => `
      <div class="item">
        <div class="item-head"><strong>${esc(job.title)} — ${esc(job.company)}</strong><span class="muted">${esc(job.dates)}</span></div>
        <div class="muted">${esc(job.location)}</div>
        <ul>${list(job.bullets || [])}</ul>
      </div>
    `).join('')}
  </section>

  <section>
    <h2>Projects</h2>
    ${(data.projects || []).map((project) => `
      <div class="item">
        <div class="item-head"><strong>${esc(project.name)}</strong><span class="muted">${(project.tech || []).map(esc).join(', ')}</span></div>
        <p>${esc(project.description)}</p>
        <p>
          ${project.liveUrl ? `<a href="${esc(project.liveUrl)}">Live</a>` : ''}
          ${project.liveUrl && project.repoUrl ? ' | ' : ''}
          ${project.repoUrl ? `<a href="${esc(project.repoUrl)}">Repo</a>` : ''}
        </p>
      </div>
    `).join('')}
  </section>

  <section>
    <h2>Education</h2>
    ${(data.education || []).map((edu) => `
      <div class="item">
        <div class="item-head"><strong>${esc(edu.credential)}</strong><span class="muted">${esc(edu.dates)}</span></div>
        <div>${esc(edu.institution)}</div>
      </div>
    `).join('')}
  </section>
</body>
</html>`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html, 'utf8');
console.log(`Generated resume HTML: ${outputPath}`);
