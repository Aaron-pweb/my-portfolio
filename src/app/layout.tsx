import type { Metadata } from "next";
import { VT323, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaron-pweb.github.io/my-portfolio/"),
  title: "Aaron | Engineer • Entrepreneur • Christian",
  description: "Professional Engineering Portfolio with Retro Terminal Aesthetic. Based in Mekelle, Ethiopia.",
  keywords: ["Engineering", "Entrepreneurship", "Mekelle", "Ethiopia", "Christian Engineer", "Full Stack Developer", "Python", "Data Science"],
  authors: [{ name: "Aaron Teshale" }],
  openGraph: {
    title: "Aaron | Engineer • Entrepreneur • Christian",
    description: "Professional Engineering Portfolio with Retro Terminal Aesthetic.",
    url: "https://aaron-pweb.github.io/my-portfolio/",
    siteName: "Aaron Portfolio",
    images: [
      {
        url: "/my-portfolio/profile.jpg",
        width: 800,
        height: 800,
        alt: "Aaron Teshale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron | Engineer • Entrepreneur • Christian",
    description: "Professional Engineering Portfolio with Retro Terminal Aesthetic.",
    images: ["/my-portfolio/profile.jpg"],
  },
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          jetbrainsMono.variable,
          vt323.variable,
          "antialiased bg-retro-black text-phosphor selection:bg-phosphor selection:text-retro-black"
        )}
      >
        <div className="crt min-h-screen relative overflow-hidden">
          <div className="scanline" />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
