# HTML Attributes

Attributes provide additional information about HTML elements. They are always specified in the opening tag and usually come in name/value pairs.

## What are Attributes?

Attributes modify the behavior or appearance of HTML elements. They follow this syntax:

```html
<element attribute="value">Content</element>
```

## Common Global Attributes

These attributes can be used on almost any HTML element:

### id Attribute

The `id` attribute provides a unique identifier for an element:

```html
<h1 id="main-title">Welcome</h1>
<p id="intro">This is the introduction.</p>
```

**Rules:**
- Must be unique on the page
- Cannot contain spaces
- Case-sensitive

### class Attribute

The `class` attribute assigns one or more class names for styling:

```html
<p class="highlight">This paragraph is highlighted.</p>
<div class="card featured">This has multiple classes.</div>
```

### title Attribute

Provides additional information (shown as a tooltip on hover):

```html
<p title="This is a tooltip">Hover over me!</p>
<abbr title="HyperText Markup Language">HTML</abbr>
```

### style Attribute

Adds inline CSS styles:

```html
<p style="color: blue; font-size: 18px;">Styled text</p>
```

**Note:** External CSS is preferred over inline styles.

## Data Attributes

Custom attributes for storing extra information:

```html
<div data-user-id="12345" data-role="admin">User Info</div>
<button data-action="delete" data-item-id="42">Delete</button>
```

## Element-Specific Attributes

### Link Attributes

```html
<a href="https://example.com" target="_blank" rel="noopener">
    External Link
</a>
```

- `href`: URL destination
- `target`: Where to open (_blank, _self, _parent, _top)
- `rel`: Relationship (noopener, nofollow, etc.)

### Image Attributes

```html
<img src="photo.jpg" alt="Description" width="300" height="200">
```

- `src`: Image source (required)
- `alt`: Alternative text (required for accessibility)
- `width` and `height`: Dimensions in pixels

### Input Attributes

```html
<input type="text" name="username" placeholder="Enter username" required>
<input type="email" name="email" disabled>
<input type="checkbox" name="agree" checked>
```

## Boolean Attributes

Some attributes don't need values:

```html
<input type="text" required>
<input type="checkbox" checked>
<button disabled>Click Me</button>
<video controls autoplay muted></video>
```

## Complete Example

:::preview height="500px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Attributes Demo</title>
    <style>
        .highlight {
            background-color: yellow;
            padding: 10px;
        }
        .card {
            border: 2px solid #333;
            padding: 20px;
            margin: 10px 0;
            border-radius: 8px;
        }
        .featured {
            background-color: #e3f2fd;
        }
    </style>
</head>
<body>
    <h1 id="main-heading" title="This is the main heading">HTML Attributes</h1>
    
    <div class="card featured" data-priority="high">
        <h2>Featured Content</h2>
        <p class="highlight">This paragraph uses the <strong>class</strong> attribute.</p>
    </div>
    
    <div class="card">
        <h2>Links and Images</h2>
        <a href="https://developer.mozilla.org" target="_blank" rel="noopener">
            MDN Web Docs
        </a>
        <br><br>
        <img src="https://via.placeholder.com/150" alt="Placeholder image" width="150">
    </div>
    
    <div class="card">
        <h2>Form Elements</h2>
        <input type="text" placeholder="Type something..." title="Enter your text here">
        <br><br>
        <button disabled title="This button is disabled">Can't Click Me</button>
    </div>
</body>
</html>
```
:::

## Practice Exercise

:::practice title="Working with Attributes"
Create a page that demonstrates various attributes:
1. Add an h1 with an id and title attribute
2. Create two divs with different class names
3. Add a link that opens in a new tab
4. Include an image with alt text
5. Add a data attribute to store custom information
6. Create a disabled button

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Attributes Practice</title>
    <style>
        .box {
            border: 1px solid black;
            padding: 20px;
            margin: 10px;
        }
        .special {
            background-color: lightblue;
        }
    </style>
</head>
<body>
    <!-- Add your HTML here -->
    
</body>
</html>
```
:::
