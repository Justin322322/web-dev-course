# HTML Tables

Tables are used to display data in rows and columns. They're perfect for presenting structured information like schedules, pricing, or statistics.

## Basic Table Structure

```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>John</td>
        <td>30</td>
        <td>New York</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>25</td>
        <td>London</td>
    </tr>
</table>
```

## Table Elements

- `<table>`: Defines the table
- `<tr>`: Table row
- `<th>`: Table header cell (bold and centered by default)
- `<td>`: Table data cell
- `<thead>`: Groups header content
- `<tbody>`: Groups body content
- `<tfoot>`: Groups footer content

## Complete Table Structure

```html
<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Laptop</td>
            <td>$999</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Mouse</td>
            <td>$29</td>
            <td>15</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Total Items:</td>
            <td>20</td>
        </tr>
    </tfoot>
</table>
```

## Spanning Columns and Rows

```html
<table>
    <tr>
        <th>Name</th>
        <th colspan="2">Contact</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Email</td>
        <td>Phone</td>
    </tr>
    <tr>
        <td rowspan="2">Jane</td>
        <td>jane@email.com</td>
        <td>555-1234</td>
    </tr>
    <tr>
        <td>jane2@email.com</td>
        <td>555-5678</td>
    </tr>
</table>
```

## Styling Tables with CSS

:::preview height="400px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Styled Table</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background-color: #007bff;
            color: white;
            font-weight: bold;
        }
        
        tr:hover {
            background-color: #f5f5f5;
        }
        
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>
    <h1>Student Grades</h1>
    <table>
        <thead>
            <tr>
                <th>Student</th>
                <th>Math</th>
                <th>Science</th>
                <th>English</th>
                <th>Average</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alice Johnson</td>
                <td>95</td>
                <td>88</td>
                <td>92</td>
                <td>91.7</td>
            </tr>
            <tr>
                <td>Bob Smith</td>
                <td>87</td>
                <td>90</td>
                <td>85</td>
                <td>87.3</td>
            </tr>
            <tr>
                <td>Carol White</td>
                <td>92</td>
                <td>94</td>
                <td>89</td>
                <td>91.7</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```
:::

## Practice Exercise

:::practice title="Create a Schedule Table"
Create a weekly schedule table with:
1. Days of the week as column headers
2. Time slots as row headers
3. Activities in the cells
4. Use colspan for activities that span multiple days
5. Style the table with CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weekly Schedule</title>
    <style>
        /* Add your CSS here */
    </style>
</head>
<body>
    <h1>My Weekly Schedule</h1>
    <!-- Add your table here -->
</body>
</html>
```
:::
