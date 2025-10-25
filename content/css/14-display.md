# CSS Display Property

The `display` property is one of the most important CSS properties. It controls how an element is displayed and how it interacts with other elements.

## Display Values

### block

Block elements take up the full width available and start on a new line:

```css
div {
    display: block;
}
```

**Default block elements:** `<div>`, `<p>`, `<h1>-<h6>`, `<ul>`, `<li>`, `<section>`

:::preview height="250px"
```html
<style>
    .block-demo {
        display: block;
        background: #3498db;
        color: white;
        padding: 10px;
        margin: 5px 0;
    }
</style>

<div class="block-demo">Block 1 (full width)</div>
<div class="block-demo">Block 2 (full width)</div>
<div class="block-demo" style="width: 50%;">Block 3 (50% width)</div>
```
:::

**Characteristics:**
- Takes full width by default
- Starts on a new line
- Can set width and height
- Respects all margin and padding

### inline

Inline elements only take up as much width as needed and don't start on a new line:

```css
span {
    display: inline;
}
```

**Default inline elements:** `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`

:::preview height="150px"
```html
<style>
    .inline-demo {
        display: inline;
        background: #e74c3c;
        color: white;
        padding: 5px 10px;
        margin: 10px;
    }
</style>

<div>
    <span class="inline-demo">Inline 1</span>
    <span class="inline-demo">Inline 2</span>
    <span class="inline-demo">Inline 3</span>
    flows with text
</div>
```
:::

**Characteristics:**
- Only takes needed width
- Flows with text
- Cannot set width and height
- Vertical margin/padding don't work properly

### inline-block

Combines features of both inline and block:

```css
.button {
    display: inline-block;
}
```

:::preview height="200px"
```html
<style>
    .inline-block-demo {
        display: inline-block;
        background: #2ecc71;
        color: white;
        padding: 15px 30px;
        margin: 10px;
        width: 150px;
        text-align: center;
    }
</style>

<div>
    <div class="inline-block-demo">Box 1</div>
    <div class="inline-block-demo">Box 2</div>
    <div class="inline-block-demo">Box 3</div>
</div>
```
:::

**Characteristics:**
- Flows inline like text
- Can set width and height
- Respects all margin and padding
- Perfect for buttons and navigation items

### none

Hides the element completely (removes from layout):

```css
.hidden {
    display: none;
}
```

:::preview height="150px"
```html
<style>
    .visible { background: #3498db; color: white; padding: 10px; margin: 5px 0; }
    .hidden { display: none; }
</style>

<div class="visible">Visible element</div>
<div class="hidden">Hidden element (not in layout)</div>
<div class="visible">Another visible element</div>
```
:::

### flex

Creates a flex container for flexible layouts:

```css
.container {
    display: flex;
}
```

:::preview height="150px"
```html
<style>
    .flex-container {
        display: flex;
        gap: 10px;
        background: #ecf0f1;
        padding: 10px;
    }
    .flex-item {
        background: #3498db;
        color: white;
        padding: 20px;
        flex: 1;
    }
</style>

<div class="flex-container">
    <div class="flex-item">Flex 1</div>
    <div class="flex-item">Flex 2</div>
    <div class="flex-item">Flex 3</div>
</div>
```
:::

### grid

Creates a grid container:

```css
.container {
    display: grid;
}
```

:::preview height="200px"
```html
<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        background: #ecf0f1;
        padding: 10px;
    }
    .grid-item {
        background: #9b59b6;
        color: white;
        padding: 20px;
        text-align: center;
    }
</style>

<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
</div>
```
:::


## Visibility vs Display

```css
/* Hides but keeps space */
.invisible {
    visibility: hidden;
}

/* Hides and removes space */
.hidden {
    display: none;
}
```

:::preview height="200px"
```html
<style>
    .box { background: #3498db; color: white; padding: 20px; margin: 10px 0; }
    .invisible { visibility: hidden; }
    .hidden { display: none; }
</style>

<div class="box">Visible box</div>
<div class="box invisible">Invisible box (space remains)</div>
<div class="box hidden">Hidden box (no space)</div>
<div class="box">Another visible box</div>
```
:::

## Common Use Cases

### Navigation Menu

```css
nav ul {
    display: flex;
    list-style: none;
}

nav li {
    display: inline-block;
    margin: 0 10px;
}
```

### Button Groups

```css
.button {
    display: inline-block;
    padding: 10px 20px;
    background: #3498db;
    color: white;
    text-decoration: none;
}
```

### Card Layouts

```css
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

### Hiding Elements

```css
/* Hide on mobile */
@media (max-width: 768px) {
    .desktop-only {
        display: none;
    }
}
```

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Display Property Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        
        h2 {
            margin: 30px 0 15px;
            color: #2c3e50;
        }
        
        /* Block example */
        .block-section {
            background: #ecf0f1;
            padding: 15px;
        }
        
        .block-item {
            background: #3498db;
            color: white;
            padding: 15px;
            margin: 10px 0;
        }
        
        /* Inline example */
        .inline-section {
            background: #ecf0f1;
            padding: 15px;
        }
        
        .inline-item {
            background: #e74c3c;
            color: white;
            padding: 5px 15px;
            margin: 5px;
        }
        
        /* Inline-block example */
        .inline-block-section {
            background: #ecf0f1;
            padding: 15px;
        }
        
        .inline-block-item {
            display: inline-block;
            background: #2ecc71;
            color: white;
            padding: 20px;
            margin: 10px;
            width: 120px;
            text-align: center;
        }
        
        /* Navigation example */
        nav {
            background: #34495e;
            padding: 0;
            margin: 20px 0;
        }
        
        nav ul {
            display: flex;
            list-style: none;
        }
        
        nav li {
            flex: 1;
        }
        
        nav a {
            display: block;
            padding: 15px;
            color: white;
            text-decoration: none;
            text-align: center;
        }
        
        nav a:hover {
            background: #2c3e50;
        }
        
        /* Card grid */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .card {
            background: white;
            border: 2px solid #ddd;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
        }
        
        /* Visibility demo */
        .visibility-demo {
            background: #ecf0f1;
            padding: 15px;
        }
        
        .vis-box {
            background: #9b59b6;
            color: white;
            padding: 15px;
            margin: 10px 0;
        }
        
        .vis-hidden {
            visibility: hidden;
        }
        
        .dis-none {
            display: none;
        }
    </style>
</head>
<body>
    <h1>CSS Display Property</h1>
    
    <h2>Block Elements</h2>
    <div class="block-section">
        <div class="block-item">Block 1 (full width)</div>
        <div class="block-item">Block 2 (full width)</div>
        <div class="block-item" style="width: 50%;">Block 3 (50% width)</div>
    </div>
    
    <h2>Inline Elements</h2>
    <div class="inline-section">
        <span class="inline-item">Inline 1</span>
        <span class="inline-item">Inline 2</span>
        <span class="inline-item">Inline 3</span>
        <span class="inline-item">Inline 4</span>
    </div>
    
    <h2>Inline-Block Elements</h2>
    <div class="inline-block-section">
        <div class="inline-block-item">Box 1</div>
        <div class="inline-block-item">Box 2</div>
        <div class="inline-block-item">Box 3</div>
    </div>
    
    <h2>Flex Navigation</h2>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    
    <h2>Grid Layout</h2>
    <div class="card-grid">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
    </div>
    
    <h2>Visibility vs Display None</h2>
    <div class="visibility-demo">
        <div class="vis-box">Visible box</div>
        <div class="vis-box vis-hidden">Visibility: hidden (space remains)</div>
        <div class="vis-box dis-none">Display: none (no space)</div>
        <div class="vis-box">Another visible box</div>
    </div>
</body>
</html>
```
:::

## Display Property Summary

| Value | Behavior | Width/Height | Margin/Padding | New Line |
|-------|----------|--------------|----------------|----------|
| block | Full width | ✓ | ✓ | Yes |
| inline | Content width | ✗ | Partial | No |
| inline-block | Content width | ✓ | ✓ | No |
| none | Hidden | N/A | N/A | N/A |
| flex | Flex container | ✓ | ✓ | Yes |
| grid | Grid container | ✓ | ✓ | Yes |

## Practice Exercise

:::practice title="Working with Display"
Create a page demonstrating different display values:
1. Create block elements with different widths
2. Make inline elements flow with text
3. Build a button group with inline-block
4. Create a navigation bar using flex
5. Hide an element with display: none
6. Compare visibility: hidden vs display: none

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Display Practice</title>
    <style>
        /* Add your styles here */
        
    </style>
</head>
<body>
    <h1>Display Property Practice</h1>
    
    <!-- Add your HTML here -->
    
</body>
</html>
```
:::
