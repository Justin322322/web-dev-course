# JavaScript Objects

Objects are collections of key-value pairs that allow you to store related data and functionality together. They're fundamental to JavaScript programming.

## Creating Objects

```javascript
// Object literal (most common)
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Empty object
const empty = {};

// Object constructor
const person2 = new Object();
person2.name = 'Jane';
person2.age = 25;
```

## Accessing Properties

```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Dot notation
console.log(person.name); // 'John'
console.log(person.age);  // 30

// Bracket notation
console.log(person['name']); // 'John'
console.log(person['age']);  // 30

// Dynamic property access
const prop = 'city';
console.log(person[prop]); // 'New York'
```

## Modifying Objects

```javascript
const person = {
    name: 'John',
    age: 30
};

// Add property
person.city = 'New York';
person['country'] = 'USA';

// Modify property
person.age = 31;

// Delete property
delete person.city;

console.log(person); // { name: 'John', age: 31, country: 'USA' }
```

## Methods

Objects can contain functions (called methods):

```javascript
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    },
    // Shorthand method syntax
    sayAge() {
        console.log('I am ' + this.age + ' years old');
    }
};

person.greet();  // 'Hello, my name is John'
person.sayAge(); // 'I am 30 years old'
```

## The 'this' Keyword

```javascript
const person = {
    name: 'John',
    age: 30,
    introduce() {
        return `My name is ${this.name} and I'm ${this.age} years old`;
    }
};

console.log(person.introduce());
// 'My name is John and I'm 30 years old'
```

## Nested Objects

```javascript
const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'gaming', 'coding']
};

console.log(person.address.city);    // 'New York'
console.log(person.hobbies[0]);      // 'reading'
```

## Object Methods

```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Get all keys
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

// Get all values
const values = Object.values(person);
console.log(values); // ['John', 30, 'New York']

// Get key-value pairs
const entries = Object.entries(person);
console.log(entries);
// [['name', 'John'], ['age', 30], ['city', 'New York']]

// Check if property exists
console.log('name' in person);        // true
console.log(person.hasOwnProperty('age')); // true
```

## Object Destructuring

```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Extract properties
const { name, age } = person;
console.log(name); // 'John'
console.log(age);  // 30

// With different variable names
const { name: personName, age: personAge } = person;
console.log(personName); // 'John'

// With default values
const { name, country = 'USA' } = person;
console.log(country); // 'USA'
```

## Object Spread Operator

```javascript
const person = {
    name: 'John',
    age: 30
};

// Copy object
const personCopy = { ...person };

// Merge objects
const address = {
    city: 'New York',
    country: 'USA'
};

const fullPerson = { ...person, ...address };
console.log(fullPerson);
// { name: 'John', age: 30, city: 'New York', country: 'USA' }

// Override properties
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson); // { name: 'John', age: 31 }
```

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Objects</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .card {
            background-color: #f0f0f0;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
        }
        button {
            padding: 10px 15px;
            margin: 5px;
            cursor: pointer;
        }
        #output {
            background-color: white;
            padding: 15px;
            margin-top: 10px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>Student Management System</h1>
    
    <div class="card">
        <h2>Add Student</h2>
        <input type="text" id="studentName" placeholder="Name">
        <input type="number" id="studentAge" placeholder="Age">
        <input type="text" id="studentMajor" placeholder="Major">
        <button onclick="addStudent()">Add Student</button>
    </div>
    
    <div class="card">
        <h2>Students</h2>
        <button onclick="displayStudents()">Show All</button>
        <button onclick="sortByName()">Sort by Name</button>
        <button onclick="sortByAge()">Sort by Age</button>
        <div id="output"></div>
    </div>
    
    <script>
        // Array to store student objects
        let students = [
            {
                id: 1,
                name: 'Alice Johnson',
                age: 20,
                major: 'Computer Science',
                getInfo() {
                    return `${this.name}, ${this.age}, ${this.major}`;
                }
            },
            {
                id: 2,
                name: 'Bob Smith',
                age: 22,
                major: 'Mathematics',
                getInfo() {
                    return `${this.name}, ${this.age}, ${this.major}`;
                }
            }
        ];
        
        let nextId = 3;
        
        function addStudent() {
            const name = document.getElementById('studentName').value;
            const age = parseInt(document.getElementById('studentAge').value);
            const major = document.getElementById('studentMajor').value;
            
            if (!name || !age || !major) {
                alert('Please fill all fields');
                return;
            }
            
            const newStudent = {
                id: nextId++,
                name: name,
                age: age,
                major: major,
                getInfo() {
                    return `${this.name}, ${this.age}, ${this.major}`;
                }
            };
            
            students.push(newStudent);
            
            // Clear inputs
            document.getElementById('studentName').value = '';
            document.getElementById('studentAge').value = '';
            document.getElementById('studentMajor').value = '';
            
            displayStudents();
        }
        
        function displayStudents() {
            const output = document.getElementById('output');
            
            if (students.length === 0) {
                output.innerHTML = '<p>No students found</p>';
                return;
            }
            
            let html = '<h3>Student List:</h3>';
            students.forEach(student => {
                html += `
                    <div style="background-color: #e0e0e0; padding: 10px; margin: 5px 0; border-radius: 4px;">
                        <strong>ID:</strong> ${student.id}<br>
                        <strong>Name:</strong> ${student.name}<br>
                        <strong>Age:</strong> ${student.age}<br>
                        <strong>Major:</strong> ${student.major}
                    </div>
                `;
            });
            
            output.innerHTML = html;
        }
        
        function sortByName() {
            students.sort((a, b) => a.name.localeCompare(b.name));
            displayStudents();
        }
        
        function sortByAge() {
            students.sort((a, b) => a.age - b.age);
            displayStudents();
        }
        
        // Initial display
        displayStudents();
    </script>
</body>
</html>
```
:::

## Constructor Functions

```javascript
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.greet = function() {
        console.log(`Hello, I'm ${this.name}`);
    };
}

const person1 = new Person('John', 30, 'New York');
const person2 = new Person('Jane', 25, 'London');

person1.greet(); // 'Hello, I'm John'
```

## Practice Exercise

:::practice title="Create a Contact Manager"
Build a contact manager using objects:
1. Create an array to store contact objects
2. Each contact should have: name, email, phone
3. Add a function to add new contacts
4. Display all contacts on the page
5. Add a method to each contact object

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        input, button {
            padding: 10px;
            margin: 5px;
        }
        .contact {
            background-color: #f0f0f0;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>Contact Manager</h1>
    <div>
        <input type="text" id="name" placeholder="Name">
        <input type="email" id="email" placeholder="Email">
        <input type="tel" id="phone" placeholder="Phone">
        <button onclick="addContact()">Add Contact</button>
    </div>
    <div id="contactList"></div>
    
    <script>
        let contacts = [];
        
        // Add your code here
        
    </script>
</body>
</html>
```
:::
