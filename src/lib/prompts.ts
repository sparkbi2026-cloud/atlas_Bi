export interface PromptCategory {
  name: string;
  slug: string;
}

export interface AIPrompt {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  thePrompt: string;
  chartType: string;
  deepExplanationHtml: string;
  faqs: { q: string; a: string; }[];
}

export const PROMPT_CATEGORIES: PromptCategory[] = [
  { name: "Finance", slug: "finance" },
  { name: "Marketing", slug: "marketing" },
  { name: "Sales", slug: "sales" },
  { name: "Engineering", slug: "engineering" },
  { name: "HR", slug: "hr" },
  { name: "Operations", slug: "ops" },
  { name: "Support", slug: "support" },
];

const topics = [
  // Finance
  { id: "saas-mrr-churn", cat: "finance", name: "SaaS MRR & Churn", metric: "Monthly Recurring Revenue", chart: "Stacked Bar Chart with Trendline" },
  { id: "burn-rate-runway", cat: "finance", name: "Burn Rate & Runway", metric: "Cash Burn and Runway", chart: "Line Chart with Projections" },
  { id: "ebitda-margin", cat: "finance", name: "EBITDA Margins", metric: "EBITDA margin", chart: "Waterfall Chart" },
  { id: "accounts-receivable", cat: "finance", name: "Accounts Receivable Aging", metric: "Invoice Aging", chart: "Horizontal Bar Chart" },
  { id: "revenue-retention", cat: "finance", name: "Net Revenue Retention", metric: "NRR", chart: "Cohort Heatmap" },
  { id: "profit-loss", cat: "finance", name: "Profit & Loss Variance", metric: "P&L variance", chart: "Variance Bar Chart" },
  { id: "cac-payback", cat: "finance", name: "CAC Payback Period", metric: "Months to recover CAC", chart: "Area Chart" },
  { id: "gross-margin", cat: "finance", name: "Gross Margin Analysis", metric: "Gross Margin by Product", chart: "Treemap" },
  { id: "cash-flow", cat: "finance", name: "Cash Flow Forecasting", metric: "Operating Cash Flow", chart: "Combo Chart (Bar + Line)" },
  { id: "expense-breakdown", cat: "finance", name: "Department Expense Breakdown", metric: "Operating Expenses", chart: "Donut Chart" },
  
  // Marketing
  { id: "marketing-roas-cac", cat: "marketing", name: "ROAS & CAC by Channel", metric: "Return on Ad Spend", chart: "Scatter Plot" },
  { id: "email-campaign-roi", cat: "marketing", name: "Email Campaign ROI", metric: "Revenue per Email", chart: "Funnel Chart" },
  { id: "website-conversion", cat: "marketing", name: "Website Conversion Funnel", metric: "Visitor to Lead Conversion", chart: "Funnel Chart" },
  { id: "social-engagement", cat: "marketing", name: "Social Media Engagement", metric: "Engagement Rate", chart: "Line Chart" },
  { id: "seo-keyword-growth", cat: "marketing", name: "SEO Organic Growth", metric: "Organic Traffic", chart: "Area Chart" },
  { id: "paid-search-cpc", cat: "marketing", name: "Paid Search CPC Trends", metric: "Cost per Click", chart: "Line Chart" },
  { id: "lead-velocity", cat: "marketing", name: "Lead Velocity Rate", metric: "LVR", chart: "Bar Chart" },
  { id: "content-attribution", cat: "marketing", name: "Content Multi-Touch Attribution", metric: "Pipeline Generated", chart: "Sankey Diagram" },
  { id: "brand-sentiment", cat: "marketing", name: "Brand Sentiment Analysis", metric: "Sentiment Score", chart: "Gauge Chart" },
  { id: "event-roi", cat: "marketing", name: "Event & Webinar ROI", metric: "Cost per Attendee", chart: "Bubble Chart" },

  // Sales
  { id: "sales-pipeline-velocity", cat: "sales", name: "Pipeline Velocity", metric: "Sales Pipeline Velocity", chart: "Funnel Chart" },
  { id: "win-loss-ratio", cat: "sales", name: "Win/Loss Ratio by Rep", metric: "Win Rate", chart: "Stacked Bar Chart" },
  { id: "average-deal-size", cat: "sales", name: "Average Deal Size Trends", metric: "ACV", chart: "Line Chart" },
  { id: "sales-cycle-length", cat: "sales", name: "Sales Cycle Length", metric: "Days to Close", chart: "Histogram" },
  { id: "territory-performance", cat: "sales", name: "Territory Performance", metric: "Revenue by Region", chart: "Geographic Map" },
  { id: "quota-attainment", cat: "sales", name: "Quota Attainment", metric: "Percent to Quota", chart: "Bullet Chart" },
  { id: "discount-impact", cat: "sales", name: "Discounting Impact on Margins", metric: "Discount Rate", chart: "Scatter Plot" },
  { id: "churn-by-reason", cat: "sales", name: "Churn by Lost Reason", metric: "Lost Revenue", chart: "Pareto Chart" },
  { id: "lead-response-time", cat: "sales", name: "Lead Response Time", metric: "Time to First Contact", chart: "Line Chart" },
  { id: "upsell-cross-sell", cat: "sales", name: "Upsell & Cross-Sell Rate", metric: "Expansion Revenue", chart: "Stacked Area Chart" },

  // Engineering
  { id: "engineering-sprint-velocity", cat: "engineering", name: "Sprint Velocity", metric: "Story Points Completed", chart: "Bar Chart" },
  { id: "bug-burn-down", cat: "engineering", name: "Bug Burn Down", metric: "Open Bugs", chart: "Line Chart" },
  { id: "deployment-frequency", cat: "engineering", name: "Deployment Frequency", metric: "Deploys per Week", chart: "Area Chart" },
  { id: "mean-time-to-recovery", cat: "engineering", name: "Mean Time to Recovery (MTTR)", metric: "MTTR in hours", chart: "Line Chart" },
  { id: "code-churn", cat: "engineering", name: "Code Churn & Refactoring", metric: "Lines of Code Changed", chart: "Stacked Bar Chart" },
  { id: "uptime-sla", cat: "engineering", name: "Uptime & SLA Compliance", metric: "Uptime Percentage", chart: "Gauge Chart" },
  { id: "api-latency", cat: "engineering", name: "API Latency Percentiles", metric: "p99 Latency", chart: "Box Plot" },
  { id: "infrastructure-costs", cat: "engineering", name: "Cloud Infrastructure Costs", metric: "AWS/GCP Spend", chart: "Treemap" },
  { id: "pr-cycle-time", cat: "engineering", name: "Pull Request Cycle Time", metric: "Time to Merge", chart: "Histogram" },
  { id: "incident-root-cause", cat: "engineering", name: "Incident Root Cause", metric: "Outages by Service", chart: "Pie Chart" },

  // HR
  { id: "employee-turnover", cat: "hr", name: "Employee Turnover Rate", metric: "Voluntary Turnover", chart: "Line Chart" },
  { id: "time-to-hire", cat: "hr", name: "Time to Hire by Department", metric: "Days to Hire", chart: "Bar Chart" },
  { id: "diversity-inclusion", cat: "hr", name: "Diversity & Inclusion Metrics", metric: "Demographic Breakdown", chart: "Stacked Bar" },
  { id: "employee-nps", cat: "hr", name: "eNPS (Employee Net Promoter)", metric: "eNPS Score", chart: "Gauge Chart" },
  { id: "training-completion", cat: "hr", name: "Training Completion Rates", metric: "Percent Completed", chart: "Donut Chart" },
  { id: "compensation-compra-ratio", cat: "hr", name: "Compensation Compa-Ratio", metric: "Compa-Ratio by Role", chart: "Scatter Plot" },
  { id: "absence-rate", cat: "hr", name: "Absence & Leave Rates", metric: "Absence Percentage", chart: "Line Chart" },
  { id: "headcount-forecast", cat: "hr", name: "Headcount Forecasting", metric: "Projected Employees", chart: "Area Chart" },
  { id: "offer-acceptance", cat: "hr", name: "Offer Acceptance Rate", metric: "Acceptance Percentage", chart: "Line Chart" },
  { id: "benefits-utilization", cat: "hr", name: "Benefits Utilization", metric: "Cost per Employee", chart: "Bar Chart" },

  // Operations
  { id: "supply-chain-latency", cat: "ops", name: "Supply Chain Latency", metric: "Days in Transit", chart: "Box Plot" },
  { id: "inventory-turnover", cat: "ops", name: "Inventory Turnover", metric: "Turnover Ratio", chart: "Bar Chart" },
  { id: "order-fulfillment", cat: "ops", name: "Order Fulfillment Accuracy", metric: "Perfect Order Rate", chart: "Gauge Chart" },

  // Support
  { id: "ticket-resolution-time", cat: "support", name: "Ticket Resolution Time", metric: "Average Resolution Time", chart: "Line Chart" },
  { id: "customer-satisfaction-csat", cat: "support", name: "CSAT Trends", metric: "CSAT Score", chart: "Area Chart" }
];

export const PROMPTS: AIPrompt[] = topics.map(topic => {
  const categoryName = PROMPT_CATEGORIES.find(c => c.slug === topic.cat)?.name || topic.cat;
  
  return {
    slug: `chatgpt-prompt-${topic.id}`,
    category: topic.cat,
    title: `Best ChatGPT Prompt to Analyze ${topic.name}`,
    metaTitle: `ChatGPT Prompt for ${topic.name} Analysis (2026 Updated)`,
    metaDescription: `Stop writing Python code. Copy the exact ChatGPT prompt to analyze ${topic.name} and generate a live ${topic.chart} instantly using AtlasBI's AI engine.`,
    seoKeywords: [
      `chatgpt prompt for ${topic.name.toLowerCase()}`, 
      `ai prompt ${topic.metric.toLowerCase()}`, 
      `analyze ${topic.name.toLowerCase()} with ai`, 
      `data analysis prompt for ${topic.cat}`,
      `${categoryName.toLowerCase()} dashboard prompt`,
      `how to track ${topic.metric.toLowerCase()} using chatgpt`,
      `generative ai for ${topic.cat}`
    ],
    thePrompt: `Act as an expert ${categoryName} Analyst. Analyze this dataset containing our historical records. Focus specifically on calculating the ${topic.metric}. Clean any missing values, group the data by the relevant time periods, and identify the top 3 anomalies or trends. Finally, project the metric forward for the next quarter.`,
    chartType: topic.chart,
    deepExplanationHtml: `
      <h3>Mastering ${topic.name} Analysis with Large Language Models</h3>
      <p>In the modern era of ${categoryName}, the ability to instantly parse data and visualize the <strong>${topic.metric}</strong> separates elite teams from the rest. Traditionally, calculating ${topic.name} required exporting CSVs, writing complex SQL queries, and fighting with Excel pivot tables or legacy BI tools like Tableau and Power BI. Today, Large Language Models (LLMs) like ChatGPT, Claude, and specialized engines like AtlasBI have fundamentally changed this workflow.</p>
      
      <p>This guide provides the exact prompt architecture you need to extract accurate, hallucination-free insights for ${topic.name}, alongside a deep dive into why execution environments matter more than the prompt itself.</p>

      <h3>The Architecture of a High-Fidelity Prompt</h3>
      <p>When prompting an AI to analyze sensitive or complex datasets—especially when calculating critical metrics like ${topic.metric}—you cannot use casual language. The prompt provided above utilizes a "Zero-Shot Chain of Thought" architecture. Let's deconstruct why it works:</p>
      
      <ul>
        <li><strong>Persona Assignment ("Act as an expert ${categoryName} Analyst"):</strong> This is not a gimmick. By assigning a persona, you prime the LLM's neural network to access domain-specific semantic clusters. It ensures the AI applies standard ${categoryName} formulas to calculate the ${topic.metric} rather than inventing a generic mathematical approach.</li>
        <li><strong>Explicit Data Cleaning Instructions ("Clean any missing values"):</strong> Real-world data is dirty. If you do not explicitly instruct the AI to handle nulls or inconsistent formatting, the resulting ${topic.chart} will fail or misrepresent the facts.</li>
        <li><strong>Anomaly Detection ("Identify the top 3 anomalies"):</strong> A chart without a narrative is just a picture. By forcing the AI to identify anomalies, you extract the "why" behind the data.</li>
        <li><strong>Predictive Forecasting ("Project the metric forward"):</strong> Moving from descriptive analytics (what happened) to predictive analytics (what will happen) is the ultimate goal of ${topic.name} reporting.</li>
      </ul>

      <h3>The Strategic Importance of ${topic.metric}</h3>
      <p>The <strong>${topic.metric}</strong> is more than just a number; it is a pulse check on your organization's ${categoryName} health. In high-growth environments, the speed at which you can react to shifts in ${topic.metric} can define your competitive advantage. Whether you are managing millions in ad spend, optimizing a complex supply chain, or scaling a global workforce, data visibility is the primary bottleneck.</p>

      <h3>Common Challenges in ${topic.name} Reporting</h3>
      <p>Most teams struggle with ${topic.name} because of data fragmentation. You might have data sitting in Stripe, others in a local PostgreSQL database, and some in a shared Google Sheet. Manually merging these for a ${topic.chart} is a recipe for human error. Furthermore, traditional BI tools require months of setup and a specialized data engineer just to create a single report.</p>

      <h3>The Evolution of Analytics: From SQL to Natural Language</h3>
      <p>For decades, the only way to get a dashboard was to write code. First SQL, then specialized languages like DAX or LookML. This created a "data breadline" where business users waited weeks for the IT department to build a simple chart. Generative AI has demolished this wall. By using the prompt above, any executive, manager, or analyst can now interact with their data using the most powerful interface ever created: human language.</p>

      <h3>Why Standard AI Tools Fail at Visualization</h3>
      <p>While models like GPT-4 are incredibly smart, they are fundamentally "text in, text out" engines. When you ask a standard chatbot to "visualize ${topic.name}", it takes a massive detour:</p>
      <ol>
        <li>It writes a Python script using libraries like Matplotlib.</li>
        <li>It executes that script in a closed sandbox.</li>
        <li>It spits out a static <strong>.png image</strong>.</li>
      </ol>
      <p>This is a dead end. A static image cannot be hovered over, cannot be filtered, and cannot be embedded into a live web application. It is a "picture" of data, not "access" to data.</p>

      <h3>AtlasBI: The Real-Time Execution Engine</h3>
      <p>AtlasBI was built to solve the "Static Image" problem. Instead of generating a picture, AtlasBI's AI engine builds a live, interactive <strong>${topic.chart}</strong> using modern React and D3.js components. When you use our prompt library, you aren't just getting text—you are getting a shortcut to production-grade analytics.</p>

      <h3>Step-by-Step Implementation Guide</h3>
      <p>To get the most out of your ${topic.name} analysis, follow this workflow:</p>
      <ul>
        <li><strong>1. Data Preparation:</strong> Ensure your dataset has a clear temporal dimension (date/time) and a quantitative dimension (${topic.metric}).</li>
        <li><strong>2. Input Selection:</strong> Choose the ${categoryName} persona in your AI settings to ensure the model uses the correct industry jargon.</li>
        <li><strong>3. Iterative Refinement:</strong> If the first chart isn't perfect, ask the AI to "drill down into the outliers" or "group the data by region."</li>
        <li><strong>4. Dashboard Consolidation:</strong> Once you've generated your ${topic.chart}, pin it to your global AtlasBI dashboard for daily monitoring.</li>
      </ul>

      <h3>The Future of Decision Making</h3>
      <p>As we move deeper into the AI era, the companies that win will be the ones that can turn raw data into decisions the fastest. By leveraging the prompt library and AtlasBI's autonomous execution engine, you are positioning your team at the forefront of the next wave of business intelligence. Start today by executing your first ${topic.name} query.</p>
    `,
    faqs: [
      { 
        q: `Is it safe to upload my ${categoryName} data to an AI?`, 
        a: `Security is paramount. When using AtlasBI, your data is processed in secure, isolated environments with enterprise-grade encryption. We offer SOC2 compliant deployments for organizations with strict data governance requirements.` 
      },
      { 
        q: `Can this prompt handle messy date formats in ${topic.name} data?`, 
        a: `Yes. Part of the "Data Cleaning" instruction in the prompt forces the AI to normalize date strings into a standard ISO format before aggregation, preventing errors in your ${topic.chart}.` 
      },
      { 
        q: `How do I share my ${topic.name} dashboard with stakeholders?`, 
        a: `AtlasBI allows you to generate secure, public-facing links or private invitations for your team. Stakeholders can interact with the ${topic.chart} in real-time without needing an account or technical training.` 
      }
    ]
  };
});

export function getPromptBySlug(slug: string): AIPrompt | undefined {
  return PROMPTS.find(p => p.slug === slug);
}

export function getAllPromptSlugs(): string[] {
  return PROMPTS.map(p => p.slug);
}

export function getPromptsByCategory(categorySlug: string): AIPrompt[] {
  return PROMPTS.filter(p => p.category === categorySlug);
}
