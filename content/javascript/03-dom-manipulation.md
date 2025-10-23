# DOM Manipulation

The Document Object Model (DOM) is a programming interface for HTML documents. JavaScript can manipulate the DOM to dynamically change content, structure, and styling.

## What is the DOM?

The DOM represents your HTML document as a tree of objects that JavaScript can interact with. Every HTML element is a node in this tree.

## Selecting Elements

```javascript
// By ID
const element = document.getElementById('myId');

// By class name (returns HTMLCollection)
const elements = document.getElementsByClassName('myClass');

// By tag name
const paragraphs = document.getElementsByTagName('p');

// Query selector (returns first match)
const element = document.querySelector('.myClass');
const element = document.querySelector('#myId');

// Query selector all (returns NodeList)
const elements = document.querySelectorAll('.myClass');
```

## Changing Content

```javascript
// Change text content
element.textContent = 'New text';

// Change HTML content
element.innerHTML = '<strong>Bold text</strong>';

// Change input value
inputElement.value = 'New value';
```

## Changing Styles

```javascript
// Change individual style
element.style.color = 'blue';
element.style.fontSize = '20px';
element.style.backgroundColor = 'yellow';

// Add/remove CSS classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('highlight');
element.classList.contains('active'); // returns true/false
```

## Changing Attributes

```javascript
// Get attribute
const href = link.getAttribute('href');

// Set attribute
link.setAttribute('href', 'https://example.com');
image.setAttribute('src', 'new-image.jpg');

// Remove attribute
element.removeAttribute('disabled');

// Direct property access
image.src = 'new-image.jpg';
link.href = 'https://example.com';
```

## Creating Elements

```javascript
// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
newDiv.className = 'box';

// Append to parent
document.body.appendChild(newDiv);

// Insert before another element
parent.insertBefore(newDiv, existingElement);

// Remove element
element.remove();
```

## Event Listeners

```javascript
// Click event
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Using arrow function
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Event with parameter
button.addEventListener('click', (event) => {
    console.log('Clicked element:', event.target);
});

// Common events
element.addEventListener('mouseover', handleMouseOver);
element.addEventListener('mouseout', handleMouseOut);
input.addEventListener('input', handleInput);
input.addEventListener('change', handleChange);
form.addEventListener('submit', handleSubmit);
```

## Complete Example

:::preview height="600px"
```html
<h1 id="title">DOM Manipulation Demo</h1>

<div class="box">
    <h2>Change Content</h2>
    <p id="demo">Original text</p>
    <button onclick="changeText()">Change Text</button>
    <button onclick="changeHTML()">Change HTML</button>
</div>

<div class="box">
    <h2>Change Styles</h2>
    <p id="styled">Style me!</p>
    <button onclick="changeColor()">Change Color</button>
    <button onclick="toggleHighlight()">Toggle Highlight</button>
</div>

<div class="box">
    <h2>Add/Remove Elements</h2>
    <div id="container"></div>
    <button onclick="addElement()">Add Element</button>
    <button onclick="removeElement()">Remove Last</button>
</div>

<div class="box">
    <h2>Todo List</h2>
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
</div>
```

```css
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}
.box {
    background-color: #f0f0f0;
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
}
.highlight {
    background-color: yellow;
}
button {
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
}
button:hover {
    background-color: #0056b3;
}
#taskList li {
    padding: 8px;
    margin: 5px 0;
    background-color: #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    list-style: none;
}
#taskList li:hover {
    background-color: #d0d0d0;
}
#taskInput {
    padding: 8px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
```

```js
// Change text content
function changeText() {
    document.getElementById('demo').textContent = 'Text changed!';
}

// Change HTML content
function changeHTML() {
    document.getElementById('demo').innerHTML = '<strong>Bold</strong> and <em>italic</em> text!';
}

// Change color
function changeColor() {
    const element = document.getElementById('styled');
    element.style.color = 'blue';
    element.style.fontSize = '24px';
}

// Toggle class
function toggleHighlight() {
    document.getElementById('styled').classList.toggle('highlight');
}

// Add element
let elementCount = 0;
function addElement() {
    elementCount++;
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Element ' + elementCount;
    newDiv.style.padding = '10px';
    newDiv.style.margin = '5px';
    newDiv.style.backgroundColor = '#007bff';
    newDiv.style.color = 'white';
    newDiv.style.borderRadius = '4px';
    document.getElementById('container').appendChild(newDiv);
}

// Remove element
function removeElement() {
    const container = document.getElementById('container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
        elementCount--;
    }
}

// Add task to list
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = taskText;
    
    // Add click event to remove task
    li.addEventListener('click', function() {
        this.remove();
    });
    
    document.getElementById('taskList').appendChild(li);
    input.value = ''; // Clear input
}

// Allow Enter key to add task
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
```
:::

## Traversing the DOM

```javascript
// Parent
const parent = element.parentElement;

// Children
const children = element.children;
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Siblings
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;
```

## Practice Exercise

Create an interactive webpage that:
- Has a button to change the page title
- Allows users to add items to a list
- Can remove items when clicked
- Changes element styles dynamically
- Uses event listeners for user interactions


## Practice Exercise

Try manipulating the DOM yourself!

:::practice title="Interactive Button Counter"
Create a button that counts how many times it's been clicked:
1. Get the button element
2. Get the paragraph element
3. Add a click event listener
4. Update the text content with the count

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Counter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            text-align: center;
        }
        button {
            padding: 15px 30px;
            font-size: 18px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        #count {
            font-size: 24px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Click Counter</h1>
    <button id="clickBtn">Click Me!</button>
    <p id="count">Clicks: 0</p>
    
    <script>
        // Add your JavaScript here
        
    </script>
</body>
</html>
```
:::
