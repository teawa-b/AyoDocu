import type { Metadata } from "next";
import "../styles/globals.css";
import NavigationBar from "@/components/NavigationBar";

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
      <body className="pb-20">
        {children}
        <NavigationBar />
      </body>
    </html>
  );
}
