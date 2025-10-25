# JavaScript Type Coercion

Type coercion is the automatic or implicit conversion of values from one data type to another. Understanding this is crucial for avoiding bugs.

## What is Type Coercion?

JavaScript automatically converts types when needed:

```javascript
// Number + String = String
console.log(5 + '5');      // '55' (number becomes string)

// String - Number = Number
console.log('10' - 5);     // 5 (string becomes number)

// Boolean to Number
console.log(true + 1);     // 2 (true becomes 1)
console.log(false + 1);    // 1 (false becomes 0)
```

## Implicit vs Explicit Coercion

### Implicit Coercion

JavaScript automatically converts types:

```javascript
let result1 = '5' * 2;     // 10 (string to number)
let result2 = '5' - 2;     // 3 (string to number)
let result3 = '5' + 2;     // '52' (number to string)
let result4 = !'hello';    // false (string to boolean)
```

### Explicit Coercion

You manually convert types:

```javascript
// To Number
let num1 = Number('42');        // 42
let num2 = parseInt('42px');    // 42
let num3 = parseFloat('3.14');  // 3.14
let num4 = +'42';               // 42 (unary plus)

// To String
let str1 = String(42);          // '42'
let str2 = (42).toString();     // '42'
let str3 = 42 + '';             // '42'

// To Boolean
let bool1 = Boolean(1);         // true
let bool2 = Boolean(0);         // false
let bool3 = !!1;                // true (double NOT)
```

## String Coercion

When using `+` with a string, everything becomes a string:

```javascript
console.log('5' + 5);          // '55'
console.log('Hello' + true);   // 'Hellotrue'
console.log('Value: ' + null); // 'Value: null'
console.log('Sum: ' + (2+3));  // 'Sum: 5'

// Template literals always convert to string
console.log(`Result: ${5 + 5}`);  // 'Result: 10'
```

## Number Coercion

Mathematical operators (except `+`) convert to numbers:

```javascript
console.log('10' - 5);     // 5
console.log('10' * 2);     // 20
console.log('10' / 2);     // 5
console.log('10' % 3);     // 1

// Unary plus converts to number
console.log(+'42');        // 42
console.log(+'3.14');      // 3.14
console.log(+'hello');     // NaN
```

## Boolean Coercion

Used in conditions (if, while, etc.):

### Falsy Values

These values convert to `false`:

```javascript
Boolean(false)        // false
Boolean(0)            // false
Boolean(-0)           // false
Boolean('')           // false (empty string)
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(NaN)          // false
```

### Truthy Values

Everything else converts to `true`:

```javascript
Boolean(true)         // true
Boolean(1)            // true
Boolean(-1)           // true
Boolean('hello')      // true
Boolean('0')          // true (non-empty string)
Boolean([])           // true (empty array)
Boolean({})           // true (empty object)
Boolean(function(){}) // true
```

### In Conditions

```javascript
if ('hello') {
    console.log('Truthy!');  // Executes
}

if (0) {
    console.log('Truthy!');  // Doesn't execute
}

// Common pattern
let username = userInput || 'Guest';  // Default if falsy
```

## Equality Coercion

### Loose Equality (==)

Performs type coercion:

```javascript
console.log(5 == '5');        // true (string to number)
console.log(true == 1);       // true (boolean to number)
console.log(false == 0);      // true
console.log(null == undefined); // true
console.log('' == 0);         // true
console.log('0' == 0);        // true
```

### Strict Equality (===)

No type coercion:

```javascript
console.log(5 === '5');       // false (different types)
console.log(true === 1);      // false
console.log(null === undefined); // false
console.log('' === 0);        // false
```

**Always use `===` and `!==`!**


## Common Coercion Pitfalls

### The + Operator Trap

```javascript
console.log(1 + 2 + '3');      // '33' (not '123')
console.log('1' + 2 + 3);      // '123' (not '6')
console.log(1 + 2 + 3);        // 6

// Explanation:
// 1 + 2 + '3' → 3 + '3' → '33'
// '1' + 2 + 3 → '12' + 3 → '123'
```

### Array Coercion

```javascript
console.log([1, 2] + [3, 4]);  // '1,23,4'
console.log([] + []);          // ''
console.log([] + {});          // '[object Object]'
console.log({} + []);          // '[object Object]'
```

### NaN Comparisons

```javascript
console.log(NaN == NaN);       // false
console.log(NaN === NaN);      // false

// Check for NaN
console.log(isNaN(NaN));       // true
console.log(Number.isNaN(NaN)); // true (preferred)
```

### null and undefined

```javascript
console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log(null == 0);           // false
console.log(null >= 0);           // true (quirk!)
console.log(null > 0);            // false
```

## Type Conversion Functions

### Number()

```javascript
Number('42');        // 42
Number('3.14');      // 3.14
Number('');          // 0
Number(' ');         // 0
Number('hello');     // NaN
Number(true);        // 1
Number(false);       // 0
Number(null);        // 0
Number(undefined);   // NaN
```

### parseInt() and parseFloat()

```javascript
parseInt('42');         // 42
parseInt('42px');       // 42 (stops at non-digit)
parseInt('3.14');       // 3 (no decimals)
parseFloat('3.14');     // 3.14
parseFloat('3.14px');   // 3.14

// With radix (base)
parseInt('10', 10);     // 10 (decimal)
parseInt('10', 2);      // 2 (binary)
parseInt('FF', 16);     // 255 (hexadecimal)
```

### String()

```javascript
String(42);          // '42'
String(true);        // 'true'
String(null);        // 'null'
String(undefined);   // 'undefined'
String([1, 2, 3]);   // '1,2,3'
String({a: 1});      // '[object Object]'
```

### Boolean()

```javascript
Boolean(1);          // true
Boolean(0);          // false
Boolean('hello');    // true
Boolean('');         // false
Boolean(null);       // false
Boolean(undefined);  // false
Boolean([]);         // true
Boolean({});         // true
```

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Type Coercion Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .demo {
            background: #f5f5f5;
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
        }
        button {
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            border-radius: 4px;
        }
        button:hover {
            background: #2980b9;
        }
        .output {
            background: white;
            padding: 10px;
            margin-top: 10px;
            border-radius: 3px;
            font-family: monospace;
        }
        .true { color: green; }
        .false { color: red; }
    </style>
</head>
<body>
    <h1>JavaScript Type Coercion</h1>
    
    <div class="demo">
        <h2>String Coercion</h2>
        <button onclick="stringCoercion()">Run Demo</button>
        <div id="string-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Number Coercion</h2>
        <button onclick="numberCoercion()">Run Demo</button>
        <div id="number-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Boolean Coercion</h2>
        <button onclick="booleanCoercion()">Run Demo</button>
        <div id="boolean-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Equality Comparison</h2>
        <button onclick="equalityDemo()">Run Demo</button>
        <div id="equality-output" class="output"></div>
    </div>
    
    <div class="demo">
        <h2>Interactive Converter</h2>
        <input type="text" id="input" placeholder="Enter a value" value="42">
        <button onclick="convertValue()">Convert</button>
        <div id="convert-output" class="output"></div>
    </div>
    
    <script>
        function stringCoercion() {
            let output = `
                '5' + 5 = ${'5' + 5}<br>
                '5' + true = ${'5' + true}<br>
                'Hello' + null = ${'Hello' + null}<br>
                'Value: ' + undefined = ${'Value: ' + undefined}<br>
                [1,2,3] + '' = ${[1,2,3] + ''}<br>
            `;
            document.getElementById('string-output').innerHTML = output;
        }
        
        function numberCoercion() {
            let output = `
                '10' - 5 = ${'10' - 5}<br>
                '10' * 2 = ${'10' * 2}<br>
                '10' / 2 = ${'10' / 2}<br>
                +'42' = ${+'42'}<br>
                +'hello' = ${+'hello'}<br>
                true + 1 = ${true + 1}<br>
                false + 1 = ${false + 1}<br>
            `;
            document.getElementById('number-output').innerHTML = output;
        }
        
        function booleanCoercion() {
            let values = [
                ['false', false],
                ['0', 0],
                ['""', ''],
                ['null', null],
                ['undefined', undefined],
                ['NaN', NaN],
                ['true', true],
                ['1', 1],
                ['"hello"', 'hello'],
                ['[]', []],
                ['{}', {}]
            ];
            
            let output = '<strong>Falsy values:</strong><br>';
            values.slice(0, 6).forEach(([label, value]) => {
                output += `Boolean(${label}) = <span class="false">${Boolean(value)}</span><br>`;
            });
            
            output += '<br><strong>Truthy values:</strong><br>';
            values.slice(6).forEach(([label, value]) => {
                output += `Boolean(${label}) = <span class="true">${Boolean(value)}</span><br>`;
            });
            
            document.getElementById('boolean-output').innerHTML = output;
        }
        
        function equalityDemo() {
            let comparisons = [
                ['5 == "5"', 5 == '5'],
                ['5 === "5"', 5 === '5'],
                ['true == 1', true == 1],
                ['true === 1', true === 1],
                ['null == undefined', null == undefined],
                ['null === undefined', null === undefined],
                ['"" == 0', '' == 0],
                ['"" === 0', '' === 0]
            ];
            
            let output = '';
            comparisons.forEach(([expr, result]) => {
                let className = result ? 'true' : 'false';
                output += `${expr} = <span class="${className}">${result}</span><br>`;
            });
            
            document.getElementById('equality-output').innerHTML = output;
        }
        
        function convertValue() {
            let input = document.getElementById('input').value;
            let output = `
                <strong>Original:</strong> "${input}" (${typeof input})<br><br>
                <strong>To Number:</strong> ${Number(input)} (${typeof Number(input)})<br>
                <strong>parseInt:</strong> ${parseInt(input)}<br>
                <strong>parseFloat:</strong> ${parseFloat(input)}<br><br>
                <strong>To String:</strong> "${String(input)}"<br><br>
                <strong>To Boolean:</strong> ${Boolean(input)}<br>
                <strong>Is Truthy:</strong> ${!!input}<br>
            `;
            document.getElementById('convert-output').innerHTML = output;
        }
    </script>
</body>
</html>
```
:::

## Best Practices

1. **Use strict equality (`===`)** - Avoid unexpected coercion
2. **Be explicit with conversions** - Use `Number()`, `String()`, `Boolean()`
3. **Understand falsy values** - Know what evaluates to false
4. **Avoid `==` with null/undefined** - Use `===` or explicit checks
5. **Use `Number.isNaN()`** - More reliable than `isNaN()`
6. **Be careful with `+`** - It concatenates with strings

## Practice Exercise

:::practice title="Understanding Type Coercion"
Create examples demonstrating type coercion:
1. Show string concatenation vs arithmetic
2. Demonstrate falsy and truthy values
3. Compare == vs === with different types
4. Convert user input to different types
5. Handle NaN correctly
6. Show common coercion pitfalls

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Type Coercion Practice</title>
</head>
<body>
    <h1>Type Coercion Practice</h1>
    
    <input type="text" id="value1" placeholder="Value 1" value="5">
    <input type="text" id="value2" placeholder="Value 2" value="10">
    <button onclick="testCoercion()">Test</button>
    <div id="output"></div>
    
    <script>
        function testCoercion() {
            let v1 = document.getElementById('value1').value;
            let v2 = document.getElementById('value2').value;
            
            // Add your code here to demonstrate:
            // - String concatenation
            // - Arithmetic operations
            // - Type conversions
            // - Comparisons
        }
    </script>
</body>
</html>
```
:::
