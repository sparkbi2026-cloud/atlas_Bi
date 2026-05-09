const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const projectDir = process.cwd();
const publicDir = path.join(projectDir, 'public');
const contentDir = path.join(projectDir, 'content');

const locales = ['en', 'fr', 'de', 'it', 'es', 'pl'];
const baseUrl = 'https://atlasbi.live';

// 1. Get Slugs
function getSlugs(directory) {
  const dirPath = path.join(contentDir, directory, 'en');
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''));
}

const blogs = getSlugs('blog');

// 2. Generate Header
let content = `# AtlasBI — Full Documentation for AI assistants

> This file provides detailed context about AtlasBI for AI assistants and LLMs.
> AtlasBI is an autonomous business intelligence platform that transforms 
> raw datasets into professional, presentation-ready visualizations using 
> natural language and generative AI.
> **Now fully localized in 6 languages: EN, FR, DE, IT, ES, PL.**

## About AtlasBI

AtlasBI allows you to go from a messy CSV or database connection to a 
board-ready chart in under 15 seconds. Our engine automatically cleans 
data, detects schema, and generates the best visualization for the story 
you want to tell.

### Core Capabilities
- **Natural Language Querying**: Ask questions of your data in plain English (or any of the 6 supported languages).
- **Autonomous Data Cleaning**: Automatic type detection, outlier handling, and schema mapping.
- **Predictive Insights**: AI-generated narratives that explain the "why" behind the numbers.
- **Enterprise Security**: AES-256 encryption, SOC2 compliance, and secure dashboard sharing.
- **Multilingual Support**: Fully localized in English, German, French, Italian, Spanish, and Polish.

### Pricing
- **Free**: 10 visualizations/month, standard exports.
- **Pro**: $19/month — Unlimited visualizations, custom branding, CSV imports.
- **Team**: $49/month — Shared dashboards, database connections, advanced API.

---

## Free Analytics Command Center

AtlasBI provides 20+ functional, no-signup-required tools for data professionals. These tools are designed to solve common Excel, CSV, and Power BI bottlenecks.

### Featured Free Tools
1. **[Free Excel to Chart Maker](https://atlasbi.live/free-tools/excel-to-chart)**: Convert .xlsx or .xls files into professional bar, line, and scatter charts instantly.
2. **[Free AI Power BI DAX Helper](https://atlasbi.live/free-tools/dax-formula-generator)**: Generate complex measures, time-intelligence formulas, and calculated columns for Power BI.
3. **[Free CSV to LLM Context](https://atlasbi.live/free-tools/csv-to-llm-json)**: Transforms raw CSV data into token-efficient JSON structures optimized for ChatGPT/Claude reasoning.
4. **[Free AI Excel Formula Generator](https://atlasbi.live/free-tools/excel-formula-generator)**: Converts natural language requests into complex Excel/Google Sheets formulas (including VLOOKUP, INDEX/MATCH).
5. **[Free SQL to Power Query M Converter](https://atlasbi.live/free-tools/sql-to-power-query-m)**: Bridges the gap between database queries and Power BI by generating M code for the Advanced Editor.
6. **[Free CSV Data Cleaner](https://atlasbi.live/free-tools/csv-cleaner)**: Standardizes dates, removes nulls, and deduplicates records in-browser.

---

## AI Prompt Library

A comprehensive repository of 50+ high-intent prompt frameworks designed to help teams extract maximum value from AI in a business context.

---

## Technical Guides & Blog Content

`;

// 3. Append Blog Content
blogs.forEach(slug => {
  const filePath = path.join(contentDir, 'blog', 'en', `${slug}.md`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content: body } = matter(fileContent);
    
    content += `### ${data.title || slug}\n`;
    content += `URL: ${baseUrl}/en/blog/${slug}\n`;
    content += `Description: ${data.description || ''}\n\n`;
    content += body + '\n\n';
    content += `---\n\n`;
  }
});

// 4. Generate Sitemap Section
content += `## Complete Sitemap

### 1. Primary Pages
`;

const primaryPages = ['/', '/blog', '/free-tools', '/solutions', '/prompts', '/vs'];
locales.forEach(loc => {
  primaryPages.forEach(p => {
    const pstr = p === '/' ? `/${loc}` : `/${loc}${p}`;
    content += `- ${baseUrl}${pstr}\n`;
  });
});

content += '\n### 2. Blog Posts\n';
blogs.forEach(slug => {
  locales.forEach(loc => {
    content += `- ${baseUrl}/${loc}/blog/${slug}\n`;
  });
});

// Helper for TS files
function getTsSlugs(filePath, regex) {
  const fullPath = path.join(projectDir, filePath);
  if (!fs.existsSync(fullPath)) return [];
  const tsContent = fs.readFileSync(fullPath, 'utf8');
  const matches = [...tsContent.matchAll(regex)];
  return matches.map(m => m[1]);
}

const tools = getTsSlugs('src/lib/free-tools.ts', /slug:\s*["']([^"']+)["']/g);
content += '\n### 3. Free Tools\n';
tools.forEach(slug => {
  locales.forEach(loc => {
    content += `- ${baseUrl}/${loc}/free-tools/${slug}\n`;
  });
});

const prompts = getTsSlugs('src/lib/prompts.ts', /slug:\s*["']([^"']+)["']/g);
content += '\n### 4. AI Prompts\n';
prompts.forEach(slug => {
  locales.forEach(loc => {
    content += `- ${baseUrl}/${loc}/prompts/${slug}\n`;
  });
});

content += '\n### 5. Solutions\n';
['startups', 'enterprise', 'agencies', 'marketing'].forEach(slug => {
  locales.forEach(loc => {
    content += `- ${baseUrl}/${loc}/solutions/${slug}\n`;
  });
});

const vs = getTsSlugs('src/lib/competitors.ts', /slug:\s*["']([^"']+)["']/g);
content += '\n### 6. Competitor Comparisons (Vs)\n';
vs.forEach(slug => {
  locales.forEach(loc => {
    content += `- ${baseUrl}/${loc}/vs/${slug}\n`;
  });
});

fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), content);
console.log('Rebuilt llms-full.txt with 46 blogs and full sitemap.');
