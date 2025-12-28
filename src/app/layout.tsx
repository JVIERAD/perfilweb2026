import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { profileData } from "@/lib/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${profileData.name} - ${profileData.title}`,
  description: profileData.tagline,
  keywords: ["desarrollador", "full stack", "react", "next.js", "portfolio", "portafolio"],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-dominio.com",
    title: `${profileData.name} - ${profileData.title}`,
    description: profileData.tagline,
    siteName: profileData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} - ${profileData.title}`,
    description: profileData.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
