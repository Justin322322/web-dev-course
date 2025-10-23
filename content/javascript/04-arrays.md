# JavaScript Arrays

Arrays are used to store multiple values in a single variable. They're one of the most important data structures in JavaScript.

## Creating Arrays

```javascript
// Array literal (recommended)
const fruits = ['apple', 'banana', 'orange'];

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Empty array
const empty = [];

// Mixed types
const mixed = [1, 'text', true, { name: 'John' }];
```

## Accessing Elements

```javascript
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
console.log(fruits[2]); // 'orange'

// Last element
console.log(fruits[fruits.length - 1]); // 'orange'
```

## Array Properties

```javascript
const fruits = ['apple', 'banana', 'orange'];

// Length
console.log(fruits.length); // 3

// Check if array
console.log(Array.isArray(fruits)); // true
```

## Adding and Removing Elements

```javascript
const fruits = ['apple', 'banana'];

// Add to end
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// Remove from end
const last = fruits.pop();
console.log(last);   // 'orange'
console.log(fruits); // ['apple', 'banana']

// Add to beginning
fruits.unshift('mango');
console.log(fruits); // ['mango', 'apple', 'banana']

// Remove from beginning
const first = fruits.shift();
console.log(first);  // 'mango'
console.log(fruits); // ['apple', 'banana']
```

## Array Methods

### splice() - Add/Remove elements

```javascript
const fruits = ['apple', 'banana', 'orange', 'mango'];

// Remove 2 elements starting at index 1
fruits.splice(1, 2);
console.log(fruits); // ['apple', 'mango']

// Add elements at index 1
fruits.splice(1, 0, 'kiwi', 'grape');
console.log(fruits); // ['apple', 'kiwi', 'grape', 'mango']
```

### slice() - Extract portion

```javascript
const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

const citrus = fruits.slice(2, 4);
console.log(citrus); // ['orange', 'mango']
console.log(fruits); // Original unchanged
```

### concat() - Merge arrays

```javascript
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'potato'];

const food = fruits.concat(vegetables);
console.log(food); // ['apple', 'banana', 'carrot', 'potato']
```

### join() - Convert to string

```javascript
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.join());      // 'apple,banana,orange'
console.log(fruits.join(' - ')); // 'apple - banana - orange'
```

## Searching Arrays

```javascript
const fruits = ['apple', 'banana', 'orange', 'banana'];

// indexOf - first occurrence
console.log(fruits.indexOf('banana')); // 1

// lastIndexOf - last occurrence
console.log(fruits.lastIndexOf('banana')); // 3

// includes - check if exists
console.log(fruits.includes('apple')); // true
console.log(fruits.includes('grape')); // false

// find - first element that matches
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found); // 12

// findIndex - index of first match
const index = numbers.findIndex(num => num > 10);
console.log(index); // 1
```

## Iterating Arrays

```javascript
const fruits = ['apple', 'banana', 'orange'];

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach method
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
});

// forEach with arrow function
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
```

## Array Transformation Methods

### map() - Transform each element

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const names = ['john', 'jane', 'bob'];
const capitalized = names.map(name => name.toUpperCase());
console.log(capitalized); // ['JOHN', 'JANE', 'BOB']
```

### filter() - Keep elements that match

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

const words = ['apple', 'banana', 'kiwi', 'orange'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // ['banana', 'orange']
```

### reduce() - Reduce to single value

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

const max = numbers.reduce((max, num) => num > max ? num : max);
console.log(max); // 5
```

## Sorting Arrays

```javascript
const fruits = ['banana', 'apple', 'orange', 'mango'];

// Sort alphabetically
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'mango', 'orange']

// Reverse
fruits.reverse();
console.log(fruits); // ['orange', 'mango', 'banana', 'apple']

// Sort numbers
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 5, 10, 25, 40, 100]

numbers.sort((a, b) => b - a); // Descending
console.log(numbers); // [100, 40, 25, 10, 5, 1]
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Array Methods Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .section {
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
            min-height: 50px;
        }
    </style>
</head>
<body>
    <h1>JavaScript Arrays Demo</h1>
    
    <div class="section">
        <h2>Array Operations</h2>
        <button onclick="showOriginal()">Show Original</button>
        <button onclick="addElement()">Add Element</button>
        <button onclick="removeElement()">Remove Element</button>
        <button onclick="sortArray()">Sort</button>
        <button onclick="reverseArray()">Reverse</button>
        <div id="output"></div>
    </div>
    
    <script>
        let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
        
        function displayArray() {
            document.getElementById('output').innerHTML = 
                '<strong>Array:</strong> [' + fruits.join(', ') + ']<br>' +
                '<strong>Length:</strong> ' + fruits.length;
        }
        
        function showOriginal() {
            fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
            displayArray();
        }
        
        function addElement() {
            const newFruit = prompt('Enter a fruit to add:');
            if (newFruit) {
                fruits.push(newFruit);
                displayArray();
            }
        }
        
        function removeElement() {
            if (fruits.length > 0) {
                const removed = fruits.pop();
                alert('Removed: ' + removed);
                displayArray();
            }
        }
        
        function sortArray() {
            fruits.sort();
            displayArray();
        }
        
        function reverseArray() {
            fruits.reverse();
            displayArray();
        }
        
        // Initial display
        displayArray();
    </script>
</body>
</html>
```

## Practice Exercise

Create a program that:
- Stores a list of student names
- Adds new students
- Removes students
- Sorts students alphabetically
- Filters students by name length
- Displays the total number of students
