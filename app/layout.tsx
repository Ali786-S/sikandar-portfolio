import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navigation, ScrollProgress } from "@/components/navigation";
import { siteUrl, github, linkedin, email } from "@/lib/site";
import "./globals.css";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sikandar Ali — Software Developer, London",
    template: "%s · Sikandar Ali",
  },
  description:
    "London-based Computer Science graduate building useful software, AI workflows and thoughtful digital experiences. Explore verified projects and professional experience.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Sikandar Ali",
    title: "Sikandar Ali — Building software that means something.",
    description:
      "Software development, AI and digital innovation. A portfolio of real projects and thoughtful engineering.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#f6f5f1" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className={`${geist.variable} ${mono.variable}`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Navigation />
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="wrap">
            <div className="footer-top">
              <Link href="/" className="wordmark">
                sikandar<span>ali.</span>
              </Link>
              <p>Software. People. Possibility.</p>
              <div className="footer-links">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <ArrowUpRight size={14} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <ArrowUpRight size={14} />
                </a>
                <a href={`mailto:${email}`}>
                  Email
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Sikandar Ali</span>
              <span>Designed with intention. Built in London.</span>
              <Link href="/privacy">Privacy & accessibility</Link>
            </div>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sikandar Ali",
              url: siteUrl,
              jobTitle: "Software Developer",
              sameAs: [github, linkedin],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Westminster",
              },
              knowsAbout: [
                "Python",
                "Java",
                "JavaScript",
                "Software Development",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "London",
                addressCountry: "GB",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
