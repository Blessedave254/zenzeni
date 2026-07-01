import type { APIRoute } from 'astro';
import { blogs } from '@data/blogs';
import { destinations } from '@data/destinations';
import { packages } from '@data/packages';
import { site } from '@data/site';

const staticPages = [
  '',
  'sw',
  'de',
  'fr',
  'about',
  'packages',
  'destinations',
  'activities',
  'blog',
  'contact',
  'booking',
  'payment',
  'booking-confirmation',
  'payment-status',
  'faq',
  'terms',
  'privacy'
];

const urls = [
  ...staticPages.map((path) => `${site.url}/${path}`),
  ...packages.map((item) => `${site.url}/packages/${item.slug}`),
  ...destinations.map((item) => `${site.url}/destinations/${item.slug}`),
  ...blogs.map((item) => `${site.url}/blog/${item.slug}`)
].map((url) => url.replace(/\/$/, '') || site.url);

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === site.url ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'content-type': 'application/xml'
    }
  });
};
