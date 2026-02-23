# Resume & Cover Letter Generation (Public)

## Goal

Protect personal, identity-specific resume/cover-letter content while still providing a reusable public pipeline for other builders.

## Data Boundaries

### Personal (identity-specific)

- [Resume source data](../../src/data/resume.ts)
- [Cover letter source data](../../src/data/cover-letter.ts)
- [Alternate cover letter data](../../src/data/coverLetter.ts)

These files are intentionally personal and should be treated as owner-specific content.

### Reusable (clean templates)

- [Clean resume example JSON](../templates/resume.clean.example.json)
- [Clean cover letter example JSON](../templates/cover-letter.clean.example.json)

These are safe, reusable templates for anyone cloning this repo.

## Data → HTML → PDF Flow

### 1) Start with clean JSON data

- Resume input: `docs/templates/resume.clean.example.json`
- Cover letter input: `docs/templates/cover-letter.clean.example.json`

### 2) Generate clean HTML

```bash
# Resume HTML
node scripts/generate-resume-html-from-json.cjs \
	docs/templates/resume.clean.example.json \
	public/resume_clean_example.html

# Cover letter HTML
node scripts/generate-cover-letter-html-from-json.cjs \
	docs/templates/cover-letter.clean.example.json \
	public/cover_letter_clean_example.html
```

### 3) Convert HTML to PDF

Use `wkhtmltopdf` (same style as existing resume PDF workflow):

```bash
wkhtmltopdf --enable-local-file-access --print-media-type \
	--page-size Letter \
	public/resume_clean_example.html \
	public/resume_clean_example.pdf

wkhtmltopdf --enable-local-file-access --print-media-type \
	--page-size Letter \
	public/cover_letter_clean_example.html \
	public/cover_letter_clean_example.pdf
```

## Existing Site-Specific Generators

- [ATS generator](../../scripts/generate-resume-ats.js)
- [Stylized generator](../../scripts/generate-resume-stylized.js)
- [PDF conversion helper](../../scripts/generate-resume-pdf.sh)

These remain valid for the current site owner workflow.

## Recommended Reuse Pattern

1. Copy the clean JSON templates.
2. Replace placeholder identity fields with your own data.
3. Generate HTML using the public-safe scripts.
4. Convert to PDF.
5. Keep personal drafts outside tracked public docs when needed.

## Private Method Requests

For internal/private methods beyond this public-safe flow, contact:

- [mac@sitesbymac.dev](mailto:mac@sitesbymac.dev)
