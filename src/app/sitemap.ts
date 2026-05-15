import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aorixis.com';
  
  const routes = [
    '/',
    '/suppliers',
    '/logistics',
    '/industries',
    '/compliance',
    '/sustainability',
    '/terms',
  ];

  // Use a stable date (start of the month) to avoid false freshness signals
  const lastModified = new Date('2026-05-01');

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: (route === '/' ? 'daily' : 'weekly') as 'daily' | 'weekly' | 'always' | 'hourly' | 'monthly' | 'yearly' | 'never',
    priority: route === '/' ? 1 : 0.8,
  }));
}
