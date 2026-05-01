import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bible Verse Generator AI — Find a Verse for Any Situation",
    template: "%s | Bible Verse Generator AI",
  },
  description:
    "Find powerful, personalized Bible verses for anxiety, strength, healing, hope, and more. Get a meaningful scripture with reflection instantly — no login required.",
  metadataBase: new URL("https://bibleversegeneratorai.com"),
  openGraph: {
    siteName: "Bible Verse Generator AI",
    type: "website",
    locale: "en_US",
  },
  verification: {
    google: "googled139fb02f40d1ca6",
  },
};

const navTopics = [
  { href: "/bible-verses-for-anxiety", label: "Anxiety" },
  { href: "/bible-verses-for-strength", label: "Strength" },
  { href: "/bible-verses-for-hope", label: "Hope" },
  { href: "/bible-verses-for-healing", label: "Healing" },
  { href: "/bible-verses-for-depression", label: "Depression" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#020617] text-white antialiased`}>
        {/* Nav */}
        <header className="border-b border-slate-800 sticky top-0 z-50 bg-[#020617]/95 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
            <Link
              href="/"
              className="font-bold text-base sm:text-lg text-white hover:text-emerald-400 transition-colors flex-shrink-0"
            >
              📖 BibleVerseGeneratorAI
            </Link>
            <div className="hidden md:flex items-center gap-1 overflow-x-auto">
              {navTopics.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="px-3 py-1.5 text-sm text-slate-300 hover:text-emerald-400 hover:bg-emerald-900/20 rounded-lg transition-colors whitespace-nowrap"
                >
                  {t.label}
                </Link>
              ))}
            </div>
            <a
              href="https://faithcompanionai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              FaithCompanionAI →
            </a>
          </nav>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t border-slate-800 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Popular Topics
                </p>
                <ul className="space-y-2">
                  {[
                    { href: "/bible-verses-for-anxiety", label: "Anxiety" },
                    { href: "/bible-verses-for-depression", label: "Depression" },
                    { href: "/bible-verses-for-strength", label: "Strength" },
                    { href: "/bible-verses-for-healing", label: "Healing" },
                    { href: "/bible-verses-for-hope", label: "Hope" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  More Topics
                </p>
                <ul className="space-y-2">
                  {[
                    { href: "/bible-verses-for-fear", label: "Fear" },
                    { href: "/bible-verses-for-forgiveness", label: "Forgiveness" },
                    { href: "/bible-verses-for-grief", label: "Grief" },
                    { href: "/bible-verses-for-love", label: "Love" },
                    { href: "/bible-verses-for-guidance", label: "Guidance" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Life Situations
                </p>
                <ul className="space-y-2">
                  {[
                    { href: "/bible-verses-for-marriage", label: "Marriage" },
                    { href: "/bible-verses-for-finances", label: "Finances" },
                    { href: "/bible-verses-for-loneliness", label: "Loneliness" },
                    { href: "/bible-verses-for-mothers", label: "Mothers" },
                    { href: "/bible-verses-for-students", label: "Students" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Sister Sites
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://faithcompanionai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                    >
                      FaithCompanionAI.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://prayergeneratorai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                    >
                      PrayerGeneratorAI.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-6 text-center">
              <p className="text-slate-600 text-sm">
                © {new Date().getFullYear()} BibleVerseGeneratorAI.com — Free Bible verse tool for
                everyone.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
