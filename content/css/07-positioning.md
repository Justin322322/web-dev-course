# CSS Positioning

CSS positioning allows you to control where elements appear on the page. Understanding positioning is crucial for creating complex layouts.

## Position Property

The `position` property specifies how an element is positioned in the document.

### Static (Default)

```css
.element {
    position: static;
}
```

Elements are positioned according to the normal document flow. This is the default value.

### Relative

```css
.element {
    position: relative;
    top: 20px;
    left: 30px;
}
```

Positioned relative to its normal position. The element still occupies space in the document flow.

### Absolute

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

Positioned relative to the nearest positioned ancestor (not static). Removed from normal document flow.

### Fixed

```css
.element {
    position: fixed;
    top: 0;
    right: 0;
}
```

Positioned relative to the viewport. Stays in place when scrolling.

### Sticky

```css
.element {
    position: sticky;
    top: 0;
}
```

Toggles between relative and fixed based on scroll position.

## Positioning Properties

```css
top: 10px;
right: 20px;
bottom: 10px;
left: 20px;
```

These properties work with positioned elements (not static).

## Z-Index

Controls the stacking order of positioned elements:

```css
.element1 {
    position: absolute;
    z-index: 1;
}

.element2 {
    position: absolute;
    z-index: 2; /* Appears on top */
}
```

## Complete Positioning Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Positioning</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            padding-top: 80px;
        }
        
        /* Fixed Header */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: #333;
            color: white;
            padding: 20px;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        /* Relative Positioning */
        .relative-box {
            position: relative;
            background-color: #e3f2fd;
            padding: 40px;
            margin: 20px 0;
            border: 2px solid #2196f3;
        }
        
        .relative-child {
            position: relative;
            top: 10px;
            left: 20px;
            background-color: #2196f3;
            color: white;
            padding: 10px;
            display: inline-block;
        }
        
        /* Absolute Positioning */
        .absolute-container {
            position: relative;
            background-color: #fff3e0;
            padding: 40px;
            margin: 20px 0;
            height: 200px;
            border: 2px solid #ff9800;
        }
        
        .absolute-child {
            position: absolute;
            background-color: #ff9800;
            color: white;
            padding: 10px;
        }
        
        .top-left {
            top: 10px;
            left: 10px;
        }
        
        .top-right {
            top: 10px;
            right: 10px;
        }
        
        .bottom-left {
            bottom: 10px;
            left: 10px;
        }
        
        .bottom-right {
            bottom: 10px;
            right: 10px;
        }
        
        /* Sticky Positioning */
        .sticky-box {
            position: sticky;
            top: 70px;
            background-color: #f3e5f5;
            padding: 20px;
            margin: 20px 0;
            border: 2px solid #9c27b0;
            z-index: 100;
        }
        
        /* Z-Index Demo */
        .z-index-container {
            position: relative;
            height: 200px;
            margin: 20px 0;
        }
        
        .box {
            position: absolute;
            width: 150px;
            height: 150px;
            padding: 20px;
            color: white;
        }
        
        .box1 {
            background-color: #f44336;
            top: 20px;
            left: 20px;
            z-index: 1;
        }
        
        .box2 {
            background-color: #4caf50;
            top: 60px;
            left: 60px;
            z-index: 2;
        }
        
        .box3 {
            background-color: #2196f3;
            top: 100px;
            left: 100px;
            z-index: 3;
        }
        
        .content {
            margin: 20px 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>Fixed Header (position: fixed)</h1>
    </header>
    
    <div class="content">
        <h2>Relative Positioning</h2>
        <div class="relative-box">
            Parent with position: relative
            <div class="relative-child">
                Child moved 10px down, 20px right
            </div>
        </div>
    </div>
    
    <div class="content">
        <h2>Absolute Positioning</h2>
        <div class="absolute-container">
            Parent with position: relative
            <div class="absolute-child top-left">Top Left</div>
            <div class="absolute-child top-right">Top Right</div>
            <div class="absolute-child bottom-left">Bottom Left</div>
            <div class="absolute-child bottom-right">Bottom Right</div>
        </div>
    </div>
    
    <div class="sticky-box">
        <h2>Sticky Element</h2>
        <p>This element sticks to the top when you scroll past it!</p>
    </div>
    
    <div class="content">
        <h2>Z-Index (Stacking Order)</h2>
        <div class="z-index-container">
            <div class="box box1">Z-Index: 1</div>
            <div class="box box2">Z-Index: 2</div>
            <div class="box box3">Z-Index: 3</div>
        </div>
    </div>
    
    <div class="content">
        <p>Scroll down to see the sticky element in action...</p>
        <p style="height: 500px;">More content here to enable scrolling.</p>
    </div>
</body>
</html>
```
:::

## Common Use Cases

### Centered Overlay

```css
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
```

### Badge on Corner

```css
.container {
    position: relative;
}

.badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
}
```

### Sticky Navigation

```css
.nav {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
}
```

## Practice Exercise

:::practice title="Create a Positioned Layout"
Build a page with various positioning techniques:
1. Create a fixed header that stays at the top
2. Add a sticky sidebar
3. Position badges absolutely on cards
4. Create an overlay modal
5. Use z-index to control stacking

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Positioning Practice</title>
    <style>
        /* Add your positioning CSS here */
    </style>
</head>
<body>
    <!-- Add your HTML structure here -->
</body>
</html>
```
:::
