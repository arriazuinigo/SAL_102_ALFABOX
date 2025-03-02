---
title: "Dynamic Routing in Astro"
description: "Learn how to implement dynamic routes in Astro using the [slug] file naming convention."
date: "2023-07-10"
image: "/images/dynamic-routes.jpg"
---

# Dynamic Routing in Astro

One of Astro's powerful features is its support for dynamic routing, which allows you to create pages based on dynamic data. This is perfect for blogs, e-commerce sites, and any application where you need to generate many pages with a similar structure.

## Understanding Dynamic Routes

In Astro, you can create dynamic routes using square brackets in your file names. For example, a file named `src/pages/blog/[slug].astro` will generate a route for each blog post, where `[slug]` is replaced with the actual slug of the post.

## Implementing Dynamic Routes

Here's how to implement dynamic routing for a blog:

1. Create a file at `src/pages/blog/[slug].astro`
2. Use `getStaticPaths()` to define all possible routes
3. Access the dynamic parameter via `Astro.params`

Here's an example:

```astro
---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

// Generate paths for all blog posts
export async function getStaticPaths() {
  const blogEntries = await getCollection('blog');
  return blogEntries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

// Get the blog post data
const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Layout>
  <article>
    <h1>{entry.data.title}</h1>
    <Content />
  </article>
</Layout>
```

## Using Content Collections

Astro's Content Collections feature works perfectly with dynamic routes. You can:

1. Define your content schema in `src/content/config.ts`
2. Store your content in the appropriate collection folder
3. Query the collection to generate your dynamic routes

## Benefits of Dynamic Routing

Dynamic routing offers several advantages:

- **DRY Code**: Write the page template once and reuse it for all content
- **Maintainability**: Update the layout in one place
- **Performance**: Astro pre-renders all pages at build time for optimal performance
- **SEO-friendly**: Each page gets its own URL, making it discoverable by search engines

## Advanced Techniques

You can also use multiple dynamic parameters in a single route, such as `[category]/[slug].astro`. This allows for even more flexible routing structures.

Additionally, you can use rest parameters with `[...path].astro` to catch all remaining path segments, which is useful for creating catch-all routes.

## Conclusion

Dynamic routing in Astro provides a powerful way to generate multiple pages from a single template. Combined with Content Collections, it creates an excellent system for managing blog posts, product pages, or any content-driven website.

Try implementing dynamic routes in your next Astro project!