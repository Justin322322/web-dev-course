# HTML Lists

Lists are used to group related items together. HTML provides three types of lists: unordered, ordered, and description lists.

## Unordered Lists

Unordered lists display items with bullet points:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

## Ordered Lists

Ordered lists display items with numbers:

```html
<ol>
    <li>Open your text editor</li>
    <li>Write your HTML code</li>
    <li>Save the file with .html extension</li>
    <li>Open the file in a browser</li>
</ol>
```

### Ordered List Attributes

```html
<!-- Start counting from 5 -->
<ol start="5">
    <li>Fifth item</li>
    <li>Sixth item</li>
</ol>

<!-- Reverse order -->
<ol reversed>
    <li>Third</li>
    <li>Second</li>
    <li>First</li>
</ol>

<!-- Different numbering types -->
<ol type="A">
    <li>Item A</li>
    <li>Item B</li>
</ol>

<ol type="I">
    <li>Item I</li>
    <li>Item II</li>
</ol>
```

## Nested Lists

You can nest lists inside other lists:

```html
<ul>
    <li>Frontend Technologies
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend Technologies
        <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>PHP</li>
        </ul>
    </li>
</ul>
```

## Description Lists

Description lists are used for term-definition pairs:

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - the structure of web pages</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - the styling of web pages</dd>
    
    <dt>JavaScript</dt>
    <dd>Programming language for interactive web pages</dd>
</dl>
```

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lists Demo</title>
</head>
<body>
    <h1>Web Development Learning Path</h1>
    
    <h2>Skills to Learn</h2>
    <ul>
        <li>HTML Fundamentals</li>
        <li>CSS Styling</li>
        <li>JavaScript Programming</li>
        <li>Responsive Design</li>
    </ul>
    
    <h2>Steps to Build a Website</h2>
    <ol>
        <li>Plan your website structure</li>
        <li>Create HTML files</li>
        <li>Add CSS styling</li>
        <li>Implement JavaScript functionality</li>
        <li>Test across different browsers</li>
        <li>Deploy to a web server</li>
    </ol>
    
    <h2>Web Technologies</h2>
    <ul>
        <li>Frontend
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
            </ul>
        </li>
        <li>Frameworks
            <ul>
                <li>React</li>
                <li>Vue</li>
                <li>Angular</li>
            </ul>
        </li>
    </ul>
    
    <h2>Glossary</h2>
    <dl>
        <dt>Element</dt>
        <dd>A component of an HTML document defined by tags</dd>
        
        <dt>Attribute</dt>
        <dd>Additional information provided within an HTML tag</dd>
        
        <dt>Tag</dt>
        <dd>Markup that defines elements in HTML</dd>
    </dl>
</body>
</html>
```
:::

## Practice Exercise

:::practice title="Create a Recipe Page"
Create a recipe page with:
1. An h1 heading with the recipe name
2. An unordered list of ingredients
3. An ordered list of cooking steps
4. A nested list for ingredient categories (e.g., "Dry ingredients" and "Wet ingredients")
5. A description list defining cooking terms

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Recipe</title>
</head>
<body>
    <!-- Add your recipe here -->
    
</body>
</html>
```
:::
