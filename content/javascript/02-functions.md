# JavaScript Functions

Functions are reusable blocks of code that perform specific tasks. They're fundamental to organizing and structuring your JavaScript programs.

## Function Declaration

```javascript
function greet() {
    console.log('Hello!');
}

// Call the function
greet(); // Output: Hello!
```

## Functions with Parameters

```javascript
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('John');  // Output: Hello, John!
greet('Sarah'); // Output: Hello, Sarah!

// Multiple parameters
function add(a, b) {
    return a + b;
}

let result = add(5, 3); // result = 8
```

## Return Values

```javascript
function multiply(a, b) {
    return a * b;
}

let product = multiply(4, 5); // product = 20

function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

let name = getFullName('John', 'Doe'); // name = "John Doe"
```

## Function Expressions

```javascript
const greet = function(name) {
    return 'Hello, ' + name;
};

console.log(greet('Alice')); // Output: Hello, Alice
```

## Arrow Functions (ES6)

```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => {
    return a + b;
};

// Shorter arrow function (implicit return)
const add = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const sayHello = () => console.log('Hello!');
```

## Default Parameters

```javascript
function greet(name = 'Guest') {
    return 'Hello, ' + name;
}

console.log(greet());        // Output: Hello, Guest
console.log(greet('John'));  // Output: Hello, John
```

## Rest Parameters

```javascript
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```

## Scope

```javascript
// Global scope
let globalVar = 'I am global';

function myFunction() {
    // Function scope
    let localVar = 'I am local';
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

myFunction();
console.log(globalVar); // Accessible
console.log(localVar);  // Error: localVar is not defined
```

## Complete Example

:::preview height="400px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Functions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .calculator {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 8px;
            max-width: 400px;
        }
        input {
            padding: 8px;
            margin: 5px;
            width: 80px;
        }
        button {
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
        }
        #result {
            font-size: 24px;
            font-weight: bold;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <h1>Calculator with Functions</h1>
    
    <div class="calculator">
        <input type="number" id="num1" placeholder="Number 1">
        <input type="number" id="num2" placeholder="Number 2">
        <br>
        <button onclick="calculate('add')">Add</button>
        <button onclick="calculate('subtract')">Subtract</button>
        <button onclick="calculate('multiply')">Multiply</button>
        <button onclick="calculate('divide')">Divide</button>
        <div id="result"></div>
    </div>
    
    <script>
        // Function to get input values
        function getNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            return { num1, num2 };
        }
        
        // Function to display result
        function displayResult(result) {
            document.getElementById('result').innerHTML = 'Result: ' + result;
        }
        
        // Arrow functions for operations
        const add = (a, b) => a + b;
        const subtract = (a, b) => a - b;
        const multiply = (a, b) => a * b;
        const divide = (a, b) => {
            if (b === 0) {
                return 'Cannot divide by zero';
            }
            return a / b;
        };
        
        // Main calculator function
        function calculate(operation) {
            const { num1, num2 } = getNumbers();
            
            if (isNaN(num1) || isNaN(num2)) {
                displayResult('Please enter valid numbers');
                return;
            }
            
            let result;
            switch(operation) {
                case 'add':
                    result = add(num1, num2);
                    break;
                case 'subtract':
                    result = subtract(num1, num2);
                    break;
                case 'multiply':
                    result = multiply(num1, num2);
                    break;
                case 'divide':
                    result = divide(num1, num2);
                    break;
                default:
                    result = 'Invalid operation';
            }
            
            displayResult(result);
        }
    </script>
</body>
</html>
```
:::

## Callback Functions

```javascript
function processArray(arr, callback) {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

## Practice Exercise

:::practice title="Build a Calculator with Functions"
Create a simple calculator using functions:
1. Create a function to add two numbers
2. Create a function to subtract two numbers
3. Create a function to multiply two numbers
4. Create a function to divide two numbers
5. Display the results on the page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        input, button {
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>Simple Calculator</h1>
    <input type="number" id="num1" placeholder="First number">
    <input type="number" id="num2" placeholder="Second number">
    <br>
    <button onclick="add()">Add</button>
    <button onclick="subtract()">Subtract</button>
    <button onclick="multiply()">Multiply</button>
    <button onclick="divide()">Divide</button>
    <p id="result"></p>
    
    <script>
        // Add your functions here
        
    </script>
</body>
</html>
```
:::
