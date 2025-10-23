# CSS Flexbox

Flexbox is a powerful layout system that makes it easy to create flexible and responsive layouts. It's perfect for aligning items and distributing space in a container.

## Flex Container

To use flexbox, set `display: flex` on the parent container:

```css
.container {
    display: flex;
}
```

## Flex Direction

Controls the direction of flex items:

```css
.container {
    display: flex;
    flex-direction: row; /* Default: left to right */
}

flex-direction: row;            /* → → → */
flex-direction: row-reverse;    /* ← ← ← */
flex-direction: column;         /* ↓ ↓ ↓ */
flex-direction: column-reverse; /* ↑ ↑ ↑ */
```

## Justify Content

Aligns items along the main axis (horizontally for row):

```css
.container {
    display: flex;
    justify-content: flex-start; /* Default */
}

justify-content: flex-start;    /* [■■■      ] */
justify-content: flex-end;      /* [      ■■■] */
justify-content: center;        /* [   ■■■   ] */
justify-content: space-between; /* [■   ■   ■] */
justify-content: space-around;  /* [ ■  ■  ■ ] */
justify-content: space-evenly;  /* [ ■ ■ ■  ] */
```

## Align Items

Aligns items along the cross axis (vertically for row):

```css
.container {
    display: flex;
    align-items: stretch; /* Default */
}

align-items: flex-start;  /* Top */
align-items: flex-end;    /* Bottom */
align-items: center;      /* Middle */
align-items: stretch;     /* Fill height */
align-items: baseline;    /* Align text baselines */
```

## Flex Wrap

Controls whether items wrap to new lines:

```css
.container {
    display: flex;
    flex-wrap: nowrap; /* Default: all items on one line */
}

flex-wrap: nowrap;       /* [■■■■■■] */
flex-wrap: wrap;         /* [■■■■  ] [■■    ] */
flex-wrap: wrap-reverse; /* [■■    ] [■■■■  ] */
```

## Align Content

Aligns multiple lines of flex items:

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}

align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: stretch;
```

## Flex Item Properties

### Flex Grow

Controls how much an item grows relative to others:

```css
.item {
    flex-grow: 0; /* Default: don't grow */
}

.item1 { flex-grow: 1; } /* Takes 1 part */
.item2 { flex-grow: 2; } /* Takes 2 parts */
.item3 { flex-grow: 1; } /* Takes 1 part */
```

### Flex Shrink

Controls how much an item shrinks when space is limited:

```css
.item {
    flex-shrink: 1; /* Default: can shrink */
}

.item { flex-shrink: 0; } /* Won't shrink */
```

### Flex Basis

Sets the initial size of an item:

```css
.item {
    flex-basis: auto; /* Default */
}

.item { flex-basis: 200px; }
.item { flex-basis: 50%; }
```

### Flex Shorthand

Combines grow, shrink, and basis:

```css
.item {
    flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}

.item { flex: 0 1 auto; } /* Default */
.item { flex: 1; }        /* Grow equally */
.item { flex: 2; }        /* Grow twice as much */
.item { flex: 0 0 200px; } /* Fixed width */
```

### Align Self

Overrides align-items for individual items:

```css
.item {
    align-self: auto; /* Default: inherit from container */
}

.item { align-self: flex-start; }
.item { align-self: flex-end; }
.item { align-self: center; }
.item { align-self: stretch; }
```

## Complete Example

:::preview height="900px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flexbox Demo</title>
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f0f0f0;
        }
        
        /* Navigation Bar */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #333;
            padding: 15px 30px;
            color: white;
        }
        
        .nav-links {
            display: flex;
            gap: 20px;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
        }
        
        /* Card Grid */
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin: 30px 0;
        }
        
        .card {
            flex: 1 1 300px;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Centered Content */
        .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 300px;
            background-color: #007bff;
            color: white;
            text-align: center;
            border-radius: 10px;
            margin: 20px 0;
        }
        
        /* Button Group */
        .button-group {
            display: flex;
            gap: 10px;
            margin: 20px 0;
        }
        
        .button {
            flex: 1;
            padding: 12px 24px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        /* Sidebar Layout */
        .layout {
            display: flex;
            gap: 20px;
            margin: 20px 0;
        }
        
        .sidebar {
            flex: 0 0 200px;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
        }
        
        .main-content {
            flex: 1;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="logo">My Website</div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
    <!-- Hero Section -->
    <div class="hero">
        <h1>Welcome to Flexbox</h1>
        <p>Building flexible layouts made easy</p>
    </div>
    
    <!-- Card Grid -->
    <div class="card-container">
        <div class="card">
            <h3>Feature 1</h3>
            <p>Flexible and responsive layouts</p>
        </div>
        <div class="card">
            <h3>Feature 2</h3>
            <p>Easy alignment and distribution</p>
        </div>
        <div class="card">
            <h3>Feature 3</h3>
            <p>Works great on all devices</p>
        </div>
    </div>
    
    <!-- Button Group -->
    <div class="button-group">
        <button class="button">Option 1</button>
        <button class="button">Option 2</button>
        <button class="button">Option 3</button>
    </div>
    
    <!-- Sidebar Layout -->
    <div class="layout">
        <aside class="sidebar">
            <h3>Sidebar</h3>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </aside>
        <main class="main-content">
            <h2>Main Content</h2>
            <p>This is the main content area that grows to fill available space.</p>
        </main>
    </div>
</body>
</html>
```
:::

## Common Flexbox Patterns

### Centering Content

```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### Equal Width Columns

```css
.columns {
    display: flex;
}

.column {
    flex: 1;
}
```

### Sticky Footer

```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
}
```

## Practice Exercise

:::practice title="Build a Flexbox Layout"
Create a flexible layout using Flexbox:
1. Create a navigation bar with space-between alignment
2. Create a card container with flex-wrap
3. Make cards flexible with flex: 1 1 300px
4. Center content in a hero section
5. Add gap between flex items

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flexbox Layout</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: Arial, sans-serif;
        }
        
        /* Add your Flexbox CSS here */
        
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo">Logo</div>
        <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </nav>
    
    <div class="hero">
        <h1>Welcome</h1>
        <p>This content should be centered</p>
    </div>
    
    <div class="card-container">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
    </div>
</body>
</html>
```
:::
