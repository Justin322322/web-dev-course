# CSS Units

CSS units define measurements for sizes, spacing, and positioning. Choosing the right unit is crucial for responsive and maintainable designs.

## Absolute Units

### Pixels (px)

The most common absolute unit:

```css
font-size: 16px;
width: 300px;
padding: 20px;
border: 1px solid black;
```

**Use for:**
- Borders (1px, 2px)
- Small, fixed measurements
- When exact pixel control is needed

:::preview height="150px"
```html
<div style="width: 200px; height: 100px; background: #3498db; color: white; padding: 20px;">
    200px wide, 100px tall, 20px padding
</div>
```
:::

### Other Absolute Units

Rarely used in web design:

```css
width: 2in;   /* Inches */
width: 5cm;   /* Centimeters */
width: 50mm;  /* Millimeters */
width: 12pt;  /* Points (1/72 inch) */
width: 1pc;   /* Picas (12 points) */
```

## Relative Units

### Percentages (%)

Relative to the parent element:

```css
width: 50%;        /* 50% of parent width */
height: 100%;      /* 100% of parent height */
font-size: 120%;   /* 120% of parent font size */
```

:::preview height="200px"
```html
<div style="width: 400px; background: #ecf0f1; padding: 10px;">
    Parent (400px)
    <div style="width: 50%; background: #3498db; color: white; padding: 10px;">
        Child (50% = 200px)
    </div>
</div>
```
:::

### Em Units (em)

Relative to the parent element's font size:

```css
font-size: 1em;     /* Same as parent */
font-size: 1.5em;   /* 1.5 times parent */
padding: 2em;       /* 2 times current font size */
```

:::preview height="200px"
```html
<div style="font-size: 16px; background: #ecf0f1; padding: 10px;">
    Parent (16px)
    <div style="font-size: 1.5em; background: #3498db; color: white; padding: 1em;">
        Child (1.5em = 24px, padding = 24px)
    </div>
</div>
```
:::

### Rem Units (rem)

Relative to the root element's font size:

```css
font-size: 1rem;    /* Same as root (usually 16px) */
font-size: 1.5rem;  /* 1.5 times root */
padding: 2rem;      /* 2 times root font size */
```


:::preview height="200px"
```html
<div style="font-size: 16px;">
    <div style="font-size: 20px; background: #ecf0f1; padding: 10px;">
        Parent (20px)
        <div style="font-size: 1.5rem; background: #3498db; color: white; padding: 1rem;">
            Child (1.5rem = 24px, always based on root 16px)
        </div>
    </div>
</div>
```
:::

**Em vs Rem:**
- `em`: Compounds with nested elements
- `rem`: Always relative to root, more predictable

### Viewport Units

Relative to the viewport (browser window) size:

```css
width: 100vw;    /* 100% of viewport width */
height: 100vh;   /* 100% of viewport height */
font-size: 5vw;  /* 5% of viewport width */
width: 50vmin;   /* 50% of smaller dimension */
width: 50vmax;   /* 50% of larger dimension */
```

:::preview height="300px"
```html
<div style="height: 50vh; background: #3498db; color: white; display: flex; align-items: center; justify-content: center; font-size: 3vw;">
    50vh height, 3vw font size
</div>
```
:::

## When to Use Each Unit

### Pixels (px)
```css
/* Borders */
border: 1px solid #ccc;

/* Small fixed sizes */
border-radius: 4px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
```

### Percentages (%)
```css
/* Fluid layouts */
width: 100%;
width: 50%;

/* Responsive images */
img {
    max-width: 100%;
}
```

### Rem
```css
/* Font sizes */
h1 { font-size: 2rem; }
p { font-size: 1rem; }

/* Spacing */
padding: 1rem;
margin: 2rem 0;
```

### Em
```css
/* Spacing relative to font size */
button {
    padding: 0.5em 1em;
    border-radius: 0.25em;
}
```

### Viewport Units
```css
/* Full-screen sections */
.hero {
    height: 100vh;
}

/* Responsive typography */
h1 {
    font-size: 5vw;
}
```

## Complete Example

:::preview height="600px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Units Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            font-size: 16px; /* Root font size */
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        
        .box {
            margin: 1rem 0;
            padding: 1.5rem;
            border: 2px solid #3498db;
            border-radius: 8px;
        }
        
        .px-box {
            width: 300px;
            background-color: #e8f4f8;
        }
        
        .percent-box {
            width: 75%;
            background-color: #fef5e7;
        }
        
        .rem-box {
            font-size: 1.25rem;
            padding: 2rem;
            background-color: #e8f8f5;
        }
        
        .em-box {
            font-size: 1.2em;
            padding: 1em;
            background-color: #f4ecf7;
        }
        
        .viewport-box {
            height: 30vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3vw;
        }
        
        .comparison {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .comparison > div {
            flex: 1;
            min-width: 200px;
            padding: 1rem;
            background: #ecf0f1;
            border-radius: 4px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Units Comparison</h1>
        
        <div class="box px-box">
            <strong>Pixels (px):</strong> Fixed width of 300px
        </div>
        
        <div class="box percent-box">
            <strong>Percentage (%):</strong> 75% of parent width
        </div>
        
        <div class="box rem-box">
            <strong>Rem:</strong> Font size 1.25rem, padding 2rem
        </div>
        
        <div class="box em-box">
            <strong>Em:</strong> Font size 1.2em, padding 1em
            <div style="font-size: 1.2em; margin-top: 0.5em; padding: 0.5em; background: rgba(0,0,0,0.1);">
                Nested: 1.2em compounds (1.2 × 1.2 = 1.44)
            </div>
        </div>
        
        <div class="box viewport-box">
            <strong>Viewport Units:</strong> 30vh height, 3vw font
        </div>
        
        <div class="comparison">
            <div>
                <h3 style="font-size: 16px;">16px</h3>
                <p>Absolute</p>
            </div>
            <div>
                <h3 style="font-size: 1rem;">1rem</h3>
                <p>Root relative</p>
            </div>
            <div>
                <h3 style="font-size: 1em;">1em</h3>
                <p>Parent relative</p>
            </div>
        </div>
    </div>
</body>
</html>
```
:::

## Best Practices

1. **Use rem for font sizes** - Consistent and accessible
2. **Use % for layouts** - Fluid and responsive
3. **Use px for borders** - Precise control
4. **Use em for component spacing** - Scales with font size
5. **Use vh/vw for full-screen sections** - Viewport-based layouts

## Practice Exercise

:::practice title="Working with CSS Units"
Create a responsive page using different units:
1. Set body font-size to 16px
2. Use rem for heading sizes (h1: 2.5rem, h2: 2rem)
3. Create a container with 90% width and max-width: 1200px
4. Add boxes with different units (px, %, rem, em)
5. Create a full-height hero section using vh
6. Use em for button padding

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Units Practice</title>
    <style>
        /* Add your styles here */
        
    </style>
</head>
<body>
    <!-- Add your HTML here -->
    
</body>
</html>
```
:::
