# Resume Development & Consolidation Guide

**Last Updated:** November 9, 2025  
**Status:** Consolidated from 8 separate files into single source of truth  

## Overview

This document consolidates the resume development process, templates, and decision history. The primary resume is maintained in the website database structure and generated in multiple formats as needed.

## Resume Versions

### 1. **Production Resume Files** (Generated & Deployed)
Located in `/public/`:
- `resume_styled.pdf` - Printer-friendly PDF with professional styling
- `resume_ats.pdf` - ATS-optimized plain text format

**Generation:**
```bash
# Generate PDFs from HTML templates
python -m weasyprint resume_styled.html resume_styled.pdf -m print
python -m weasyprint resume_ats.html resume_ats.pdf -m print
```

### 2. **Resume Content Sources**
All resume content is now maintained in:
- `/src/data/resume.ts` - Structured TypeScript data model
- `/src/app/about/` - About page with collapsible career sections

**Update Process:**
1. Edit resume data in `src/data/resume.ts`
2. Sections automatically sync across:
   - About page collapsible sections
   - Project cards with full descriptions
   - Download buttons generate PDFs from current data

### 3. **Historical Resume Versions**

#### ATS-Friendly Version (`resume_ats.md`)
- Plain text optimized for Applicant Tracking Systems
- No special formatting, simple bullet points
- Updated: September 2025
- Key content: Full employment history, education, certifications, all projects

#### Full Professional Version (`resume_from_copilot.md`)
- Comprehensive narrative format
- Includes community leadership and impact section
- Includes honors and recognition
- Detailed project descriptions with metrics
- Updated: November 2025

#### Resume Import Documentation (`README_resume_import.md`)
- Historical note about resume generation process
- Reference for future resume imports or updates

## Technical Implementation

### Resume Data Model (`/src/data/resume.ts`)

```typescript
export interface ResumeData {
  contact: ContactInfo;
  professionalSummary: string;
  skills: SkillGroup[];
  experience: JobExperience[];
  projects: ProjectData[];
  education: EducationData[];
  certifications: CertificationData[];
  references: ReferenceData[];
}
```

### Resume Generation Templates

#### HTML Templates (Previously Used)
- `resume_styled.html` - Professional layout with CSS Grid, 0.5in margins
- `resume_ats.html` - Simplified ATS-friendly format

**Note:** These templates have been superseded by React components. For future regeneration:
1. Export data from TypeScript model as JSON
2. Use template literals or a template engine to generate HTML
3. Convert to PDF using WeasyPrint

#### CSS Files
- `resume-style.css` - Professional styling with typography, spacing, colors
- Organized with sections: typography, colors, layout, print media

### PDF Generation

**Tool:** WeasyPrint (Python)
```bash
pip install weasyprint
```

**Command:**
```bash
weasyprint input.html output.pdf -m print
```

**Key Settings for Print:**
- Media type: `-m print` (uses @media print styles)
- Page size: A4/Letter in HTML via CSS `@page` rule
- Margin: 0.5 inches on all sides

## Content Organization

### What Was Consolidated

| File | Status | Notes |
|------|--------|-------|
| `resume_from_copilot.md` | ARCHIVED | Full professional version with community impact section |
| `resume_ats.md` | ARCHIVED | ATS-optimized version - plain text format |
| `resume_template.html` | ARCHIVED | Original HTML template (basic structure) |
| `resume_template-weasy.html` | ARCHIVED | WeasyPrint-specific template |
| `resume_temp.html` | ARCHIVED | Temporary version during development |
| `resume_styled.html` | ARCHIVED | Final styled HTML before React migration |
| `resume-style.css` | ARCHIVED | CSS styling for HTML versions |
| `resume-template.tex` | ARCHIVED | LaTeX template (not used) |
| `README_resume_import.md` | ARCHIVED | Import process documentation |

All archived files are preserved in `/dev-docs/resume-development/` for historical reference.

## Updating Your Resume

### Quick Update (For Website Changes)

1. Open `/src/data/resume.ts`
2. Update relevant sections:
   - `professionalSummary` - overview
   - `experience[]` - job history
   - `projects[]` - portfolio projects
   - `skills[]` - technical skills
   - `education[]` - education history
   - `certifications[]` - credentials
   - `references[]` - references/mentors

3. Changes automatically sync to:
   - About page sections
   - Project cards
   - Download buttons

### Generate New PDFs

1. Update data in `src/data/resume.ts`
2. Run the React site build (generates DOM)
3. Use browser DevTools or Puppeteer to print to PDF
   
**Alternative (Manual):**
```bash
# Create HTML export from data
node scripts/export-resume-html.js

# Convert to PDF with WeasyPrint
python -m weasyprint resume_export.html resume_export.pdf -m print
```

### Create New Resume Versions

**For ATS submission:**
- Use the plain text version without special formatting
- Include all keywords from job description
- Keep dates consistent (MM/YYYY format)

**For print/portfolio:**
- Use styled version with professional design
- Include full project descriptions
- Add metrics and achievements

## Resume Content Highlights

### Current Experience (Nov 2025)
- **VolunQueer** - Junior Django Developer (Remote, Portland OR)
  - Platform migration, PyTest, React-to-Django adaptation
  - Test-driven development, WCAG accessibility

### Key Projects
1. **SitesbyMac.dev** - Portfolio & blog with GitHub API integration (98+ Lighthouse)
2. **StirCraft** - Django cocktail platform, team lead, 100% test coverage
3. **Dream Weaver** - MERN sleep tracking app, 60% performance gain
4. **VolunQueer** - LGBTQ+ volunteer platform (in development)
5. **Fridge Buddy** - Food inventory management app (in development)

### Education
- **General Assembly** - Software Engineering Immersive (2025)
- **Harvard CS50x/CS50w** - Self-directed learning
- **Wright State University** - Dual enrollment (2007-2009)
- **Celina High School** - Honors Diploma, AP Chemistry (Score: 5)

## Best Practices

✅ **Do:**
- Keep data in single source of truth (TypeScript data model)
- Use semantic HTML and CSS for accessibility
- Include quantifiable metrics (percentages, counts, improvements)
- Test resume in multiple ATS systems before submission
- Update projects and experience regularly

❌ **Don't:**
- Manually edit multiple resume versions
- Use special characters that ATS systems reject
- Include graphics/logos in ATS version
- Have gaps in dates or vague descriptions

## Future Improvements

- [ ] Automated PDF generation via Node.js script
- [ ] Resume version control with Git history
- [ ] A/B testing different versions for different roles
- [ ] Integration with LinkedIn API for automatic updates
- [ ] Multi-language resume support
- [ ] Cover letter generator tied to job descriptions

## Files Location Reference

```
portfolio/
├── therealmccoyweb/
│   ├── public/
│   │   ├── resume_styled.pdf (LIVE)
│   │   └── resume_ats.pdf (LIVE)
│   ├── src/
│   │   ├── data/resume.ts (SOURCE OF TRUTH)
│   │   └── app/about/ (DISPLAY)
│   └── dev-docs/
│       ├── RESUME-CONSOLIDATION.md (THIS FILE)
│       └── resume-development/
│           ├── resume_from_copilot.md
│           ├── resume_ats.md
│           ├── resume_styled.html
│           ├── resume-style.css
│           ├── resume_template.html
│           └── ... (other archived files)
└── (archived files moved here from root)
```

## Revision History

| Date | Change | Version |
|------|--------|---------|
| Nov 9, 2025 | Consolidated from 8 files into structured TypeScript model | 3.0 |
| Oct 2025 | Added projects (SitesbyMac, Dream Weaver) | 2.5 |
| Sep 2025 | Started General Assembly cohort | 2.0 |
| Initial | Resume development during bootcamp | 1.0 |
