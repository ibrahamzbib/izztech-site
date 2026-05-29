import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'IZZ Tech Inc. | Tech Consulting',
  description: 'Minimal tech consulting and automation for modern businesses.',
  keywords: ['tech consulting', 'automation', 'startups'],
  openGraph: {
    title: 'IZZ Tech Inc.',
    description: 'Tech Consulting & Automation',
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
      <body>{children}</body>
    </html>
  );
}
