# JavaScript Modules

Modules allow you to break your code into separate files, making it more organized, reusable, and maintainable. ES6 introduced a standardized module system for JavaScript.

## Why Use Modules?

- **Organization**: Split code into logical files
- **Reusability**: Import code across multiple files
- **Encapsulation**: Keep variables private by default
- **Maintainability**: Easier to find and fix bugs
- **Dependency management**: Clear dependencies between files

## Export

Export values from a module to make them available to other files.

### Named Exports

Export multiple values from a file:

```javascript
// math.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export class Calculator {
    multiply(a, b) {
        return a * b;
    }
}
```

Alternative syntax:

```javascript
// math.js
const PI = 3.14159;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export at the end
export { PI, add, subtract };
```

### Default Export

Export a single main value from a file:

```javascript
// calculator.js
export default class Calculator {
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
}
```

Or with functions:

```javascript
// greet.js
export default function greet(name) {
    return `Hello, ${name}!`;
}
```

### Mixing Named and Default Exports

```javascript
// utils.js
export default function mainFunction() {
    return 'Main function';
}

export const helper1 = () => 'Helper 1';
export const helper2 = () => 'Helper 2';
```

## Import

Import values from other modules.

### Named Imports

```javascript
// app.js
import { PI, add, subtract } from './math.js';

console.log(PI);           // 3.14159
console.log(add(5, 3));    // 8
console.log(subtract(5, 3)); // 2
```

### Import All

```javascript
// app.js
import * as math from './math.js';

console.log(math.PI);           // 3.14159
console.log(math.add(5, 3));    // 8
console.log(math.subtract(5, 3)); // 2
```

### Default Import

```javascript
// app.js
import Calculator from './calculator.js';

const calc = new Calculator();
console.log(calc.add(5, 3));  // 8
```

You can name default imports anything:

```javascript
import MyCalculator from './calculator.js';
import Calc from './calculator.js';
```

### Mixing Imports

```javascript
// app.js
import mainFunction, { helper1, helper2 } from './utils.js';

console.log(mainFunction());  // 'Main function'
console.log(helper1());       // 'Helper 1'
```

### Renaming Imports

```javascript
// app.js
import { add as sum, subtract as minus } from './math.js';

console.log(sum(5, 3));    // 8
console.log(minus(5, 3));  // 2
```

## Using Modules in HTML

Add `type="module"` to script tags:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Modules Demo</title>
</head>
<body>
    <h1>JavaScript Modules</h1>
    <div id="output"></div>
    
    <!-- Module script -->
    <script type="module" src="app.js"></script>
</body>
</html>
```

Or inline:

```html
<script type="module">
    import { add } from './math.js';
    console.log(add(5, 3));
</script>
```

## Module Features

### Strict Mode

Modules automatically run in strict mode:

```javascript
// No need for 'use strict'
// Variables must be declared
x = 10;  // Error: x is not defined
```

### Module Scope

Variables are scoped to the module:

```javascript
// math.js
const privateVar = 'private';  // Not accessible outside
export const publicVar = 'public';  // Accessible when imported
```

### Deferred Execution

Modules are deferred by default (like `defer` attribute):

```javascript
// Runs after HTML is parsed
console.log(document.body);  // Always available
```

## Practical Example

### File Structure

```
project/
├── index.html
├── app.js
├── modules/
│   ├── calculator.js
│   ├── formatter.js
│   └── constants.js
```

### constants.js

```javascript
// modules/constants.js
export const TAX_RATE = 0.08;
export const CURRENCY = '$';
export const MAX_ITEMS = 100;
```

### calculator.js

```javascript
// modules/calculator.js
import { TAX_RATE } from './constants.js';

export function calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    const tax = subtotal * TAX_RATE;
    return subtotal + tax;
}

export function calculateDiscount(price, discountPercent) {
    return price * (1 - discountPercent / 100);
}
```

### formatter.js

```javascript
// modules/formatter.js
import { CURRENCY } from './constants.js';

export default function formatCurrency(amount) {
    return `${CURRENCY}${amount.toFixed(2)}`;
}

export function formatPercent(value) {
    return `${value}%`;
}
```

### app.js

```javascript
// app.js
import { calculateTotal, calculateDiscount } from './modules/calculator.js';
import formatCurrency, { formatPercent } from './modules/formatter.js';
import { MAX_ITEMS } from './modules/constants.js';

const price = 29.99;
const quantity = 3;

const total = calculateTotal(price, quantity);
console.log('Total:', formatCurrency(total));

const discounted = calculateDiscount(price, 20);
console.log('Discounted:', formatCurrency(discounted));

console.log('Max items:', MAX_ITEMS);
```


## Complete Example

:::preview height="600px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Modules Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .demo {
            background: #f5f5f5;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
        }
        button {
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            border-radius: 4px;
        }
        button:hover {
            background: #2980b9;
        }
        .output {
            background: white;
            padding: 15px;
            margin-top: 10px;
            border-radius: 4px;
            font-family: monospace;
        }
        input {
            padding: 8px;
            margin: 5px;
            border: 2px solid #ddd;
            border-radius: 4px;
            width: 100px;
        }
    </style>
</head>
<body>
    <h1>JavaScript Modules Demo</h1>
    
    <div class="demo">
        <h2>Shopping Cart Calculator</h2>
        <div>
            <label>Price: $</label>
            <input type="number" id="price" value="29.99">
            <label>Quantity:</label>
            <input type="number" id="quantity" value="3">
        </div>
        <div>
            <label>Discount %:</label>
            <input type="number" id="discount" value="10">
        </div>
        <button onclick="calculate()">Calculate</button>
        <div id="cart-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Module Structure</h2>
        <div class="output">
            <strong>File Structure:</strong><br>
            ├── index.html<br>
            ├── app.js (main module)<br>
            └── modules/<br>
            &nbsp;&nbsp;&nbsp;&nbsp;├── calculator.js (named exports)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;├── formatter.js (default + named)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;└── constants.js (named exports)<br>
            <br>
            <strong>Note:</strong> This demo simulates modules inline for preview purposes.
        </div>
    </div>
    
    <script type="module">
        // Simulating modules inline for demo
        
        // constants.js
        const TAX_RATE = 0.08;
        const CURRENCY = '$';
        const SHIPPING_THRESHOLD = 50;
        
        // calculator.js
        function calculateSubtotal(price, quantity) {
            return price * quantity;
        }
        
        function calculateTax(amount) {
            return amount * TAX_RATE;
        }
        
        function calculateTotal(price, quantity) {
            const subtotal = calculateSubtotal(price, quantity);
            const tax = calculateTax(subtotal);
            return subtotal + tax;
        }
        
        function applyDiscount(amount, discountPercent) {
            return amount * (1 - discountPercent / 100);
        }
        
        function calculateShipping(subtotal) {
            return subtotal >= SHIPPING_THRESHOLD ? 0 : 5.99;
        }
        
        // formatter.js
        function formatCurrency(amount) {
            return `${CURRENCY}${amount.toFixed(2)}`;
        }
        
        function formatPercent(value) {
            return `${value}%`;
        }
        
        // Make calculate function global for onclick
        window.calculate = function() {
            const price = parseFloat(document.getElementById('price').value);
            const quantity = parseInt(document.getElementById('quantity').value);
            const discountPercent = parseFloat(document.getElementById('discount').value);
            
            // Calculate values
            const subtotal = calculateSubtotal(price, quantity);
            const discountAmount = subtotal - applyDiscount(subtotal, discountPercent);
            const discountedSubtotal = subtotal - discountAmount;
            const tax = calculateTax(discountedSubtotal);
            const shipping = calculateShipping(discountedSubtotal);
            const total = discountedSubtotal + tax + shipping;
            
            // Format output
            let output = `
                <strong>Order Summary:</strong><br><br>
                Item Price: ${formatCurrency(price)}<br>
                Quantity: ${quantity}<br>
                Subtotal: ${formatCurrency(subtotal)}<br>
                <br>
                Discount (${formatPercent(discountPercent)}): -${formatCurrency(discountAmount)}<br>
                Discounted Subtotal: ${formatCurrency(discountedSubtotal)}<br>
                <br>
                Tax (${formatPercent(TAX_RATE * 100)}): ${formatCurrency(tax)}<br>
                Shipping: ${formatCurrency(shipping)}
                ${shipping === 0 ? ' (FREE - over $50!)' : ''}<br>
                <br>
                <strong>Total: ${formatCurrency(total)}</strong>
            `;
            
            document.getElementById('cart-output').innerHTML = output;
        };
        
        // Initial calculation
        calculate();
    </script>
</body>
</html>
```
:::

## Dynamic Imports

Load modules conditionally or on-demand:

```javascript
// Load module when needed
button.addEventListener('click', async () => {
    const module = await import('./heavy-module.js');
    module.doSomething();
});

// Conditional loading
if (condition) {
    const { feature } = await import('./feature.js');
    feature();
}
```

## Module Best Practices

1. **One module per file** - Keep modules focused
2. **Use named exports for utilities** - Multiple related functions
3. **Use default export for main class/function** - Single primary export
4. **Keep modules small** - Easier to understand and test
5. **Avoid circular dependencies** - Can cause issues
6. **Use absolute paths in production** - With bundlers
7. **Group related exports** - Organize by feature

## Common Patterns

### Barrel Exports

Create an index file to re-export from multiple modules:

```javascript
// modules/index.js
export { add, subtract } from './math.js';
export { formatCurrency } from './formatter.js';
export { TAX_RATE } from './constants.js';

// app.js
import { add, formatCurrency, TAX_RATE } from './modules/index.js';
```

### Singleton Pattern

```javascript
// database.js
class Database {
    constructor() {
        this.connection = null;
    }
    
    connect() {
        // Connect to database
    }
}

// Export single instance
export default new Database();

// app.js
import db from './database.js';
db.connect();  // Same instance everywhere
```

### Factory Pattern

```javascript
// user-factory.js
export default function createUser(name, email) {
    return {
        name,
        email,
        createdAt: new Date(),
        greet() {
            return `Hello, I'm ${this.name}`;
        }
    };
}

// app.js
import createUser from './user-factory.js';
const user = createUser('John', 'john@example.com');
```

## Module vs Script

| Feature | Module | Script |
|---------|--------|--------|
| Scope | Module scope | Global scope |
| Strict mode | Always | Optional |
| Top-level this | undefined | window |
| Import/Export | Yes | No |
| Deferred | Yes | No (unless defer) |

## Browser Support

Modern browsers support ES6 modules:

```html
<!-- Modern browsers -->
<script type="module" src="app.js"></script>

<!-- Fallback for old browsers -->
<script nomodule src="app-legacy.js"></script>
```

## Practice Exercise

:::practice title="Working with Modules"
Create a modular application:
1. Create a constants module with configuration values
2. Create a calculator module with math functions
3. Create a formatter module for displaying results
4. Create a main app module that imports and uses them
5. Use both named and default exports
6. Demonstrate module scope and encapsulation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Modules Practice</title>
</head>
<body>
    <h1>Todo List with Modules</h1>
    
    <input type="text" id="todo-input" placeholder="Enter todo">
    <button id="add-btn">Add</button>
    <ul id="todo-list"></ul>
    
    <script type="module">
        // Create modules for:
        // 1. Todo storage (add, remove, get all)
        // 2. Todo rendering (display todos)
        // 3. Event handlers
        // 4. Main app logic
        
        // Your code here
    </script>
</body>
</html>
```
:::

## Summary

Modules help you:
- Organize code into logical files
- Reuse code across your application
- Manage dependencies clearly
- Keep variables private by default
- Write more maintainable code

Use `export` to share code and `import` to use it. Modern JavaScript development relies heavily on modules for building scalable applications.
