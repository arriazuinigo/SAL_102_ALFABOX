---
title: "Embedding YouTube Videos in Astro"
description: "Learn how to easily embed and style YouTube videos in your Astro blog posts."
date: "2023-06-20"
image: "/images/youtube-embed.jpg"
youtubeId: "UUR1pFG_3cA"
---

# Embedding YouTube Videos in Astro

Adding YouTube videos to your Astro blog posts is a great way to enhance your content with visual explanations. In this post, we'll explore how to create a reusable YouTube component and style it properly.

## Creating a YouTube Component

First, let's create a reusable component for embedding YouTube videos:

```astro
---
interface Props {
  id: string;
  title?: string;
}

const { id, title = "YouTube video" } = Astro.props;
---

<div class="youtube-embed">
  <iframe
    src={`https://www.youtube.com/embed/${id}`}
    title={title}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

<style>
  .youtube-embed {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    margin: 1.5rem 0;
  }

  .youtube-embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
</style>
```

## Using the Component in Your Blog Posts

Once you have the component, you can use it in your Markdown or MDX files:

```astro
---
// In your .mdx file
import YouTubeEmbed from '../components/YouTubeEmbed.astro';
---

# My Blog Post

Here's some content...

<YouTubeEmbed id="dQw4w9WgXcQ" title="Never Gonna Give You Up" />

More content after the video...
```

## Advanced YouTube Embedding Options

YouTube offers several parameters you can add to customize the embedded player:

- `autoplay=1`: Automatically start playing the video
- `start=30`: Start the video at 30 seconds
- `controls=0`: Hide the player controls
- `rel=0`: Don't show related videos when the video finishes

You can add these parameters to the iframe src URL:

```astro
<iframe
  src={`https://www.youtube.com/embed/${id}?autoplay=0&start=0&rel=0`}
  // other attributes...
></iframe>
```

## Responsive Design Considerations

The component we created is already responsive, using the padding-bottom trick to maintain the aspect ratio. This ensures your videos look great on all devices, from mobile phones to desktop computers.

## Watch a Demo

Check out this video for a demonstration of embedding YouTube videos in Astro:

[Video: Embedding YouTube Videos in Astro]

## Conclusion

Adding YouTube videos to your Astro blog is simple with a reusable component. This approach ensures consistent styling and responsive behavior across your site.

Try it out in your next blog post!