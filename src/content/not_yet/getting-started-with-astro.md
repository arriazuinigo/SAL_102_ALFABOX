---
title: "Getting Started with Astro"
description: "Learn how to build fast websites with Astro's innovative multi-page approach."
date: "2023-05-15"
image: "/images/astro-intro.jpg"
youtubeId: "dsTXcSeAZq8"
---

# Getting Started with Astro

Astro is a modern static site builder that offers an innovative approach to building websites. Unlike traditional JavaScript frameworks, Astro takes a multi-page approach, sending only the necessary HTML, CSS, and JavaScript to the browser.

## Why Choose Astro?

Astro provides several advantages:

1. **Performance**: By default, Astro ships zero JavaScript to the client, resulting in extremely fast websites.
2. **Component-based**: Use your favorite UI components from React, Vue, Svelte, and more.
3. **Easy to learn**: If you know HTML, CSS, and JavaScript, you can build with Astro.
4. **Flexible**: Astro works with your content, whether it's Markdown, MDX, or data from a CMS.

## Setting Up Your First Astro Project

Getting started with Astro is straightforward:

```bash
# Create a new project with npm
npm create astro@latest

# Or with yarn
yarn create astro

# Or with pnpm
pnpm create astro
```

Follow the prompts to set up your project, and you'll have a working Astro site in minutes!

## Building Pages

In Astro, pages are created in the `src/pages` directory. Each `.astro` file becomes a route in your site. For example, `src/pages/about.astro` becomes `/about` in your final site.

Here's a simple example of an Astro page:

```astro
---
// This is the frontmatter section where you can import components and run JavaScript
import Layout from '../layouts/Layout.astro';
import Card from '../components/Card.astro';

const pageTitle = "My Astro Site";
---

<Layout title={pageTitle}>
  <main>
    <h1>{pageTitle}</h1>
    <Card title="First Card" body="This is my first card component" />
  </main>
</Layout>
```

## Watch the Video Tutorial

Check out the video below for a comprehensive guide to getting started with Astro:

[Video: Introduction to Astro]

This video covers everything you need to know to start building with Astro, from setting up your development environment to deploying your first site.

## Next Steps

Now that you've got the basics down, try:

- Adding more pages to your site
- Creating custom components
- Styling your site with CSS
- Deploying your site to a hosting provider

Happy coding with Astro!