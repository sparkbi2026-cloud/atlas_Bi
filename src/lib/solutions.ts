// Solutions data — used for vertical SEO pages and sitemap

export interface Solution {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  painPoints: { title: string; description: string }[];
  features: { title: string; description: string; icon: string }[];
  metrics: { value: string; label: string }[];
  useCases: { title: string; description: string }[];
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
  relatedBlogs: string[];
  ctaText: string;
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'financial-services',
    title: 'AI Analytics for Financial Services',
    h1: 'AI-Powered Analytics for Financial Services Teams',
    metaTitle: 'AI Analytics for Financial Services | Portfolio & Risk Dashboards | AtlasBI',
    metaDescription: 'Turn financial data into dashboards fast. Analyze market trends, portfolio performance, and risk metrics with AI insights. Real-time, compliant, presentation-ready.',
    heroSubtitle: 'Turn financial data into dashboards fast. Analyze market trends and portfolio performance with AI insights — in seconds, not weeks.',
    painPoints: [
      { title: 'Manual Report Building', description: 'Financial analysts spend 60% of their time formatting reports instead of analyzing data. Quarterly board decks take weeks to assemble from multiple data sources.' },
      { title: 'Data Silos', description: 'Portfolio data in Bloomberg, risk metrics in internal systems, client data in CRM. No single view of financial performance without manual consolidation.' },
      { title: 'Compliance Pressure', description: 'SOX, Basel III, MiFID II, and DORA require audit trails for every data access. Legacy BI tools lack the governance controls regulators demand.' },
      { title: 'Slow Time to Insight', description: 'When markets move in hours, a 5-day turnaround on an analytical request means the insight arrives after the opportunity has passed.' },
    ],
    features: [
      { title: 'Real-Time Portfolio Dashboards', description: 'Connect to Bloomberg, Refinitiv, or your custodian data and see live portfolio performance, allocation, and attribution — updated continuously.', icon: 'TrendingUp' },
      { title: 'Risk Analytics', description: 'AI-powered VaR calculations, stress testing, and scenario modeling. Ask "What happens to our portfolio if rates increase 200bps?" and see the answer in seconds.', icon: 'Shield' },
      { title: 'Regulatory Compliance', description: 'Full audit trails, SOC 2 Type II certification, data residency options (EU/US/APAC), and automatic PII masking for client data.', icon: 'Lock' },
      { title: 'Natural Language Queries', description: 'Portfolio managers ask questions in plain English: "Show me top 10 holdings by P&L YTD" or "Compare our tech allocation vs. benchmark."', icon: 'MessageSquare' },
      { title: 'Client Reporting', description: 'Generate white-label client reports with live data. Share via secure link — clients see updated performance without you rebuilding the deck.', icon: 'Users' },
      { title: 'Predictive Forecasting', description: 'AI-generated revenue forecasts, AUM projections, and fee income modeling with confidence intervals and scenario analysis.', icon: 'BarChart3' },
    ],
    metrics: [
      { value: '90%', label: 'Reduction in report building time' },
      { value: '15s', label: 'Average query-to-insight time' },
      { value: '$2.4M', label: 'Annual savings vs. traditional BI' },
      { value: '99.9%', label: 'Platform uptime SLA' },
    ],
    useCases: [
      { title: 'Portfolio Performance Attribution', description: 'Break down returns by asset class, sector, geography, and security — with AI-generated commentary explaining the key drivers of outperformance or underperformance.' },
      { title: 'Client Quarterly Reviews', description: 'Auto-generate client-facing performance reports with your brand, updated with live data. Send a link instead of a PDF — clients always see current numbers.' },
      { title: 'Board Reporting', description: 'Build board-ready dashboards in minutes. AI generates the executive summary, highlights risks, and formats for C-suite consumption.' },
      { title: 'Regulatory Reporting', description: 'Maintain audit-ready data access logs, demonstrate compliance with data governance requirements, and generate the views regulators need on demand.' },
    ],
    testimonialQuote: 'We reduced our quarterly report building from 3 weeks to 2 hours. The portfolio managers now self-serve their own analytics instead of waiting for my team.',
    testimonialAuthor: 'Sarah Chen',
    testimonialRole: 'Head of Analytics, Meridian Capital',
    keywords: ['financial analytics ai', 'portfolio dashboard', 'financial data visualization', 'risk analytics ai', 'investment reporting tool', 'wealth management analytics', 'financial bi tool', 'atlasbi financial services'],
    faqs: [
      { q: 'Is AtlasBI compliant with financial services regulations?', a: 'Yes. AtlasBI maintains SOC 2 Type II certification, offers data residency in EU (Frankfurt), US (Virginia), and APAC (Singapore), and provides full audit trails for every data access. We support compliance with SOX, Basel III, MiFID II, GDPR, and DORA requirements.' },
      { q: 'Can AtlasBI connect to Bloomberg and Refinitiv?', a: 'Yes. AtlasBI connects to Bloomberg Terminal data exports, Refinitiv Eikon feeds, and custodian platforms via secure API connections. Real-time and end-of-day data feeds are supported.' },
      { q: 'How does AtlasBI handle client data security?', a: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). PII is automatically detected and masked. Row-level security ensures each client sees only their own portfolio data. Customer-managed encryption keys are available on Enterprise plans.' },
      { q: 'Can I generate client-facing reports with my own branding?', a: 'Yes. AtlasBI\'s white-label mode removes all AtlasBI branding. Apply your logo, colors, and fonts to create reports that look like they come from your firm.' },
    ],
    relatedBlogs: ['/blog/how-to-create-investor-dashboard', '/blog/data-governance-ai-era', '/blog/predictive-analytics-guide', '/blog/share-dashboard-clients-securely'],
    ctaText: 'Start Analyzing Financial Data →',
  },
  {
    slug: 'sales',
    title: 'AI Analytics for Sales Teams',
    h1: 'AI-Powered Sales Analytics — Close More Deals with Real-Time Data',
    metaTitle: 'AI Sales Analytics | Pipeline & Revenue Dashboards | AtlasBI',
    metaDescription: 'Impress stakeholders with real-time sales reports. Uncover win rates, territory performance, and pipeline health using AI analytics. Free to start.',
    heroSubtitle: 'Impress stakeholders with real-time reports. Uncover win rates and territory performance using AI-powered analytics — no analyst required.',
    painPoints: [
      { title: 'CRM Data Overload', description: 'Salesforce has 10,000 records but no one can answer "Why did we lose the EMEA deal?" without a 3-day analyst request.' },
      { title: 'Inaccurate Forecasting', description: 'Pipeline forecasts are based on rep gut feeling, not data. Forecast accuracy is below 60% for most sales organizations.' },
      { title: 'Invisible Territory Gaps', description: 'No visibility into which territories are underperforming until the quarterly review — by then, the quota gap is too large to close.' },
      { title: 'Manual Reporting', description: 'Sales ops spends 15+ hours per week building and updating Salesforce reports and dashboards that managers barely use.' },
    ],
    features: [
      { title: 'Pipeline Intelligence', description: 'AI-powered pipeline analysis: stage conversion rates, velocity by segment, risk-scored deals, and automated forecast generation.', icon: 'Target' },
      { title: 'Win/Loss Analysis', description: 'Understand why deals close or die. AI correlates win rates with deal size, sales cycle length, competitor presence, and rep behavior.', icon: 'Trophy' },
      { title: 'Territory Performance', description: 'Heatmaps and comparative charts showing performance by geography, vertical, and account tier — with AI-identified gaps and opportunities.', icon: 'Map' },
      { title: 'Rep Leaderboards', description: 'Real-time rep performance dashboards with quota attainment, activity metrics, and AI-generated coaching recommendations.', icon: 'Users' },
      { title: 'Revenue Forecasting', description: 'AI forecasts based on pipeline data, historical conversion rates, and seasonal patterns — not rep estimates. 85%+ accuracy.', icon: 'TrendingUp' },
      { title: 'Salesforce Integration', description: 'One-click OAuth connection to Salesforce. All objects (Opportunities, Accounts, Contacts, Activities) available for querying in seconds.', icon: 'Database' },
    ],
    metrics: [
      { value: '85%', label: 'Forecast accuracy (vs. 58% average)' },
      { value: '23%', label: 'Increase in win rate' },
      { value: '4.2x', label: 'Faster reporting vs. Salesforce native' },
      { value: '15hrs', label: 'Saved per week on manual reports' },
    ],
    useCases: [
      { title: 'Monday Pipeline Review', description: 'Start your week with an AI-generated pipeline summary: new deals, at-risk deals, forecast vs. target, and rep-level insights — generated automatically every Monday morning.' },
      { title: 'Board Revenue Reporting', description: 'Generate board-ready revenue charts in seconds. MRR trend, logo churn, expansion revenue, and NRR — all live-updating from your CRM data.' },
      { title: 'Deal Inspection', description: 'Ask: "Why are we losing enterprise deals in Q3?" The AI analyzes loss reasons, competitor mentions, and deal characteristics to surface actionable patterns.' },
      { title: 'Territory Planning', description: 'Visualize quota distribution, attainment by territory, and white space opportunities. AI recommends territory adjustments based on historical performance.' },
    ],
    testimonialQuote: 'Our forecast accuracy went from 58% to 87% in one quarter. The AI identified a pattern in our lost deals that no one on the team had noticed — we were consistently losing mid-market deals where the sales cycle exceeded 45 days.',
    testimonialAuthor: 'Marcus Johnson',
    testimonialRole: 'VP Sales, Velocity SaaS',
    keywords: ['sales analytics ai', 'sales dashboard', 'pipeline analytics', 'sales forecasting ai', 'crm analytics', 'salesforce dashboard', 'win loss analysis', 'sales bi tool'],
    faqs: [
      { q: 'Does AtlasBI integrate with Salesforce?', a: 'Yes. One-click OAuth connection. All standard and custom Salesforce objects are available for querying within seconds of connection. AtlasBI reads Opportunities, Accounts, Contacts, Activities, and any custom objects.' },
      { q: 'How does AI improve sales forecasting?', a: 'AtlasBI\'s AI analyzes historical conversion rates by stage, deal size, segment, and rep — then projects pipeline outcomes probabilistically. This replaces "gut feeling" forecasts with data-driven predictions achieving 85%+ accuracy.' },
      { q: 'Can non-technical sales reps use AtlasBI?', a: 'Yes. Sales reps ask questions in plain English: "Show my pipeline by stage", "What is my quota attainment this quarter?", "Compare my close rate to team average." No SQL, no training required.' },
      { q: 'Can I share sales dashboards with my board?', a: 'Yes. Generate a live share link that updates automatically. Your board sees current revenue, pipeline, and forecast data without you rebuilding slide decks before every meeting.' },
    ],
    relatedBlogs: ['/blog/how-to-create-investor-dashboard', '/blog/reducing-time-to-insight', '/blog/predictive-analytics-guide', '/blog/best-dashboard-tools-startups-2026'],
    ctaText: 'Start Analyzing Sales Data →',
  },
  {
    slug: 'marketing',
    title: 'AI Analytics for Marketing Teams',
    h1: 'AI-Powered Marketing Analytics — Measure ROI, Optimize Spend, Grow Faster',
    metaTitle: 'AI Marketing Analytics | ROI, CAC, Attribution Dashboards | AtlasBI',
    metaDescription: 'Connect data to measure ROI instantly. Visualize customer acquisition costs, conversion funnels, and campaign performance with AI. Free to start.',
    heroSubtitle: 'Connect your data to measure ROI instantly. Visualize customer acquisition costs, conversion funnels, and campaign performance with AI-powered analytics.',
    painPoints: [
      { title: 'Attribution Chaos', description: 'Google says one thing, Facebook says another, your CRM says a third. No single source of truth for marketing attribution across channels.' },
      { title: 'Manual Reporting', description: 'Marketing managers spend Monday mornings manually pulling data from 5 platforms into a spreadsheet. By the time the report is done, the data is stale.' },
      { title: 'CAC Blindness', description: 'You know total spend and total customers — but you cannot break down CAC by channel, campaign, or cohort to identify what is actually working.' },
      { title: 'Proving ROI to Leadership', description: 'The CFO asks "What is the ROI of our content marketing program?" and the answer takes 2 weeks to compile. By then, the budget meeting is over.' },
    ],
    features: [
      { title: 'Multi-Channel Attribution', description: 'Connect Google Ads, Facebook Ads, LinkedIn Ads, and GA4. See unified attribution across all channels with first-touch, last-touch, and multi-touch models.', icon: 'Target' },
      { title: 'CAC & LTV Analytics', description: 'Real-time customer acquisition cost by channel, campaign, and cohort. LTV calculations with payback period and LTV/CAC ratio — the metrics investors care about.', icon: 'DollarSign' },
      { title: 'Funnel Visualization', description: 'Build conversion funnels from any data source. Identify drop-off points, segment by channel, and compare funnel performance across time periods.', icon: 'Filter' },
      { title: 'Campaign Performance', description: 'Connect ad platforms and see spend, impressions, clicks, conversions, and ROAS in a single dashboard — updated in real time.', icon: 'Megaphone' },
      { title: 'Content Analytics', description: 'Track content performance across blog, social, and email. Correlate content engagement with pipeline and revenue to prove content ROI.', icon: 'FileText' },
      { title: 'Budget Optimization', description: 'AI recommends budget reallocation based on channel performance: "Shift 20% of LinkedIn spend to Google — projected 15% CAC reduction."', icon: 'PieChart' },
    ],
    metrics: [
      { value: '34%', label: 'Average CAC reduction' },
      { value: '5min', label: 'Time to build weekly report' },
      { value: '2.3x', label: 'Improvement in ROAS' },
      { value: '100%', label: 'Attribution visibility' },
    ],
    useCases: [
      { title: 'Weekly Marketing Standup', description: 'Auto-generated weekly performance dashboard: spend by channel, conversions, CAC trend, pipeline contribution, and AI-highlighted anomalies. Ready every Monday at 8 AM.' },
      { title: 'Campaign Post-Mortem', description: 'Ask: "How did the Q3 product launch campaign perform?" AI analyzes spend, reach, conversions, and revenue impact — with comparison to previous campaigns.' },
      { title: 'Budget Planning', description: 'Scenario modeling: "What happens if we increase Google Ads budget by 30%?" AI projects conversions, CAC impact, and revenue contribution based on historical performance.' },
      { title: 'Content ROI Proof', description: 'Connect blog analytics, social metrics, and CRM data. AI traces the journey from blog post → lead → opportunity → closed deal, proving content marketing ROI.' },
    ],
    testimonialQuote: 'We finally proved that our content program generated $1.2M in pipeline last year. Before AtlasBI, we had no way to connect blog traffic to closed revenue. The AI traced the entire journey for us.',
    testimonialAuthor: 'Emily Rodriguez',
    testimonialRole: 'VP Marketing, GrowthOS',
    keywords: ['marketing analytics ai', 'marketing dashboard', 'cac analytics', 'marketing roi', 'campaign analytics', 'attribution analytics', 'marketing bi tool', 'google ads dashboard'],
    faqs: [
      { q: 'Can AtlasBI connect to Google Ads and Facebook Ads?', a: 'Yes. AtlasBI connects to Google Ads, Facebook/Meta Ads, LinkedIn Ads, TikTok Ads, and Twitter Ads via OAuth. Campaign data (spend, impressions, clicks, conversions) syncs automatically.' },
      { q: 'How does AtlasBI calculate multi-touch attribution?', a: 'AtlasBI supports first-touch, last-touch, linear, time-decay, and position-based attribution models. Connect your CRM and ad platforms, and the AI maps touchpoints across the customer journey to attribute revenue to each marketing interaction.' },
      { q: 'Can I calculate CAC by channel in AtlasBI?', a: 'Yes. Connect your ad spend data and CRM. AtlasBI automatically calculates CAC by channel, campaign, and cohort — showing you exactly which acquisition channels deliver the best unit economics.' },
      { q: 'How do I prove content marketing ROI?', a: 'Connect GA4 (blog traffic), CRM (leads and pipeline), and AtlasBI traces the journey: blog reader → lead → opportunity → closed deal. The AI calculates revenue attributed to content and compares it to content production cost.' },
    ],
    relatedBlogs: ['/blog/best-ai-chart-generator-2026', '/blog/reducing-time-to-insight', '/blog/best-dashboard-tools-startups-2026', '/blog/how-to-connect-google-sheets-to-ai-charts'],
    ctaText: 'Start Analyzing Marketing Data →',
  },
  {
    slug: 'startups',
    title: 'AI Analytics for Startups',
    h1: 'AI-Powered Analytics for Startups — Skip the Expensive Data Team',
    metaTitle: 'AI Analytics for Startups | MRR, Churn, Growth Dashboards | AtlasBI',
    metaDescription: 'Skip the expensive data team. Scale your reporting as your startup grows. MRR, churn, CAC, LTV dashboards from Stripe in seconds. Free to start.',
    heroSubtitle: 'Skip the expensive data team today. Scale your reporting as your startup grows — from pre-seed to Series C, AtlasBI grows with you.',
    painPoints: [
      { title: 'No Data Team', description: 'Pre-seed startups cannot afford a $120K/year data analyst. But investors still expect professional analytics and real-time metrics in every board meeting.' },
      { title: 'Spreadsheet Hell', description: 'Every metric lives in a different Google Sheet. MRR in one, CAC in another, churn calculated three different ways by three different people.' },
      { title: 'Investor Reporting Overhead', description: 'Building the monthly investor update takes 4-6 hours: pulling data from Stripe, formatting charts, writing narratives, sending emails. Every month.' },
      { title: 'Flying Blind', description: 'You know revenue is growing but you do not know if unit economics are healthy. Is CAC improving or worsening? What is the payback period? When does runway run out?' },
    ],
    features: [
      { title: 'One-Click Stripe Connection', description: 'Connect Stripe via OAuth in 30 seconds. MRR, ARR, churn, net revenue retention, and customer count — all available instantly with zero configuration.', icon: 'CreditCard' },
      { title: 'Investor Dashboard', description: 'Pre-built investor update template: MRR trend, growth rate, churn, runway, and key highlights. Share a live link — investors always see current data.', icon: 'Presentation' },
      { title: 'Unit Economics', description: 'Automated CAC, LTV, LTV/CAC ratio, and payback period calculations by channel. Know exactly which acquisition channels deliver healthy economics.', icon: 'Calculator' },
      { title: 'Runway Calculator', description: 'Connect your bank account or financial data. AI projects runway under current burn, with scenario modeling for different spend levels.', icon: 'Clock' },
      { title: 'Natural Language Queries', description: 'Ask questions as they arise: "What is our MRR?", "Which pricing plan has the lowest churn?", "Compare Q1 vs Q2 growth rate." Answers in seconds.', icon: 'MessageSquare' },
      { title: 'Scales with You', description: 'Start free, upgrade to Pro at $19/month, Business at $49/month. No enterprise contracts. No per-seat pricing. Grow when you are ready.', icon: 'Rocket' },
    ],
    metrics: [
      { value: '$0', label: 'Starting cost (free tier)' },
      { value: '30s', label: 'Stripe connection to first chart' },
      { value: '4hrs', label: 'Saved per month on investor updates' },
      { value: '100%', label: 'Metrics you can actually trust' },
    ],
    useCases: [
      { title: 'Monthly Investor Update', description: 'Auto-generated dashboard with MRR, growth rate, churn, and runway. Share a live link with investors. Data updates automatically — no monthly rebuild.' },
      { title: 'Board Meeting Preparation', description: 'Ask AtlasBI: "Generate a board deck for Q3" — AI creates slides with revenue trends, customer analysis, competitive positioning, and forward outlook.' },
      { title: 'Fundraising Data Room', description: 'Live analytics dashboard in your data room. VCs see real-time traction data during due diligence — more impressive than static spreadsheets.' },
      { title: 'Co-Founder Alignment', description: 'Shared dashboard that both technical and business co-founders can access. No SQL required. Ask questions in English, get charts in seconds.' },
    ],
    testimonialQuote: 'We raised our seed round with AtlasBI as our data room. The VCs were impressed that a 3-person startup had real-time analytics that looked like they came from a company 10x our size.',
    testimonialAuthor: 'Alex Kim',
    testimonialRole: 'CEO & Co-Founder, LaunchPad',
    keywords: ['startup analytics', 'startup dashboard', 'startup metrics', 'mrr dashboard', 'saas metrics', 'startup bi tool', 'investor dashboard', 'startup data analytics'],
    faqs: [
      { q: 'Can a startup use AtlasBI without a data team?', a: 'Yes. That is exactly who AtlasBI is built for. Connect Stripe, GA4, or a Google Sheet in minutes. Ask questions in plain English. No SQL, no data engineering, no analyst required.' },
      { q: 'How much does AtlasBI cost for a startup?', a: 'Free tier: 5 charts/month, unlimited data sources. Pro: $19/month for unlimited charts. Business: $49/month for team workspaces and investor sharing. No per-seat pricing, no annual contracts.' },
      { q: 'Can I create an investor dashboard with AtlasBI?', a: 'Yes. Use the pre-built investor dashboard template: MRR, growth rate, churn, runway, and key highlights — all auto-populated from your Stripe data. Share a live link that updates automatically.' },
      { q: 'When should I switch from AtlasBI to a larger BI tool?', a: 'When you hire a dedicated data engineer (typically post-Series B, 50+ employees). Before that point, AtlasBI delivers better results at lower cost than enterprise tools like Tableau or Power BI.' },
    ],
    relatedBlogs: ['/blog/best-dashboard-tools-startups-2026', '/blog/how-to-create-investor-dashboard', '/blog/reducing-time-to-insight', '/blog/best-ai-chart-generator-2026'],
    ctaText: 'Start Free — No Credit Card Required →',
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find(s => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return SOLUTIONS.map(s => s.slug);
}
