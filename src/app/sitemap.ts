import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aorixis.com';
  
  const routes = [
    '',
    '/suppliers',
    '/logistics',
    '/industries',
    '/compliance',
    '/sustainability',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly' | 'always' | 'hourly' | 'monthly' | 'yearly' | 'never',
    priority: route === '' ? 1 : 0.8,
  }));
}
