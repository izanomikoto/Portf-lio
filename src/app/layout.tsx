import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Izano | Engenheiro de Sofware & Desenvolvedor",
  description: "Construindo experiências digitais imersivas. Arquiteto de software especializado em desenvolvimento de jogos, aplicativos macOS nativos e sistemas escaláveis.",
  icons: {
    icon: "/favicon.svg",
  },
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
