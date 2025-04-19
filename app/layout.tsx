import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { titleFont, bodyFont } from "./utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickToken | Launch Your Token Platform & Earn Revenue",
  description: "Discover how to generate revenue with smart contracts. Get the QuickToken Dashboard: a complete codebase for launching your own ERC20 token deployment platform with fee collection.",
  keywords: ["smart contracts", "revenue", "token platform", "ERC20", "blockchain SaaS", "crypto business", "token deployment", "mint fees", "platform fees", "no-code token"],
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${titleFont.variable} ${bodyFont.variable}`}>
      <body className={`bg-background text-textLight font-body`}>
        {/* Optional: Add ThemeProvider if implementing dark mode toggle */}
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}