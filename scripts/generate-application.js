#!/usr/bin/env node

/**
 * Dynamic Resume & Cover Letter Generator
 *
 * This script allows you to paste a job description and automatically generate
 * customized resume and cover letter PDFs tailored to the specific job.
 *
 * Usage:
 *   node scripts/generate-application.js
 *
 * Features:
 * - Interactive job description input
 * - AI-powered content customization (placeholder for future enhancement)
 * - PDF generation for both resume and cover letter
 * - ATS-optimized formatting
 */

import fs from 'fs';
import path from 'path';
import { createInterface } from 'readline';

// Import resume data (this would need to be adapted for actual usage)
// const resumeData = require('../src/data/resume.ts');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  console.log('🚀 Dynamic Resume & Cover Letter Generator');
  console.log('==========================================\n');

  // Gather job information
  const company = await askQuestion('Company name: ');
  const position = await askQuestion('Position title: ');
  const jobId = await askQuestion('Job ID (optional): ');
  const location = await askQuestion('Job location: ');

  console.log('\n📋 Paste the full job description below (press Enter twice when done):');

  let jobDescription = '';
  let line;
  while ((line = await askQuestion('')) !== '') {
    jobDescription += line + '\n';
  }

  console.log('\n🔍 Analyzing job description...');

  // Basic keyword extraction (placeholder for AI analysis)
  const keywords = extractKeywords(jobDescription);
  console.log(`Found key requirements: ${keywords.join(', ')}\n`);

  // Generate customized content
  const customizedResume = customizeResume(resumeData, keywords, company, position);
  const customizedCoverLetter = generateCoverLetter(company, position, jobId, keywords);

  console.log('✅ Generated customized resume and cover letter');
  console.log(`📄 Resume highlights: ${customizedResume.highlights.join(', ')}`);
  console.log(`📧 Cover letter focus: ${customizedCoverLetter.focus.join(', ')}\n`);

  // Save to files
  const timestamp = new Date().toISOString().split('T')[0];
  const filename = `${company.replace(/\s+/g, '-').toLowerCase()}-${position.replace(/\s+/g, '-').toLowerCase()}-${timestamp}`;

  // In a real implementation, this would generate actual PDFs
  // For now, we'll create text files as placeholders
  const outputDir = path.join(__dirname, '..', 'applications', filename);
  fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(path.join(outputDir, 'resume-data.json'), JSON.stringify(customizedResume, null, 2));
  fs.writeFileSync(path.join(outputDir, 'cover-letter.txt'), customizedCoverLetter.content);
  fs.writeFileSync(path.join(outputDir, 'job-analysis.txt'), `Company: ${company}\nPosition: ${position}\nJob ID: ${jobId}\nLocation: ${location}\n\nKeywords: ${keywords.join(', ')}\n\nJob Description:\n${jobDescription}`);

  console.log(`💾 Files saved to: ${outputDir}`);
  console.log('📋 Next steps:');
  console.log('   1. Review the generated content');
  console.log('   2. Download PDFs from your portfolio site');
  console.log('   3. Upload to the job application portal');

  rl.close();
}

function extractKeywords(jobDescription) {
  // Basic keyword extraction - in a real implementation, this could use NLP
  const commonKeywords = [
    'python', 'django', 'react', 'javascript', 'typescript', 'security', 'clearance',
    'agile', 'scrum', 'testing', 'api', 'database', 'git', 'aws', 'docker',
    'c++', 'c#', 'java', 'linux', 'windows', 'sql', 'nosql', 'rest', 'graphql'
  ];

  const found = [];
  const lowerDesc = jobDescription.toLowerCase();

  for (const keyword of commonKeywords) {
    if (lowerDesc.includes(keyword)) {
      found.push(keyword);
    }
  }

  return found.slice(0, 10); // Limit to top 10
}

function customizeResume(resumeData, keywords, company, position) {
  // Placeholder for resume customization logic
  // In a real implementation, this would reorder skills, highlight relevant experience, etc.

  const highlights = keywords.slice(0, 5);

  return {
    ...resumeData,
    highlights,
    customizedFor: { company, position, keywords }
  };
}

function generateCoverLetter(company, position, jobId, keywords) {
  // Generate a basic cover letter template
  const focus = keywords.slice(0, 3);

  const content = `Dear Hiring Manager,

I am excited to apply for the ${position} position${jobId ? ` (${jobId})` : ''} at ${company}. With my background in software engineering and experience in ${focus.join(', ')}, I am confident I can contribute effectively to your team.

[Custom content would be generated here based on job analysis]

Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experience align with ${company}'s needs.

Sincerely,
Travis M. McCoy`;

  return { content, focus };
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { extractKeywords, customizeResume, generateCoverLetter };