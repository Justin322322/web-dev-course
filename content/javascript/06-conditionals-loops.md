# Conditionals and Loops

Control flow statements allow you to make decisions and repeat actions in your code.

## Conditional Statements

### If Statement

```javascript
let age = 18;

if (age >= 18) {
    console.log('You are an adult');
}
```

### If-Else Statement

```javascript
let age = 16;

if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}
```

### If-Else If-Else

```javascript
let score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else if (score >= 60) {
    console.log('Grade: D');
} else {
    console.log('Grade: F');
}
```

### Switch Statement

```javascript
let day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Start of the work week');
        break;
    case 'Friday':
        console.log('End of the work week');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend!');
        break;
    default:
        console.log('Midweek day');
}
```

### Ternary Operator

```javascript
let age = 20;
let status = age >= 18 ? 'adult' : 'minor';
console.log(status); // 'adult'

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
```

## Comparison Operators

```javascript
// Equality
5 == '5'   // true (loose equality, converts types)
5 === '5'  // false (strict equality, checks type)
5 != '5'   // false
5 !== '5'  // true

// Comparison
5 > 3      // true
5 < 3      // false
5 >= 5     // true
5 <= 3     // false
```

## Logical Operators

```javascript
// AND (&&) - both must be true
let age = 25;
let hasLicense = true;
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
    console.log('Go outside');
}
```

## For Loop

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Loop through array
let fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Counting backwards
for (let i = 5; i > 0; i--) {
    console.log(i); // 5, 4, 3, 2, 1
}

// Step by 2
for (let i = 0; i < 10; i += 2) {
    console.log(i); // 0, 2, 4, 6, 8
}
```

## While Loop

```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Be careful of infinite loops!
// while (true) {
//     console.log('This runs forever!');
// }
```

## Do-While Loop

```javascript
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);

// Runs at least once, even if condition is false
let num = 10;
do {
    console.log(num); // Prints 10
} while (num < 5);
```

## For...Of Loop

```javascript
// Loop through array values
let fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
    console.log(fruit);
}

// Loop through string characters
let name = 'John';
for (let char of name) {
    console.log(char); // J, o, h, n
}
```

## For...In Loop

```javascript
// Loop through object properties
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

// Also works with arrays (but for...of is preferred)
let colors = ['red', 'green', 'blue'];
for (let index in colors) {
    console.log(index + ': ' + colors[index]);
}
```

## Break and Continue

```javascript
// Break - exit loop early
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Stop loop when i is 5
    }
    console.log(i); // 0, 1, 2, 3, 4
}

// Continue - skip current iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip when i is 2
    }
    console.log(i); // 0, 1, 3, 4
}
```

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Conditionals & Loops</title>
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
        
        input, button {
            padding: 10px;
            margin: 5px;
            font-size: 16px;
        }
        
        button {
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        #output {
            background-color: white;
            padding: 15px;
            margin-top: 10px;
            border-radius: 5px;
            min-height: 50px;
        }
        
        .list-item {
            padding: 8px;
            margin: 5px 0;
            background-color: #e9ecef;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>Conditionals & Loops Demo</h1>
    
    <div class="section">
        <h2>Grade Calculator</h2>
        <input type="number" id="score" placeholder="Enter score (0-100)" min="0" max="100">
        <button onclick="calculateGrade()">Calculate Grade</button>
        <div id="gradeOutput"></div>
    </div>
    
    <div class="section">
        <h2>Number Checker</h2>
        <input type="number" id="number" placeholder="Enter a number">
        <button onclick="checkNumber()">Check Number</button>
        <div id="numberOutput"></div>
    </div>
    
    <div class="section">
        <h2>Multiplication Table</h2>
        <input type="number" id="tableNum" placeholder="Enter number" value="5">
        <button onclick="generateTable()">Generate Table</button>
        <div id="tableOutput"></div>
    </div>
    
    <div class="section">
        <h2>Loop Through Array</h2>
        <button onclick="loopArray()">Show Fruits</button>
        <div id="arrayOutput"></div>
    </div>
    
    <div class="section">
        <h2>Countdown Timer</h2>
        <input type="number" id="countdown" placeholder="Seconds" value="10">
        <button onclick="startCountdown()">Start Countdown</button>
        <div id="countdownOutput"></div>
    </div>
    
    <script>
        // Grade Calculator
        function calculateGrade() {
            const score = parseInt(document.getElementById('score').value);
            const output = document.getElementById('gradeOutput');
            
            if (isNaN(score) || score < 0 || score > 100) {
                output.innerHTML = '<p style="color: red;">Please enter a valid score (0-100)</p>';
                return;
            }
            
            let grade, message;
            
            if (score >= 90) {
                grade = 'A';
                message = 'Excellent!';
            } else if (score >= 80) {
                grade = 'B';
                message = 'Good job!';
            } else if (score >= 70) {
                grade = 'C';
                message = 'Fair';
            } else if (score >= 60) {
                grade = 'D';
                message = 'Needs improvement';
            } else {
                grade = 'F';
                message = 'Failed';
            }
            
            output.innerHTML = `
                <p><strong>Score:</strong> ${score}</p>
                <p><strong>Grade:</strong> ${grade}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;
        }
        
        // Number Checker
        function checkNumber() {
            const num = parseInt(document.getElementById('number').value);
            const output = document.getElementById('numberOutput');
            
            if (isNaN(num)) {
                output.innerHTML = '<p style="color: red;">Please enter a valid number</p>';
                return;
            }
            
            let results = [];
            
            // Even or odd
            results.push(num % 2 === 0 ? 'Even' : 'Odd');
            
            // Positive, negative, or zero
            if (num > 0) results.push('Positive');
            else if (num < 0) results.push('Negative');
            else results.push('Zero');
            
            // Divisible by 5
            if (num % 5 === 0) results.push('Divisible by 5');
            
            output.innerHTML = `<p><strong>${num}</strong> is: ${results.join(', ')}</p>`;
        }
        
        // Multiplication Table
        function generateTable() {
            const num = parseInt(document.getElementById('tableNum').value);
            const output = document.getElementById('tableOutput');
            
            if (isNaN(num)) {
                output.innerHTML = '<p style="color: red;">Please enter a valid number</p>';
                return;
            }
            
            let html = `<h3>Multiplication Table for ${num}</h3>`;
            
            for (let i = 1; i <= 10; i++) {
                html += `<div class="list-item">${num} × ${i} = ${num * i}</div>`;
            }
            
            output.innerHTML = html;
        }
        
        // Loop Through Array
        function loopArray() {
            const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry'];
            const output = document.getElementById('arrayOutput');
            
            let html = '<h3>Fruits List:</h3>';
            
            for (let i = 0; i < fruits.length; i++) {
                html += `<div class="list-item">${i + 1}. ${fruits[i]}</div>`;
            }
            
            output.innerHTML = html;
        }
        
        // Countdown Timer
        function startCountdown() {
            let seconds = parseInt(document.getElementById('countdown').value);
            const output = document.getElementById('countdownOutput');
            
            if (isNaN(seconds) || seconds < 1) {
                output.innerHTML = '<p style="color: red;">Please enter a valid number of seconds</p>';
                return;
            }
            
            const interval = setInterval(() => {
                output.innerHTML = `<h2 style="color: #007bff;">${seconds}</h2>`;
                seconds--;
                
                if (seconds < 0) {
                    clearInterval(interval);
                    output.innerHTML = '<h2 style="color: #28a745;">Time\'s Up!</h2>';
                }
            }, 1000);
        }
    </script>
</body>
</html>
```
:::

## Practice Exercise

:::practice title="Build a Number Guessing Game"
Create a number guessing game:
1. Generate a random number between 1-100
2. Let the user guess the number
3. Use conditionals to give hints (too high/too low)
4. Use a loop to allow multiple guesses
5. Count the number of attempts

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Guessing Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            text-align: center;
        }
        input, button {
            padding: 10px;
            margin: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Number Guessing Game</h1>
    <p>Guess a number between 1 and 100</p>
    <input type="number" id="guess" min="1" max="100">
    <button onclick="checkGuess()">Guess</button>
    <div id="result"></div>
    <div id="attempts"></div>
    
    <script>
        // Add your game logic here
    </script>
</body>
</html>
```
:::
