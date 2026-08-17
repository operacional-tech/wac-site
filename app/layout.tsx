import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Base absoluta pra og:image/twitter:image funcionarem no crawler (WhatsApp,
// LinkedIn, Google Discover). Sem metadataBase, Next resolve pra localhost
// no build e os previews vêm quebrados.
const SITE_URL = 'https://wacapoio.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WAC Apoio Contábil | Quarteirização contábil e fiscal para contabilidades",
    template: "%s | WAC Apoio Contábil",
  },
  description:
    "Apoio e quarteirização contábil e fiscal para escritórios de contabilidade. A WAC assume a operação como extensão do seu time — Simples, Presumido, Lucro Real, folha e societário — com o sistema LUCA para controle em tempo real. Itajaí/SC, atendemos todo o Brasil.",
  keywords: [
    'quarteirização contábil',
    'quarteirização fiscal',
    'apoio contábil para contabilidades',
    'BPO contábil',
    'terceirização contábil',
    'escritório contábil Itajaí',
    'WAC Apoio Contábil',
    'sistema LUCA',
  ],
  authors: [{ name: 'WAC Apoio Contábil', url: SITE_URL }],
  applicationName: 'WAC Apoio Contábil',
  category: 'Serviços contábeis',
  // Favicon PNG (JPG não é servido como image/x-icon pelo Google e some do
  // resultado de busca). Mantemos o JPG como fallback antigo.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-wac.png', type: 'image/png' },
    ],
    apple: [{ url: '/logo-wac.png' }],
    shortcut: '/logo-wac.png',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'WAC Apoio Contábil',
    locale: 'pt_BR',
    title: 'WAC Apoio Contábil | Quarteirização contábil e fiscal para contabilidades',
    description:
      'Apoio e quarteirização contábil e fiscal para escritórios de contabilidade. Assumimos sua operação com o sistema LUCA — Simples, Presumido, Real, folha e societário.',
    images: [
      {
        url: '/logo-wac.png',
        width: 1200,
        height: 630,
        alt: 'WAC Apoio Contábil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAC Apoio Contábil | Quarteirização contábil e fiscal',
    description:
      'Apoio e quarteirização contábil e fiscal para escritórios de contabilidade, com o sistema LUCA.',
    images: ['/logo-wac.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: SITE_URL },
};

// JSON-LD Organization — o Google usa isso pra puxar o logo pro resultado
// de busca (quando não é o próprio Knowledge Panel, ainda associa o site
// ao logo em rich cards). Sem esse schema, o crawler simplesmente ignora
// arquivos de imagem soltos. Mantido no <head> global pra valer em todas
// as páginas indexadas.
const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WAC Apoio Contábil',
  legalName: 'WAC Apoio Contábil',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-wac.png`,
  image: `${SITE_URL}/logo-wac.png`,
  description:
    'Apoio e quarteirização contábil e fiscal para escritórios de contabilidade. Atendemos Simples Nacional, Lucro Presumido, Lucro Real, folha e obrigações acessórias, com o sistema LUCA.',
  areaServed: 'BR',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Itajaí',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://instagram.com/wacapoio',
    'https://br.linkedin.com/company/wac-apoio',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
