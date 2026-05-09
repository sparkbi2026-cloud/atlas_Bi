const fs = require('fs');

const locales = ['en', 'fr', 'de', 'it', 'es', 'pl'];
const baseUrl = 'https://atlasbi.live';

const blogSlugs = [
  'ai-data-visualization-executive-decision-making',
  'ai-vs-traditional-bi-2026',
  'atlasbi-vs-tableau-2026',
  'autonomous-data-cleaning-engineering',
  'autonomous-data-cleaning-guide',
  'best-ai-chart-generator-2026',
  'best-dashboard-tools-startups-2026',
  'csv-to-chart-guide',
  'data-governance-ai-era',
  'data-storytelling-best-practices',
  'data-viz-ethics-ai',
  'democratizing-data-insights',
  'embedded-analytics-guide',
  'generative-ai-data-visualization',
  'how-to-connect-google-sheets-to-ai-charts',
  'how-to-create-investor-dashboard',
  'predictive-analytics-guide',
  'real-time-anomaly-detection',
  'reducing-time-to-insight',
  'share-dashboard-clients-securely',
  'what-is-natural-language-data-analysis'
];

const toolSlugs = [
  'excel-to-chart', 'csv-to-chart', 'csv-cleaner', 'excel-formula-generator',
  'dax-formula-generator', 'csv-to-llm-json', 'sql-query-generator',
  'metric-calculator', 'vlookup-helper', 'json-to-csv', 'chart-type-recommender',
  'date-standardizer', 'data-anonymizer', 'column-standardizer', 'sql-to-json',
  'correlation-matrix-gen', 'sample-data-generator', 'outlier-detector',
  'sql-formatter', 'chart-accessibility-checker', 'sql-to-power-query-m',
  'excel-pivot-helper'
];

const solutionSlugs = ['financial-services', 'sales', 'marketing', 'startups'];
const vsSlugs = ['tableau', 'powerbi', 'looker'];

const promptTopics = [
  "saas-mrr-churn", "burn-rate-runway", "ebitda-margin", "accounts-receivable",
  "revenue-retention", "profit-loss", "cac-payback", "gross-margin", "cash-flow",
  "expense-breakdown", "marketing-roas-cac", "email-campaign-roi",
  "website-conversion", "social-engagement", "seo-keyword-growth",
  "paid-search-cpc", "lead-velocity", "content-attribution", "brand-sentiment",
  "event-roi", "sales-pipeline-velocity", "win-loss-ratio", "average-deal-size",
  "sales-cycle-length", "territory-performance", "quota-attainment",
  "discount-impact", "churn-by-reason", "lead-response-time", "upsell-cross-sell",
  "engineering-sprint-velocity", "bug-burn-down", "deployment-frequency",
  "mean-time-to-recovery", "code-churn", "uptime-sla", "api-latency",
  "infrastructure-costs", "pr-cycle-time", "incident-root-cause",
  "employee-turnover", "time-to-hire", "diversity-inclusion", "employee-nps",
  "training-completion", "compensation-compra-ratio", "absence-rate",
  "headcount-forecast", "offer-acceptance", "benefits-utilization",
  "supply-chain-latency", "inventory-turnover", "order-fulfillment",
  "ticket-resolution-time", "customer-satisfaction-csat"
];

const promptSlugs = promptTopics.map(id => `chatgpt-prompt-${id}`);

let output = "\n## Complete Sitemap (All Locales)\n\n";

function addSection(title, indexPage, slugs, subDir) {
  output += `### ${title}\n`;
  locales.forEach(locale => {
    output += `- **${locale.toUpperCase()}**: [Index](${baseUrl}/${locale}/${indexPage})\n`;
    slugs.forEach(slug => {
      output += `  - [${slug}](${baseUrl}/${locale}/${subDir}/${slug})\n`;
    });
  });
  output += "\n";
}

output += "### Core Pages\n";
locales.forEach(locale => {
  output += `- **${locale.toUpperCase()}**: [Homepage](${baseUrl}/${locale})\n`;
});
output += "\n";

addSection("Blog Posts", "blog", blogSlugs, "blog");
addSection("Free Tools", "free-tools", toolSlugs, "free-tools");
addSection("Solutions", "solutions", solutionSlugs, "solutions");
addSection("Prompts", "prompts", promptSlugs, "prompts");
addSection("Comparisons (Vs)", "vs", vsSlugs, "vs");

process.stdout.write(output);
