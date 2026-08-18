import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect 301 www → apex. Google indexou www.wacapoio.com.br como principal
  // enquanto o canonical do site aponta pra apex — sem redirect, ele trata
  // como duas propriedades separadas e a autoridade fica dividida (favicon,
  // JSON-LD, backlinks tudo espalhado). Um 301 consolida tudo em wacapoio.com.br.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.wacapoio.com.br' }],
        destination: 'https://wacapoio.com.br/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
