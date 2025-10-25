# JavaScript Error Handling

Error handling allows your program to gracefully handle unexpected situations instead of crashing. Learn how to catch and manage errors effectively.

## Types of Errors

### Syntax Errors

Code that doesn't follow JavaScript syntax rules:

```javascript
// Missing closing bracket
function broken() {
    console.log('Hello'
// SyntaxError: Unexpected end of input

// Invalid syntax
let 123abc = 'value';
// SyntaxError: Invalid or unexpected token
```

### Runtime Errors

Errors that occur during execution:

```javascript
// ReferenceError
console.log(nonExistentVariable);
// ReferenceError: nonExistentVariable is not defined

// TypeError
let num = 42;
num.toUpperCase();
// TypeError: num.toUpperCase is not a function

// RangeError
let arr = new Array(-1);
// RangeError: Invalid array length
```

### Logical Errors

Code runs but produces wrong results:

```javascript
// Wrong logic - no error thrown
function calculateArea(width, height) {
    return width + height;  // Should be width * height
}
```

## try...catch Statement

Handle errors gracefully:

```javascript
try {
    // Code that might throw an error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle the error
    console.log('An error occurred:', error.message);
}
```

### Basic Example

```javascript
try {
    let data = JSON.parse('invalid json');
} catch (error) {
    console.log('Failed to parse JSON:', error.message);
}
// Program continues running
```

## The Error Object

```javascript
try {
    throw new Error('Something went wrong!');
} catch (error) {
    console.log(error.name);     // 'Error'
    console.log(error.message);  // 'Something went wrong!'
    console.log(error.stack);    // Stack trace
}
```

## finally Block

Code that runs regardless of success or failure:

```javascript
try {
    console.log('Trying...');
    // risky code
} catch (error) {
    console.log('Error:', error.message);
} finally {
    console.log('This always runs');
    // Cleanup code (close files, connections, etc.)
}
```

### Practical Example

```javascript
function readFile(filename) {
    let file;
    try {
        file = openFile(filename);
        return processFile(file);
    } catch (error) {
        console.log('Error reading file:', error.message);
        return null;
    } finally {
        if (file) {
            closeFile(file);  // Always close the file
        }
    }
}
```

## Throwing Errors

Create and throw your own errors:

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

try {
    let result = divide(10, 0);
} catch (error) {
    console.log(error.message);  // 'Cannot divide by zero'
}
```

## Error Types

JavaScript has several built-in error types:

```javascript
// Error - generic error
throw new Error('Generic error');

// ReferenceError - invalid reference
throw new ReferenceError('Variable not found');

// TypeError - wrong type
throw new TypeError('Expected a number');

// RangeError - value out of range
throw new RangeError('Index out of bounds');

// SyntaxError - syntax error
throw new SyntaxError('Invalid syntax');
```

## Custom Errors

Create your own error types:

```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError('Age cannot be negative');
    }
    if (age > 150) {
        throw new ValidationError('Age seems unrealistic');
    }
    return true;
}

try {
    validateAge(-5);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log('Validation failed:', error.message);
    } else {
        throw error;  // Re-throw if not our error
    }
}
```


## Handling Specific Errors

```javascript
try {
    // Some code
    performOperation();
} catch (error) {
    if (error instanceof TypeError) {
        console.log('Type error:', error.message);
    } else if (error instanceof ReferenceError) {
        console.log('Reference error:', error.message);
    } else {
        console.log('Unknown error:', error.message);
    }
}
```

## Async Error Handling

### With Promises

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Fetch error:', error.message));
```

### With async/await

```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error fetching data:', error.message);
    }
}
```

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Error Handling Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .demo {
            background: #f5f5f5;
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
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
            padding: 10px;
            margin-top: 10px;
            border-radius: 3px;
        }
        .error {
            color: #e74c3c;
            background: #fadbd8;
            padding: 10px;
            border-radius: 3px;
            margin: 5px 0;
        }
        .success {
            color: #27ae60;
            background: #d5f4e6;
            padding: 10px;
            border-radius: 3px;
            margin: 5px 0;
        }
        input {
            padding: 8px;
            margin: 5px;
            border: 2px solid #ddd;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>JavaScript Error Handling</h1>
    
    <div class="demo">
        <h2>Basic try...catch</h2>
        <button onclick="basicTryCatch()">Run Demo</button>
        <div id="basic-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Division Calculator</h2>
        <input type="number" id="num1" placeholder="Number 1" value="10">
        <input type="number" id="num2" placeholder="Number 2" value="2">
        <button onclick="calculateDivision()">Divide</button>
        <div id="calc-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>JSON Parser</h2>
        <input type="text" id="json-input" placeholder='Enter JSON' value='{"name":"John"}' style="width: 300px;">
        <button onclick="parseJSON()">Parse</button>
        <div id="json-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Age Validator</h2>
        <input type="number" id="age-input" placeholder="Enter age" value="25">
        <button onclick="validateAge()">Validate</button>
        <div id="age-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>finally Block Demo</h2>
        <button onclick="finallyDemo()">Run Demo</button>
        <div id="finally-output" class="output"></div>
    </div>
    
    <script>
        function basicTryCatch() {
            let output = '';
            
            // Example 1: Successful execution
            try {
                output += '<div class="success">✓ Successful operation</div>';
                let result = 10 + 20;
                output += `Result: ${result}<br>`;
            } catch (error) {
                output += `<div class="error">Error: ${error.message}</div>`;
            }
            
            // Example 2: Error caught
            try {
                output += '<br>Attempting to access undefined variable...<br>';
                console.log(undefinedVariable);
            } catch (error) {
                output += `<div class="error">✗ ${error.name}: ${error.message}</div>`;
            }
            
            output += '<div class="success">Program continues running!</div>';
            document.getElementById('basic-output').innerHTML = output;
        }
        
        function calculateDivision() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            let output = '';
            
            try {
                if (isNaN(num1) || isNaN(num2)) {
                    throw new Error('Please enter valid numbers');
                }
                if (num2 === 0) {
                    throw new Error('Cannot divide by zero');
                }
                
                let result = num1 / num2;
                output = `<div class="success">✓ ${num1} ÷ ${num2} = ${result}</div>`;
            } catch (error) {
                output = `<div class="error">✗ ${error.message}</div>`;
            }
            
            document.getElementById('calc-output').innerHTML = output;
        }
        
        function parseJSON() {
            let input = document.getElementById('json-input').value;
            let output = '';
            
            try {
                let parsed = JSON.parse(input);
                output = `<div class="success">✓ Valid JSON</div>`;
                output += `<pre>${JSON.stringify(parsed, null, 2)}</pre>`;
            } catch (error) {
                output = `<div class="error">✗ Invalid JSON: ${error.message}</div>`;
            }
            
            document.getElementById('json-output').innerHTML = output;
        }
        
        // Custom error class
        class ValidationError extends Error {
            constructor(message) {
                super(message);
                this.name = 'ValidationError';
            }
        }
        
        function validateAge() {
            let age = parseInt(document.getElementById('age-input').value);
            let output = '';
            
            try {
                if (isNaN(age)) {
                    throw new ValidationError('Please enter a valid number');
                }
                if (age < 0) {
                    throw new ValidationError('Age cannot be negative');
                }
                if (age > 150) {
                    throw new ValidationError('Age seems unrealistic');
                }
                if (age < 18) {
                    output = `<div class="success">✓ Valid age: ${age} (Minor)</div>`;
                } else {
                    output = `<div class="success">✓ Valid age: ${age} (Adult)</div>`;
                }
            } catch (error) {
                if (error instanceof ValidationError) {
                    output = `<div class="error">✗ ${error.message}</div>`;
                } else {
                    output = `<div class="error">✗ Unexpected error: ${error.message}</div>`;
                }
            }
            
            document.getElementById('age-output').innerHTML = output;
        }
        
        function finallyDemo() {
            let output = '';
            let steps = [];
            
            try {
                steps.push('1. Entering try block');
                steps.push('2. Performing operation');
                let result = 10 / 2;
                steps.push(`3. Result: ${result}`);
            } catch (error) {
                steps.push(`Error: ${error.message}`);
            } finally {
                steps.push('4. Finally block always executes');
                steps.push('5. Cleanup operations here');
            }
            
            steps.push('6. Program continues');
            
            output = steps.map(step => `<div>${step}</div>`).join('');
            document.getElementById('finally-output').innerHTML = output;
        }
    </script>
</body>
</html>
```
:::

## Best Practices

1. **Use try...catch for expected errors** - Don't catch everything
2. **Be specific with error handling** - Handle different error types differently
3. **Always use finally for cleanup** - Close files, connections, etc.
4. **Throw meaningful errors** - Include helpful error messages
5. **Don't catch and ignore** - At least log the error
6. **Use custom errors** - Create specific error types for your app
7. **Validate input early** - Prevent errors before they happen

## Common Patterns

### Input Validation

```javascript
function processUserInput(input) {
    try {
        if (!input) {
            throw new Error('Input is required');
        }
        if (typeof input !== 'string') {
            throw new TypeError('Input must be a string');
        }
        // Process input
        return input.toUpperCase();
    } catch (error) {
        console.error('Validation error:', error.message);
        return null;
    }
}
```

### API Calls

```javascript
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch user:', error.message);
        return null;
    }
}
```

## Practice Exercise

:::practice title="Error Handling Practice"
Create a form with error handling:
1. Validate user input and throw custom errors
2. Use try...catch to handle errors gracefully
3. Display error messages to the user
4. Use finally for cleanup operations
5. Handle different error types differently
6. Create a custom ValidationError class

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Error Handling Practice</title>
    <style>
        .error { color: red; }
        .success { color: green; }
    </style>
</head>
<body>
    <h1>User Registration Form</h1>
    
    <form id="registrationForm">
        <input type="text" id="username" placeholder="Username">
        <input type="email" id="email" placeholder="Email">
        <input type="number" id="age" placeholder="Age">
        <button type="submit">Register</button>
    </form>
    
    <div id="message"></div>
    
    <script>
        // Create custom error class
        
        // Add form validation with error handling
        
    </script>
</body>
</html>
```
:::
