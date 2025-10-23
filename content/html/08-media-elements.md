# HTML Media Elements

HTML5 provides native support for embedding audio, video, and other media content without requiring plugins.

## Images

We covered basic images earlier, but here are more advanced techniques:

```html
<!-- Responsive image -->
<img src="photo.jpg" alt="Description" style="max-width: 100%; height: auto;">

<!-- Image with srcset for different screen sizes -->
<img src="small.jpg" 
     srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
     alt="Responsive image">

<!-- Picture element for art direction -->
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Flexible image">
</picture>
```

## Video

```html
<!-- Basic video -->
<video src="movie.mp4" controls width="640" height="360">
    Your browser doesn't support video.
</video>

<!-- Video with multiple sources -->
<video controls width="640" height="360">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    <source src="movie.ogg" type="video/ogg">
    Your browser doesn't support the video tag.
</video>

<!-- Video with attributes -->
<video controls autoplay muted loop poster="thumbnail.jpg" width="640">
    <source src="movie.mp4" type="video/mp4">
</video>
```

### Video Attributes

- `controls`: Show playback controls
- `autoplay`: Start playing automatically
- `muted`: Mute audio by default
- `loop`: Repeat the video
- `poster`: Image shown before video plays
- `preload`: How to load the video (none, metadata, auto)

## Audio

```html
<!-- Basic audio -->
<audio src="song.mp3" controls>
    Your browser doesn't support audio.
</audio>

<!-- Audio with multiple sources -->
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    <source src="song.ogg" type="audio/ogg">
    Your browser doesn't support the audio tag.
</audio>

<!-- Audio with attributes -->
<audio controls autoplay loop>
    <source src="song.mp3" type="audio/mpeg">
</audio>
```

## Iframe (Embedding External Content)

```html
<!-- Embed YouTube video -->
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>

<!-- Embed Google Maps -->
<iframe src="https://www.google.com/maps/embed?pb=..." 
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
</iframe>

<!-- Embed another webpage -->
<iframe src="https://example.com" width="800" height="600"></iframe>
```

## SVG (Scalable Vector Graphics)

```html
<!-- Inline SVG -->
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="blue" />
</svg>

<!-- SVG as image -->
<img src="logo.svg" alt="Logo">

<!-- SVG with more shapes -->
<svg width="200" height="200">
    <rect x="10" y="10" width="80" height="80" fill="red" />
    <circle cx="150" cy="50" r="40" fill="blue" />
    <line x1="10" y1="150" x2="190" y2="150" stroke="black" stroke-width="2" />
</svg>
```

## Complete Media Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Media Elements</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .media-section {
            margin: 30px 0;
            padding: 20px;
            background-color: #f5f5f5;
            border-radius: 8px;
        }
        
        video, audio {
            width: 100%;
            max-width: 640px;
            display: block;
            margin: 10px 0;
        }
        
        img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }
        
        .image-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>HTML Media Elements</h1>
    
    <section class="media-section">
        <h2>Images</h2>
        <div class="image-gallery">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" alt="Computer">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" alt="Code">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop" alt="Laptop">
        </div>
    </section>
    
    <section class="media-section">
        <h2>Video</h2>
        <video controls poster="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=640&h=360&fit=crop">
            <source src="sample-video.mp4" type="video/mp4">
            Your browser doesn't support video playback.
        </video>
        <p>Video controls: play, pause, volume, fullscreen</p>
    </section>
    
    <section class="media-section">
        <h2>Audio</h2>
        <audio controls>
            <source src="sample-audio.mp3" type="audio/mpeg">
            Your browser doesn't support audio playback.
        </audio>
        <p>Audio player with controls</p>
    </section>
    
    <section class="media-section">
        <h2>SVG Graphics</h2>
        <svg width="200" height="200" style="border: 1px solid #ccc;">
            <circle cx="100" cy="100" r="80" fill="#007bff" opacity="0.7" />
            <rect x="50" y="50" width="100" height="100" fill="#28a745" opacity="0.5" />
            <line x1="0" y1="0" x2="200" y2="200" stroke="#dc3545" stroke-width="3" />
        </svg>
    </section>
    
    <section class="media-section">
        <h2>Embedded Content</h2>
        <p>You can embed YouTube videos, Google Maps, and other external content using iframes.</p>
        <div style="background-color: #ddd; padding: 40px; text-align: center; border-radius: 5px;">
            [Iframe content would appear here]
        </div>
    </section>
</body>
</html>
```
:::

## Figure and Figcaption

```html
<figure>
    <img src="chart.png" alt="Sales data">
    <figcaption>Figure 1: Q1 2024 Sales Performance</figcaption>
</figure>

<figure>
    <video controls>
        <source src="tutorial.mp4" type="video/mp4">
    </video>
    <figcaption>Video Tutorial: Getting Started</figcaption>
</figure>
```

## Practice Exercise

:::practice title="Create a Media Gallery"
Build a multimedia page with:
1. A gallery of at least 3 images
2. An embedded video with controls
3. An audio player
4. Use figure and figcaption for media
5. Create a simple SVG graphic
6. Style everything with CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Media Gallery</title>
    <style>
        /* Add your CSS here */
    </style>
</head>
<body>
    <h1>My Media Gallery</h1>
    <!-- Add your media elements here -->
</body>
</html>
```
:::
