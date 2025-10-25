# JavaScript Scope

Scope determines where variables are accessible in your code. Understanding scope is crucial for writing bug-free JavaScript.

## What is Scope?

Scope is the context in which variables are declared and can be accessed. JavaScript has three types of scope:

1. Global Scope
2. Function Scope
3. Block Scope

## Global Scope

Variables declared outside any function or block are in the global scope:

```javascript
// Global variable
let globalVar = 'I am global';

function showGlobal() {
    console.log(globalVar);  // Accessible
}

showGlobal();  // 'I am global'
console.log(globalVar);  // 'I am global'
```

**Warning:** Avoid polluting the global scope!

## Function Scope

Variables declared inside a function are only accessible within that function:

```javascript
function myFunction() {
    let functionVar = 'I am local';
    console.log(functionVar);  // Works
}

myFunction();  // 'I am local'
console.log(functionVar);  // Error: functionVar is not defined
```

### var has Function Scope

```javascript
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // 10 (var ignores block scope)
}

testVar();
```

## Block Scope

Variables declared with `let` and `const` inside `{}` are block-scoped:

```javascript
if (true) {
    let blockVar = 'I am block-scoped';
    const blockConst = 'Me too';
    console.log(blockVar);  // Works
}

console.log(blockVar);  // Error: blockVar is not defined
```

### let and const have Block Scope

```javascript
function testLet() {
    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y);  // 10, 20
    }
    console.log(x, y);  // Error: not defined
}
```

### Loops and Block Scope

```javascript
// With let (block-scoped)
for (let i = 0; i < 3; i++) {
    console.log(i);  // 0, 1, 2
}
console.log(i);  // Error: i is not defined

// With var (function-scoped)
for (var j = 0; j < 3; j++) {
    console.log(j);  // 0, 1, 2
}
console.log(j);  // 3 (still accessible!)
```

## Nested Scope

Inner scopes can access outer scopes:

```javascript
let global = 'global';

function outer() {
    let outerVar = 'outer';
    
    function inner() {
        let innerVar = 'inner';
        console.log(global);    // Accessible
        console.log(outerVar);  // Accessible
        console.log(innerVar);  // Accessible
    }
    
    inner();
    console.log(innerVar);  // Error: not accessible
}

outer();
```

## Scope Chain

JavaScript looks for variables from inner to outer scope:

```javascript
let a = 'global a';

function outer() {
    let b = 'outer b';
    
    function inner() {
        let c = 'inner c';
        console.log(a);  // Looks in inner → outer → global
        console.log(b);  // Looks in inner → outer
        console.log(c);  // Found in inner
    }
    
    inner();
}

outer();
```

## Shadowing

Inner variables can "shadow" outer variables with the same name:

```javascript
let name = 'Global';

function showName() {
    let name = 'Local';
    console.log(name);  // 'Local' (shadows global)
}

showName();
console.log(name);  // 'Global'
```


## Hoisting

JavaScript moves declarations to the top of their scope:

### var Hoisting

```javascript
console.log(x);  // undefined (not an error!)
var x = 5;
console.log(x);  // 5

// Interpreted as:
// var x;
// console.log(x);  // undefined
// x = 5;
// console.log(x);  // 5
```

### let and const Hoisting

```javascript
console.log(y);  // Error: Cannot access before initialization
let y = 10;

console.log(z);  // Error: Cannot access before initialization
const z = 20;
```

### Function Hoisting

```javascript
// Function declarations are fully hoisted
sayHello();  // Works!

function sayHello() {
    console.log('Hello!');
}

// Function expressions are NOT hoisted
sayGoodbye();  // Error!

const sayGoodbye = function() {
    console.log('Goodbye!');
};
```

## Closures

Functions remember their outer scope even after the outer function has returned:

```javascript
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
```

### Practical Closure Example

```javascript
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting('Hello');
const sayHi = createGreeting('Hi');

console.log(sayHello('John'));  // 'Hello, John!'
console.log(sayHi('Jane'));     // 'Hi, Jane!'
```

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Scope</title>
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
        .output {
            background: white;
            padding: 10px;
            margin-top: 10px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <h1>JavaScript Scope Demo</h1>
    
    <div class="demo">
        <h2>Global vs Local Scope</h2>
        <button onclick="scopeDemo()">Run Demo</button>
        <div id="scope-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Block Scope (let vs var)</h2>
        <button onclick="blockScopeDemo()">Run Demo</button>
        <div id="block-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Nested Scope</h2>
        <button onclick="nestedScopeDemo()">Run Demo</button>
        <div id="nested-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Closure Example</h2>
        <button onclick="createNewCounter()">Create Counter</button>
        <button onclick="incrementCounter()">Increment</button>
        <button onclick="resetDemo()">Reset</button>
        <div id="closure-output" class="output">Counter: 0</div>
    </div>
    
    <script>
        // Global variable
        let globalMessage = 'I am global!';
        
        function scopeDemo() {
            let localMessage = 'I am local!';
            let output = `
                Global variable: ${globalMessage}<br>
                Local variable: ${localMessage}<br>
                <br>
                Global is accessible everywhere.<br>
                Local is only accessible in this function.
            `;
            document.getElementById('scope-output').innerHTML = output;
        }
        
        function blockScopeDemo() {
            let output = '';
            
            // let example
            if (true) {
                let blockLet = 'Block scoped with let';
                output += `Inside block: ${blockLet}<br>`;
            }
            output += 'Outside block: blockLet is not accessible<br><br>';
            
            // var example
            if (true) {
                var blockVar = 'Function scoped with var';
            }
            output += `Outside block: ${blockVar} (var ignores block scope)`;
            
            document.getElementById('block-output').innerHTML = output;
        }
        
        function nestedScopeDemo() {
            let outer = 'Outer scope';
            
            function inner() {
                let inner = 'Inner scope';
                return `
                    Inner function can access:<br>
                    - Global: ${globalMessage}<br>
                    - Outer: ${outer}<br>
                    - Inner: ${inner}
                `;
            }
            
            document.getElementById('nested-output').innerHTML = inner();
        }
        
        // Closure example
        let counter = null;
        
        function createNewCounter() {
            counter = (function() {
                let count = 0;
                return function() {
                    count++;
                    return count;
                };
            })();
            document.getElementById('closure-output').innerHTML = 'Counter: 0 (New counter created)';
        }
        
        function incrementCounter() {
            if (counter === null) {
                createNewCounter();
            }
            let value = counter();
            document.getElementById('closure-output').innerHTML = `Counter: ${value}`;
        }
        
        function resetDemo() {
            counter = null;
            document.getElementById('closure-output').innerHTML = 'Counter: 0';
        }
        
        // Demonstrate hoisting
        console.log('=== Hoisting Demo ===');
        console.log('var before declaration:', typeof varVariable);  // undefined
        var varVariable = 'I am var';
        
        try {
            console.log('let before declaration:', letVariable);
        } catch(e) {
            console.log('let error:', e.message);
        }
        let letVariable = 'I am let';
    </script>
</body>
</html>
```
:::

## Best Practices

1. **Use `let` and `const`** - Avoid `var`
2. **Minimize global variables** - Prevent naming conflicts
3. **Use block scope** - Keep variables as local as possible
4. **Declare variables at the top** - Improve readability
5. **Use closures wisely** - Powerful but can cause memory leaks

## Scope Summary

| Declaration | Scope | Hoisting | Reassignable |
|-------------|-------|----------|--------------|
| var | Function | Yes (undefined) | Yes |
| let | Block | Yes (not initialized) | Yes |
| const | Block | Yes (not initialized) | No |

## Practice Exercise

:::practice title="Understanding Scope"
Create examples demonstrating different scopes:
1. Declare a global variable and access it from a function
2. Create a function with a local variable
3. Demonstrate block scope with let in an if statement
4. Show the difference between let and var in a loop
5. Create a closure that maintains private state
6. Demonstrate variable shadowing

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Scope Practice</title>
</head>
<body>
    <h1>JavaScript Scope Practice</h1>
    
    <button onclick="testScope()">Test Scope</button>
    <div id="output"></div>
    
    <script>
        // Add your code here
        
        function testScope() {
            // Test different scope scenarios
            
        }
    </script>
</body>
</html>
```
:::
