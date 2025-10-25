# Semantic HTML

Semantic HTML uses meaningful tags that describe the content they contain. This improves accessibility, SEO, and code readability.

## Why Use Semantic HTML?

- **Accessibility**: Screen readers can better understand page structure
- **SEO**: Search engines can better index your content
- **Maintainability**: Code is easier to read and understand
- **Consistency**: Standard structure across websites

## Semantic Structure Elements

### Header

```html
<header>
    <h1>Website Title</h1>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
</header>
```

### Navigation

```html
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
```

### Main Content

```html
<main>
    <h1>Main Content Area</h1>
    <p>This is the primary content of the page.</p>
</main>
```

### Article

```html
<article>
    <h2>Blog Post Title</h2>
    <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
    <p>Article content goes here...</p>
</article>
```

### Section

```html
<section>
    <h2>About Us</h2>
    <p>Information about the company...</p>
</section>

<section>
    <h2>Our Services</h2>
    <p>Description of services...</p>
</section>
```

### Aside

```html
<aside>
    <h3>Related Links</h3>
    <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
    </ul>
</aside>
```

### Footer

```html
<footer>
    <p>&copy; 2024 Company Name. All rights reserved.</p>
    <nav>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
    </nav>
</footer>
```

## Complete Semantic Page Structure

:::preview height="600px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        
        header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        nav {
            background-color: #444;
            padding: 10px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            padding: 10px 15px;
            display: inline-block;
        }
        
        nav a:hover {
            background-color: #555;
        }
        
        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            display: grid;
            grid-template-columns: 3fr 1fr;
            gap: 20px;
        }
        
        article {
            background-color: #f9f9f9;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        
        aside {
            background-color: #e9e9e9;
            padding: 20px;
            border-radius: 5px;
            height: fit-content;
        }
        
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>My Blog</h1>
        <p>Sharing thoughts and ideas</p>
    </header>
    
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
    </nav>
    
    <main>
        <div>
            <article>
                <h2>First Blog Post</h2>
                <p><time datetime="2024-01-15">January 15, 2024</time> by John Doe</p>
                <p>This is the content of my first blog post. Semantic HTML makes it clear that this is an independent piece of content.</p>
            </article>
            
            <article>
                <h2>Second Blog Post</h2>
                <p><time datetime="2024-01-20">January 20, 2024</time> by John Doe</p>
                <p>Another interesting blog post with valuable information for readers.</p>
            </article>
        </div>
        
        <aside>
            <h3>About the Author</h3>
            <p>John Doe is a web developer passionate about semantic HTML and accessibility.</p>
            
            <h3>Categories</h3>
            <ul>
                <li>Web Development</li>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 My Blog. All rights reserved.</p>
    </footer>
</body>
</html>
```
:::

## Other Semantic Elements

```html
<!-- Figure with caption -->
<figure>
    <img src="chart.png" alt="Sales chart">
    <figcaption>Q1 2024 Sales Performance</figcaption>
</figure>

<!-- Mark important text -->
<p>The deadline is <mark>January 31st</mark>.</p>

<!-- Time element -->
<p>The event starts at <time datetime="2024-01-15T19:00">7:00 PM</time>.</p>

<!-- Details and summary (collapsible) -->
<details>
    <summary>Click to expand</summary>
    <p>Hidden content that can be revealed.</p>
</details>
```

## Non-Semantic vs Semantic

```html
<!-- Non-semantic (avoid) -->
<div id="header">
    <div id="nav">...</div>
</div>
<div id="main">
    <div class="post">...</div>
</div>
<div id="footer">...</div>

<!-- Semantic (preferred) -->
<header>
    <nav>...</nav>
</header>
<main>
    <article>...</article>
</main>
<footer>...</footer>
```

## Practice Exercise

:::practice title="Build a Semantic Blog Page"
Create a blog page using semantic HTML:
1. Use <header> for the site header
2. Use <nav> for navigation
3. Use <main> for the main content area
4. Use <article> for blog posts
5. Use <aside> for a sidebar
6. Use <footer> for the page footer
7. Include <time> elements for dates

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Semantic Blog</title>
</head>
<body>
    <!-- Add your semantic HTML structure here -->
</body>
</html>
```
:::
