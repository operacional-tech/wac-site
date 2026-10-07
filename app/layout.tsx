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
    default: "WAC Apoio Contábil | Quarteirização para Contabilidade · Contábil, Fiscal e Departamento Pessoal",
    template: "%s | WAC Apoio Contábil",
  },
  description:
    "Quarteirização para contabilidade: contábil, fiscal e departamento pessoal como extensão do seu time. A WAC assume a operação com metodologia própria e o sistema LUCA — Simples, Presumido, Lucro Real, folha e eSocial. Itajaí/SC, atendemos todo o Brasil.",
  keywords: [
    'quarteirização para contabilidade',
    'quarteirização contábil',
    'quarteirização fiscal',
    'quarteirização departamento pessoal',
    'BPO contábil fiscal e DP',
    'apoio contábil fiscal e trabalhista',
    'terceirização de folha e eSocial',
    'escritório contábil Itajaí',
    'WAC Apoio Contábil',
    'sistema LUCA',
  ],
  authors: [{ name: 'WAC Apoio Contábil', url: SITE_URL }],
  applicationName: 'WAC Apoio Contábil',
  category: 'Serviços contábeis',
  // Favicon PNG (JPG não é servido como image/x-icon pelo Google e some do
  // resultado de busca). Mantemos o JPG como fallback antigo.
  // Google prefere favicon >= 48px (múltiplo de 48) pra mostrar no resultado
  // de busca. Servimos os dois tamanhos com sizes explícito — sem isso o
  // crawler assume 16px e descarta a imagem do "favicon rico".
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/logo-wac.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'WAC Apoio Contábil',
    locale: 'pt_BR',
    title: 'WAC Apoio Contábil | Quarteirização para Contabilidade · Contábil, Fiscal e Departamento Pessoal',
    description:
      'Quarteirização para contabilidade — Contábil, Fiscal e Departamento Pessoal como extensão do seu time, com o sistema LUCA.',
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
    title: 'WAC Apoio Contábil | Quarteirização para Contabilidade · Contábil, Fiscal e Departamento Pessoal',
    description:
      'Quarteirização para contabilidade — Contábil, Fiscal e Departamento Pessoal, com o sistema LUCA.',
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
    'Quarteirização para contabilidade — Contábil, Fiscal e Departamento Pessoal como extensão do seu time. Atendemos Simples Nacional, Lucro Presumido, Lucro Real, folha, eSocial e obrigações acessórias, com o sistema LUCA.',
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
