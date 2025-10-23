# Introduction to JavaScript

JavaScript is a programming language that makes websites interactive. While HTML provides structure and CSS provides style, JavaScript provides behavior and functionality.

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that runs in web browsers. It allows you to:
- Respond to user actions (clicks, typing, etc.)
- Manipulate HTML and CSS dynamically
- Fetch data from servers
- Create animations and interactive features

## Adding JavaScript to HTML

### 1. Inline JavaScript

```html
<button onclick="alert('Hello!')">Click Me</button>
```

### 2. Internal JavaScript

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Demo</title>
</head>
<body>
    <h1 id="heading">Hello World</h1>
    
    <script>
        document.getElementById('heading').style.color = 'blue';
    </script>
</body>
</html>
```

### 3. External JavaScript (Recommended)

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Demo</title>
</head>
<body>
    <h1 id="heading">Hello World</h1>
    <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js
document.getElementById('heading').style.color = 'blue';
```

## Your First JavaScript Program

```javascript
// Display a message in the console
console.log('Hello, JavaScript!');

// Display an alert box
alert('Welcome to JavaScript!');

// Change HTML content
document.getElementById('demo').innerHTML = 'JavaScript is awesome!';
```

## Variables

Variables store data values:

```javascript
// Modern way (ES6+)
let name = 'John';
let age = 25;
const PI = 3.14159;

// Old way (avoid)
var oldVariable = 'value';
```

## Data Types

```javascript
// String
let text = 'Hello World';
let text2 = "Also a string";

// Number
let number = 42;
let decimal = 3.14;

// Boolean
let isTrue = true;
let isFalse = false;

// Array
let colors = ['red', 'green', 'blue'];

// Object
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Undefined
let notDefined;

// Null
let empty = null;
```

## Basic Operations

```javascript
// Arithmetic
let sum = 10 + 5;        // 15
let difference = 10 - 5; // 5
let product = 10 * 5;    // 50
let quotient = 10 / 5;   // 2
let remainder = 10 % 3;  // 1

// String concatenation
let greeting = 'Hello' + ' ' + 'World'; // "Hello World"
let name = 'John';
let message = `Hello, ${name}!`; // Template literal

// Comparison
10 == '10'   // true (loose equality)
10 === '10'  // false (strict equality)
10 != 5      // true
10 > 5       // true
10 <= 10     // true
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Introduction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        button {
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>JavaScript Demo</h1>
    <p id="output">Click a button to see JavaScript in action!</p>
    
    <button onclick="changeText()">Change Text</button>
    <button onclick="changeColor()">Change Color</button>
    <button onclick="showAlert()">Show Alert</button>
    
    <script>
        function changeText() {
            document.getElementById('output').innerHTML = 'Text changed by JavaScript!';
        }
        
        function changeColor() {
            document.getElementById('output').style.color = 'blue';
        }
        
        function showAlert() {
            alert('Hello from JavaScript!');
        }
        
        // Log to console
        console.log('Page loaded successfully!');
    </script>
</body>
</html>
```

## Practice Exercise

Create an HTML page with JavaScript that:
- Displays your name in an h1 element
- Has a button that changes the text color
- Has a button that shows an alert
- Logs a message to the console
- Uses variables to store and display information
