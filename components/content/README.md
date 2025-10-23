# Content Components

## CodePreview Component

The `CodePreview` component renders live previews of HTML, CSS, and JavaScript code in an isolated iframe.

### Usage in Markdown

Wrap your code blocks with `:::preview` and `:::` to create a live preview:

## PracticeEditor Component

The `PracticeEditor` component provides an interactive code editor modal with live HTML preview for practice exercises.

### Usage in Markdown

Wrap your exercise with `:::practice` and `:::` to create an interactive practice editor:

```markdown
:::practice title="Create Your First Heading"
Try creating an h1 heading with your name:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Practice</title>
  </head>
  <body>
    <!-- Add your h1 heading here -->
  </body>
</html>
```
:::
```

### Parameters

- `title` (optional): Set the exercise title (default: "Practice Exercise")
  - Example: `:::practice title="Build a Button"`

### Features

- Interactive code editor with syntax highlighting
- Live HTML preview in split-screen layout
- Instructions panel for guidance
- Reset button to restore initial code
- Run button to refresh preview
- Modal interface for focused practice
- Responsive design for mobile and desktop

```markdown
:::preview height="300px"
```html
<h1>Hello World</h1>
<p>This is a paragraph.</p>
```

```css
h1 {
    color: blue;
}
```

```js
console.log('Hello from JavaScript!');
```
:::
```

### Parameters

- `height` (optional): Set the preview height (default: "300px")
  - Example: `:::preview height="500px"`

### Features

- Live rendering of HTML, CSS, and JavaScript
- Isolated iframe environment
- Refresh button to reset the preview
- Dark mode compatible
- Sandboxed for security

### Examples

#### HTML Only
```markdown
:::preview height="100px"
```html
<p>Simple HTML preview</p>
```
:::
```

#### HTML + CSS
```markdown
:::preview height="200px"
```html
<div class="box">Styled Box</div>
```

```css
.box {
    background: blue;
    color: white;
    padding: 20px;
}
```
:::
```

#### HTML + CSS + JavaScript
```markdown
:::preview height="150px"
```html
<button onclick="handleClick()">Click Me</button>
<p id="output"></p>
```

```css
button {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

```js
function handleClick() {
    document.getElementById('output').textContent = 'Button clicked!';
}
```
:::
```
