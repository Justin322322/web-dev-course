# HTML Forms

Forms allow users to input data and interact with your website. They're essential for login pages, contact forms, surveys, and more.

## Basic Form Structure

```html
<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    
    <button type="submit">Submit</button>
</form>
```

## Input Types

HTML5 provides many input types for different data:

```html
<!-- Text input -->
<input type="text" name="fullname" placeholder="Enter your name">

<!-- Email input with validation -->
<input type="email" name="email" placeholder="email@example.com" required>

<!-- Password input (hidden characters) -->
<input type="password" name="password">

<!-- Number input -->
<input type="number" name="age" min="1" max="120">

<!-- Date input -->
<input type="date" name="birthday">

<!-- Checkbox -->
<input type="checkbox" name="subscribe" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>

<!-- Radio buttons -->
<input type="radio" name="gender" value="male" id="male">
<label for="male">Male</label>
<input type="radio" name="gender" value="female" id="female">
<label for="female">Female</label>

<!-- File upload -->
<input type="file" name="avatar" accept="image/*">

<!-- Color picker -->
<input type="color" name="favcolor">

<!-- Range slider -->
<input type="range" name="volume" min="0" max="100">
```

## Textarea and Select

```html
<!-- Multi-line text input -->
<textarea name="message" rows="5" cols="40" placeholder="Enter your message"></textarea>

<!-- Dropdown select -->
<select name="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
</select>

<!-- Multiple select -->
<select name="skills" multiple>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
</select>
```

## Form Attributes

```html
<!-- Required field -->
<input type="text" name="username" required>

<!-- Disabled field -->
<input type="text" name="readonly" disabled>

<!-- Read-only field -->
<input type="text" name="readonly" readonly value="Cannot edit">

<!-- Pattern validation -->
<input type="text" name="zipcode" pattern="[0-9]{5}" title="5-digit zip code">

<!-- Min/max length -->
<input type="text" name="username" minlength="3" maxlength="20">

<!-- Autofocus -->
<input type="text" name="search" autofocus>

<!-- Autocomplete -->
<input type="email" name="email" autocomplete="email">
```

## Complete Contact Form Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Us</h1>
    
    <form action="/submit-contact" method="POST">
        <fieldset>
            <legend>Personal Information</legend>
            
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required>
            <br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br><br>
            
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
            <br><br>
        </fieldset>
        
        <fieldset>
            <legend>Message Details</legend>
            
            <label for="subject">Subject:</label>
            <select id="subject" name="subject" required>
                <option value="">Choose a topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback</option>
            </select>
            <br><br>
            
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="6" cols="50" required></textarea>
            <br><br>
            
            <label for="priority">Priority:</label>
            <input type="range" id="priority" name="priority" min="1" max="5" value="3">
            <br><br>
        </fieldset>
        
        <fieldset>
            <legend>Preferences</legend>
            
            <input type="checkbox" id="newsletter" name="newsletter">
            <label for="newsletter">Subscribe to newsletter</label>
            <br>
            
            <input type="checkbox" id="terms" name="terms" required>
            <label for="terms">I agree to the terms and conditions</label>
            <br><br>
        </fieldset>
        
        <button type="submit">Send Message</button>
        <button type="reset">Clear Form</button>
    </form>
</body>
</html>
```

## Form Validation

HTML5 provides built-in validation:

```html
<form>
    <!-- Email validation -->
    <input type="email" required>
    
    <!-- URL validation -->
    <input type="url" required>
    
    <!-- Number range validation -->
    <input type="number" min="18" max="100" required>
    
    <!-- Pattern matching -->
    <input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters">
    
    <button type="submit">Submit</button>
</form>
```

## Practice Exercise

Create a registration form with:
- Username and password fields
- Email field with validation
- Date of birth picker
- Gender radio buttons
- Interests checkboxes
- Country dropdown
- Bio textarea
- Submit and reset buttons
