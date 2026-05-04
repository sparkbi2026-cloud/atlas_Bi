"use client";

import { useState } from "react";
import { Terminal, Play, Download, Check, RefreshCw, Copy, Upload } from "lucide-react";
import { FreeTool } from "@/lib/free-tools";

interface ToolPlaygroundProps {
  tool: FreeTool;
}

export default function ToolPlayground({ tool }: ToolPlaygroundProps) {
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const handleExecute = () => {
    if (!input && tool.category !== 'analytics') return;
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      generateResult();
    }, 1000);
  };

  const triggerFileUpload = () => {
    const input = document.getElementById('file-upload');
    if (input) input.click();
  };

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        generateResult();
      }, 1200);
    }
  };

  const generateResult = () => {
    switch (tool.slug) {
      case 'sql-query-generator':
        setResult(`SELECT \n  date_trunc('month', created_at) AS month,\n  SUM(revenue) AS total_revenue\nFROM transactions\nWHERE created_at > '2026-01-01'\nGROUP BY 1\nORDER BY 1 DESC;`);
        break;
      case 'dax-formula-generator':
        setResult(`Total Revenue YTD = \nCALCULATE(\n  SUM(Sales[Amount]),\n  DATESYTD('Date'[Date])\n)`);
        break;
      case 'sql-formatter':
        setResult(`SELECT *\nFROM users\nWHERE active = true\n  AND last_login > '2026-01-01';`);
        break;
      case 'cagr-calculator':
        const start = 100000;
        const end = 250000;
        const years = 3;
        const cagr = ((Math.pow(end/start, 1/years) - 1) * 100).toFixed(2);
        setResult(`CAGR: ${cagr}%\nStart: $100,000\nEnd: $250,000\nPeriod: 3 Years`);
        break;
      case 'regex-generator':
        setResult(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`);
        break;
      case 'csv-cleaner':
        setResult({ status: 'Success', fixed: 142, removed: 12, summary: 'Standardized all dates to ISO 8601' });
        break;
      case 'sql-to-json':
        setResult(`[\n  {\n    "id": 1,\n    "name": "Acme Corp",\n    "revenue": 50000\n  },\n  {\n    "id": 2,\n    "name": "Global Tech",\n    "revenue": 120000\n  }\n]`);
        break;
      case 'chart-type-recommender':
        setResult(`Recommendation: Grouped Bar Chart\n\nWhy: You are comparing multiple categories across two distinct time periods. A Grouped Bar Chart allows for direct comparison of each category side-by-side while maintaining chronological order.`);
        break;
      case 'correlation-matrix-gen':
        setResult(`Correlation Matrix:\n- Revenue vs Ad Spend: 0.89 (Strong Positive)\n- Churn vs Support Tickets: 0.72 (Positive)\n- Net Profit vs Headcount: -0.12 (Neutral)`);
        break;
      case 'data-anonymizer':
        setResult({ status: 'Success', fixed: 850, removed: 0, summary: 'All Names, Emails, and Phone Numbers have been replaced with anonymous mock data.' });
        break;
      case 'excel-formula-generator':
        setResult(`=VLOOKUP(A2, 'Data'!$A$1:$B$100, 2, FALSE)\n\nExplanation: This formula looks for the value in cell A2 within the first column of the 'Data' sheet and returns the corresponding value from the second column.`);
        break;
      case 'vlookup-helper':
        setResult(`=XLOOKUP(A2, Products[ID], Products[Price], "Not Found")\n\nNote: We used XLOOKUP because it's more stable than VLOOKUP. It automatically handles errors and doesn't break if you insert columns.`);
        break;
      case 'csv-to-llm-json':
        setResult(`{\n  "metadata": { "source": "sales_data.csv", "rows": 1250 },\n  "data": [\n    { "id": "ORD-001", "val": 450.5, "cat": "Hardware" },\n    { "id": "ORD-002", "val": 120.0, "cat": "Software" }\n  ]\n}\n\n// Token-efficient format applied.`);
        break;
      case 'chart-accessibility-checker':
        setResult(`Accessibility Audit Result:\n- Contrast Ratio: 7.2:1 (PASS)\n- Color-Blind Safety: Deuteranopia (FAIL - use higher contrast patterns)\n- Recommendation: Add patterned fills to your bar chart segments.`);
        break;
      case 'column-standardizer':
        setResult(`Old Header: "Product ID (Internal)!"\nNew Header: "product_id_internal"\n\nStandard applied: snake_case (SQL Compatible)`);
        break;
      case 'excel-to-chart':
        setResult(`AtlasBI has analyzed your spreadsheet and generated a 'Multi-Series Line Chart'. \n\nClick 'Run Now' to open the interactive version.`);
        break;
      default:
        setResult(`Analysis complete for ${tool.title}. \n\nYour optimized data is ready for export or further visualization in the main AtlasBI dashboard.`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(typeof result === 'string' ? result : JSON.stringify(result, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-900/5 overflow-hidden my-12">
      <div className="flex flex-col md:flex-row">
        {/* Input Side */}
        <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-50">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <Terminal className="w-4 h-4" /> Tool Playground
          </h3>

          <div className="space-y-6">
            {tool.category === 'cleaner' || tool.slug === 'excel-to-chart' || tool.slug === 'csv-to-chart' ? (
              <div 
                onClick={triggerFileUpload}
                className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center hover:border-slate-900 transition-colors cursor-pointer group"
              >
                <Upload className="w-10 h-10 text-slate-300 group-hover:text-slate-900 mx-auto mb-4 transition-colors" />
                <p className="text-sm font-bold text-slate-900 mb-1">Upload your file</p>
                <p className="text-xs text-slate-500">CSV, XLSX, or JSON up to 10MB</p>
                <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
              </div>
            ) : (
              <textarea
                className="w-full h-48 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-900 transition-all"
                placeholder={tool.category === 'generator' ? "Describe what you want to generate in plain English..." : "Paste your data here..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            )}

            <button
              onClick={handleExecute}
              disabled={isProcessing}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg shadow-slate-900/20 disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" /> Execute {tool.title.split(' ').pop()}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Side */}
        <div className="flex-1 p-8 md:p-12 bg-slate-50/50 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Result</h3>
            {result && (
              <div className="flex gap-2">
                <button 
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors" title="Download result">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="flex-1 min-h-[200px] bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center items-center text-center">
            {!result ? (
              <div className="text-slate-400">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 mx-auto">
                  <RefreshCw className="w-6 h-6 opacity-20" />
                </div>
                <p className="text-sm font-medium">Output will appear here after execution</p>
              </div>
            ) : typeof result === 'string' ? (
              <pre className="w-full h-full text-xs font-mono text-slate-900 whitespace-pre-wrap text-left">
                {result}
              </pre>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-green-600 font-bold mb-4">
                  <Check className="w-5 h-5" /> {result.status}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-400 mb-1">Fixed</div>
                    <div className="text-lg font-black text-slate-900">{result.fixed}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-xs text-slate-400 mb-1">Removed</div>
                    <div className="text-lg font-black text-slate-600">{result.removed}</div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic">{result.summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
