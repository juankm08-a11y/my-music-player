import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Music Player",
  description: "music player in nextjs + tailwindcss",
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
