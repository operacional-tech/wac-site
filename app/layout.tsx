import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WAC Apoio Contabil — Contabilidade com Tecnologia",
  description: "Escritorio contabil com sistema proprio LUCA. Contabilidade, fiscal, departamento pessoal e consultoria com transparencia total e controle em tempo real.",
  keywords: ["contabilidade", "escritorio contabil", "WAC", "LUCA", "apoio contabil", "contabilidade digital"],
  icons: {
    icon: '/logo-wac.jpg',
    apple: '/logo-wac.jpg',
  },
  openGraph: {
    title: "WAC Apoio Contabil",
    description: "Contabilidade com tecnologia e precisao. Sistema LUCA com controle em tempo real.",
    type: "website",
    url: "https://wacapoio.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
