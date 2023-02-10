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
      </head>
      <body className={`overflow-y-scroll bg-white dark:bg-[#10172b] text-black dark:text-white ${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}
