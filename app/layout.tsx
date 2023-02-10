import '@/styles/globals.css';
import React from 'react';
import { Ubuntu } from '@next/font/google';

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Wengster</title>
        <meta name="theme-color" content="#050047"></meta>
        <meta property="og:title" content="wengster.fun" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wengster.fun" />
        <meta property="og:description" content="Julian Weng L (built with Gatsby)" />
      </head>
      <body className={`overflow-y-scroll bg-white dark:bg-[#10172b] text-black dark:text-white ${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}
