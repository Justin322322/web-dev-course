# Introduction to CSS

CSS (Cascading Style Sheets) is the language used to style and layout web pages. While HTML provides the structure, CSS makes your pages look beautiful and professional.

## What is CSS?

CSS stands for Cascading Style Sheets. It controls the visual presentation of HTML elements, including colors, fonts, spacing, layout, and responsive design.

## Three Ways to Add CSS

### 1. Inline CSS

Add styles directly to HTML elements using the `style` attribute:

```html
<p style="color: blue; font-size: 18px;">This is a blue paragraph.</p>
```

### 2. Internal CSS

Add styles in the `<head>` section using a `<style>` tag:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This is a blue paragraph.</p>
</body>
</html>
```

### 3. External CSS (Recommended)

Create a separate CSS file and link it to your HTML:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is a blue paragraph.</p>
</body>
</html>
```

```css
/* styles.css */
p {
    color: blue;
    font-size: 18px;
}
```

## CSS Syntax

CSS rules consist of a selector and a declaration block:

```css
selector {
    property: value;
    property: value;
}
```

Example:

```css
h1 {
    color: navy;
    font-size: 32px;
    text-align: center;
}
```

## Basic Selectors

```css
/* Element selector - targets all <p> elements */
p {
    color: gray;
}

/* Class selector - targets elements with class="highlight" */
.highlight {
    background-color: yellow;
}

/* ID selector - targets element with id="header" */
#header {
    font-size: 24px;
}

/* Universal selector - targets all elements */
* {
    margin: 0;
    padding: 0;
}
```

## Common CSS Properties

```css
/* Text styling */
color: blue;
font-size: 16px;
font-family: Arial, sans-serif;
font-weight: bold;
text-align: center;

/* Background */
background-color: lightgray;
background-image: url('image.jpg');

/* Spacing */
margin: 10px;
padding: 20px;

/* Border */
border: 1px solid black;
border-radius: 5px;

/* Size */
width: 300px;
height: 200px;
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Introduction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
        }
        
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 3px solid #007bff;
            padding-bottom: 10px;
        }
        
        .card {
            background-color: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .highlight {
            color: #007bff;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Welcome to CSS</h1>
    
    <div class="card">
        <h2>What is CSS?</h2>
        <p>CSS is used to <span class="highlight">style web pages</span> and make them look beautiful.</p>
    </div>
    
    <div class="card">
        <h2>Why Learn CSS?</h2>
        <p>CSS allows you to create <span class="highlight">professional-looking websites</span> with ease.</p>
    </div>
</body>
</html>
```

## Practice Exercise

Create an HTML page and style it with CSS:
- Set a background color for the page
- Style headings with different colors and sizes
- Create a class for highlighted text
- Add padding and margins to elements
- Experiment with different fonts
