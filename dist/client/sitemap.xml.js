import { getCollection } from 'astro:content';

export async function get() {
  const blogEntries = await getCollection('blog');
  
  // Base URL - replace with your actual domain in production
  const site = 'https://yourdomain.com';
  
  // Generate sitemap items for blog posts
  const blogItems = blogEntries.map((post) => {
    const url = `${site}/blog/${post.slug}`;
    const lastmod = new Date(post.data.date).toISOString();
    
    return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`;
  }).join('');
  
  // Add static pages
  const staticPages = [
    {
      url: `${site}/`,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${site}/blog`,
      changefreq: 'daily',
      priority: '0.8'
    },
    {
      url: `${site}/about`,
      changefreq: 'monthly',
      priority: '0.5'
    }
  ];
  
  const staticItems = staticPages.map((page) => {
    return `
    <url>
      <loc>${page.url}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`;
  }).join('');
  
  // Combine all items
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticItems}
  ${blogItems}
</urlset>`;
  
  return {
    body: sitemap,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}