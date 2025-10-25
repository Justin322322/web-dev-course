# CSS Pseudo-classes and Pseudo-elements

Pseudo-classes and pseudo-elements allow you to style elements based on their state or position, and to style specific parts of elements.

## Pseudo-classes

Pseudo-classes select elements based on their state or position. They use a single colon `:`.

### Link and User Action Pseudo-classes

```css
/* Unvisited link */
a:link {
    color: blue;
}

/* Visited link */
a:visited {
    color: purple;
}

/* Mouse hover */
a:hover {
    color: red;
    text-decoration: underline;
}

/* Active (being clicked) */
a:active {
    color: orange;
}

/* Keyboard focus */
input:focus {
    border-color: blue;
    outline: 2px solid lightblue;
}
```

:::preview height="200px"
```html
<style>
    .demo-link {
        color: blue;
        text-decoration: none;
        padding: 10px;
        display: inline-block;
    }
    .demo-link:hover {
        color: red;
        background: #f0f0f0;
    }
    .demo-input:focus {
        border: 2px solid blue;
        outline: none;
    }
</style>

<a href="#" class="demo-link">Hover over this link</a>
<br><br>
<input type="text" class="demo-input" placeholder="Click to focus">
```
:::

### Structural Pseudo-classes

```css
/* First child */
li:first-child {
    font-weight: bold;
}

/* Last child */
li:last-child {
    border-bottom: none;
}

/* Nth child */
li:nth-child(2) {
    color: blue;
}

/* Odd rows */
tr:nth-child(odd) {
    background: #f0f0f0;
}

/* Even rows */
tr:nth-child(even) {
    background: white;
}

/* Every 3rd element */
li:nth-child(3n) {
    color: red;
}
```

:::preview height="250px"
```html
<style>
    .demo-list li {
        padding: 8px;
        border-bottom: 1px solid #ddd;
    }
    .demo-list li:first-child {
        font-weight: bold;
        background: #e3f2fd;
    }
    .demo-list li:last-child {
        border-bottom: none;
        background: #fff3e0;
    }
    .demo-list li:nth-child(even) {
        background: #f5f5f5;
    }
</style>

<ul class="demo-list">
    <li>First item (bold, blue bg)</li>
    <li>Second item (gray bg)</li>
    <li>Third item</li>
    <li>Fourth item (gray bg)</li>
    <li>Last item (orange bg)</li>
</ul>
```
:::

### Form Pseudo-classes

```css
/* Enabled input */
input:enabled {
    background: white;
}

/* Disabled input */
input:disabled {
    background: #f0f0f0;
    cursor: not-allowed;
}

/* Checked checkbox/radio */
input:checked {
    accent-color: green;
}

/* Required field */
input:required {
    border-left: 3px solid red;
}

/* Optional field */
input:optional {
    border-left: 3px solid gray;
}

/* Valid input */
input:valid {
    border-color: green;
}

/* Invalid input */
input:invalid {
    border-color: red;
}
```


:::preview height="250px"
```html
<style>
    .form-demo input {
        display: block;
        margin: 10px 0;
        padding: 8px;
        border: 2px solid #ddd;
    }
    .form-demo input:focus {
        border-color: blue;
        outline: none;
    }
    .form-demo input:disabled {
        background: #f0f0f0;
        cursor: not-allowed;
    }
    .form-demo input:valid {
        border-color: green;
    }
    .form-demo input:invalid {
        border-color: red;
    }
</style>

<form class="form-demo">
    <input type="text" placeholder="Normal input">
    <input type="email" placeholder="Email (try invalid)" required>
    <input type="text" value="Disabled" disabled>
</form>
```
:::

### Other Useful Pseudo-classes

```css
/* Empty element */
p:empty {
    display: none;
}

/* Not selector */
li:not(.special) {
    color: gray;
}

/* Only child */
p:only-child {
    font-weight: bold;
}

/* Target (from URL hash) */
:target {
    background: yellow;
}
```

## Pseudo-elements

Pseudo-elements style specific parts of elements. They use double colons `::`.

### ::before and ::after

Insert content before or after an element:

```css
.quote::before {
    content: '"';
    font-size: 2em;
    color: gray;
}

.quote::after {
    content: '"';
    font-size: 2em;
    color: gray;
}

/* Decorative elements */
.badge::after {
    content: 'NEW';
    background: red;
    color: white;
    padding: 2px 6px;
    margin-left: 10px;
    border-radius: 3px;
    font-size: 0.8em;
}
```

:::preview height="200px"
```html
<style>
    .quote {
        font-style: italic;
        padding: 20px;
        background: #f5f5f5;
    }
    .quote::before {
        content: '"';
        font-size: 3em;
        color: #3498db;
        line-height: 0;
        margin-right: 5px;
    }
    .quote::after {
        content: '"';
        font-size: 3em;
        color: #3498db;
        line-height: 0;
        margin-left: 5px;
    }
    .badge::after {
        content: 'NEW';
        background: #e74c3c;
        color: white;
        padding: 3px 8px;
        margin-left: 10px;
        border-radius: 3px;
        font-size: 0.7em;
        font-weight: bold;
    }
</style>

<p class="quote">This is a quoted text with decorative quotes</p>
<p class="badge">Product Name</p>
```
:::

### ::first-letter and ::first-line

```css
/* Style first letter */
p::first-letter {
    font-size: 3em;
    font-weight: bold;
    color: #3498db;
    float: left;
    margin-right: 5px;
}

/* Style first line */
p::first-line {
    font-weight: bold;
    color: #2c3e50;
}
```

:::preview height="200px"
```html
<style>
    .drop-cap::first-letter {
        font-size: 3em;
        font-weight: bold;
        color: #3498db;
        float: left;
        line-height: 0.8;
        margin-right: 8px;
        margin-top: 5px;
    }
    .first-line::first-line {
        font-weight: bold;
        color: #e74c3c;
    }
</style>

<p class="drop-cap">This paragraph has a drop cap. The first letter is styled differently to create a magazine-style effect.</p>
<p class="first-line">This paragraph has its first line styled in bold red. The rest of the text remains normal.</p>
```
:::

### ::selection

Style selected text:

```css
::selection {
    background: #3498db;
    color: white;
}
```

:::preview height="100px"
```html
<style>
    .selectable::selection {
        background: #3498db;
        color: white;
    }
</style>

<p class="selectable">Try selecting this text to see the custom selection color!</p>
```
:::

### ::placeholder

Style input placeholders:

```css
input::placeholder {
    color: #999;
    font-style: italic;
}
```

:::preview height="100px"
```html
<style>
    .styled-input::placeholder {
        color: #3498db;
        font-style: italic;
        opacity: 0.7;
    }
</style>

<input type="text" class="styled-input" placeholder="Styled placeholder text">
```
:::

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pseudo-classes & Pseudo-elements</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        /* Navigation with hover effects */
        .nav {
            list-style: none;
            padding: 0;
            background: #2c3e50;
            display: flex;
        }
        
        .nav li {
            flex: 1;
        }
        
        .nav a {
            display: block;
            padding: 15px;
            color: white;
            text-decoration: none;
            text-align: center;
        }
        
        .nav a:hover {
            background: #34495e;
        }
        
        .nav a:active {
            background: #1a252f;
        }
        
        /* Striped table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        tr:nth-child(odd) {
            background: #f8f9fa;
        }
        
        tr:hover {
            background: #e3f2fd;
        }
        
        td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        
        /* Form styling */
        .form-group {
            margin: 15px 0;
        }
        
        input[type="text"],
        input[type="email"] {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 4px;
        }
        
        input:focus {
            border-color: #3498db;
            outline: none;
        }
        
        input:valid {
            border-color: #27ae60;
        }
        
        input:invalid:not(:placeholder-shown) {
            border-color: #e74c3c;
        }
        
        /* Pseudo-elements */
        .article::first-letter {
            font-size: 2.5em;
            font-weight: bold;
            color: #3498db;
            float: left;
            line-height: 0.8;
            margin-right: 8px;
            margin-top: 5px;
        }
        
        .badge::after {
            content: 'Popular';
            background: #e74c3c;
            color: white;
            padding: 3px 8px;
            margin-left: 10px;
            border-radius: 3px;
            font-size: 0.7em;
            font-weight: bold;
        }
        
        ::selection {
            background: #3498db;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Pseudo-classes & Pseudo-elements Demo</h1>
    
    <h2>Navigation (Hover Effects)</h2>
    <ul class="nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    
    <h2 class="badge">Striped Table</h2>
    <table>
        <tr>
            <td>Row 1</td>
            <td>Data</td>
        </tr>
        <tr>
            <td>Row 2</td>
            <td>Data</td>
        </tr>
        <tr>
            <td>Row 3</td>
            <td>Data</td>
        </tr>
        <tr>
            <td>Row 4</td>
            <td>Data</td>
        </tr>
    </table>
    
    <h2>Form Validation</h2>
    <div class="form-group">
        <input type="email" placeholder="Enter your email" required>
    </div>
    
    <h2>Drop Cap Article</h2>
    <p class="article">Lorem ipsum dolor sit amet, consectetur adipiscing elit. This paragraph demonstrates a drop cap effect using the ::first-letter pseudo-element. Try selecting text to see custom selection colors!</p>
</body>
</html>
```
:::

## Practice Exercise

:::practice title="Pseudo-classes and Pseudo-elements"
Create an interactive page using pseudo-classes and pseudo-elements:
1. Style links with :hover and :active
2. Create a striped list using :nth-child
3. Add focus styles to inputs
4. Use ::before to add icons
5. Create a drop cap with ::first-letter
6. Style ::selection

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pseudo Practice</title>
    <style>
        /* Add your styles here */
        
    </style>
</head>
<body>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
    
    <input type="text" placeholder="Focus me">
    
    <p>This paragraph should have a drop cap.</p>
</body>
</html>
```
:::
