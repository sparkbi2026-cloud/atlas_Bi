// Competitor comparison data — used for bottom-of-funnel vs pages

export interface Competitor {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  theirLogo: string; // URL or lucide icon name
  ourAdvantage: string;
  verdict: string;
  pricingComparison: {
    theirs: string;
    ours: string;
    hiddenCosts: string;
  };
  featureComparison: {
    feature: string;
    atlasbi: boolean | string;
    competitor: boolean | string;
  }[];
  painPoints: {
    title: string;
    description: string;
  }[];
  whySwitch: {
    title: string;
    description: string;
    icon: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  keywords: string[];
}

export const COMPETITORS: Competitor[] = [
  {
    slug: 'tableau',
    name: 'Tableau',
    h1: 'AtlasBI vs Tableau: The Best Alternative for Modern Teams',
    metaTitle: 'AtlasBI vs Tableau | The AI-First Tableau Alternative in 2026',
    metaDescription: 'Compare AtlasBI vs Tableau. See why modern startups and agile teams are switching from Tableau\'s expensive, legacy BI to AtlasBI\'s AI-powered analytics.',
    heroSubtitle: 'Tableau was built for data engineers in 2003. AtlasBI was built for business teams in the AI era. See why agile companies are making the switch.',
    theirLogo: 'Layout', 
    ourAdvantage: 'No SQL required. Ask questions in English and get charts in seconds.',
    verdict: 'If you have a 50-person data engineering team, keep Tableau. If you want your marketing, sales, and executive teams to get their own answers in 15 seconds without writing code, switch to AtlasBI.',
    pricingComparison: {
      theirs: '$75/user/month (Creator)',
      ours: '$19/month (Pro) or $49/month (Business)',
      hiddenCosts: 'Tableau requires significant technical training, certification, and dedicated data analysts to maintain the dashboards. The true cost of Tableau is the salary of the engineer required to run it.',
    },
    featureComparison: [
      { feature: 'Natural Language Queries', atlasbi: 'Native & Autonomous', competitor: 'Limited (Requires strict data modeling)' },
      { feature: 'Autonomous Data Cleaning', atlasbi: true, competitor: false },
      { feature: 'Time to First Chart', atlasbi: '< 30 seconds', competitor: 'Days to Weeks' },
      { feature: 'Learning Curve', atlasbi: 'None (English)', competitor: 'High (Requires Training)' },
      { feature: 'AI Narrative Generation', atlasbi: true, competitor: 'Add-on required' },
      { feature: 'Setup Complexity', atlasbi: 'Low (OAuth)', competitor: 'High (Enterprise Architecture)' },
    ],
    painPoints: [
      { title: 'The Data Bottleneck', description: 'In Tableau, every new question requires an analyst to build a new dashboard. Business users wait days for answers.' },
      { title: 'Extreme Complexity', description: 'Tableau requires specialized knowledge of LOD expressions, data blending, and its proprietary interface. Non-technical users cannot self-serve.' },
      { title: 'Cost Prohibitive', description: 'At $75 per Creator and $15 per Viewer, rolling Tableau out to a 100-person company costs thousands per month.' },
    ],
    whySwitch: [
      { title: 'True Self-Serve Analytics', description: 'AtlasBI allows anyone to ask "What was our MRR last month?" and get a presentation-ready chart instantly.', icon: 'MessageSquare' },
      { title: 'Instant Setup', description: 'Connect Stripe, GA4, or a database via OAuth. No complex data modeling or semantic layer required before you can start querying.', icon: 'Zap' },
      { title: 'Transparent Pricing', description: 'Flat monthly pricing. No punishing per-viewer licenses that discourage you from sharing data with your team.', icon: 'DollarSign' },
    ],
    faqs: [
      { q: 'Is AtlasBI a direct replacement for Tableau?', a: 'For business users, founders, and agile teams, yes. AtlasBI replaces the need for Tableau by allowing users to generate insights via natural language. However, for massive enterprises requiring highly complex, custom D3.js visualizations and row-level governance across 10,000 employees, Tableau remains the legacy standard.' },
      { q: 'How does AtlasBI\'s AI compare to Tableau Pulse?', a: 'Tableau Pulse requires a pristine, pre-configured semantic layer built by a data engineer. If the data is messy, Pulse fails. AtlasBI features an autonomous data cleaning engine that handles messy CSVs, inconsistent dates, and mixed types automatically before generating the chart.' },
      { q: 'Can I migrate my Tableau dashboards to AtlasBI?', a: 'Because AtlasBI is AI-driven, you don\'t "migrate" dashboards. You simply connect your data sources to AtlasBI, and type the questions you want answered. AtlasBI will instantly generate the new dashboards.' },
    ],
    keywords: ['tableau alternative', 'atlasbi vs tableau', 'tableau competitors', 'ai bi tool', 'ai tableau alternative', 'cheaper than tableau', 'tableau replace'],
  },
  {
    slug: 'powerbi',
    name: 'Power BI',
    h1: 'AtlasBI vs Power BI: The Modern Alternative for Agile Teams',
    metaTitle: 'AtlasBI vs Power BI | The Faster, AI-Native Power BI Alternative',
    metaDescription: 'Tired of writing DAX? Compare AtlasBI vs Power BI. Learn how AtlasBI delivers instant AI analytics without the Microsoft ecosystem lock-in or steep learning curve.',
    heroSubtitle: 'Power BI traps you in the Microsoft ecosystem and forces you to learn DAX. AtlasBI lets you ask questions in English and get answers instantly.',
    theirLogo: 'BarChart2',
    ourAdvantage: 'Zero DAX required. No Windows desktop app needed. Fully cloud-native AI.',
    verdict: 'If you are deeply embedded in the Microsoft Azure/Office 365 ecosystem and have dedicated BI developers, Power BI makes sense. If you want a fast, cloud-native tool that anyone can use without training, choose AtlasBI.',
    pricingComparison: {
      theirs: '$10/user/month (Pro) + Premium Capacity ($5k+/mo) for Copilot',
      ours: '$19/month (Pro) or $49/month (Business)',
      hiddenCosts: 'To use Power BI\'s AI features (Copilot), you must purchase Premium capacity, which starts at thousands of dollars per month. AtlasBI includes full AI capabilities on all paid plans.',
    },
    featureComparison: [
      { feature: 'Formula Language', atlasbi: 'Plain English', competitor: 'DAX (Steep Learning Curve)' },
      { feature: 'Platform', atlasbi: '100% Cloud Native (Mac/PC)', competitor: 'Requires Windows Desktop App for dev' },
      { feature: 'AI Capabilities', atlasbi: 'Included in base price', competitor: 'Requires expensive Premium Capacity' },
      { feature: 'Ecosystem Lock-in', atlasbi: 'None (Connects to anything)', competitor: 'Heavy Microsoft lock-in' },
      { feature: 'UI/UX Polish', atlasbi: 'Modern, Presentation-ready', competitor: 'Clunky, Office 2016 aesthetics' },
      { feature: 'Setup Speed', atlasbi: 'Minutes', competitor: 'Days (Data Modeling required)' },
    ],
    painPoints: [
      { title: 'The DAX Nightmare', description: 'Writing DAX formulas for simple calculations is notoriously difficult and unintuitive. It requires dedicated study.' },
      { title: 'Windows Dependency', description: 'You cannot build complex Power BI data models on a Mac. You are forced to use the Windows-only Power BI Desktop application.' },
      { title: 'AI is Paywalled', description: 'Microsoft heavily markets Copilot, but hides it behind enterprise Premium capacity pricing, making it inaccessible to startups and mid-market teams.' },
    ],
    whySwitch: [
      { title: 'Talk to Your Data', description: 'Replace DAX with English. AtlasBI\'s LLM understands intent, calculates growth rates, and groups data automatically.', icon: 'MessageSquare' },
      { title: 'Works on Mac & Web', description: '100% cloud-based. Build, edit, and share dashboards from any browser, on any operating system.', icon: 'Laptop' },
      { title: 'Beautiful by Default', description: 'Power BI charts require heavy manual formatting to look good. AtlasBI applies professional, modern color palettes and spacing autonomously.', icon: 'Palette' },
    ],
    faqs: [
      { q: 'Is AtlasBI easier to learn than Power BI?', a: 'Yes. Power BI requires learning data modeling (star schemas) and a proprietary formula language (DAX). AtlasBI requires you to know how to type a question in English. The learning curve is essentially zero.' },
      { q: 'Does AtlasBI work on a Mac?', a: 'Yes. AtlasBI is entirely web-based. Unlike Power BI, which requires a Windows machine to run Power BI Desktop for data modeling, you can do everything in AtlasBI directly from your browser.' },
      { q: 'Why is Power BI Copilot so expensive compared to AtlasBI?', a: 'Microsoft requires organizations to purchase "Premium Capacity" (F64 or P1 SKUs) to enable Copilot, which starts at around $5,000 per month. AtlasBI is built AI-first, meaning generative capabilities are included even on our $19/month Pro plan.' },
    ],
    keywords: ['power bi alternative', 'atlasbi vs power bi', 'power bi mac alternative', 'ai power bi', 'power bi copilot alternative', 'easier than power bi'],
  },
  {
    slug: 'looker',
    name: 'Looker',
    h1: 'AtlasBI vs Looker: The Modern BI Alternative',
    metaTitle: 'AtlasBI vs Looker | Stop Writing LookML | 2026 Comparison',
    metaDescription: 'Compare AtlasBI vs Google Looker. Why spend months writing LookML when AtlasBI generates AI-powered dashboards in seconds? See the alternative.',
    heroSubtitle: 'Looker requires months of writing LookML before you see your first chart. AtlasBI connects to your database and delivers insights in seconds.',
    theirLogo: 'Search',
    ourAdvantage: 'No proprietary modeling language (LookML) required. True plug-and-play AI analytics.',
    verdict: 'If you have a massive, complex data warehouse and want to enforce strict, code-based governance (LookML), Looker is excellent. If you want speed, agility, and AI-driven insights without a 6-month implementation, AtlasBI wins.',
    pricingComparison: {
      theirs: '$3,000 - $5,000+ per month (Enterprise contracts only)',
      ours: '$19/month (Pro) or $49/month (Business)',
      hiddenCosts: 'Looker implementation often requires hiring external consultants to build the initial LookML model, adding tens of thousands of dollars to the upfront cost.',
    },
    featureComparison: [
      { feature: 'Data Modeling', atlasbi: 'AI-Inferred (Instant)', competitor: 'LookML (Manual Coding Required)' },
      { feature: 'Implementation Time', atlasbi: 'Minutes', competitor: '3-6 Months' },
      { feature: 'Pricing Transparency', atlasbi: 'Public, Flat-rate', competitor: 'Opaque, Custom Quotes' },
      { feature: 'Natural Language AI', atlasbi: 'Core Architecture', competitor: 'Limited Add-on' },
      { feature: 'Target Audience', atlasbi: 'Business Users & Startups', competitor: 'Data Engineering Teams' },
      { feature: 'Commitment', atlasbi: 'Month-to-Month available', competitor: 'Annual Enterprise Contracts' },
    ],
    painPoints: [
      { title: 'The LookML Bottleneck', description: 'Nothing happens in Looker until a developer writes LookML. Every new metric or dimension requires code changes.' },
      { title: 'Massive Upfront Cost', description: 'Looker does not cater to startups or mid-market teams. The entry price is typically thousands per month, billed annually.' },
      { title: 'Slow Implementation', description: 'Deploying Looker is an enterprise IT project. It takes months to set up the data models before the business gets value.' },
    ],
    whySwitch: [
      { title: 'Skip the Modeling Phase', description: 'AtlasBI\'s AI infers relationships, data types, and joins automatically. You connect the database and start asking questions immediately.', icon: 'Zap' },
      { title: 'Accessible Pricing', description: 'Start for free. Upgrade for $19/month. No enterprise sales calls, no annual lock-ins, no consultant fees.', icon: 'DollarSign' },
      { title: 'Built for the Business', description: 'Looker is built for data engineers to serve business users. AtlasBI is built for business users to serve themselves.', icon: 'Users' },
    ],
    faqs: [
      { q: 'Do I need to write code to use AtlasBI?', a: 'No. Unlike Looker, which requires learning and writing LookML to model your data, AtlasBI uses AI to automatically infer schemas and relationships. You interact via natural language.' },
      { q: 'Is AtlasBI replacing Looker Studio?', a: 'Looker Studio (formerly Data Studio) is Google\'s free dashboarding tool, which is different from enterprise Looker. AtlasBI is vastly superior to Looker Studio because it features AI chart generation, autonomous cleaning, and narrative insights, whereas Looker Studio is a manual drag-and-drop tool.' },
      { q: 'Can AtlasBI handle complex SQL joins?', a: 'Yes. AtlasBI\'s AI understands database schemas and automatically writes the necessary SQL joins in the background when you ask a question spanning multiple tables.' },
    ],
    keywords: ['looker alternative', 'atlasbi vs looker', 'lookml alternative', 'looker studio alternative', 'ai looker alternative', 'bi tool without data modeling'],
  }
];

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  return COMPETITORS.find(c => c.slug === slug);
}

export function getAllCompetitorSlugs(): string[] {
  return COMPETITORS.map(c => c.slug);
}
