import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cherryblossomtheme.org';
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/palette`, lastModified: new Date() },
    { url: `${baseUrl}/create`, lastModified: new Date() },
    { url: `${baseUrl}/routes/asteride`, lastModified: new Date() },
  ];
}
