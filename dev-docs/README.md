# Development Documentation & Archives

**Purpose:** Consolidated development logs, architectural decisions, and archived artifacts for the SitesbyMac professional portfolio.

## Folder Structure

```
dev-docs/
├── README.md (THIS FILE)
├── RESUME-CONSOLIDATION.md       # How resume is generated & updated
├── resume-development/            # Archived resume templates & versions
│   ├── resume_from_copilot.md    # Full professional narrative
│   ├── resume_ats.md             # ATS-optimized version
│   ├── resume_styled.html        # Last HTML version
│   ├── resume_styled.pdf         # Styled PDF
│   ├── resume_ats.pdf            # ATS PDF
│   ├── resume_temp.html          # Temporary version
│   ├── resume-style.css          # CSS styling
│   ├── resume-template.html      # Basic template
│   ├── resume-template-weasy.html # WeasyPrint template
│   ├── resume-template.tex       # LaTeX template
│   └── README_resume_import.md   # Import process notes
└── (other development guides added as needed)
```

## Quick Reference

### Resume Updates
→ See `RESUME-CONSOLIDATION.md` for complete resume generation & update process

### What's Archived Here
All old resume templates and versions have been consolidated into a single structured source (`/src/data/resume.ts`). These files are kept for reference only:
- **Do NOT** manually edit these files
- **DO** update `/src/data/resume.ts` instead
- Changes sync automatically to all pages

### Site Architecture
→ See `../README.md` for full tech stack and deployment info

## Maintenance Notes

**Last Consolidated:** November 9, 2025
**Status:** Active (under ongoing development)

### Future Development
- Consider creating development log for other projects
- Document Griftopedia and VolunQueer development when available
- Track design decisions in ADR (Architecture Decision Records)
