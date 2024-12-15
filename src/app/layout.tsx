import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Suporte Magalu",
  description: "Create by Pedro Acacio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
