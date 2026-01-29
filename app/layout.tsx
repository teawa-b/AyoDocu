import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "AyoDocu - AI Documentary Generator",
  description: "Create documentary-style videos with consistent 3D mannequin aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
