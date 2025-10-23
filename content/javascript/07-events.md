# JavaScript Events

Events are actions that happen in the browser, like clicks, key presses, or page loads. JavaScript can respond to these events to create interactive experiences.

## Adding Event Listeners

### addEventListener Method (Recommended)

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// With arrow function
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// With named function
function handleClick() {
    console.log('Button clicked!');
}
button.addEventListener('click', handleClick);
```

### Inline Event Handlers (Not Recommended)

```html
<button onclick="handleClick()">Click Me</button>
```

## Common Events

### Mouse Events

```javascript
element.addEventListener('click', handler);       // Mouse click
element.addEventListener('dblclick', handler);    // Double click
element.addEventListener('mousedown', handler);   // Mouse button pressed
element.addEventListener('mouseup', handler);     // Mouse button released
element.addEventListener('mousemove', handler);   // Mouse moved
element.addEventListener('mouseover', handler);   // Mouse enters element
element.addEventListener('mouseout', handler);    // Mouse leaves element
element.addEventListener('mouseenter', handler);  // Mouse enters (no bubbling)
element.addEventListener('mouseleave', handler);  // Mouse leaves (no bubbling)
```

### Keyboard Events

```javascript
element.addEventListener('keydown', handler);   // Key pressed down
element.addEventListener('keyup', handler);     // Key released
element.addEventListener('keypress', handler);  // Key pressed (deprecated)

// Get which key was pressed
element.addEventListener('keydown', (event) => {
    console.log('Key:', event.key);
    console.log('Code:', event.code);
});
```

### Form Events

```javascript
form.addEventListener('submit', handler);      // Form submitted
input.addEventListener('input', handler);      // Input value changed
input.addEventListener('change', handler);     // Input value changed and lost focus
input.addEventListener('focus', handler);      // Element gained focus
input.addEventListener('blur', handler);       // Element lost focus
```

### Window Events

```javascript
window.addEventListener('load', handler);      // Page fully loaded
window.addEventListener('DOMContentLoaded', handler); // DOM ready
window.addEventListener('resize', handler);    // Window resized
window.addEventListener('scroll', handler);    // Page scrolled
```

## Event Object

```javascript
button.addEventListener('click', (event) => {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Current target:', event.currentTarget);
    console.log('Mouse X:', event.clientX);
    console.log('Mouse Y:', event.clientY);
});
```

## Preventing Default Behavior

```javascript
// Prevent form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form not submitted');
});

// Prevent link navigation
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Link not followed');
});
```

## Event Delegation

```javascript
// Instead of adding listeners to many elements
document.getElementById('parent').addEventListener('click', (event) => {
    if (event.target.matches('.child-button')) {
        console.log('Child button clicked');
    }
});
```

## Removing Event Listeners

```javascript
function handleClick() {
    console.log('Clicked');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener
button.removeEventListener('click', handleClick);
```

## Complete Example

:::preview height="800px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Events</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
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
        
        input, textarea {
            padding: 10px;
            margin: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        
        .box {
            width: 200px;
            height: 200px;
            background-color: #3498db;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0;
            cursor: pointer;
            border-radius: 8px;
        }
        
        .output {
            background-color: white;
            padding: 15px;
            margin-top: 10px;
            border-radius: 5px;
            min-height: 50px;
        }
        
        .key-display {
            font-size: 48px;
            font-weight: bold;
            color: #2c3e50;
            text-align: center;
            padding: 40px;
            background-color: white;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        .mouse-tracker {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>JavaScript Events Demo</h1>
    
    <div class="section">
        <h2>Click Events</h2>
        <button id="clickBtn">Click Me</button>
        <button id="doubleClickBtn">Double Click Me</button>
        <div class="output" id="clickOutput">Click count: 0</div>
    </div>
    
    <div class="section">
        <h2>Mouse Events</h2>
        <div class="box" id="hoverBox">Hover over me!</div>
        <div class="output" id="mouseOutput">Mouse position: X: 0, Y: 0</div>
    </div>
    
    <div class="section">
        <h2>Keyboard Events</h2>
        <input type="text" id="keyInput" placeholder="Type something...">
        <div class="key-display" id="keyDisplay">Press a key</div>
    </div>
    
    <div class="section">
        <h2>Form Events</h2>
        <form id="myForm">
            <input type="text" id="nameInput" placeholder="Your name" required>
            <input type="email" id="emailInput" placeholder="Your email" required>
            <button type="submit">Submit</button>
        </form>
        <div class="output" id="formOutput"></div>
    </div>
    
    <div class="section">
        <h2>Input Events</h2>
        <input type="text" id="liveInput" placeholder="Type to see live updates">
        <div class="output" id="liveOutput">You typed: </div>
    </div>
    
    <div class="section">
        <h2>Event Delegation</h2>
        <div id="buttonContainer">
            <button class="dynamic-btn">Button 1</button>
            <button class="dynamic-btn">Button 2</button>
            <button class="dynamic-btn">Button 3</button>
        </div>
        <button id="addBtn">Add New Button</button>
        <div class="output" id="delegationOutput"></div>
    </div>
    
    <script>
        // Click Events
        let clickCount = 0;
        const clickBtn = document.getElementById('clickBtn');
        const clickOutput = document.getElementById('clickOutput');
        
        clickBtn.addEventListener('click', () => {
            clickCount++;
            clickOutput.textContent = `Click count: ${clickCount}`;
        });
        
        document.getElementById('doubleClickBtn').addEventListener('dblclick', () => {
            clickOutput.textContent = 'Double clicked!';
            clickOutput.style.backgroundColor = '#ffe6e6';
            setTimeout(() => {
                clickOutput.style.backgroundColor = 'white';
            }, 500);
        });
        
        // Mouse Events
        const hoverBox = document.getElementById('hoverBox');
        const mouseOutput = document.getElementById('mouseOutput');
        
        hoverBox.addEventListener('mouseenter', () => {
            hoverBox.style.backgroundColor = '#2ecc71';
            hoverBox.textContent = 'Mouse entered!';
        });
        
        hoverBox.addEventListener('mouseleave', () => {
            hoverBox.style.backgroundColor = '#3498db';
            hoverBox.textContent = 'Mouse left!';
        });
        
        document.addEventListener('mousemove', (event) => {
            mouseOutput.textContent = `Mouse position: X: ${event.clientX}, Y: ${event.clientY}`;
        });
        
        // Keyboard Events
        const keyInput = document.getElementById('keyInput');
        const keyDisplay = document.getElementById('keyDisplay');
        
        keyInput.addEventListener('keydown', (event) => {
            keyDisplay.textContent = event.key;
            keyDisplay.style.color = '#e74c3c';
        });
        
        keyInput.addEventListener('keyup', () => {
            setTimeout(() => {
                keyDisplay.style.color = '#2c3e50';
            }, 200);
        });
        
        // Form Events
        const myForm = document.getElementById('myForm');
        const formOutput = document.getElementById('formOutput');
        
        myForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const name = document.getElementById('nameInput').value;
            const email = document.getElementById('emailInput').value;
            
            formOutput.innerHTML = `
                <p><strong>Form Submitted!</strong></p>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
            `;
            
            myForm.reset();
        });
        
        // Input Events
        const liveInput = document.getElementById('liveInput');
        const liveOutput = document.getElementById('liveOutput');
        
        liveInput.addEventListener('input', (event) => {
            liveOutput.textContent = `You typed: ${event.target.value}`;
        });
        
        // Event Delegation
        const buttonContainer = document.getElementById('buttonContainer');
        const delegationOutput = document.getElementById('delegationOutput');
        let buttonCount = 3;
        
        buttonContainer.addEventListener('click', (event) => {
            if (event.target.matches('.dynamic-btn')) {
                delegationOutput.textContent = `Clicked: ${event.target.textContent}`;
            }
        });
        
        document.getElementById('addBtn').addEventListener('click', () => {
            buttonCount++;
            const newButton = document.createElement('button');
            newButton.className = 'dynamic-btn';
            newButton.textContent = `Button ${buttonCount}`;
            buttonContainer.appendChild(newButton);
        });
    </script>
</body>
</html>
```
:::

## Event Bubbling and Capturing

```javascript
// Bubbling (default) - event travels up from target to root
element.addEventListener('click', handler, false);

// Capturing - event travels down from root to target
element.addEventListener('click', handler, true);

// Stop propagation
element.addEventListener('click', (event) => {
    event.stopPropagation();
});
```

## Practice Exercise

:::practice title="Build an Interactive Todo App"
Create a todo app with events:
1. Add new todos on form submit
2. Mark todos as complete on click
3. Delete todos with a button
4. Use event delegation for dynamic elements
5. Save to localStorage on changes

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo App</title>
    <style>
        /* Add your styles */
    </style>
</head>
<body>
    <h1>My Todo List</h1>
    <form id="todoForm">
        <input type="text" id="todoInput" placeholder="Add a new task">
        <button type="submit">Add</button>
    </form>
    <ul id="todoList"></ul>
    
    <script>
        // Add your event handling code here
    </script>
</body>
</html>
```
:::
