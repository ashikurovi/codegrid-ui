import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://codegrid.shop';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dotadmin/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
