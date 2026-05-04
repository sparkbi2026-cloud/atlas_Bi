// Free Tools data — used for pSEO page generation and sitemap

export interface FreeTool {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  keywords: string[];
  category: 'analytics' | 'converter' | 'generator' | 'cleaner' | 'llm';
  icon: string; // lucide icon name
  features: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  toolType: 'interactive' | 'static';
  competitors?: string[];
  relatedTools?: string[];
  relatedBlogs?: string[];
}

export const FREE_TOOLS: FreeTool[] = [
  {
    slug: 'excel-to-chart',
    title: 'Free AI Excel to Chart Maker',
    h1: 'Convert Excel to Visual Charts Online — AI Powered',
    metaTitle: 'Free Excel to Chart Converter | AI Data Visualization | AtlasBI',
    metaDescription: 'Convert Excel spreadsheets to professional charts in seconds. AI auto-detects trends and picks the best chart type for your spreadsheet. Free, no signup.',
    description: 'The core of AtlasBI. Upload any .xlsx or .xls file and let our AI transform your raw rows into presentation-ready visualizations. No manual formatting required.',
    keywords: ['excel to chart', 'xlsx to graph', 'excel visualization', 'ai chart maker'],
    category: 'analytics',
    icon: 'FileSpreadsheet',
    features: ['Auto-chart selection', 'Professional styling', 'Export as PNG/SVG'],
    useCases: ['Executive reporting', 'Pitch decks', 'Financial analysis'],
    faqs: [{ q: 'Can I edit the chart?', a: 'Yes, full customization is available.' }],
    toolType: 'interactive',
    relatedTools: ['csv-to-chart', 'excel-formula-generator'],
    relatedBlogs: ['/blog/csv-to-chart-guide']
  },
  {
    slug: 'csv-to-chart',
    title: 'Free AI CSV to Chart Maker',
    h1: 'Turn CSV Data into Professional Charts — AI Powered',
    metaTitle: 'Free CSV to Chart Converter | AI Data Viz | AtlasBI',
    metaDescription: 'The fastest way to visualize CSV data. Upload your file and get AI-generated charts instantly. Perfect for data analysts and Power BI users.',
    description: 'Stop wasting time in Excel. Upload your CSV and get a beautiful, clean chart in seconds. Our AI handles data cleaning and formatting automatically.',
    keywords: ['csv to chart', 'csv visualization', 'free csv graph maker', 'ai data viz'],
    category: 'analytics',
    icon: 'BarChart3',
    features: ['Instant data parsing', 'Trend detection', 'One-click export'],
    useCases: ['Marketing reports', 'Sales tracking', 'Scientific data'],
    faqs: [{ q: 'Is there a row limit?', a: 'Free tool supports up to 100,000 rows.' }],
    toolType: 'interactive',
    relatedTools: ['excel-to-chart', 'csv-cleaner']
  },
  {
    slug: 'csv-cleaner',
    title: 'Free AI CSV Data Cleaner',
    h1: 'Clean & Standardize CSV Files — AI Data Scrubbing',
    metaTitle: 'Free Online CSV Cleaner | AI Data Cleaning | AtlasBI',
    metaDescription: 'Fix messy CSV files instantly. Remove nulls, standardize dates, fix encoding, and deduplicate records before importing to Power BI or AtlasBI.',
    description: 'Messy data is the #1 reason charts fail. Our AI identifies formatting errors, fixes inconsistent dates, and removes duplicates automatically.',
    keywords: ['csv cleaner', 'fix messy csv', 'data scrubbing tool', 'clean excel data'],
    category: 'cleaner',
    icon: 'Eraser',
    features: ['Date standardization', 'Null value removal', 'Smart deduplication'],
    useCases: ['Preparing data for Power BI', 'Cleaning CRM exports', 'Formatting research data'],
    faqs: [{ q: 'Is my data safe?', a: 'We process data in-browser; it never leaves your machine.' }],
    toolType: 'interactive',
    relatedTools: ['csv-to-chart', 'date-standardizer']
  },
  {
    slug: 'excel-formula-generator',
    title: 'Free AI Excel Formula Generator',
    h1: 'Generate Excel Formulas with AI — Natural Language to Excel',
    metaTitle: 'Free Excel Formula Generator | AI Excel Helper | AtlasBI',
    metaDescription: 'Write complex Excel and Google Sheets formulas instantly. Just describe what you want to calculate and let AI do the rest. Free.',
    description: 'Struggling with VLOOKUP or nested IF statements? Describe your goal in plain English, and get the exact formula you need.',
    keywords: ['excel formula generator', 'ai excel helper', 'google sheets formula', 'vlookup generator'],
    category: 'generator',
    icon: 'FunctionSquare',
    features: ['Excel & Google Sheets support', 'Complex logic handling', 'Formula explanation'],
    useCases: ['Data cleaning', 'Financial modeling', 'Reporting'],
    faqs: [{ q: 'Does it support Google Sheets?', a: 'Yes, it works for both Excel and Sheets.' }],
    toolType: 'interactive',
    relatedTools: ['dax-formula-generator', 'vlookup-helper']
  },
  {
    slug: 'dax-formula-generator',
    title: 'Free AI Power BI DAX Helper',
    h1: 'Generate Power BI DAX Measures — AI DAX Generator',
    metaTitle: 'Free Power BI DAX Generator | AI DAX Assistant | AtlasBI',
    metaDescription: 'The ultimate tool for Power BI professionals. Generate complex DAX measures, calculated columns, and time-intelligence formulas with AI.',
    description: 'DAX is hard. Our AI assistant makes it easy. Describe your measure (e.g., "Rolling 12-month average revenue") and get the code instantly.',
    keywords: ['dax generator', 'power bi helper', 'ai dax assistant', 'power bi measures'],
    category: 'generator',
    icon: 'Calculator',
    features: ['Time intelligence', 'Filter context awareness', 'Measure optimization'],
    useCases: ['Building Power BI dashboards', 'Fixing broken DAX', 'Learning DAX'],
    faqs: [{ q: 'Is it for Power BI Desktop?', a: 'Yes, works with Desktop, Service, and Analysis Services.' }],
    toolType: 'interactive',
    relatedTools: ['sql-query-generator', 'excel-formula-generator']
  },
  {
    slug: 'csv-to-llm-json',
    title: 'Free CSV to LLM Context Converter',
    h1: 'Convert CSV to LLM-Friendly JSON — Optimize for AI',
    metaTitle: 'Free CSV to LLM JSON | AI Context Tool | AtlasBI',
    metaDescription: 'Prepare your data for ChatGPT or Claude. Convert CSV tables into optimized, flattened JSON formats that LLMs understand better. Free.',
    description: 'LLMs often struggle with raw CSV. Our tool converts your spreadsheets into high-density JSON structures designed for maximum LLM reasoning performance.',
    keywords: ['csv to llm', 'json for chatgpt', 'prepare data for ai', 'csv to json context'],
    category: 'llm',
    icon: 'Bot',
    features: ['Token-efficient formatting', 'Schema optimization', 'Flattened structures'],
    useCases: ['Feeding data to ChatGPT', 'Building RAG pipelines', 'Fine-tuning AI models'],
    faqs: [{ q: 'How does it save tokens?', a: 'It removes redundant headers and uses compact JSON structures.' }],
    toolType: 'interactive',
    relatedTools: ['json-to-csv', 'sql-to-json']
  },
  {
    slug: 'sql-query-generator',
    title: 'Free AI SQL Query Generator',
    h1: 'Generate SQL from Natural Language — AI SQL Writer',
    metaTitle: 'Free AI SQL Generator | Text to SQL Online | AtlasBI',
    metaDescription: 'Convert plain English to SQL queries instantly. Supports BigQuery, Snowflake, PostgreSQL, and MySQL. Optimized for data analysts.',
    description: 'Stop searching Stack Overflow for SQL syntax. Type your request in English and get production-ready SQL for any major database.',
    keywords: ['sql generator', 'ai sql writer', 'text to sql', 'bigquery sql helper'],
    category: 'generator',
    icon: 'Database',
    features: ['Multiple SQL dialects', 'Complex JOIN logic', 'Query explanation'],
    useCases: ['Data extraction', 'Dashboard queries', 'SQL learning'],
    faqs: [{ q: 'Does it support Snowflake?', a: 'Yes, Snowflake, BigQuery, Postgres, and more.' }],
    toolType: 'interactive',
    relatedTools: ['dax-formula-generator', 'sql-formatter']
  },
  {
    slug: 'metric-calculator',
    title: 'Free Analytics Metric Calculator',
    h1: 'Calculate Growth, CAGR & Churn — Data Analyst Helper',
    metaTitle: 'Free SaaS Metric Calculator | CAGR & Growth | AtlasBI',
    metaDescription: 'Calculate essential business metrics like CAGR, Churn Rate, and Retention instantly. No more manual Excel formulas. Free tool.',
    description: 'Consistency is key in analytics. Use our standardized calculators to ensure your KPIs are computed correctly every single time.',
    keywords: ['cagr calculator', 'churn rate tool', 'saas metric helper', 'growth calculation'],
    category: 'analytics',
    icon: 'Percent',
    features: ['CAGR Formula', 'Churn/Retention logic', 'Unit economics'],
    useCases: ['Board presentations', 'Quarterly reviews', 'Metric tracking'],
    faqs: [{ q: 'Is the formula standardized?', a: 'Yes, we use industry-standard SaaS metric definitions.' }],
    toolType: 'interactive',
    relatedTools: ['cagr-calculator', 'correlation-matrix-gen']
  },
  {
    slug: 'vlookup-helper',
    title: 'Free AI VLOOKUP & XLOOKUP Generator',
    h1: 'Fix Your Excel Lookups — AI VLOOKUP Assistant',
    metaTitle: 'Free VLOOKUP Generator | AI Excel Helper | AtlasBI',
    metaDescription: 'Never struggle with VLOOKUP or INDEX/MATCH again. Describe your spreadsheet columns and get the exact lookup formula instantly. Free.',
    description: 'Lookup errors are the most common Excel headache. Our AI builds robust XLOOKUP and VLOOKUP formulas that don\'t break when you move columns.',
    keywords: ['vlookup helper', 'xlookup generator', 'excel index match', 'fix excel lookup'],
    category: 'generator',
    icon: 'Search',
    features: ['VLOOKUP to XLOOKUP conversion', 'Error handling', 'Dynamic range support'],
    useCases: ['Merging datasets', 'Cleaning Excel files', 'Financial reporting'],
    faqs: [{ q: 'Is XLOOKUP better?', a: 'Yes, we recommend XLOOKUP for its stability and flexibility.' }],
    toolType: 'interactive',
    relatedTools: ['excel-formula-generator', 'column-standardizer']
  },
  {
    slug: 'json-to-csv',
    title: 'Free JSON to CSV Converter',
    h1: 'Convert API Data to Excel — Flatten JSON Online',
    metaTitle: 'Free JSON to CSV Converter | API Data Visualization | AtlasBI',
    metaDescription: 'The fastest way to get API data into Excel or Power BI. Flatten nested JSON into clean CSV tables instantly. Free, unlimited.',
    description: 'API data is messy. Our converter flattens nested JSON objects into a clean, flat CSV table that is ready for analysis in AtlasBI or Excel.',
    keywords: ['json to csv', 'flatten json', 'api to excel', 'convert json table'],
    category: 'converter',
    icon: 'FileJson',
    features: ['Recursive flattening', 'Auto-schema detection', 'Large file support'],
    useCases: ['Analyzing API responses', 'Preparing NoSQL data', 'Developer exports'],
    faqs: [{ q: 'Does it handle arrays?', a: 'Yes, it recursively flattens arrays into rows or columns.' }],
    toolType: 'interactive',
    relatedTools: ['csv-to-llm-json', 'sql-to-json']
  },
  {
    slug: 'chart-type-recommender',
    title: 'Free AI Chart Type Recommender',
    h1: 'Pick the Best Chart for Your Data — AI Viz Engine',
    metaTitle: 'Free Chart Type Recommender | AI Data Viz Helper | AtlasBI',
    metaDescription: 'Unsure if you need a Bar Chart or a Scatter Plot? Tell us your data goal and get a scientifically optimal recommendation. Free.',
    description: 'Good data viz requires the right chart type. Our engine uses academic visualization principles to recommend the best way to show your data.',
    keywords: ['choose chart type', 'data viz helper', 'best graph for data', 'chart recommendation'],
    category: 'analytics',
    icon: 'Lightbulb',
    features: ['Goal-based logic', 'Avoids common mistakes', 'Visual examples'],
    useCases: ['Designing dashboards', 'Executive decks', 'Data storytelling'],
    faqs: [{ q: 'Is it based on Edward Tufte?', a: 'Yes, and other modern viz experts.' }],
    toolType: 'interactive',
    relatedTools: ['excel-to-chart', 'color-palette-viz']
  },
  {
    slug: 'date-standardizer',
    title: 'Free Data Date Standardizer',
    h1: 'Fix Inconsistent Date Formats — AI Date Cleaner',
    metaTitle: 'Free Date Format Converter | Standardize Dates | AtlasBI',
    metaDescription: 'Merge datasets with different date formats (MM/DD, DD-MM, YYYY). Standardize everything to ISO 8601 instantly. Free.',
    description: 'Inconsistent dates are the #1 reason data merges fail. Upload your list and we\'ll convert everything to a clean, sortable format.',
    keywords: ['date converter', 'standardize dates', 'iso date tool', 'fix date format'],
    category: 'cleaner',
    icon: 'Calendar',
    features: ['Locale-aware parsing', 'Batch processing', 'Auto-detection'],
    useCases: ['Merging CSVs', 'Cleaning historical data', 'Excel prep'],
    faqs: [{ q: 'Does it handle US vs UK dates?', a: 'Yes, it uses smart detection for MM/DD vs DD/MM.' }],
    toolType: 'interactive',
    relatedTools: ['csv-cleaner', 'column-standardizer']
  },
  {
    slug: 'data-anonymizer',
    title: 'Free PII Data Anonymizer',
    h1: 'Scrub Sensitive Data from CSV — AI Privacy Tool',
    metaTitle: 'Free PII Data Anonymizer | GDPR Data Scrubbing | AtlasBI',
    metaDescription: 'Share your data safely. Replace Names, Emails, and IDs with anonymous mock data while preserving your CSV structure. Free.',
    description: 'Privacy is paramount. Our tool identifies PII (Personally Identifiable Information) and masks it locally in your browser before you share it.',
    keywords: ['data anonymization', 'remove pii', 'gdpr tool', 'mask sensitive data'],
    category: 'cleaner',
    icon: 'ShieldCheck',
    features: ['100% Client-side', 'Smart PII detection', 'Preserves data types'],
    useCases: ['Sharing data with vendors', 'Testing with real data', 'Compliance'],
    faqs: [{ q: 'Is it safe for GDPR?', a: 'Yes, data never leaves your browser.' }],
    toolType: 'interactive',
    relatedTools: ['csv-cleaner', 'sample-data-generator']
  },
  {
    slug: 'column-standardizer',
    title: 'Free Data Column Standardizer',
    h1: 'Clean Your Spreadsheet Headers — SQL & BI Ready',
    metaTitle: 'Free Column Name Standardizer | Clean Data Tool | AtlasBI',
    metaDescription: 'Convert "Messy (Columns)!" into clean snake_case or camelCase headers. Perfect for Power BI, SQL, and Python. Free.',
    description: 'Fix inconsistent header names across your organization. Convert "Sales Rep Name" to "sales_rep_name" instantly for better coding.',
    keywords: ['clean column names', 'snake_case converter', 'data modeling helper'],
    category: 'cleaner',
    icon: 'Type',
    features: ['Snake_case / CamelCase', 'Special char removal', 'SQL reserved word check'],
    useCases: ['Preparing SQL schemas', 'Power BI modeling', 'Data engineering'],
    faqs: [{ q: 'Does it rename the data?', a: 'No, only the headers.' }],
    toolType: 'interactive',
    relatedTools: ['date-standardizer', 'csv-cleaner']
  },
  {
    slug: 'sql-to-json',
    title: 'Free SQL to JSON Converter',
    h1: 'Convert SQL Results to JSON — Developer Data Tool',
    metaTitle: 'Free SQL to JSON Converter | Database Export Tool | AtlasBI',
    metaDescription: 'Fastest way to get data from your DB to your app. Paste a raw SQL result table and get a perfectly formatted JSON array. Free.',
    description: 'Bridge the gap between your database and your code. Paste any CLI or GUI SQL output and get valid JSON in one click.',
    keywords: ['sql to json', 'db export', 'convert table to json', 'sql results tool'],
    category: 'converter',
    icon: 'ArrowRightLeft',
    features: ['Paste raw tables', 'Auto-type detection', 'Pretty-print JSON'],
    useCases: ['Mocking APIs', 'Web app development', 'Documentation'],
    faqs: [{ q: 'Does it work with MySQL?', a: 'Yes, works with any table-formatted text output.' }],
    toolType: 'interactive',
    relatedTools: ['json-to-csv', 'csv-to-llm-json']
  },
  {
    slug: 'correlation-matrix-gen',
    title: 'Free Correlation Matrix Generator',
    h1: 'Find Relationships in Your Data — AI Heatmap Tool',
    metaTitle: 'Free Correlation Matrix Maker | Data Relationship Tool | AtlasBI',
    metaDescription: 'See which metrics move together. Upload your CSV and get a Pearson correlation matrix heatmap instantly. Free.',
    description: 'Identify hidden drivers. Does your Ad Spend really drive Revenue? See the statistical correlation across all your columns.',
    keywords: ['correlation matrix', 'pearson correlation', 'heatmap maker', 'data relationships'],
    category: 'analytics',
    icon: 'Grid',
    features: ['Statistical Heatmap', 'R-value calculation', 'Significant highlight'],
    useCases: ['Exploratory data analysis', 'Marketing attribution', 'Research'],
    faqs: [{ q: 'What is Pearson correlation?', a: 'A measure of linear correlation between two variables.' }],
    toolType: 'interactive',
    relatedTools: ['scatter-plot-maker', 'metric-calculator']
  },
  {
    slug: 'sample-data-generator',
    title: 'Free AI Mock Data Generator',
    h1: 'Generate Realistic Mock Data — AI Powered CSV/JSON',
    metaTitle: 'Free Sample Data Generator | Mock CSV & JSON | AtlasBI',
    metaDescription: 'Need data for testing? Generate thousands of rows of realistic Names, Emails, Prices, and Dates for your dashboards. Free.',
    description: 'Stop using "Test 1, Test 2". Generate high-quality mock datasets that look like real business data for your demos and tests.',
    keywords: ['mock data generator', 'dummy csv', 'sample data tool', 'test data maker'],
    category: 'generator',
    icon: 'Layout',
    features: ['Realistic profiles', 'Financial distributions', 'CSV/JSON export'],
    useCases: ['Testing Power BI', 'App development', 'Demo data'],
    faqs: [{ q: 'Is it random?', a: 'It uses statistical patterns for realism.' }],
    toolType: 'interactive',
    relatedTools: ['data-anonymizer', 'csv-to-chart']
  },
  {
    slug: 'outlier-detector',
    title: 'Free Data Outlier Detector',
    h1: 'Find Anomalies in Your Data — Statistical Outlier Tool',
    metaTitle: 'Free Online Outlier Detector | Data Cleaning Tool | AtlasBI',
    metaDescription: 'Identify data points that skew your analysis. Use IQR and Z-Score methods to find outliers in your spreadsheets instantly. Free.',
    description: 'Don\'t let a few bad rows ruin your average. Paste your data and identify statistical anomalies before you build your charts.',
    keywords: ['outlier detector', 'find anomalies', 'iqr calculator', 'z-score tool'],
    category: 'analytics',
    icon: 'AlertCircle',
    features: ['IQR Method', 'Z-Score Method', 'Anomalies report'],
    useCases: ['Auditing data', 'Quality control', 'Scientific analysis'],
    faqs: [{ q: 'Should I delete outliers?', a: 'Only if they are errors; otherwise, investigate them!' }],
    toolType: 'interactive',
    relatedTools: ['csv-cleaner', 'correlation-matrix-gen']
  },
  {
    slug: 'sql-formatter',
    title: 'Free SQL Formatter & Beautifier',
    h1: 'Beautify Your SQL Queries — Clean & Readable Code',
    metaTitle: 'Free Online SQL Formatter | Beautify SQL | AtlasBI',
    metaDescription: 'Make your SQL readable. Standardize indentation and casing for Postgres, MySQL, and BigQuery. Free tool for data engineers.',
    description: 'Readable code is maintainable code. Transform messy, single-line SQL into perfectly indented blocks ready for peer review.',
    keywords: ['sql formatter', 'beautify sql', 'sql indent tool', 'clean sql code'],
    category: 'generator',
    icon: 'Code',
    features: ['10+ Dialects', 'Custom indentation', 'Auto-keyword casing'],
    useCases: ['Code reviews', 'Documentation', 'Debugging'],
    faqs: [{ q: 'Does it support CTEs?', a: 'Yes, it correctly indents Common Table Expressions.' }],
    toolType: 'interactive',
    relatedTools: ['sql-query-generator', 'sql-to-json']
  },
  {
    slug: 'chart-accessibility-checker',
    title: 'Free Chart Accessibility Checker',
    h1: 'Check Data Viz Accessibility — WCAG Chart Tool',
    metaTitle: 'Free Data Viz Accessibility Tool | WCAG Charts | AtlasBI',
    metaDescription: 'Ensure your charts are readable by everyone. Check color contrast and accessibility for color-blind users. Free tool.',
    description: 'Charts should be inclusive. Our tool checks your visualization against WCAG standards to ensure it\'s readable by all stakeholders.',
    keywords: ['chart accessibility', 'color blind safe viz', 'wcag data viz', 'contrast checker'],
    category: 'analytics',
    icon: 'Eye',
    features: ['Contrast analysis', 'Color-blind simulation', 'Compliance score'],
    useCases: ['Public reporting', 'Enterprise dashboards', 'UX audit'],
    faqs: [{ q: 'Does it check alt-text?', a: 'Yes, it provides recommendations for data descriptions.' }],
    toolType: 'interactive',
    relatedTools: ['color-palette-viz', 'chart-type-recommender']
  },
  {
    slug: 'sql-to-power-query-m',
    title: 'Free SQL to Power Query M Converter',
    h1: 'Convert SQL Queries to Power Query M — Power BI Helper',
    metaTitle: 'Free SQL to M Converter | Power BI Power Query Tool | AtlasBI',
    metaDescription: 'Bridge the gap between SQL and Power BI. Convert your SQL queries into optimized Power Query M code for seamless dashboard integration. Free.',
    description: 'Stop manual data reshaping. Paste your SQL query and get the exact M code needed for the Power BI Advanced Editor.',
    keywords: ['sql to power query', 'convert sql to m code', 'power bi m generator', 'power query helper'],
    category: 'generator',
    icon: 'RefreshCw',
    features: ['Optimized M code', 'Advanced Editor ready', 'Handles complex transforms'],
    useCases: ['Migrating SQL to Power BI', 'Automating data flows', 'Power BI dev'],
    faqs: [{ q: 'Does it support nested joins?', a: 'Yes, it maps SQL JOINs to Table.NestedJoin in M.' }],
    toolType: 'interactive',
    relatedTools: ['sql-query-generator', 'dax-formula-generator']
  },
  {
    slug: 'excel-pivot-helper',
    title: 'Free AI Excel Pivot Table Assistant',
    h1: 'Build Better Pivot Tables — AI Excel Assistant',
    metaTitle: 'Free Excel Pivot Table Helper | AI Data Analysis | AtlasBI',
    metaDescription: 'Struggling with Pivot Tables? Tell us your data goal and get a step-by-step guide on how to configure your Rows, Columns, and Values. Free.',
    description: 'Master the most powerful tool in Excel. Our AI analyzes your headers and tells you exactly how to structure your Pivot Table for the best insights.',
    keywords: ['pivot table helper', 'excel pivot assistant', 'how to make pivot table', 'pivot table guide'],
    category: 'analytics',
    icon: 'Table',
    features: ['Step-by-step config', 'Metric recommendations', 'Slicer suggestions'],
    useCases: ['Summarizing large data', 'Sales reporting', 'Data exploration'],
    faqs: [{ q: 'Does it work with Mac?', a: 'Yes, instructions work for both Windows and Mac versions of Excel.' }],
    toolType: 'interactive',
    relatedTools: ['excel-formula-generator', 'chart-type-recommender']
  }
];

export function getToolBySlug(slug: string): FreeTool | undefined {
  return FREE_TOOLS.find(t => t.slug === slug);
}

export function getAllToolSlugs(): string[] {
  return FREE_TOOLS.map(t => t.slug);
}
