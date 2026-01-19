# Resume Development & Consolidation Guide

**Last Updated:** January 19, 2026  
**Status:** Complete dual-resume system with ATS-optimized PDF and stylized print version  

## Overview

This document consolidates the resume development process, templates, and decision history. The primary resume is maintained in the website database structure (`/src/data/resume.ts`) with two distinct output formats:

1. **ATS Resume** - 2-page PDF optimized for applicant tracking systems (generated via jsPDF)
2. **Stylized Resume** - Visual print version for interviews/job fairs (HTML→PDF with enhanced design)

---

## Dual Resume System

### ATS Resume (2-Page, Text-Only)
- **Purpose:** Submit to online applications, ATS systems
- **Format:** Plain text, keyword-optimized, 2-page structure
- **Generator:** `/src/components/PDFDownloadButton.tsx` (jsPDF)
- **Download:** Blue button on About page

### Stylized Resume (1-Page, Visual)
- **Purpose:** Physical copies for interviews and job fairs
- **Format:** Enhanced typography, color scheme, decorative elements
- **Generator:** `/scripts/generate-resume-stylized.js` → `/scripts/generate-resume-pdf.sh`
- **Output:** `/public/resume_styled.pdf`
- **Download:** Green button on About page

---

## Current Resume Structure (ATS - 2-Page Format)

### **PAGE 1: Foundation & Technical Experience**
1. **Header** - Name, title, location, clearance eligibility, contact info
2. **Professional Summary** - Hybrid security/engineering positioning with SWOT/Scrum language
3. **Core Competencies** - 3-column layout (12 competencies)
4. **Technical Skills** - 6 categories with symmetrical grouping
5. **Languages** - 4 languages with proficiency levels (2-column layout)
6. **Technical Experience** - VolunQueer with categorized bullets
7. **Awards & Certifications** - Recent-first order (3 items)

**PAGE BREAK**

### **PAGE 2: Professional History & Projects**
8. **Professional Experience** 
   - TDCJ: 7 categorized bullets with inline subheaders
   - KitchenAid/Whirlpool: 4 bullets (consolidated entry)
   - GTI/Moriroku: 5 bullets (Honda Quality focus)
9. **Education** - 4 entries (GA with professional development focus, Ohio University, Wright State, Celina HS)
10. **Selected Projects** - 2-column layout: Shipped (left) vs Prototyping (right)

---

## Resume Content Source Files

### **Primary Data Source**
**File:** `/src/data/resume.ts`

This TypeScript file is the **single source of truth** for all resume content:
- `personalInfo` - Contact, title, summary
- `coreCompetencies` - 12-item array
- `languages` - 4 languages with proficiency
- `skills` - 6 categorized skill groups
- `workExperience` - Job history with categorized achievements
- `education` - 4 educational entries with notes
- `certifications` - Awards and certifications
- `softwareProjects` - 9 projects (6 for PDF, 3 additional prototypes)

### **PDF Generator**
**File:** `/src/components/PDFDownloadButton.tsx`

React component using jsPDF to generate:
- **ATS Resume (2-page)** - Full detailed version with all sections
- **Stylized Resume (1-page)** - Condensed version for quick view

**Key Features:**
- Dynamic page breaks (PAGE 1 ends after Awards)
- 3-column Core Competencies layout
- 2-column Skills layout
- 2-column Languages layout
- 2-column Projects layout (Shipped vs Prototyping)
- Inline subheaders for TDCJ achievements

---

## Content Organization Philosophy

### **Positioning Strategy**
The resume emphasizes a **rare hybrid mindset** that combines:
- Information security & operational safety
- Human behavior analysis & threat assessment
- Privacy-first architecture & ethical system design
- Incident command & continuous SWOT-style thinking
- Scrum workflows & cross-functional collaboration

### **Core Message**
*"The engineer who sees a single form field and asks how to protect the company, improve the user experience, and build long-term trust simultaneously."*

### **Career Trajectory**
Actively developing toward hybrid leadership role spanning:
- Security Architecture
- Trust & Safety
- Organizational Governance
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
| Jan 19, 2026 | Major restructure: 2-page ATS format, inline subheaders, shipped vs prototyping projects, SWOT/Scrum positioning | 4.0 |
| Nov 9, 2025 | Consolidated from 8 files into structured TypeScript model | 3.0 |
| Oct 2025 | Added projects (SitesbyMac, Dream Weaver) | 2.5 |
| Sep 2025 | Started General Assembly cohort | 2.0 |
| Initial | Resume development during bootcamp | 1.0 |

---

## References & Endorsements

### **Current References Section**
**Status:** Maintained in `/src/data/resume.ts` under `references` export

**Future Additions:**
This section will be expanded with:
- **Letters of Recommendation** from former coworkers, mentors, and supervisors
- **Endorsements** highlighting specific skills and achievements
- **Professional References** with contact information and relationship context

**Storage Location:**
- Reference letters will be stored in `/public/assets/documents/references/`
- Endorsement metadata will be added to `resume.ts` data structure
- PDF copies of letters will be accessible via About page

**Planned Structure:**
```typescript
export interface Reference {
  id: string;
  name: string;
  title: string;
  organization: string;
  relationship: string; // 'Supervisor', 'Coworker', 'Mentor', etc.
  contact?: {
    email?: string;
    phone?: string;
    linkedin?: string;
  };
  endorsement?: string; // Short quote or summary
  letterUrl?: string; // Path to PDF letter
  available: boolean; // 'Available upon request'
}
```

**Note:** Reference contact information is not included in public resume PDFs for privacy. Full references provided directly to hiring managers upon request.

---

## Education & Training Details

### **January 2026 Update: Enhanced Education Section**
All education entries now include comprehensive details and narratives rather than simple bullet points.

#### **General Assembly (August 2025)**
- **Emphasis:** Project-based full-stack program with TDD, accessibility, collaborative Git workflows
- **Key Focus Areas:** Ethical system design, agile team practices, scalable architecture
- **Deliverables:** Multiple full-stack applications using modern frameworks, CI/CD pipelines, accessibility-first principles
- **Format Change:** Removed technology list in favor of professional development narrative

#### **Ohio University (2010)**
- **Degree:** Philosophy – Pre-Law Discipline
- **Expanded Details:** Added coursework areas (ethics, logic, political theory, comparative religion, international studies)
- **Languages:** Arabic and German language studies highlighted

#### **Wright State University (2009)**
- **Massive Expansion:** From single Dean's List mention to comprehensive narrative
- **New Details Added:**
  - 72 quarter hours completed as dual-enrollment student (junior and senior years of high school)
  - Dean's List for six quarters
  - 3.75 cumulative GPA
  - English Composition sequence completion
  - 3-term Western Civilization series (emphasizing nomadic pastoralism, cultural drift, simultaneous regional developments)
  - Multiple psychology courses
  - Vice President of Psychology Society (student-faculty discussion and excursion group)

#### **Celina High School (2009)**
- **New Academic Metrics:**
  - GPA: 3.52
  - SAT: 1420 (740 Math, 680 Verbal)
  - ACT: 31
  - AP Chemistry: 5
- **Leadership Expanded:**
  - Captain of Scholastic Team with **five televised WHIO High Q appearances**
  - Ohio Mock Trial Attorney
  - JETS (Junior Engineering Technology and Science) competition team captain

### **TypeScript Interface Update**
Added `location?: string` field to Education interface to support city/state information:
```typescript
export interface Education {
  location?: string; // City and state (Athens, OH)
  // ... other fields
}
```

### **PDF Rendering Update**
Education now renders with format:
```
DEGREE NAME (bold)
Institution • Location • Date
Detailed narrative description (if notes present)
```

Example output:
```
Software Engineering Immersive — Certificate of Completion
General Assembly • New York, NY • August 2025
Project-based full-stack program emphasizing test-driven development...
```

---

## ATS Keywords & Optimization

### **Core Keywords (Integrated Throughout)**
- **Security & Compliance:** Security Clearance Eligible, RBAC, Data Minimization, Privacy-First Design, Threat Modeling, Risk Assessment, WCAG Accessibility, PREA Compliance, Incident Command (ICS)
- **Engineering Practices:** Test-Driven Development, Object-Oriented Design, Agile/Scrum, Code Review, Debugging, REST APIs, LLM Integration, Prompt Engineering, Data Normalization
- **Technologies:** Python, Django, JavaScript, TypeScript, React, Next.js, SQL, PostgreSQL, Node.js, Docker, CI/CD, AWS, Git, GitHub
- **Soft Skills:** Cross-Functional Collaboration, Training & Mentorship, Async Communication, Distributed Teams, Documentation, Technical Writing, Stakeholder Communication

### **Strategic Positioning Keywords**
- SWOT Analysis
- Scrum Workflows
- Trust & Safety
- Security Architecture
- Organizational Governance
- Continuous Improvement
- Systems Thinking

---

## Best Practices

### ✅ **Do:**
- Keep data in single source of truth (`/src/data/resume.ts`)
- Use inline subheaders for categorized achievements (e.g., TDCJ)
- Include quantifiable metrics (test counts, percentages, time savings)
- Test PDF generation locally before deploying
- Update projects section with shipped vs prototyping distinction
- Maintain consistent date formats (YYYY-MM-DD in data, formatted for display)
- Use bold for category names in inline subheaders

### ❌ **Don't:**
- Manually edit multiple resume versions
- Use special characters that ATS systems reject (em dashes, smart quotes)
- Include graphics/logos in ATS version
- Have gaps in dates or vague descriptions
- Forget to test page breaks after content updates
- Mix shipped and prototype projects without clear labeling

---

## Future Enhancements

### **Planned Improvements**
- [ ] Automated PDF generation via GitHub Actions
- [ ] Resume version control with change tracking
- [ ] Cover letter generator using resume data
- [ ] LinkedIn profile sync automation
- [ ] Job application tracker integration
- [ ] Multiple resume variants for different role types:
  - Security Engineer focus
  - Full-Stack Engineer focus
  - Trust & Safety focus
  - DevOps/Platform Engineer focus

### **Endorsements & References System**
- [ ] Create reference letter upload system
- [ ] Build endorsement display component for About page
- [ ] Add "Request References" contact form
- [ ] Implement reference letter preview modal
- [ ] Create printable reference packet (PDF)

---

## Files Location Reference (Updated)

```
portfolio/therealmccoyweb/
├── public/
│   ├── assets/
│   │   └── documents/
│   │       ├── references/ (FUTURE: letters of recommendation)
│   │       └── certifications/
│   ├── resume_styled.pdf (DEPRECATED - now generated dynamically)
│   └── resume_ats.pdf (DEPRECATED - now generated dynamically)
├── src/
│   ├── data/
│   │   └── resume.ts ⭐ (SOURCE OF TRUTH)
│   ├── components/
│   │   ├── PDFDownloadButton.tsx ⭐ (PDF GENERATOR)
│   │   └── ResumeDownloadButtons.tsx (UI WRAPPER)
│   ├── app/
│   │   └── about/
│   │       ├── page.tsx (ABOUT PAGE)
│   │       └── CollapsibleAboutSections.tsx ⭐ (CONTENT DISPLAY)
│   └── types/
│       └── resume.ts (TYPESCRIPT INTERFACES)
└── dev-docs/
    ├── RESUME-CONSOLIDATION.md ⭐ (THIS FILE)
    └── resume-development/
        └── ... (archived historical files)
```

---

## Quick Reference Commands

### **View Resume Locally**
```bash
npm run dev
# Navigate to http://localhost:3000/about
# Click "ATS Resume (2-page)" button
```

### **Deploy Updated Resume**
```bash
git add src/data/resume.ts src/components/PDFDownloadButton.tsx
git commit -m "Update resume: [describe changes]"
git push origin main
# Vercel auto-deploys
```

### **Verify Production**
```bash
# Visit: https://sitesbymac.dev/about
# Download PDF and review
```

---

## Contact for Resume Collaboration

For resume review, recommendations, or endorsement contributions:
- **Email:** mac@sitesbymac.dev
- **LinkedIn:** linkedin.com/in/travis-mccoy-fullstack
- **GitHub:** github.com/macfarley

**Reference Letter Submissions:**
Please send letters of recommendation to mac@sitesbymac.dev with subject line: "Reference Letter - [Your Name]"

---

**End of Documentation**
