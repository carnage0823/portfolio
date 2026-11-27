import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Rohit Sharma — Full-Stack Developer",
  description:
    "Full-Stack Developer with 4+ years of experience building web and mobile applications with React, React Native, Next.js, TypeScript and Node.js.",
  keywords: [
    "Rohit Sharma",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "Jaipur",
  ],
  authors: [{ name: "Rohit Sharma" }],
  openGraph: {
    title: "Rohit Sharma — Full-Stack Developer",
    description:
      "Building web & mobile products with React, Next.js, React Native and Node.js.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06060a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-ink text-zinc-300 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
