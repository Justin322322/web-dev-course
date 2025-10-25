# CSS Backgrounds

CSS provides powerful properties to control element backgrounds, from simple colors to complex images and gradients.

## Background Color

Set a solid background color:

```css
.box {
    background-color: #3498db;
}

/* With transparency */
.overlay {
    background-color: rgba(0, 0, 0, 0.5);
}
```

:::preview height="150px"
```html
<div style="background-color: #3498db; color: white; padding: 20px;">
    Solid color background
</div>
<div style="background-color: rgba(52, 152, 219, 0.3); padding: 20px; margin-top: 10px;">
    Semi-transparent background
</div>
```
:::

## Background Image

Add an image as background:

```css
.hero {
    background-image: url('image.jpg');
}

/* Multiple backgrounds */
.layered {
    background-image: url('overlay.png'), url('background.jpg');
}
```

:::preview height="200px"
```html
<div style="
    background-image: url('https://via.placeholder.com/800x200/3498db/ffffff?text=Background+Image');
    height: 200px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
">
    Content over background image
</div>
```
:::

## Background Repeat

Control how background images repeat:

```css
.no-repeat {
    background-repeat: no-repeat;
}

.repeat-x {
    background-repeat: repeat-x;  /* Horizontal only */
}

.repeat-y {
    background-repeat: repeat-y;  /* Vertical only */
}

.repeat {
    background-repeat: repeat;    /* Both directions (default) */
}
```

:::preview height="250px"
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
    <div style="
        background-image: url('https://via.placeholder.com/50/e74c3c/ffffff?text=+');
        background-repeat: no-repeat;
        height: 100px;
        border: 2px solid #ddd;
    ">no-repeat</div>
    <div style="
        background-image: url('https://via.placeholder.com/50/3498db/ffffff?text=+');
        background-repeat: repeat;
        height: 100px;
        border: 2px solid #ddd;
    ">repeat</div>
</div>
```
:::

## Background Position

Position the background image:

```css
.centered {
    background-position: center;
}

.top-right {
    background-position: top right;
}

.custom {
    background-position: 50px 100px;  /* x y */
}

.percentage {
    background-position: 50% 50%;
}
```

:::preview height="200px"
```html
<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
    <div style="
        background-image: url('https://via.placeholder.com/50/e74c3c/ffffff?text=TL');
        background-repeat: no-repeat;
        background-position: top left;
        height: 150px;
        border: 2px solid #ddd;
    "></div>
    <div style="
        background-image: url('https://via.placeholder.com/50/3498db/ffffff?text=C');
        background-repeat: no-repeat;
        background-position: center;
        height: 150px;
        border: 2px solid #ddd;
    "></div>
    <div style="
        background-image: url('https://via.placeholder.com/50/2ecc71/ffffff?text=BR');
        background-repeat: no-repeat;
        background-position: bottom right;
        height: 150px;
        border: 2px solid #ddd;
    "></div>
</div>
```
:::

## Background Size

Control the size of background images:

```css
.cover {
    background-size: cover;  /* Fill container, may crop */
}

.contain {
    background-size: contain;  /* Fit inside, may show empty space */
}

.custom {
    background-size: 200px 100px;  /* width height */
}

.percentage {
    background-size: 50% auto;
}
```

:::preview height="250px"
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
    <div style="
        background-image: url('https://via.placeholder.com/400x200/3498db/ffffff?text=Cover');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 150px;
        border: 2px solid #ddd;
    ">cover</div>
    <div style="
        background-image: url('https://via.placeholder.com/400x200/e74c3c/ffffff?text=Contain');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 150px;
        border: 2px solid #ddd;
    ">contain</div>
</div>
```
:::

## Background Attachment

Control scrolling behavior:

```css
.fixed {
    background-attachment: fixed;  /* Fixed to viewport */
}

.scroll {
    background-attachment: scroll;  /* Scrolls with element (default) */
}

.local {
    background-attachment: local;  /* Scrolls with content */
}
```

## Background Origin

Define the positioning area:

```css
.border-box {
    background-origin: border-box;
}

.padding-box {
    background-origin: padding-box;  /* Default */
}

.content-box {
    background-origin: content-box;
}
```

## Background Clip

Define the painting area:

```css
.border-box {
    background-clip: border-box;  /* Default */
}

.padding-box {
    background-clip: padding-box;
}

.content-box {
    background-clip: content-box;
}

.text {
    background-clip: text;  /* Clip to text */
    -webkit-background-clip: text;
    color: transparent;
}
```

:::preview height="150px"
```html
<h1 style="
    background-image: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 48px;
    font-weight: bold;
">
    Gradient Text
</h1>
```
:::

## Linear Gradients

Create smooth color transitions:

```css
/* Top to bottom */
.gradient1 {
    background: linear-gradient(#3498db, #2ecc71);
}

/* Left to right */
.gradient2 {
    background: linear-gradient(to right, #e74c3c, #f39c12);
}

/* Diagonal */
.gradient3 {
    background: linear-gradient(45deg, #9b59b6, #3498db);
}

/* Multiple colors */
.gradient4 {
    background: linear-gradient(to right, red, yellow, green);
}

/* Color stops */
.gradient5 {
    background: linear-gradient(to right, 
        #3498db 0%, 
        #2ecc71 50%, 
        #f39c12 100%
    );
}
```

:::preview height="300px"
```html
<div style="display: grid; gap: 10px;">
    <div style="background: linear-gradient(#3498db, #2ecc71); padding: 20px; color: white;">
        Top to bottom
    </div>
    <div style="background: linear-gradient(to right, #e74c3c, #f39c12); padding: 20px; color: white;">
        Left to right
    </div>
    <div style="background: linear-gradient(45deg, #9b59b6, #3498db); padding: 20px; color: white;">
        Diagonal (45deg)
    </div>
    <div style="background: linear-gradient(to right, #e74c3c 0%, #f39c12 50%, #2ecc71 100%); padding: 20px; color: white;">
        Multiple color stops
    </div>
</div>
```
:::


## Radial Gradients

Create circular gradients:

```css
/* Center to edges */
.radial1 {
    background: radial-gradient(#3498db, #2c3e50);
}

/* Positioned */
.radial2 {
    background: radial-gradient(circle at top left, #e74c3c, #c0392b);
}

/* Ellipse */
.radial3 {
    background: radial-gradient(ellipse, #9b59b6, #8e44ad);
}

/* With size */
.radial4 {
    background: radial-gradient(circle 100px, #f39c12, #e67e22);
}
```

:::preview height="250px"
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
    <div style="background: radial-gradient(circle, #3498db, #2c3e50); height: 100px; color: white; display: flex; align-items: center; justify-content: center;">
        Circle
    </div>
    <div style="background: radial-gradient(circle at top left, #e74c3c, #c0392b); height: 100px; color: white; display: flex; align-items: center; justify-content: center;">
        Positioned
    </div>
</div>
```
:::

## Conic Gradients

Create pie-chart-like gradients:

```css
.conic {
    background: conic-gradient(#3498db, #2ecc71, #f39c12, #e74c3c, #3498db);
}

.pie {
    background: conic-gradient(
        #3498db 0deg 90deg,
        #2ecc71 90deg 180deg,
        #f39c12 180deg 270deg,
        #e74c3c 270deg 360deg
    );
}
```

:::preview height="200px"
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
    <div style="
        background: conic-gradient(#3498db, #2ecc71, #f39c12, #e74c3c, #3498db);
        height: 150px;
        border-radius: 50%;
    "></div>
    <div style="
        background: conic-gradient(
            #3498db 0deg 90deg,
            #2ecc71 90deg 180deg,
            #f39c12 180deg 270deg,
            #e74c3c 270deg 360deg
        );
        height: 150px;
        border-radius: 50%;
    "></div>
</div>
```
:::

## Background Shorthand

Combine all background properties:

```css
.shorthand {
    background: 
        url('image.jpg')      /* image */
        center / cover        /* position / size */
        no-repeat             /* repeat */
        fixed                 /* attachment */
        padding-box           /* origin */
        content-box           /* clip */
        #3498db;              /* color */
}

/* Common pattern */
.hero {
    background: url('hero.jpg') center/cover no-repeat;
}
```

## Multiple Backgrounds

Layer multiple backgrounds:

```css
.layered {
    background:
        url('overlay.png') center/cover no-repeat,
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('background.jpg') center/cover no-repeat;
}
```

:::preview height="200px"
```html
<div style="
    background:
        linear-gradient(rgba(52, 152, 219, 0.8), rgba(52, 152, 219, 0.8)),
        url('https://via.placeholder.com/800x200/2c3e50/ffffff?text=Background') center/cover no-repeat;
    height: 200px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
">
    Overlay + Image
</div>
```
:::

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Backgrounds</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
        }
        
        .hero {
            background: 
                linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                url('https://via.placeholder.com/1200x400/3498db/ffffff?text=Hero+Section') center/cover no-repeat;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .gradient-section {
            padding: 40px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
        }
        
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 40px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .card-image {
            height: 150px;
            background-size: cover;
            background-position: center;
        }
        
        .card-1 .card-image {
            background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
        }
        
        .card-2 .card-image {
            background: radial-gradient(circle, #FFA07A, #FF6347);
        }
        
        .card-3 .card-image {
            background: conic-gradient(
                #3498db 0deg 120deg,
                #2ecc71 120deg 240deg,
                #f39c12 240deg 360deg
            );
        }
        
        .card-content {
            padding: 20px;
        }
        
        .gradient-text {
            background: linear-gradient(45deg, #667eea, #764ba2);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            font-size: 36px;
            font-weight: bold;
            text-align: center;
            padding: 40px 20px;
        }
        
        .pattern-section {
            background-color: #f5f5f5;
            background-image: 
                repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    rgba(52, 152, 219, 0.1) 10px,
                    rgba(52, 152, 219, 0.1) 20px
                );
            padding: 40px 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="hero">
        <div>
            <h1>CSS Backgrounds</h1>
            <p>Powerful background styling with CSS</p>
        </div>
    </div>
    
    <div class="gradient-section">
        <h2>Linear Gradient Background</h2>
        <p>Beautiful gradient from #667eea to #764ba2</p>
    </div>
    
    <div class="cards">
        <div class="card card-1">
            <div class="card-image"></div>
            <div class="card-content">
                <h3>Linear Gradient</h3>
                <p>Smooth color transition from one color to another.</p>
            </div>
        </div>
        
        <div class="card card-2">
            <div class="card-image"></div>
            <div class="card-content">
                <h3>Radial Gradient</h3>
                <p>Circular gradient radiating from the center.</p>
            </div>
        </div>
        
        <div class="card card-3">
            <div class="card-image"></div>
            <div class="card-content">
                <h3>Conic Gradient</h3>
                <p>Pie-chart style gradient rotating around center.</p>
            </div>
        </div>
    </div>
    
    <div class="gradient-text">
        Gradient Text Effect
    </div>
    
    <div class="pattern-section">
        <h2>Pattern Background</h2>
        <p>Created with repeating linear gradients</p>
    </div>
</body>
</html>
```
:::

## Common Patterns

### Hero Section

```css
.hero {
    background: 
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('hero.jpg') center/cover no-repeat fixed;
    height: 100vh;
    color: white;
}
```

### Card with Gradient

```css
.card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    padding: 20px;
    color: white;
}
```

### Striped Background

```css
.striped {
    background: repeating-linear-gradient(
        45deg,
        #f0f0f0,
        #f0f0f0 10px,
        #e0e0e0 10px,
        #e0e0e0 20px
    );
}
```

### Gradient Border

```css
.gradient-border {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #667eea, #764ba2) border-box;
    border: 4px solid transparent;
    border-radius: 8px;
}
```

## Best Practices

1. **Use cover for hero images** - Ensures full coverage
2. **Optimize images** - Compress for faster loading
3. **Provide fallback colors** - For when images don't load
4. **Use gradients sparingly** - Can impact performance
5. **Consider accessibility** - Ensure text contrast
6. **Use background shorthand** - More concise code
7. **Test on different screens** - Responsive backgrounds

## Practice Exercise

:::practice title="Working with Backgrounds"
Create a landing page with various backgrounds:
1. Hero section with image and overlay
2. Section with linear gradient
3. Cards with different gradient types
4. Gradient text effect
5. Pattern background
6. Multiple layered backgrounds

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Backgrounds Practice</title>
    <style>
        /* Add your background styles here */
        
    </style>
</head>
<body>
    <!-- Create sections with different backgrounds -->
    
</body>
</html>
```
:::
