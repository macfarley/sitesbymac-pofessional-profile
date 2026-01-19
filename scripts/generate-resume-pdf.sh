#!/bin/bash
# Generate PDF from stylized HTML resume

cd "$(dirname "$0")/.."

echo "🎨 Generating stylized HTML..."
node scripts/generate-resume-stylized.js

echo "📄 Converting HTML to PDF..."
wkhtmltopdf \
  --enable-local-file-access \
  --print-media-type \
  --page-size Letter \
  --margin-top 0 \
  --margin-bottom 0 \
  --margin-left 0 \
  --margin-right 0 \
  public/resume_styled.html \
  public/resume_styled.pdf

echo "✅ PDF generated: public/resume_styled.pdf"
