# JavaScript Operators

Operators perform operations on variables and values. JavaScript has several types of operators for different purposes.

## Arithmetic Operators

Perform mathematical calculations:

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (addition)
console.log(a - b);  // 7 (subtraction)
console.log(a * b);  // 30 (multiplication)
console.log(a / b);  // 3.333... (division)
console.log(a % b);  // 1 (modulus/remainder)
console.log(a ** b); // 1000 (exponentiation)

// Increment and decrement
let x = 5;
x++;  // x = 6 (increment)
x--;  // x = 5 (decrement)

++x;  // 6 (pre-increment)
--x;  // 5 (pre-decrement)
```

## Assignment Operators

Assign values to variables:

```javascript
let x = 10;

x += 5;   // x = x + 5  (15)
x -= 3;   // x = x - 3  (12)
x *= 2;   // x = x * 2  (24)
x /= 4;   // x = x / 4  (6)
x %= 4;   // x = x % 4  (2)
x **= 3;  // x = x ** 3 (8)
```

## Comparison Operators

Compare values and return true or false:

```javascript
let a = 10;
let b = '10';
let c = 20;

// Equality
console.log(a == b);   // true (loose equality, converts types)
console.log(a === b);  // false (strict equality, checks type)
console.log(a != c);   // true (not equal)
console.log(a !== b);  // true (strict not equal)

// Relational
console.log(a < c);    // true (less than)
console.log(a > c);    // false (greater than)
console.log(a <= 10);  // true (less than or equal)
console.log(a >= 10);  // true (greater than or equal)
```

**Always use `===` and `!==` for comparisons!**

## Logical Operators

Combine or invert boolean values:

```javascript
let age = 25;
let hasLicense = true;

// AND (&&) - both must be true
if (age >= 18 && hasLicense) {
    console.log('Can drive');
}

// OR (||) - at least one must be true
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log('No work today!');
}

// NOT (!) - inverts boolean
let isRaining = false;
if (!isRaining) {
    console.log('Go outside!');
}
```

### Short-circuit Evaluation

```javascript
// && returns first falsy value or last value
let result1 = true && 'hello';     // 'hello'
let result2 = false && 'hello';    // false
let result3 = 'hi' && 'bye';       // 'bye'

// || returns first truthy value or last value
let result4 = false || 'default';  // 'default'
let result5 = 'value' || 'default'; // 'value'
let result6 = null || undefined;   // undefined

// Common use: default values
let username = userInput || 'Guest';
```

## String Operators

Concatenate strings:

```javascript
let firstName = 'John';
let lastName = 'Doe';

// Concatenation with +
let fullName = firstName + ' ' + lastName;  // 'John Doe'

// Concatenation with +=
let message = 'Hello';
message += ' World';  // 'Hello World'

// Template literals (preferred)
let greeting = `Hello, ${firstName} ${lastName}!`;
```

## Ternary Operator

Shorthand for if-else:

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status);  // 'Adult'

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? 'A' : 
            score >= 80 ? 'B' : 
            score >= 70 ? 'C' : 'F';
```

## typeof Operator

Check the type of a value:

```javascript
console.log(typeof 42);           // 'number'
console.log(typeof 'hello');      // 'string'
console.log(typeof true);         // 'boolean'
console.log(typeof undefined);    // 'undefined'
console.log(typeof null);         // 'object' (JavaScript quirk!)
console.log(typeof {});           // 'object'
console.log(typeof []);           // 'object'
console.log(typeof function(){}); // 'function'
```


## Nullish Coalescing Operator (??)

Returns right side only if left side is null or undefined:

```javascript
let value1 = null ?? 'default';      // 'default'
let value2 = undefined ?? 'default'; // 'default'
let value3 = 0 ?? 'default';         // 0 (not null/undefined)
let value4 = '' ?? 'default';        // '' (not null/undefined)
let value5 = false ?? 'default';     // false (not null/undefined)

// Compare with ||
let a = 0 || 'default';   // 'default' (0 is falsy)
let b = 0 ?? 'default';   // 0 (0 is not null/undefined)
```

## Optional Chaining (?.)

Safely access nested properties:

```javascript
let user = {
    name: 'John',
    address: {
        city: 'New York'
    }
};

// Without optional chaining
let city1 = user && user.address && user.address.city;

// With optional chaining
let city2 = user?.address?.city;  // 'New York'
let zip = user?.address?.zip;     // undefined (no error)

// With arrays
let firstItem = array?.[0];

// With functions
let result = obj.method?.();
```

## Spread Operator (...)

Expand arrays or objects:

```javascript
// Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Objects
let person = { name: 'John', age: 30 };
let employee = { ...person, job: 'Developer' };
// { name: 'John', age: 30, job: 'Developer' }

// Function arguments
let numbers = [1, 5, 3, 9, 2];
console.log(Math.max(...numbers));  // 9
```

## Complete Example

:::preview height="600px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Operators</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .output {
            background: #f5f5f5;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            border-left: 4px solid #3498db;
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
    </style>
</head>
<body>
    <h1>JavaScript Operators Demo</h1>
    
    <h2>Arithmetic Operators</h2>
    <button onclick="arithmeticDemo()">Run Arithmetic Demo</button>
    <div id="arithmetic" class="output"></div>
    
    <h2>Comparison Operators</h2>
    <button onclick="comparisonDemo()">Run Comparison Demo</button>
    <div id="comparison" class="output"></div>
    
    <h2>Logical Operators</h2>
    <button onclick="logicalDemo()">Run Logical Demo</button>
    <div id="logical" class="output"></div>
    
    <h2>Ternary Operator</h2>
    <input type="number" id="ageInput" placeholder="Enter age" value="20">
    <button onclick="ternaryDemo()">Check Age</button>
    <div id="ternary" class="output"></div>
    
    <h2>typeof Operator</h2>
    <button onclick="typeofDemo()">Run typeof Demo</button>
    <div id="typeof" class="output"></div>
    
    <script>
        function arithmeticDemo() {
            let a = 10;
            let b = 3;
            let output = `
                a = ${a}, b = ${b}<br>
                a + b = ${a + b}<br>
                a - b = ${a - b}<br>
                a * b = ${a * b}<br>
                a / b = ${a / b}<br>
                a % b = ${a % b}<br>
                a ** b = ${a ** b}
            `;
            document.getElementById('arithmetic').innerHTML = output;
        }
        
        function comparisonDemo() {
            let a = 10;
            let b = '10';
            let c = 20;
            let output = `
                a = ${a} (number), b = '${b}' (string), c = ${c}<br>
                a == b: ${a == b} (loose equality)<br>
                a === b: ${a === b} (strict equality)<br>
                a != c: ${a != c}<br>
                a !== b: ${a !== b}<br>
                a < c: ${a < c}<br>
                a >= 10: ${a >= 10}
            `;
            document.getElementById('comparison').innerHTML = output;
        }
        
        function logicalDemo() {
            let age = 25;
            let hasLicense = true;
            let isWeekend = true;
            let isRaining = false;
            
            let output = `
                age = ${age}, hasLicense = ${hasLicense}<br>
                age >= 18 && hasLicense: ${age >= 18 && hasLicense}<br>
                <br>
                isWeekend = ${isWeekend}, isRaining = ${isRaining}<br>
                isWeekend || isRaining: ${isWeekend || isRaining}<br>
                !isRaining: ${!isRaining}<br>
                <br>
                Short-circuit:<br>
                true && 'hello': ${true && 'hello'}<br>
                false || 'default': ${false || 'default'}
            `;
            document.getElementById('logical').innerHTML = output;
        }
        
        function ternaryDemo() {
            let age = parseInt(document.getElementById('ageInput').value);
            let status = age >= 18 ? 'Adult' : 'Minor';
            let canVote = age >= 18 ? 'Can vote' : 'Cannot vote';
            
            let output = `
                Age: ${age}<br>
                Status: ${status}<br>
                ${canVote}
            `;
            document.getElementById('ternary').innerHTML = output;
        }
        
        function typeofDemo() {
            let output = `
                typeof 42: ${typeof 42}<br>
                typeof 'hello': ${typeof 'hello'}<br>
                typeof true: ${typeof true}<br>
                typeof undefined: ${typeof undefined}<br>
                typeof null: ${typeof null} (quirk!)<br>
                typeof {}: ${typeof {}}<br>
                typeof []: ${typeof []}<br>
                typeof function(){}: ${typeof function(){}}
            `;
            document.getElementById('typeof').innerHTML = output;
        }
    </script>
</body>
</html>
```
:::

## Operator Precedence

Operators are evaluated in this order (highest to lowest):

1. Grouping: `()`
2. Member access: `.` `[]`
3. Function call: `()`
4. Postfix increment/decrement: `++` `--`
5. Logical NOT, typeof: `!` `typeof`
6. Exponentiation: `**`
7. Multiplication, Division, Modulus: `*` `/` `%`
8. Addition, Subtraction: `+` `-`
9. Comparison: `<` `>` `<=` `>=`
10. Equality: `==` `===` `!=` `!==`
11. Logical AND: `&&`
12. Logical OR: `||`
13. Ternary: `? :`
14. Assignment: `=` `+=` `-=` etc.

```javascript
let result = 2 + 3 * 4;      // 14 (not 20)
let result2 = (2 + 3) * 4;   // 20 (grouping first)
```

## Practice Exercise

:::practice title="Working with Operators"
Create an interactive calculator and comparison tool:
1. Perform arithmetic operations on two numbers
2. Compare values using == and ===
3. Use logical operators to check multiple conditions
4. Implement a ternary operator for age checking
5. Use typeof to check variable types
6. Demonstrate short-circuit evaluation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Operators Practice</title>
</head>
<body>
    <h1>JavaScript Operators Practice</h1>
    
    <h2>Calculator</h2>
    <input type="number" id="num1" value="10">
    <input type="number" id="num2" value="5">
    <button onclick="calculate()">Calculate</button>
    <div id="result"></div>
    
    <script>
        function calculate() {
            // Add your code here
            
        }
    </script>
</body>
</html>
```
:::
