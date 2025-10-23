# HTML Text Elements

HTML provides various elements to structure and format text content on your webpage. Let's explore the most commonly used text elements.

## Headings

HTML has six levels of headings, from `<h1>` (most important) to `<h6>` (least important):

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

**Best Practice**: Use only one `<h1>` per page for the main title, and use other headings to create a logical hierarchy.

## Paragraphs

The `<p>` element defines a paragraph of text:

```html
<p>This is a paragraph. It can contain multiple sentences and will automatically add spacing before and after.</p>
<p>This is another paragraph. Browsers automatically add space between paragraphs.</p>
```

## Text Formatting

HTML provides several elements for formatting text:

```html
<strong>This text is bold and important</strong>
<em>This text is italic and emphasized</em>
<mark>This text is highlighted</mark>
<small>This text is smaller</small>
<del>This text is deleted/strikethrough</del>
<ins>This text is inserted/underlined</ins>
<sub>This is subscript</sub>
<sup>This is superscript</sup>
```

## Line Breaks and Horizontal Rules

```html
<p>This is the first line.<br>This is the second line.</p>
<hr>
<p>The horizontal rule above creates a thematic break.</p>
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Text Elements Demo</title>
</head>
<body>
    <h1>My Blog Post</h1>
    <p>Published on <time>January 15, 2024</time></p>
    
    <h2>Introduction</h2>
    <p>This is a <strong>very important</strong> topic that everyone should know about.</p>
    
    <h2>Main Content</h2>
    <p>Here's some <em>emphasized text</em> and some <mark>highlighted information</mark>.</p>
    
    <hr>
    
    <p><small>Copyright 2024. All rights reserved.</small></p>
</body>
</html>
```

## Practice Exercise

Create a simple blog post using headings, paragraphs, and text formatting elements. Include at least:
- One main heading
- Two subheadings
- Three paragraphs
- Bold and italic text
- A horizontal rule
