# HTML Document Structure

Understanding the structure of an HTML document is fundamental to creating well-formed web pages. Let's explore each part of a complete HTML document.

## Basic HTML Document

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

## DOCTYPE Declaration

The `<!DOCTYPE html>` declaration tells the browser this is an HTML5 document:

```html
<!DOCTYPE html>
```

**Important:**
- Must be the very first line
- Not case-sensitive
- Not an HTML tag, but an instruction to the browser

## The `<html>` Element

The root element that contains all other elements:

```html
<html lang="en">
    <!-- All content goes here -->
</html>
```

The `lang` attribute specifies the language:
- `en` - English
- `es` - Spanish
- `fr` - French
- `de` - German

## The `<head>` Section

Contains metadata about the document (not displayed on the page):

### Character Encoding

```html
<meta charset="UTF-8">
```

Specifies the character encoding (UTF-8 supports all languages and symbols).

### Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Essential for responsive design on mobile devices.

### Title

```html
<title>My Website - Home</title>
```

- Appears in browser tab
- Used by search engines
- Shown in bookmarks

### Meta Description

```html
<meta name="description" content="A brief description of your page for search engines">
```

### Meta Keywords

```html
<meta name="keywords" content="HTML, CSS, JavaScript, web development">
```

### Author

```html
<meta name="author" content="Your Name">
```

### Linking CSS

```html
<link rel="stylesheet" href="styles.css">
```

### Linking Favicon

```html
<link rel="icon" type="image/png" href="favicon.png">
```

### JavaScript in Head

```html
<script src="script.js" defer></script>
```

The `defer` attribute loads the script after the HTML is parsed.

## The `<body>` Section

Contains all visible content:

```html
<body>
    <header>
        <h1>Website Title</h1>
        <nav>Navigation</nav>
    </header>
    
    <main>
        <article>Main content</article>
    </main>
    
    <footer>
        <p>Copyright information</p>
    </footer>
</body>
```

## Comments

Comments are not displayed but help document your code:

```html
<!-- This is a comment -->

<!--
    Multi-line comment
    Can span multiple lines
-->
```

## Complete Example

:::preview height="400px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn about HTML document structure">
    <meta name="author" content="Web Developer">
    <title>HTML Document Structure</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }
        main {
            padding: 20px 0;
        }
        footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1>Welcome to My Website</h1>
        <p>Understanding HTML Structure</p>
    </header>
    
    <!-- Main Content -->
    <main>
        <h2>About This Page</h2>
        <p>This page demonstrates the proper structure of an HTML document.</p>
        
        <h2>Key Components</h2>
        <ul>
            <li>DOCTYPE declaration</li>
            <li>HTML root element with lang attribute</li>
            <li>Head section with metadata</li>
            <li>Body section with content</li>
        </ul>
    </main>
    
    <!-- Footer Section -->
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>
```
:::

## Best Practices

1. **Always include DOCTYPE** - Ensures standards mode
2. **Set character encoding** - Use UTF-8 for universal support
3. **Add viewport meta tag** - Essential for mobile responsiveness
4. **Write descriptive titles** - Important for SEO and usability
5. **Use semantic HTML** - Makes code more readable and accessible
6. **Add comments** - Document complex sections
7. **Validate your HTML** - Use W3C validator

## Practice Exercise

:::practice title="Create a Complete HTML Document"
Build a properly structured HTML document:
1. Include all required elements (DOCTYPE, html, head, body)
2. Add appropriate meta tags (charset, viewport, description)
3. Set a meaningful title
4. Add a header with site title
5. Create a main section with content
6. Include a footer with copyright
7. Add comments to document sections

```html
<!-- Create your complete HTML document here -->

```
:::
