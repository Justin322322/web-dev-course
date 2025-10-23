# ES6+ Modern JavaScript Features

ES6 (ECMAScript 2015) and later versions introduced many powerful features that make JavaScript more expressive and easier to write.

## Let and Const

```javascript
// let - block-scoped, can be reassigned
let age = 25;
age = 26; // OK

// const - block-scoped, cannot be reassigned
const name = 'John';
// name = 'Jane'; // Error!

// const with objects/arrays - contents can change
const person = { name: 'John' };
person.name = 'Jane'; // OK
person.age = 30; // OK

const numbers = [1, 2, 3];
numbers.push(4); // OK
```

## Template Literals

```javascript
// Old way
let name = 'John';
let greeting = 'Hello, ' + name + '!';

// Template literals (backticks)
let greeting2 = `Hello, ${name}!`;

// Multi-line strings
let message = `
    This is a
    multi-line
    string
`;

// Expressions in template literals
let a = 5;
let b = 10;
console.log(`Sum: ${a + b}`); // Sum: 15
```

## Arrow Functions

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
const greet = () => console.log('Hello!');

// Arrow functions with arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
```

## Destructuring

### Array Destructuring

```javascript
const colors = ['red', 'green', 'blue'];

// Old way
const first = colors[0];
const second = colors[1];

// Destructuring
const [first, second, third] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'

// Skip elements
const [, , third] = colors;

// Rest operator
const [first, ...rest] = colors;
console.log(rest); // ['green', 'blue']
```

### Object Destructuring

```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Old way
const name = person.name;
const age = person.age;

// Destructuring
const { name, age, city } = person;

// Different variable names
const { name: personName, age: personAge } = person;

// Default values
const { name, country = 'USA' } = person;

// Nested destructuring
const user = {
    id: 1,
    info: {
        name: 'John',
        email: 'john@example.com'
    }
};
const { info: { name, email } } = user;
```

## Spread Operator

```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];

// Add elements
const extended = [0, ...arr1, 4]; // [0, 1, 2, 3, 4]

// Objects
const person = { name: 'John', age: 30 };
const address = { city: 'New York', country: 'USA' };

// Combine objects
const fullPerson = { ...person, ...address };

// Copy object
const personCopy = { ...person };

// Override properties
const updated = { ...person, age: 31 };
```

## Rest Parameters

```javascript
// Collect remaining arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Mix with regular parameters
function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}!`;
}

console.log(greet('Hello', 'John', 'Jane', 'Bob'));
// 'Hello John, Jane, Bob!'
```

## Default Parameters

```javascript
// Old way
function greet(name) {
    name = name || 'Guest';
    return `Hello, ${name}!`;
}

// ES6 way
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

// Multiple defaults
function createUser(name = 'Anonymous', age = 0, role = 'user') {
    return { name, age, role };
}
```

## Enhanced Object Literals

```javascript
const name = 'John';
const age = 30;

// Old way
const person = {
    name: name,
    age: age,
    greet: function() {
        console.log('Hello!');
    }
};

// ES6 way
const person = {
    name,  // Shorthand property
    age,
    greet() {  // Shorthand method
        console.log('Hello!');
    }
};

// Computed property names
const prop = 'name';
const person = {
    [prop]: 'John',
    ['age']: 30
};
```

## Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// find - first element that matches
const found = numbers.find(n => n > 3); // 4

// findIndex - index of first match
const index = numbers.findIndex(n => n > 3); // 3

// includes - check if element exists
numbers.includes(3); // true

// some - at least one element matches
numbers.some(n => n > 4); // true

// every - all elements match
numbers.every(n => n > 0); // true

// Array.from - create array from iterable
const str = 'hello';
const chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
```

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ES6+ Features</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .section {
            background-color: #f5f5f5;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
        }
        
        button {
            padding: 10px 20px;
            margin: 5px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        .output {
            background-color: white;
            padding: 15px;
            margin-top: 10px;
            border-radius: 5px;
            min-height: 50px;
        }
        
        .card {
            background-color: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            border-left: 4px solid #007bff;
        }
    </style>
</head>
<body>
    <h1>ES6+ Modern JavaScript</h1>
    
    <div class="section">
        <h2>Template Literals</h2>
        <button onclick="demoTemplateLiterals()">Show Example</button>
        <div class="output" id="templateOutput"></div>
    </div>
    
    <div class="section">
        <h2>Arrow Functions & Array Methods</h2>
        <button onclick="demoArrowFunctions()">Show Example</button>
        <div class="output" id="arrowOutput"></div>
    </div>
    
    <div class="section">
        <h2>Destructuring</h2>
        <button onclick="demoDestructuring()">Show Example</button>
        <div class="output" id="destructOutput"></div>
    </div>
    
    <div class="section">
        <h2>Spread Operator</h2>
        <button onclick="demoSpread()">Show Example</button>
        <div class="output" id="spreadOutput"></div>
    </div>
    
    <div class="section">
        <h2>User Management (All Features Combined)</h2>
        <button onclick="addUser()">Add Random User</button>
        <button onclick="showUsers()">Show All Users</button>
        <button onclick="filterAdults()">Show Adults Only</button>
        <div class="output" id="userOutput"></div>
    </div>
    
    <script>
        // Template Literals Demo
        function demoTemplateLiterals() {
            const name = 'John';
            const age = 30;
            const city = 'New York';
            
            const message = `
                <div class="card">
                    <h3>User Profile</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>City:</strong> ${city}</p>
                    <p><strong>Status:</strong> ${age >= 18 ? 'Adult' : 'Minor'}</p>
                </div>
            `;
            
            document.getElementById('templateOutput').innerHTML = message;
        }
        
        // Arrow Functions Demo
        function demoArrowFunctions() {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            
            const doubled = numbers.map(n => n * 2);
            const evens = numbers.filter(n => n % 2 === 0);
            const sum = numbers.reduce((total, n) => total + n, 0);
            
            const output = `
                <div class="card">
                    <p><strong>Original:</strong> ${numbers.join(', ')}</p>
                    <p><strong>Doubled:</strong> ${doubled.join(', ')}</p>
                    <p><strong>Evens:</strong> ${evens.join(', ')}</p>
                    <p><strong>Sum:</strong> ${sum}</p>
                </div>
            `;
            
            document.getElementById('arrowOutput').innerHTML = output;
        }
        
        // Destructuring Demo
        function demoDestructuring() {
            const person = {
                name: 'Jane',
                age: 28,
                city: 'London',
                hobbies: ['reading', 'gaming', 'coding']
            };
            
            // Object destructuring
            const { name, age, city } = person;
            
            // Array destructuring
            const [hobby1, hobby2, hobby3] = person.hobbies;
            
            const output = `
                <div class="card">
                    <h3>Destructuring Example</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>City:</strong> ${city}</p>
                    <p><strong>First Hobby:</strong> ${hobby1}</p>
                    <p><strong>Second Hobby:</strong> ${hobby2}</p>
                </div>
            `;
            
            document.getElementById('destructOutput').innerHTML = output;
        }
        
        // Spread Operator Demo
        function demoSpread() {
            const arr1 = [1, 2, 3];
            const arr2 = [4, 5, 6];
            const combined = [...arr1, ...arr2];
            
            const person = { name: 'John', age: 30 };
            const address = { city: 'New York', country: 'USA' };
            const fullPerson = { ...person, ...address };
            
            const output = `
                <div class="card">
                    <h3>Array Spread</h3>
                    <p><strong>Array 1:</strong> [${arr1}]</p>
                    <p><strong>Array 2:</strong> [${arr2}]</p>
                    <p><strong>Combined:</strong> [${combined}]</p>
                </div>
                <div class="card">
                    <h3>Object Spread</h3>
                    <p><strong>Person:</strong> ${JSON.stringify(person)}</p>
                    <p><strong>Address:</strong> ${JSON.stringify(address)}</p>
                    <p><strong>Full Person:</strong> ${JSON.stringify(fullPerson)}</p>
                </div>
            `;
            
            document.getElementById('spreadOutput').innerHTML = output;
        }
        
        // User Management Demo
        let users = [];
        
        const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie'];
        const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];
        
        function addUser() {
            const name = names[Math.floor(Math.random() * names.length)];
            const age = Math.floor(Math.random() * 50) + 18;
            const city = cities[Math.floor(Math.random() * cities.length)];
            
            const newUser = { name, age, city };
            users = [...users, newUser];
            
            showUsers();
        }
        
        function showUsers() {
            if (users.length === 0) {
                document.getElementById('userOutput').innerHTML = '<p>No users yet. Add some!</p>';
                return;
            }
            
            const output = users.map(({ name, age, city }) => `
                <div class="card">
                    <strong>${name}</strong> - ${age} years old - ${city}
                </div>
            `).join('');
            
            document.getElementById('userOutput').innerHTML = output;
        }
        
        function filterAdults() {
            const adults = users.filter(({ age }) => age >= 21);
            
            if (adults.length === 0) {
                document.getElementById('userOutput').innerHTML = '<p>No adults found.</p>';
                return;
            }
            
            const output = adults.map(({ name, age, city }) => `
                <div class="card">
                    <strong>${name}</strong> - ${age} years old - ${city}
                </div>
            `).join('');
            
            document.getElementById('userOutput').innerHTML = output;
        }
    </script>
</body>
</html>
```
:::

## Practice Exercise

:::practice title="Build a Modern Task Manager"
Create a task manager using ES6+ features:
1. Use arrow functions for all functions
2. Use template literals for HTML
3. Use destructuring for objects
4. Use spread operator to manage state
5. Use array methods (map, filter, find)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Modern Task Manager</title>
    <style>
        /* Add your styles */
    </style>
</head>
<body>
    <h1>Task Manager</h1>
    <input type="text" id="taskInput" placeholder="Task name">
    <input type="text" id="categoryInput" placeholder="Category">
    <button onclick="addTask()">Add Task</button>
    <div id="taskList"></div>
    
    <script>
        // Use ES6+ features to build the task manager
    </script>
</body>
</html>
```
:::
