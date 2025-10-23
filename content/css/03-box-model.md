# The CSS Box Model

The box model is fundamental to understanding CSS layout. Every HTML element is treated as a rectangular box with content, padding, border, and margin.

## Box Model Components

```
┌─────────────────────────────────────┐
│           MARGIN (transparent)       │
│  ┌───────────────────────────────┐  │
│  │     BORDER                    │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   PADDING               │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │    CONTENT        │  │  │  │
│  │  │  │                   │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

## Content

The actual content of the element (text, images, etc.):

```css
.box {
    width: 300px;
    height: 200px;
}
```

## Padding

Space between the content and the border (inside the element):

```css
/* All sides */
padding: 20px;

/* Vertical | Horizontal */
padding: 10px 20px;

/* Top | Horizontal | Bottom */
padding: 10px 20px 15px;

/* Top | Right | Bottom | Left */
padding: 10px 20px 15px 25px;

/* Individual sides */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 15px;
padding-left: 25px;
```

## Border

The border around the padding and content:

```css
/* Shorthand */
border: 2px solid black;

/* Individual properties */
border-width: 2px;
border-style: solid;
border-color: black;

/* Individual sides */
border-top: 1px solid red;
border-right: 2px dashed blue;
border-bottom: 3px dotted green;
border-left: 4px double orange;

/* Border radius (rounded corners) */
border-radius: 10px;
border-radius: 50%; /* Circle */
border-radius: 10px 20px 30px 40px; /* Each corner */
```

### Border Styles

```css
border-style: solid;   /* ──────── */
border-style: dashed;  /* ─ ─ ─ ─  */
border-style: dotted;  /* · · · ·  */
border-style: double;  /* ════════ */
border-style: groove;  /* 3D groove */
border-style: ridge;   /* 3D ridge */
border-style: inset;   /* 3D inset */
border-style: outset;  /* 3D outset */
border-style: none;    /* No border */
```

## Margin

Space outside the border (between elements):

```css
/* All sides */
margin: 20px;

/* Vertical | Horizontal */
margin: 10px 20px;

/* Top | Horizontal | Bottom */
margin: 10px 20px 15px;

/* Top | Right | Bottom | Left */
margin: 10px 20px 15px 25px;

/* Individual sides */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 15px;
margin-left: 25px;

/* Center an element */
margin: 0 auto;

/* Negative margins */
margin-top: -10px;
```

## Box Sizing

By default, width and height only apply to content. Use `box-sizing` to include padding and border:

```css
/* Default behavior */
.box1 {
    box-sizing: content-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Total width: 300 + 40 + 10 = 350px */
}

/* Include padding and border in width */
.box2 {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Total width: 300px */
}

/* Apply to all elements (recommended) */
* {
    box-sizing: border-box;
}
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Box Model Demo</title>
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f0f0f0;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .box {
            background-color: white;
            width: 300px;
            padding: 20px;
            margin: 20px;
            border: 3px solid #007bff;
            border-radius: 8px;
        }
        
        .card {
            background-color: white;
            padding: 30px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .button {
            display: inline-block;
            padding: 12px 24px;
            margin: 10px 5px;
            border: 2px solid #007bff;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
        }
        
        .button:hover {
            background-color: white;
            color: #007bff;
        }
        
        .spacing-demo {
            background-color: lightblue;
            padding: 20px;
            margin: 30px 0;
            border: 5px solid navy;
        }
        
        .spacing-demo p {
            background-color: white;
            padding: 15px;
            margin: 10px 0;
            border: 2px dashed gray;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Box Model</h1>
        
        <div class="card">
            <h2>What is the Box Model?</h2>
            <p>Every element is a box with content, padding, border, and margin.</p>
        </div>
        
        <div class="box">
            <h3>Example Box</h3>
            <p>This box has 20px padding, 3px border, and 20px margin.</p>
        </div>
        
        <div class="card">
            <h2>Buttons with Padding</h2>
            <a href="#" class="button">Button 1</a>
            <a href="#" class="button">Button 2</a>
            <a href="#" class="button">Button 3</a>
        </div>
        
        <div class="spacing-demo">
            <h3>Spacing Demo</h3>
            <p>This paragraph has padding and margin.</p>
            <p>So does this one!</p>
        </div>
    </div>
</body>
</html>
```

## Margin Collapse

Vertical margins between elements collapse to the larger of the two:

```css
.box1 {
    margin-bottom: 30px;
}

.box2 {
    margin-top: 20px;
}

/* The space between box1 and box2 is 30px, not 50px */
```

## Display Property

The `display` property affects how the box model works:

```css
/* Block elements (full width, stack vertically) */
display: block;

/* Inline elements (only as wide as content, flow horizontally) */
display: inline;

/* Inline-block (inline flow, but accepts width/height) */
display: inline-block;

/* Hide element */
display: none;
```

## Practice Exercise

Create a card layout with:
- A container with padding and centered content
- Multiple cards with padding, margin, and borders
- Buttons with padding and hover effects
- Rounded corners using border-radius
- Box shadows for depth
- Proper spacing between all elements
