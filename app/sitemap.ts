import type { MetadataRoute } from 'next';

// Sitemap dinâmico — Next serve em /sitemap.xml. Ajuda o Google a descobrir
// as âncoras principais do site e re-indexar quando o hero muda.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://wacapoio.com.br';
  const hoje = new Date();
  return [
    { url: `${base}/`, lastModified: hoje, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/#pilares`, lastModified: hoje, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#luca`, lastModified: hoje, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#como-funciona`, lastModified: hoje, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#contato`, lastModified: hoje, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
