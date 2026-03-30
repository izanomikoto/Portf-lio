import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Izano | Software Architect & Developer",
  description: "Building immersive digital experiences. Software architect specializing in game development, native macOS apps, and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
