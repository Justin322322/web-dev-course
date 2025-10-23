# CSS Transitions & Animations

CSS transitions and animations add motion and interactivity to your websites, making them more engaging and dynamic.

## CSS Transitions

Transitions allow you to change property values smoothly over a duration.

### Basic Transition

```css
.button {
    background-color: blue;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: red;
}
```

### Transition Properties

```css
.element {
    /* Individual properties */
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0.1s;
    
    /* Shorthand */
    transition: background-color 0.3s ease 0.1s;
    
    /* Multiple properties */
    transition: background-color 0.3s, transform 0.5s;
    
    /* All properties */
    transition: all 0.3s ease;
}
```

### Timing Functions

```css
transition-timing-function: linear;      /* Constant speed */
transition-timing-function: ease;        /* Slow start, fast, slow end (default) */
transition-timing-function: ease-in;     /* Slow start */
transition-timing-function: ease-out;    /* Slow end */
transition-timing-function: ease-in-out; /* Slow start and end */
transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); /* Custom */
```

## CSS Animations

Animations allow more complex sequences of changes.

### Keyframes

```css
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* With percentages */
@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}
```

### Animation Properties

```css
.element {
    /* Individual properties */
    animation-name: slideIn;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    
    /* Shorthand */
    animation: slideIn 1s ease 0.5s infinite alternate forwards;
}
```

### Animation Properties Explained

- `animation-name`: Name of the @keyframes
- `animation-duration`: How long the animation takes
- `animation-timing-function`: Speed curve
- `animation-delay`: Delay before starting
- `animation-iteration-count`: Number of times (or infinite)
- `animation-direction`: normal, reverse, alternate, alternate-reverse
- `animation-fill-mode`: none, forwards, backwards, both

## Complete Example

:::preview height="800px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Transitions & Animations</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            background-color: #f5f5f5;
        }
        
        .section {
            background-color: white;
            padding: 30px;
            margin-bottom: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        h2 {
            margin-bottom: 20px;
            color: #333;
        }
        
        /* Transition Examples */
        .button {
            display: inline-block;
            padding: 15px 30px;
            margin: 10px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .button:hover {
            background-color: #2980b9;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .button:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        /* Card with transition */
        .card {
            width: 200px;
            height: 250px;
            background-color: #ecf0f1;
            border-radius: 10px;
            padding: 20px;
            margin: 10px;
            display: inline-block;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .card:hover {
            transform: scale(1.05) rotate(2deg);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        /* Loading Spinner Animation */
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 20px;
        }
        
        /* Bounce Animation */
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-30px);
            }
        }
        
        .bounce-ball {
            width: 60px;
            height: 60px;
            background-color: #e74c3c;
            border-radius: 50%;
            animation: bounce 1s ease-in-out infinite;
            margin: 20px;
        }
        
        /* Pulse Animation */
        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.7;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
        
        .pulse-circle {
            width: 80px;
            height: 80px;
            background-color: #2ecc71;
            border-radius: 50%;
            animation: pulse 2s ease-in-out infinite;
            margin: 20px;
        }
        
        /* Slide In Animation */
        @keyframes slideIn {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .slide-box {
            width: 200px;
            height: 100px;
            background-color: #9b59b6;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            animation: slideIn 2s ease-out infinite;
            margin: 20px 0;
        }
        
        /* Fade In Animation */
        @keyframes fadeIn {
            0%, 50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        
        .fade-text {
            animation: fadeIn 3s ease-in infinite;
            font-size: 24px;
            color: #34495e;
            margin: 20px 0;
        }
        
        /* Progress Bar Animation */
        @keyframes progress {
            0% {
                width: 0%;
            }
            50% {
                width: 100%;
            }
            100% {
                width: 0%;
            }
        }
        
        .progress-bar {
            width: 100%;
            height: 30px;
            background-color: #ecf0f1;
            border-radius: 15px;
            overflow: hidden;
            margin: 20px 0;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #3498db, #2ecc71);
            animation: progress 4s ease-in-out infinite;
        }
    </style>
</head>
<body>
    <h1>CSS Transitions & Animations</h1>
    
    <div class="section">
        <h2>Transitions (Hover Effects)</h2>
        <button class="button">Hover Me</button>
        <button class="button">Click Me</button>
        
        <div style="margin-top: 20px;">
            <div class="card">
                <h3>Card 1</h3>
                <p>Hover to see transition effect</p>
            </div>
            <div class="card">
                <h3>Card 2</h3>
                <p>Scale and rotate on hover</p>
            </div>
        </div>
    </div>
    
    <div class="section">
        <h2>Loading Animations</h2>
        <div class="spinner"></div>
        <p>Infinite spinning loader</p>
    </div>
    
    <div class="section">
        <h2>Bounce Animation</h2>
        <div class="bounce-ball"></div>
        <p>Bouncing ball effect</p>
    </div>
    
    <div class="section">
        <h2>Pulse Animation</h2>
        <div class="pulse-circle"></div>
        <p>Pulsing circle effect</p>
    </div>
    
    <div class="section">
        <h2>Slide In Animation</h2>
        <div class="slide-box">
            <p>Sliding from left</p>
        </div>
    </div>
    
    <div class="section">
        <h2>Fade In Animation</h2>
        <p class="fade-text">This text fades in smoothly</p>
    </div>
    
    <div class="section">
        <h2>Progress Bar Animation</h2>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
    </div>
</body>
</html>
```
:::

## Common Animation Patterns

### Hover Grow

```css
.element {
    transition: transform 0.3s;
}
.element:hover {
    transform: scale(1.1);
}
```

### Fade In on Load

```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.element {
    animation: fadeIn 1s ease-in;
}
```

### Shake Effect

```css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

.element:hover {
    animation: shake 0.5s;
}
```

## Practice Exercise

:::practice title="Create Animated Components"
Build animated UI components:
1. Create a button with hover transition
2. Add a loading spinner animation
3. Create a card that flips on hover
4. Add a progress bar animation
5. Create a pulsing notification badge

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Animated Components</title>
    <style>
        /* Add your animations here */
    </style>
</head>
<body>
    <!-- Add your animated elements here -->
</body>
</html>
```
:::
