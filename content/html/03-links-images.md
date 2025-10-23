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

<!-- Link to a section on the same page (using id attribute) -->
<a href="#footer">Jump to Footer Section</a>

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

:::preview height="500px"
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
        About | Projects | Contact
    </nav>
    
    <section>
        <h2>About Me</h2>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&h=300&fit=crop" alt="Profile photo" width="300">
        <p>I'm a web developer passionate about creating amazing websites.</p>
    </section>
    
    <section>
        <h2>My Projects</h2>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Visit my GitHub profile" width="50">
        </a>
    </section>
    
    <section>
        <h2>Contact</h2>
        <p>
            <a href="mailto:hello@example.com">Email me</a> or 
            <a href="tel:+1234567890">call me</a>
        </p>
    </section>
</body>
</html>
```
:::

## Practice Exercise

:::practice title="Build a Photo Gallery"
Create a photo gallery page with:
1. A main heading "My Photo Gallery"
2. Three images using placeholder URLs (https://via.placeholder.com/300)
3. Each image should have descriptive alt text
4. Add a link to an external website
5. Create a navigation menu with internal links

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Photo Gallery</title>
</head>
<body>
    <!-- Add your gallery here -->
    
</body>
</html>
```
:::
