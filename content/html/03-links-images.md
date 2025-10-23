# Links and Images

Links and images are essential elements that make the web interactive and visually engaging. Let's learn how to use them effectively.

## Creating Links

The `<a>` (anchor) element creates hyperlinks:

```html
<a href="https://www.example.com">Visit Example.com</a>
```

### Link Attributes

```html
<!-- External link that opens in new tab -->
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
    Search on Google
</a>

<!-- Link to another page on your site -->
<a href="/about.html">About Us</a>

<!-- Link to a section on the same page -->
<a href="#contact">Jump to Contact Section</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Send us an email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call us</a>
```

## Adding Images

The `<img>` element embeds images in your webpage:

```html
<img src="photo.jpg" alt="A beautiful sunset over the ocean">
```

### Image Attributes

```html
<!-- Image with width and height -->
<img src="logo.png" alt="Company Logo" width="200" height="100">

<!-- Responsive image -->
<img src="photo.jpg" alt="Description" style="max-width: 100%; height: auto;">

<!-- Image with title (tooltip) -->
<img src="icon.png" alt="Info icon" title="Click for more information">
```

### Image Best Practices

1. **Always include alt text** for accessibility
2. **Optimize image file sizes** for faster loading
3. **Use appropriate formats**: JPG for photos, PNG for graphics with transparency, SVG for logos
4. **Provide descriptive alt text** that explains what the image shows

## Combining Links and Images

You can make images clickable by wrapping them in anchor tags:

```html
<a href="https://www.example.com">
    <img src="banner.jpg" alt="Click to visit our homepage">
</a>
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Links and Images Demo</title>
</head>
<body>
    <h1>Welcome to My Portfolio</h1>
    
    <nav>
        <a href="#about">About</a> |
        <a href="#projects">Projects</a> |
        <a href="#contact">Contact</a>
    </nav>
    
    <section id="about">
        <h2>About Me</h2>
        <img src="profile.jpg" alt="Profile photo" width="300">
        <p>I'm a web developer passionate about creating amazing websites.</p>
    </section>
    
    <section id="projects">
        <h2>My Projects</h2>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <img src="github-logo.png" alt="Visit my GitHub profile" width="50">
        </a>
    </section>
    
    <section id="contact">
        <h2>Contact</h2>
        <p>
            <a href="mailto:hello@example.com">Email me</a> or 
            <a href="tel:+1234567890">call me</a>
        </p>
    </section>
</body>
</html>
```

## Practice Exercise

Create a simple photo gallery page with:
- A main heading
- At least 3 images with descriptive alt text
- Links to external websites
- Navigation links that jump to different sections
- One clickable image that links to another page
