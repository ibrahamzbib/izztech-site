import type { Metadata } from "next";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";

export const metadata: Metadata = {
  title: 'IZZ Tech Inc. | B2B Software Studio',
  description: 'IZZ Tech Inc. is a software studio that builds custom tools, AI systems, and automation for businesses that have outgrown off-the-shelf software.',
  keywords: ['B2B software', 'custom software', 'AI automation', 'software studio', 'web platforms'],
  openGraph: {
    title: 'IZZ Tech Inc. | B2B Software Studio',
    description: 'Custom software, AI systems, and automation — built around how your business actually runs.',
    url: 'https://izztech.io',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
