# CSS Specificity and Cascade

Understanding how CSS rules are applied when multiple rules target the same element is crucial for writing maintainable stylesheets.

## The Cascade

CSS stands for "Cascading Style Sheets." When multiple rules apply to an element, the cascade determines which rule wins.

### Order Matters

When rules have equal specificity, the last one wins:

```css
p {
    color: red;
}

p {
    color: blue;  /* This wins - it comes last */
}
```

:::preview height="100px"
```html
<style>
    .demo1 { color: red; }
    .demo1 { color: blue; }
</style>
<p class="demo1">This text is blue</p>
```
:::

## Specificity

Specificity determines which rule is more specific and should be applied.

### Specificity Hierarchy

From lowest to highest specificity:

1. **Element selectors** (1 point)
2. **Class selectors** (10 points)
3. **ID selectors** (100 points)
4. **Inline styles** (1000 points)

### Calculating Specificity

```css
/* Specificity: 1 (element) */
p {
    color: black;
}

/* Specificity: 10 (class) */
.text {
    color: blue;
}

/* Specificity: 100 (ID) */
#main {
    color: red;
}

/* Specificity: 1000 (inline) */
/* <p style="color: green;">Text</p> */
```

:::preview height="150px"
```html
<style>
    p { color: black; }
    .text { color: blue; }
    #main { color: red; }
</style>

<p>Element selector (black)</p>
<p class="text">Class selector wins (blue)</p>
<p id="main" class="text">ID selector wins (red)</p>
<p style="color: green;" id="main" class="text">Inline style wins (green)</p>
```
:::

### Complex Selectors

Add up the specificity values:

```css
/* Specificity: 1 (p) */
p {
    color: black;
}

/* Specificity: 11 (p + .intro) */
p.intro {
    color: blue;
}

/* Specificity: 101 (p + #main) */
p#main {
    color: red;
}

/* Specificity: 20 (.container + .text) */
.container .text {
    color: green;
}

/* Specificity: 21 (div + .container + .text) */
div.container .text {
    color: purple;
}
```


## The !important Rule

`!important` overrides all other declarations:

```css
p {
    color: red !important;
}

#main {
    color: blue;  /* Won't apply - !important wins */
}
```

**Warning:** Avoid `!important` - it makes debugging difficult!

:::preview height="100px"
```html
<style>
    .normal { color: blue; }
    .important { color: red !important; }
    #override { color: green; }
</style>
<p class="important" id="override">This is red due to !important</p>
```
:::

## Inheritance

Some CSS properties are inherited from parent elements:

### Inherited Properties

```css
/* These inherit by default */
color
font-family
font-size
font-weight
line-height
text-align
```

:::preview height="150px"
```html
<style>
    .parent {
        color: blue;
        font-family: Arial;
        border: 2px solid red;
    }
</style>
<div class="parent">
    Parent text (blue, Arial, has border)
    <p>Child text (inherits blue and Arial, but NOT border)</p>
</div>
```
:::

### Non-Inherited Properties

```css
/* These do NOT inherit */
margin
padding
border
width
height
background
```

### Controlling Inheritance

```css
/* Force inheritance */
.child {
    border: inherit;
}

/* Use initial value */
.child {
    color: initial;
}

/* Inherit from parent */
.child {
    all: inherit;
}

/* Reset to default */
.child {
    all: unset;
}
```

## Complete Example

:::preview height="600px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Specificity Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            line-height: 1.6;
        }
        
        /* Specificity: 1 */
        p {
            color: gray;
            padding: 10px;
            background: #f0f0f0;
            margin: 10px 0;
        }
        
        /* Specificity: 10 */
        .highlight {
            color: blue;
            background: #e3f2fd;
        }
        
        /* Specificity: 11 */
        p.highlight {
            color: darkblue;
            font-weight: bold;
        }
        
        /* Specificity: 100 */
        #special {
            color: red;
            background: #ffebee;
        }
        
        /* Specificity: 110 */
        #special.highlight {
            color: darkred;
            border: 2px solid red;
        }
        
        /* Inheritance demo */
        .parent {
            color: green;
            border: 3px solid green;
            padding: 15px;
            margin: 20px 0;
        }
        
        .parent p {
            background: #e8f5e9;
        }
        
        /* Specificity comparison */
        .container {
            background: #f5f5f5;
            padding: 15px;
            margin: 20px 0;
        }
        
        .container p {
            color: purple;
        }
        
        .container .text {
            color: orange;
        }
        
        .container p.text {
            color: brown;
        }
    </style>
</head>
<body>
    <h1>CSS Specificity Examples</h1>
    
    <h2>Basic Specificity</h2>
    <p>Element selector (gray)</p>
    <p class="highlight">Class selector (blue)</p>
    <p id="special">ID selector (red)</p>
    <p id="special" class="highlight">ID + Class (darkred with border)</p>
    
    <h2>Inheritance</h2>
    <div class="parent">
        Parent div (green text, green border)
        <p>Child paragraph (inherits green text, NOT border)</p>
    </div>
    
    <h2>Specificity Comparison</h2>
    <div class="container">
        <p>Specificity: 11 (.container p) - purple</p>
        <p class="text">Specificity: 20 (.container .text) - orange</p>
        <p class="text">Specificity: 21 (.container p.text) - brown</p>
    </div>
    
    <h2>Order Matters</h2>
    <style>
        .order-demo { color: red; }
        .order-demo { color: blue; }
    </style>
    <p class="order-demo">Last rule wins (blue)</p>
</body>
</html>
```
:::

## Best Practices

1. **Keep specificity low** - Easier to override later
2. **Avoid IDs for styling** - Use classes instead
3. **Never use !important** - Unless absolutely necessary
4. **Use classes over element selectors** - More maintainable
5. **Organize CSS logically** - General to specific

## Specificity Calculator

```
Inline style:     1000
ID:               100
Class/Attribute:  10
Element:          1

Examples:
p                    = 1
.class               = 10
#id                  = 100
p.class              = 11
div p.class          = 12
#id .class p         = 111
```

## Practice Exercise

:::practice title="Understanding Specificity"
Create styles with different specificity levels:
1. Style all paragraphs with gray text
2. Add a .highlight class with blue text
3. Create an #important ID with red text
4. Test which rule wins when combined
5. Create a parent div that passes color to children
6. Override a style without using !important

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Specificity Practice</title>
    <style>
        /* Add your styles here */
        
    </style>
</head>
<body>
    <p>Normal paragraph</p>
    <p class="highlight">Highlighted paragraph</p>
    <p id="important">Important paragraph</p>
    <p id="important" class="highlight">Both ID and class</p>
    
    <div class="parent">
        Parent
        <p>Child paragraph</p>
    </div>
</body>
</html>
```
:::
