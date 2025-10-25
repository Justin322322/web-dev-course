# HTML Entities

HTML entities are special codes used to display reserved characters and symbols that have special meaning in HTML or cannot be easily typed on a keyboard.

## Why Use HTML Entities?

Some characters are reserved in HTML and need to be represented as entities:

```html
<!-- Wrong: Browser interprets < as start of tag -->
<p>Use the <div> tag</p>

<!-- Correct: Use entity -->
<p>Use the &lt;div&gt; tag</p>
```

## Entity Syntax

HTML entities can be written in two ways:

```html
<!-- Named entity -->
&entity_name;

<!-- Numeric entity -->
&#entity_number;
```

## Reserved Characters

These characters have special meaning in HTML:

```html
&lt;    <!-- < (less than) -->
&gt;    <!-- > (greater than) -->
&amp;   <!-- & (ampersand) -->
&quot;  <!-- " (double quote) -->
&apos;  <!-- ' (apostrophe) -->
```

### Example

:::preview height="150px"
```html
<p>To create a paragraph, use &lt;p&gt; tags.</p>
<p>The &amp; symbol is called an ampersand.</p>
<p>She said, &quot;Hello!&quot;</p>
```
:::

## Common Symbols

### Copyright and Trademarks

```html
&copy;   <!-- © (copyright) -->
&reg;    <!-- ® (registered trademark) -->
&trade;  <!-- ™ (trademark) -->
```

:::preview height="100px"
```html
<p>&copy; 2024 My Company&reg;</p>
<p>Product Name&trade;</p>
```
:::

### Currency Symbols

```html
&dollar;  <!-- $ (dollar) -->
&euro;    <!-- € (euro) -->
&pound;   <!-- £ (pound) -->
&yen;     <!-- ¥ (yen) -->
&cent;    <!-- ¢ (cent) -->
```

:::preview height="100px"
```html
<p>Price: &dollar;99.99</p>
<p>Price: &euro;85.50</p>
<p>Price: &pound;75.00</p>
```
:::

## Mathematical Symbols

```html
&times;   <!-- × (multiplication) -->
&divide;  <!-- ÷ (division) -->
&minus;   <!-- − (minus) -->
&plusmn;  <!-- ± (plus-minus) -->
&ne;      <!-- ≠ (not equal) -->
&le;      <!-- ≤ (less than or equal) -->
&ge;      <!-- ≥ (greater than or equal) -->
&deg;     <!-- ° (degree) -->
&frac14;  <!-- ¼ (one quarter) -->
&frac12;  <!-- ½ (one half) -->
&frac34;  <!-- ¾ (three quarters) -->
```

:::preview height="150px"
```html
<p>5 &times; 3 = 15</p>
<p>10 &divide; 2 = 5</p>
<p>Temperature: 25&deg;C</p>
<p>Recipe: &frac12; cup of sugar</p>
```
:::

## Spacing Entities

```html
&nbsp;    <!-- Non-breaking space -->
&ensp;    <!-- En space (half em) -->
&emsp;    <!-- Em space (full em) -->
```

:::preview height="100px"
```html
<p>First&nbsp;&nbsp;&nbsp;&nbsp;Second</p>
<p>Multiple&emsp;spaces&emsp;here</p>
```
:::

## Arrows and Symbols

```html
&larr;    <!-- ← (left arrow) -->
&rarr;    <!-- → (right arrow) -->
&uarr;    <!-- ↑ (up arrow) -->
&darr;    <!-- ↓ (down arrow) -->
&harr;    <!-- ↔ (left-right arrow) -->
&spades;  <!-- ♠ (spade) -->
&clubs;   <!-- ♣ (club) -->
&hearts;  <!-- ♥ (heart) -->
&diams;   <!-- ♦ (diamond) -->
```

:::preview height="150px"
```html
<p>Navigate: &larr; Previous | Next &rarr;</p>
<p>Scroll &uarr; to top</p>
<p>Card suits: &spades; &clubs; &hearts; &diams;</p>
```
:::

## Accented Characters

```html
&aacute;  <!-- á -->
&eacute;  <!-- é -->
&iacute;  <!-- í -->
&oacute;  <!-- ó -->
&uacute;  <!-- ú -->
&ntilde;  <!-- ñ -->
&Aacute;  <!-- Á -->
&Eacute;  <!-- É -->
```

:::preview height="100px"
```html
<p>Caf&eacute;</p>
<p>Espa&ntilde;a</p>
<p>R&eacute;sum&eacute;</p>
```
:::

## Numeric Entities

You can also use numeric codes:

```html
<!-- Decimal -->
&#169;   <!-- © -->
&#8364;  <!-- € -->

<!-- Hexadecimal -->
&#x00A9; <!-- © -->
&#x20AC; <!-- € -->
```

## Complete Example

:::preview height="500px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Entities Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .section {
            background-color: #f5f5f5;
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
        }
        code {
            background-color: #e0e0e0;
            padding: 2px 5px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <h1>HTML Entities Reference</h1>
    
    <div class="section">
        <h2>Reserved Characters</h2>
        <p>To display &lt;div&gt; tags, use entities.</p>
        <p>The &amp; symbol must be escaped.</p>
    </div>
    
    <div class="section">
        <h2>Copyright &amp; Legal</h2>
        <p>&copy; 2024 Company Name&reg;</p>
        <p>Product&trade; is our trademark.</p>
    </div>
    
    <div class="section">
        <h2>Pricing</h2>
        <p>Standard: &dollar;29.99</p>
        <p>Premium: &euro;49.99</p>
        <p>Enterprise: &pound;99.99</p>
    </div>
    
    <div class="section">
        <h2>Mathematics</h2>
        <p>5 &times; 3 = 15</p>
        <p>20 &divide; 4 = 5</p>
        <p>Temperature: 72&deg;F</p>
        <p>Recipe: &frac34; cup flour</p>
    </div>
    
    <div class="section">
        <h2>Navigation</h2>
        <p>&larr; Previous | Next &rarr;</p>
        <p>Scroll &uarr; to top | &darr; to bottom</p>
    </div>
    
    <div class="section">
        <h2>International</h2>
        <p>Caf&eacute; in Espa&ntilde;a</p>
        <p>R&eacute;sum&eacute; required</p>
    </div>
</body>
</html>
```
:::

## Practice Exercise

:::practice title="Using HTML Entities"
Create a page that uses various HTML entities:
1. Display code examples using &lt; and &gt;
2. Add a copyright notice with &copy;
3. Show prices in different currencies
4. Include mathematical expressions
5. Add navigation arrows
6. Use accented characters in text

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Entities Practice</title>
</head>
<body>
    <h1>HTML Entities Practice</h1>
    
    <!-- Add your content here using various entities -->
    
</body>
</html>
```
:::
