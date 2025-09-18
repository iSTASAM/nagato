import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BacktoTop from "./components/BacktoTop";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagato Heat Treatment (Thailand)",
  description: "Nagato Heat Treatment (Thailand)",
  icons: {
    icon: '/img/brand/logo.jpg',
    shortcut: '/img/brand/logo.jpg',
    apple: '/img/brand/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            <NavBar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <BacktoTop />
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}
