# CSS Typography

Typography is the art of arranging text to make it readable and visually appealing. Good typography is essential for creating professional websites.

## Font Properties

### Font Family

```css
/* Single font */
body {
    font-family: Arial;
}

/* Font stack (fallbacks) */
body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* Generic font families */
font-family: serif;      /* Times New Roman, Georgia */
font-family: sans-serif; /* Arial, Helvetica */
font-family: monospace;  /* Courier, Monaco */
font-family: cursive;    /* Comic Sans MS */
font-family: fantasy;    /* Impact */
```

### Font Size

```css
/* Absolute units */
font-size: 16px;
font-size: 12pt;

/* Relative units */
font-size: 1em;    /* Relative to parent */
font-size: 1.5rem; /* Relative to root */
font-size: 100%;

/* Keywords */
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
```

### Font Weight

```css
font-weight: normal;   /* 400 */
font-weight: bold;     /* 700 */
font-weight: lighter;
font-weight: bolder;
font-weight: 100;      /* Thin */
font-weight: 300;      /* Light */
font-weight: 500;      /* Medium */
font-weight: 700;      /* Bold */
font-weight: 900;      /* Black */
```

### Font Style

```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

## Text Properties

### Text Color

```css
color: black;
color: #333333;
color: rgb(51, 51, 51);
color: rgba(51, 51, 51, 0.8);
color: hsl(0, 0%, 20%);
```

### Text Alignment

```css
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
```

### Text Decoration

```css
text-decoration: none;
text-decoration: underline;
text-decoration: overline;
text-decoration: line-through;
text-decoration: underline dotted red;
```

### Text Transform

```css
text-transform: none;
text-transform: uppercase;  /* HELLO */
text-transform: lowercase;  /* hello */
text-transform: capitalize; /* Hello World */
```

### Line Height

```css
line-height: normal;
line-height: 1.5;    /* 1.5 times font size */
line-height: 24px;
line-height: 150%;
```

### Letter Spacing

```css
letter-spacing: normal;
letter-spacing: 2px;
letter-spacing: 0.1em;
letter-spacing: -1px;
```

### Word Spacing

```css
word-spacing: normal;
word-spacing: 5px;
word-spacing: 0.3em;
```

### Text Shadow

```css
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
text-shadow: 1px 1px 2px black, 0 0 25px blue;
```

## Google Fonts

```html
<!-- In HTML head -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

```css
/* In CSS */
body {
    font-family: 'Roboto', sans-serif;
}
```

## Complete Typography Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Typography Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #333;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3em;
            font-weight: 700;
            color: #2c3e50;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        h2 {
            font-size: 2em;
            color: #34495e;
            margin-top: 30px;
            margin-bottom: 15px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        
        h3 {
            font-size: 1.5em;
            color: #7f8c8d;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        
        p {
            margin-bottom: 15px;
            text-align: justify;
        }
        
        .lead {
            font-size: 1.25em;
            font-weight: 300;
            color: #555;
            margin-bottom: 30px;
        }
        
        .highlight {
            background-color: #fff3cd;
            padding: 2px 5px;
            border-radius: 3px;
        }
        
        .uppercase {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 700;
            color: #3498db;
        }
        
        .quote {
            font-style: italic;
            font-size: 1.2em;
            color: #555;
            border-left: 4px solid #3498db;
            padding-left: 20px;
            margin: 30px 0;
        }
        
        .small-caps {
            font-variant: small-caps;
            font-size: 1.1em;
        }
        
        a {
            color: #3498db;
            text-decoration: none;
            border-bottom: 1px dotted #3498db;
        }
        
        a:hover {
            color: #2980b9;
            border-bottom: 1px solid #2980b9;
        }
    </style>
</head>
<body>
    <h1>The Art of Typography</h1>
    <p class="lead">Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.</p>
    
    <h2>Why Typography Matters</h2>
    <p>Good typography enhances the user experience by making content <span class="highlight">easy to read</span> and visually appealing. It establishes visual hierarchy and guides readers through your content.</p>
    
    <p class="quote">"Typography is the craft of endowing human language with a durable visual form." — Robert Bringhurst</p>
    
    <h2>Key Principles</h2>
    
    <h3><span class="uppercase">Readability</span></h3>
    <p>Choose fonts that are easy to read. Sans-serif fonts like <span class="small-caps">Roboto</span> work well for body text on screens.</p>
    
    <h3><span class="uppercase">Hierarchy</span></h3>
    <p>Use different font sizes, weights, and styles to create a clear visual hierarchy that guides readers through your content.</p>
    
    <h3><span class="uppercase">Consistency</span></h3>
    <p>Maintain consistent typography throughout your website. Limit yourself to 2-3 font families maximum.</p>
    
    <p>Learn more about <a href="#">typography best practices</a> and <a href="#">web fonts</a>.</p>
</body>
</html>
```
:::

## Best Practices

1. **Limit font families**: Use 2-3 maximum
2. **Readable font size**: 16px minimum for body text
3. **Line height**: 1.4-1.6 for body text
4. **Line length**: 50-75 characters per line
5. **Contrast**: Ensure sufficient contrast between text and background
6. **Hierarchy**: Use size, weight, and color to create hierarchy

## Practice Exercise

:::practice title="Create a Typography Showcase"
Design a page with excellent typography:
1. Use Google Fonts (one for headings, one for body)
2. Create a clear hierarchy with h1, h2, h3
3. Style paragraphs with proper line-height
4. Add a styled blockquote
5. Use text-transform and letter-spacing
6. Style links with hover effects

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Typography Showcase</title>
    <style>
        /* Add your typography CSS here */
    </style>
</head>
<body>
    <h1>Main Heading</h1>
    <p>Your content here...</p>
</body>
</html>
```
:::
