const fs = require('fs');
const path = require('path');

const projectDir = process.cwd();
const publicDir = path.join(projectDir, 'public');

function getSlugs(directory) {
  const dirPath = path.join(projectDir, 'content', directory, 'en');
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''));
}

const locales = ['en', 'fr', 'de', 'it', 'es', 'pl'];
const baseUrl = 'https://atlasbi.live';

const blogs = getSlugs('blog');

let llmsFullContent = fs.readFileSync(path.join(publicDir, 'llms-full.txt'), 'utf8');

// I need to update llms-full.txt to append all the new blogs
// Actually it's easier to just recreate the sitemap part of llms-full.txt.

let sitemapStr = '## Complete Sitemap\n\n### 1. Primary Pages\n';
const primaryPages = ['/', '/blog', '/free-tools', '/solutions', '/prompts', '/vs'];
locales.forEach(loc => {
  primaryPages.forEach(p => {
    const pstr = p === '/' ? `/${loc}` : `/${loc}${p}`;
    sitemapStr += `- ${baseUrl}${pstr}\n`;
  });
});

sitemapStr += '\n### 2. Blog Posts\n';
blogs.forEach(slug => {
  locales.forEach(loc => {
    sitemapStr += `- ${baseUrl}/${loc}/blog/${slug}\n`;
  });
});

// also read free-tools, prompts, solutions, vs from their respective TS files
function getTsSlugs(filePath, regex) {
  const content = fs.readFileSync(path.join(projectDir, filePath), 'utf8');
  const matches = [...content.matchAll(regex)];
  return matches.map(m => m[1]);
}

const tools = getTsSlugs('src/lib/free-tools.ts', /slug:\s*["']([^"']+)["']/g);
sitemapStr += '\n### 3. Free Tools\n';
tools.forEach(slug => {
  locales.forEach(loc => {
    sitemapStr += `- ${baseUrl}/${loc}/free-tools/${slug}\n`;
  });
});

const prompts = getTsSlugs('src/lib/prompts.ts', /slug:\s*["']([^"']+)["']/g);
sitemapStr += '\n### 4. AI Prompts\n';
prompts.forEach(slug => {
  locales.forEach(loc => {
    sitemapStr += `- ${baseUrl}/${loc}/prompts/${slug}\n`;
  });
});

sitemapStr += '\n### 5. Solutions\n';
['startups', 'enterprise', 'agencies', 'marketing'].forEach(slug => {
  locales.forEach(loc => {
    sitemapStr += `- ${baseUrl}/${loc}/solutions/${slug}\n`;
  });
});

const vs = getTsSlugs('src/lib/competitors.ts', /slug:\s*["']([^"']+)["']/g);
sitemapStr += '\n### 6. Competitor Comparisons (Vs)\n';
vs.forEach(slug => {
  locales.forEach(loc => {
    sitemapStr += `- ${baseUrl}/${loc}/vs/${slug}\n`;
  });
});

// Replace everything from "## Complete Sitemap" in llms-full.txt
const parts = llmsFullContent.split('## Complete Sitemap');
fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), parts[0] + sitemapStr);
console.log('Updated llms-full.txt');
