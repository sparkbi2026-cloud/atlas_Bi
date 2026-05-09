import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  title: {
    default: "AtlasBI | AI Data Visualization & Autonomous BI Platform",
    template: "%s | AtlasBI",
  },
  description: "The smartest way to visualize your data. Go from raw CSV or Excel data to professional charts and executive insights in 18 seconds with AI. Free to start.",
  keywords: "ai chart generator, data visualization, autonomous bi, ai analytics, natural language bi, atlasbi, free chart maker, csv to chart, excel to chart, power bi helper",
  metadataBase: new URL("https://atlasbi.live"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atlasbi.live",
    siteName: "AtlasBI",
    title: "AtlasBI | AI-Powered Data Visualization",
    description: "Transform data into insights with AI. Natural language queries, automated charts, professional dashboards.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AtlasBI AI Data Visualization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AtlasBI | AI-Powered Data Visualization",
    description: "Transform data into insights with AI. Natural language queries, automated charts, professional dashboards.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://atlasbi.live",
  },
  verification: {
    google: "google-site-verification-code",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema — helps Google Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AtlasBI",
              "url": "https://atlasbi.live",
              "logo": "https://atlasbi.live/logo.png",
              "description": "AI-powered data visualization platform. Transform raw data into professional charts, dashboards, and insights with natural language.",
              "sameAs": [
                "https://twitter.com/atlasbiai",
                "https://linkedin.com/company/atlasbi",
                "https://github.com/atlasbi",
              ],
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://atlasbi.live/contact",
              },
            }),
          }}
        />
        {/* WebSite Schema — enables Google Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AtlasBI",
              "url": "https://atlasbi.live",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://atlasbi.live/blog?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
