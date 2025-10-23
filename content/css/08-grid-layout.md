# CSS Grid Layout

CSS Grid is a powerful two-dimensional layout system that makes it easy to create complex, responsive layouts.

## Grid Container

To use Grid, set `display: grid` on the parent container:

```css
.container {
    display: grid;
}
```

## Grid Template Columns

Define the column structure:

```css
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px; /* 3 columns of 200px */
}

/* Using fr (fraction) units */
grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
grid-template-columns: 2fr 1fr 1fr; /* First column twice as wide */

/* Using repeat() */
grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */

/* Mixed units */
grid-template-columns: 200px 1fr 2fr;
```

## Grid Template Rows

Define the row structure:

```css
.container {
    display: grid;
    grid-template-rows: 100px 200px 100px;
}

/* Auto rows */
grid-auto-rows: 150px;
grid-auto-rows: minmax(100px, auto);
```

## Gap (Spacing)

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; /* Both row and column gap */
}

/* Separate gaps */
row-gap: 20px;
column-gap: 30px;

/* Old syntax (still supported) */
grid-gap: 20px;
grid-row-gap: 20px;
grid-column-gap: 30px;
```

## Grid Item Placement

```css
.item {
    /* Span columns */
    grid-column: 1 / 3; /* Start at line 1, end at line 3 */
    grid-column: span 2; /* Span 2 columns */
    
    /* Span rows */
    grid-row: 1 / 3;
    grid-row: span 2;
    
    /* Shorthand */
    grid-area: 1 / 1 / 3 / 3; /* row-start / col-start / row-end / col-end */
}
```

## Grid Template Areas

```css
.container {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Alignment

```css
.container {
    /* Align items horizontally */
    justify-items: start | end | center | stretch;
    
    /* Align items vertically */
    align-items: start | end | center | stretch;
    
    /* Align grid horizontally */
    justify-content: start | end | center | stretch | space-between | space-around | space-evenly;
    
    /* Align grid vertically */
    align-content: start | end | center | stretch | space-between | space-around | space-evenly;
}

/* Individual item alignment */
.item {
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
}
```

## Complete Grid Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Grid Layout</title>
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
        
        /* Basic Grid */
        .grid-basic {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .grid-basic .item {
            background-color: #3498db;
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 5px;
        }
        
        /* Grid with Template Areas */
        .grid-layout {
            display: grid;
            grid-template-areas:
                "header header header"
                "sidebar main main"
                "footer footer footer";
            grid-template-columns: 200px 1fr 1fr;
            grid-template-rows: auto 400px auto;
            gap: 15px;
            margin-bottom: 40px;
        }
        
        .header {
            grid-area: header;
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .sidebar {
            grid-area: sidebar;
            background-color: #34495e;
            color: white;
            padding: 20px;
        }
        
        .main {
            grid-area: main;
            background-color: #ecf0f1;
            padding: 20px;
        }
        
        .footer {
            grid-area: footer;
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        /* Responsive Card Grid */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .card h3 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        /* Complex Grid */
        .complex-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 150px;
            gap: 15px;
        }
        
        .complex-grid .item {
            background-color: #9b59b6;
            color: white;
            padding: 20px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .complex-grid .item:nth-child(1) {
            grid-column: span 2;
            grid-row: span 2;
            background-color: #e74c3c;
        }
        
        .complex-grid .item:nth-child(4) {
            grid-column: span 2;
            background-color: #3498db;
        }
        
        .complex-grid .item:nth-child(7) {
            grid-row: span 2;
            background-color: #2ecc71;
        }
    </style>
</head>
<body>
    <h1>CSS Grid Examples</h1>
    
    <h2>Basic Grid (3 Columns)</h2>
    <div class="grid-basic">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
    </div>
    
    <h2>Grid with Template Areas</h2>
    <div class="grid-layout">
        <header class="header">
            <h2>Header</h2>
        </header>
        <aside class="sidebar">
            <h3>Sidebar</h3>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </aside>
        <main class="main">
            <h2>Main Content</h2>
            <p>This is the main content area that spans two columns.</p>
        </main>
        <footer class="footer">
            <p>Footer Content</p>
        </footer>
    </div>
    
    <h2>Responsive Card Grid</h2>
    <div class="card-grid">
        <div class="card">
            <h3>Card 1</h3>
            <p>Responsive grid that adapts to screen size.</p>
        </div>
        <div class="card">
            <h3>Card 2</h3>
            <p>Cards automatically wrap to new rows.</p>
        </div>
        <div class="card">
            <h3>Card 3</h3>
            <p>Minimum width of 250px per card.</p>
        </div>
        <div class="card">
            <h3>Card 4</h3>
            <p>Grows to fill available space.</p>
        </div>
    </div>
    
    <h2>Complex Grid Layout</h2>
    <div class="complex-grid">
        <div class="item">Large Item</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">Wide Item</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">Tall Item</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
    </div>
</body>
</html>
```
:::

## Grid vs Flexbox

- **Grid**: Two-dimensional (rows and columns), better for overall page layouts
- **Flexbox**: One-dimensional (row or column), better for component layouts

## Practice Exercise

:::practice title="Build a Dashboard Layout"
Create a dashboard using CSS Grid:
1. Header spanning full width
2. Sidebar on the left
3. Main content area with a grid of cards
4. Footer spanning full width
5. Make it responsive with auto-fit

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <style>
        /* Add your Grid CSS here */
    </style>
</head>
<body>
    <!-- Add your dashboard structure here -->
</body>
</html>
```
:::
