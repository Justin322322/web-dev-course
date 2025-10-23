# Responsive Web Design

Responsive design ensures your website looks great on all devices - from phones to tablets to desktops. Learn how to create flexible layouts that adapt to different screen sizes.

## What is Responsive Design?

Responsive web design is an approach that makes web pages render well on all devices and screen sizes by automatically adapting the layout.

## Viewport Meta Tag

Always include this in your HTML `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Media Queries

Media queries apply different styles based on screen size:

```css
/* Mobile first approach */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        width: 960px;
    }
}
```

## Common Breakpoints

```css
/* Extra small devices (phones) */
@media (max-width: 575px) { }

/* Small devices (tablets) */
@media (min-width: 576px) and (max-width: 767px) { }

/* Medium devices (small laptops) */
@media (min-width: 768px) and (max-width: 991px) { }

/* Large devices (desktops) */
@media (min-width: 992px) and (max-width: 1199px) { }

/* Extra large devices (large desktops) */
@media (min-width: 1200px) { }
```

## Flexible Images

Make images responsive:

```css
img {
    max-width: 100%;
    height: auto;
}
```

## Flexible Grid

Create a responsive grid layout:

```css
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: Arial, sans-serif;
        }
        
        /* Mobile first */
        .header {
            background-color: #333;
            color: white;
            padding: 15px;
            text-align: center;
        }
        
        .nav {
            display: flex;
            flex-direction: column;
            background-color: #444;
        }
        
        .nav a {
            color: white;
            padding: 15px;
            text-decoration: none;
            border-bottom: 1px solid #555;
        }
        
        .container {
            padding: 20px;
        }
        
        .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        
        .card {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 8px;
        }
        
        img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }
        
        /* Tablet */
        @media (min-width: 768px) {
            .nav {
                flex-direction: row;
                justify-content: center;
            }
            
            .nav a {
                border-bottom: none;
                border-right: 1px solid #555;
            }
            
            .nav a:last-child {
                border-right: none;
            }
            
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
            .container {
                max-width: 1200px;
                margin: 0 auto;
            }
            
            .grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>Responsive Website</h1>
    </header>
    
    <nav class="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </nav>
    
    <div class="container">
        <h2>Our Services</h2>
        <div class="grid">
            <div class="card">
                <h3>Service 1</h3>
                <p>Description of service 1</p>
            </div>
            <div class="card">
                <h3>Service 2</h3>
                <p>Description of service 2</p>
            </div>
            <div class="card">
                <h3>Service 3</h3>
                <p>Description of service 3</p>
            </div>
        </div>
    </div>
</body>
</html>
```

## Practice Exercise

Create a responsive portfolio page with:
- A navigation that stacks on mobile, horizontal on desktop
- A grid of projects (1 column mobile, 2 tablet, 3 desktop)
- Responsive images
- Different font sizes for different screen sizes
