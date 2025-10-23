# CSS Selectors

Selectors are patterns used to select and style HTML elements. Understanding selectors is crucial for effective CSS styling.

## Basic Selectors

### Element Selector

Targets all elements of a specific type:

```css
p {
    color: blue;
}

h1 {
    font-size: 32px;
}
```

### Class Selector

Targets elements with a specific class attribute:

```css
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
}
```

```html
<button class="button">Click Me</button>
<a href="#" class="button">Link Button</a>
```

### ID Selector

Targets a single element with a specific ID:

```css
#header {
    background-color: navy;
    color: white;
}
```

```html
<div id="header">Website Header</div>
```

## Combinator Selectors

### Descendant Selector (space)

Targets elements inside other elements:

```css
/* Targets all <p> inside <div> */
div p {
    color: gray;
}
```

### Child Selector (>)

Targets direct children only:

```css
/* Targets only direct <li> children of <ul> */
ul > li {
    list-style-type: square;
}
```

### Adjacent Sibling Selector (+)

Targets the element immediately after another:

```css
/* Targets <p> immediately after <h2> */
h2 + p {
    font-weight: bold;
}
```

### General Sibling Selector (~)

Targets all siblings after an element:

```css
/* Targets all <p> after <h2> */
h2 ~ p {
    color: gray;
}
```

## Attribute Selectors

Target elements based on their attributes:

```css
/* Elements with a specific attribute */
[type] {
    border: 1px solid gray;
}

/* Elements with a specific attribute value */
[type="text"] {
    background-color: lightyellow;
}

/* Attribute value starts with */
[href^="https"] {
    color: green;
}

/* Attribute value ends with */
[src$=".jpg"] {
    border: 2px solid blue;
}

/* Attribute value contains */
[class*="btn"] {
    cursor: pointer;
}
```

## Pseudo-class Selectors

Target elements in specific states:

```css
/* Link states */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }

/* Form states */
input:focus {
    border-color: blue;
    outline: none;
}

input:disabled {
    background-color: lightgray;
}

/* Structural pseudo-classes */
li:first-child {
    font-weight: bold;
}

li:last-child {
    border-bottom: none;
}

li:nth-child(odd) {
    background-color: #f0f0f0;
}

li:nth-child(even) {
    background-color: white;
}

p:not(.special) {
    color: gray;
}
```

## Pseudo-element Selectors

Target specific parts of elements:

```css
/* First letter */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
}

/* First line */
p::first-line {
    color: blue;
}

/* Before and after */
.quote::before {
    content: '"';
    font-size: 2em;
}

.quote::after {
    content: '"';
    font-size: 2em;
}

/* Selection */
::selection {
    background-color: yellow;
    color: black;
}
```

## Grouping Selectors

Apply the same styles to multiple selectors:

```css
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: navy;
}

.button, .btn, input[type="submit"] {
    padding: 10px 20px;
    border-radius: 5px;
}
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Selectors Demo</title>
    <style>
        /* Element selector */
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        
        /* Class selector */
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        /* ID selector */
        #main-title {
            color: #007bff;
            text-align: center;
        }
        
        /* Descendant selector */
        .menu li {
            display: inline-block;
            margin-right: 15px;
        }
        
        /* Pseudo-class */
        .menu a:hover {
            color: red;
            text-decoration: underline;
        }
        
        /* Attribute selector */
        input[type="text"] {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        
        /* Nth-child */
        .list li:nth-child(odd) {
            background-color: #f0f0f0;
        }
        
        /* Pseudo-element */
        .important::before {
            content: "⚠️ ";
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="main-title">CSS Selectors</h1>
        
        <ul class="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
        <form>
            <input type="text" placeholder="Enter your name">
            <input type="email" placeholder="Enter your email">
        </form>
        
        <ul class="list">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
        </ul>
        
        <p class="important">This is an important message!</p>
    </div>
</body>
</html>
```

## Selector Specificity

When multiple rules target the same element, specificity determines which rule applies:

1. Inline styles (highest specificity)
2. IDs
3. Classes, attributes, pseudo-classes
4. Elements, pseudo-elements (lowest specificity)

```css
/* Specificity: 1 (element) */
p { color: black; }

/* Specificity: 10 (class) */
.text { color: blue; }

/* Specificity: 100 (ID) */
#special { color: red; }

/* Specificity: 1000 (inline) */
<p style="color: green;">Text</p>
```

## Practice Exercise

Create a webpage with:
- A navigation menu that changes color on hover
- Alternating row colors in a list
- Styled form inputs with focus states
- A quote with decorative quotation marks using pseudo-elements
- Different styles for external vs internal links
