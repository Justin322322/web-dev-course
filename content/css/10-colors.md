# CSS Colors

Colors are fundamental to web design. CSS provides multiple ways to specify colors, each with its own advantages.

## Color Formats

### Named Colors

CSS supports 140 named colors:

```css
color: red;
color: blue;
color: green;
color: white;
color: black;
color: gray;
color: orange;
color: purple;
```

:::preview height="200px"
```html
<div style="background: red; color: white; padding: 10px;">Red</div>
<div style="background: blue; color: white; padding: 10px;">Blue</div>
<div style="background: green; color: white; padding: 10px;">Green</div>
<div style="background: orange; color: white; padding: 10px;">Orange</div>
```
:::

### Hexadecimal Colors

Hex colors use a 6-digit code: `#RRGGBB`

```css
color: #FF0000;  /* Red */
color: #00FF00;  /* Green */
color: #0000FF;  /* Blue */
color: #FFFFFF;  /* White */
color: #000000;  /* Black */
color: #808080;  /* Gray */
```

**Shorthand:** When pairs are identical, use 3 digits:

```css
color: #F00;     /* Same as #FF0000 */
color: #0F0;     /* Same as #00FF00 */
color: #00F;     /* Same as #0000FF */
```

:::preview height="200px"
```html
<div style="background: #FF6B6B; padding: 10px; color: white;">#FF6B6B</div>
<div style="background: #4ECDC4; padding: 10px; color: white;">#4ECDC4</div>
<div style="background: #45B7D1; padding: 10px; color: white;">#45B7D1</div>
<div style="background: #FFA07A; padding: 10px; color: white;">#FFA07A</div>
```
:::

### RGB Colors

RGB uses red, green, and blue values (0-255):

```css
color: rgb(255, 0, 0);      /* Red */
color: rgb(0, 255, 0);      /* Green */
color: rgb(0, 0, 255);      /* Blue */
color: rgb(255, 255, 255);  /* White */
color: rgb(0, 0, 0);        /* Black */
color: rgb(128, 128, 128);  /* Gray */
```

:::preview height="200px"
```html
<div style="background: rgb(255, 107, 107); padding: 10px; color: white;">
    rgb(255, 107, 107)
</div>
<div style="background: rgb(78, 205, 196); padding: 10px; color: white;">
    rgb(78, 205, 196)
</div>
<div style="background: rgb(69, 183, 209); padding: 10px; color: white;">
    rgb(69, 183, 209)
</div>
```
:::

### RGBA Colors (with Transparency)

RGBA adds an alpha channel for opacity (0.0 to 1.0):

```css
color: rgba(255, 0, 0, 1.0);    /* Fully opaque red */
color: rgba(255, 0, 0, 0.5);    /* 50% transparent red */
color: rgba(0, 0, 0, 0.8);      /* 80% opaque black */
color: rgba(255, 255, 255, 0.3); /* 30% opaque white */
```

:::preview height="250px"
```html
<div style="position: relative; height: 200px; background: #f0f0f0;">
    <div style="position: absolute; top: 20px; left: 20px; width: 150px; height: 150px; background: rgba(255, 0, 0, 0.8);"></div>
    <div style="position: absolute; top: 50px; left: 80px; width: 150px; height: 150px; background: rgba(0, 0, 255, 0.6);"></div>
    <div style="position: absolute; top: 80px; left: 140px; width: 150px; height: 150px; background: rgba(0, 255, 0, 0.6);"></div>
</div>
```
:::

### HSL Colors

HSL uses Hue (0-360), Saturation (0-100%), and Lightness (0-100%):

```css
color: hsl(0, 100%, 50%);     /* Red */
color: hsl(120, 100%, 50%);   /* Green */
color: hsl(240, 100%, 50%);   /* Blue */
color: hsl(0, 0%, 100%);      /* White */
color: hsl(0, 0%, 0%);        /* Black */
```

**Hue values:**
- 0° = Red
- 60° = Yellow
- 120° = Green
- 180° = Cyan
- 240° = Blue
- 300° = Magenta

:::preview height="200px"
```html
<div style="background: hsl(0, 100%, 50%); padding: 10px; color: white;">
    hsl(0, 100%, 50%) - Red
</div>
<div style="background: hsl(120, 100%, 50%); padding: 10px; color: white;">
    hsl(120, 100%, 50%) - Green
</div>
<div style="background: hsl(240, 100%, 50%); padding: 10px; color: white;">
    hsl(240, 100%, 50%) - Blue
</div>
```
:::

### HSLA Colors (with Transparency)

HSLA adds an alpha channel:

```css
color: hsla(0, 100%, 50%, 0.5);    /* 50% transparent red */
color: hsla(120, 100%, 50%, 0.7);  /* 70% opaque green */
```

## Where to Use Colors

```css
/* Text color */
color: #333;

/* Background color */
background-color: #f0f0f0;

/* Border color */
border-color: #ccc;

/* Box shadow */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* Text shadow */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

/* Gradient */
background: linear-gradient(to right, #ff6b6b, #4ecdc4);
```

## Color Contrast

Ensure sufficient contrast for readability:

```css
/* Good contrast */
.good {
    background-color: #000;
    color: #fff;
}

/* Poor contrast - hard to read */
.poor {
    background-color: #ccc;
    color: #ddd;
}
```

## Complete Example

:::preview height="600px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Colors Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .color-box {
            padding: 20px;
            margin: 10px 0;
            border-radius: 8px;
            color: white;
        }
        
        .named {
            background-color: tomato;
        }
        
        .hex {
            background-color: #3498db;
        }
        
        .rgb {
            background-color: rgb(46, 204, 113);
        }
        
        .rgba {
            background-color: rgba(155, 89, 182, 0.8);
        }
        
        .hsl {
            background-color: hsl(48, 100%, 50%);
        }
        
        .gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .overlay-demo {
            position: relative;
            height: 200px;
            background: url('https://via.placeholder.com/800x200') center/cover;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <h1 style="color: #2c3e50;">CSS Color Formats</h1>
    
    <div class="color-box named">
        <strong>Named Color:</strong> tomato
    </div>
    
    <div class="color-box hex">
        <strong>Hexadecimal:</strong> #3498db
    </div>
    
    <div class="color-box rgb">
        <strong>RGB:</strong> rgb(46, 204, 113)
    </div>
    
    <div class="color-box rgba">
        <strong>RGBA:</strong> rgba(155, 89, 182, 0.8)
    </div>
    
    <div class="color-box hsl">
        <strong>HSL:</strong> hsl(48, 100%, 50%)
    </div>
    
    <div class="color-box gradient">
        <strong>Gradient:</strong> linear-gradient(135deg, #667eea, #764ba2)
    </div>
    
    <div class="overlay-demo">
        <div class="overlay">
            RGBA Overlay Effect
        </div>
    </div>
</body>
</html>
```
:::

## Choosing the Right Format

- **Named colors:** Quick and readable for common colors
- **Hex:** Most common, compact, widely supported
- **RGB/RGBA:** Good for programmatic color manipulation
- **HSL/HSLA:** Intuitive for creating color variations
- **RGBA/HSLA:** Essential for transparency effects

## Practice Exercise

:::practice title="Working with Colors"
Create a colorful page using different color formats:
1. Use a named color for the body background
2. Create a header with a hex color
3. Add boxes with RGB colors
4. Create an overlay using RGBA
5. Use HSL for a gradient
6. Ensure good color contrast for text

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Color Practice</title>
    <style>
        /* Add your color styles here */
        
    </style>
</head>
<body>
    <!-- Add your HTML here -->
    
</body>
</html>
```
:::
