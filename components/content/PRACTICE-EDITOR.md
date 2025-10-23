# Practice Editor Component

An interactive code editor modal for hands-on practice exercises with live HTML preview.

## Features

- **Split-screen layout**: Code editor on the left, live preview on the right
- **Instructions panel**: Clear guidance for each exercise
- **Live preview**: See changes in real-time
- **Reset button**: Restore initial code
- **Run button**: Refresh the preview
- **Modal interface**: Focused, distraction-free practice environment
- **Responsive design**: Works on desktop and mobile

## Usage in Markdown

Add practice exercises to your lesson content using the `:::practice` syntax:

```markdown
:::practice title="Your Exercise Title"
Instructions for the exercise go here.
You can use multiple lines.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Practice</title>
</head>
<body>
    <!-- Student code goes here -->
</body>
</html>
```
:::
```

## Parameters

- `title` (optional): The exercise title shown in the modal header
  - Default: "Practice Exercise"
  - Example: `:::practice title="Build a Navigation Menu"`

## Example

```markdown
:::practice title="Create Your First Heading"
Try creating an h1 heading with your name and a paragraph about yourself:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
</head>
<body>
    <!-- Add your HTML here -->
    
</body>
</html>
```
:::
```

## How It Works

1. Students click "Open Practice Editor" button
2. Modal opens with instructions and starter code
3. Students edit the HTML in the code editor
4. Click "Run" to see changes in the preview
5. Click "Reset" to restore original code
6. Close modal when done

## Best Practices

- Keep instructions clear and concise
- Provide starter code with helpful comments
- Include complete HTML documents for proper rendering
- Use meaningful exercise titles
- Test exercises before publishing
