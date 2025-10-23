# Asynchronous JavaScript

Asynchronous programming allows JavaScript to perform long-running operations without blocking the main thread. This is essential for tasks like fetching data from servers.

## Callbacks

The traditional way to handle asynchronous operations:

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
```

### Callback Hell

```javascript
// Nested callbacks become hard to read
getData((data) => {
    processData(data, (processed) => {
        saveData(processed, (result) => {
            console.log('Done!');
        });
    });
});
```

## Promises

Promises provide a cleaner way to handle async operations:

```javascript
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation successful!');
        } else {
            reject('Operation failed!');
        }
    }, 1000);
});

// Using a promise
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
```

### Promise States

- **Pending**: Initial state
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

### Chaining Promises

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return processData(data);
    })
    .then(processed => {
        console.log(processed);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log('Cleanup');
    });
```

## Async/Await

Modern syntax for working with promises:

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```

### Multiple Async Operations

```javascript
// Sequential (one after another)
async function sequential() {
    const data1 = await fetchData1();
    const data2 = await fetchData2();
    return [data1, data2];
}

// Parallel (at the same time)
async function parallel() {
    const [data1, data2] = await Promise.all([
        fetchData1(),
        fetchData2()
    ]);
    return [data1, data2];
}
```

## Fetch API

Modern way to make HTTP requests:

```javascript
// GET request
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// POST request
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John',
        email: 'john@example.com'
    })
})
    .then(response => response.json())
    .then(data => console.log(data));
```

## Complete Example

:::preview height="700px"
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Async JavaScript</title>
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
        
        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        
        .output {
            background-color: white;
            padding: 15px;
            margin-top: 10px;
            border-radius: 5px;
            min-height: 50px;
        }
        
        .loading {
            color: #007bff;
            font-style: italic;
        }
        
        .error {
            color: #dc3545;
        }
        
        .success {
            color: #28a745;
        }
        
        .user-card {
            background-color: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            border-left: 4px solid #007bff;
        }
    </style>
</head>
<body>
    <h1>Asynchronous JavaScript</h1>
    
    <div class="section">
        <h2>Simulated API Call</h2>
        <button onclick="simulateAPICall()">Fetch Data</button>
        <div class="output" id="apiOutput"></div>
    </div>
    
    <div class="section">
        <h2>Real API - Random User</h2>
        <button onclick="fetchRandomUser()">Get Random User</button>
        <div class="output" id="userOutput"></div>
    </div>
    
    <div class="section">
        <h2>Multiple Requests</h2>
        <button onclick="fetchMultipleUsers()">Get 3 Users</button>
        <div class="output" id="multiOutput"></div>
    </div>
    
    <script>
        // Simulated API Call
        function simulateAPICall() {
            const output = document.getElementById('apiOutput');
            output.innerHTML = '<p class="loading">Loading...</p>';
            
            // Simulate delay
            setTimeout(() => {
                const data = {
                    id: 1,
                    name: 'John Doe',
                    email: 'john@example.com',
                    role: 'Developer'
                };
                
                output.innerHTML = `
                    <div class="user-card">
                        <h3>${data.name}</h3>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Role:</strong> ${data.role}</p>
                        <p class="success">✓ Data loaded successfully</p>
                    </div>
                `;
            }, 1500);
        }
        
        // Fetch Random User from API
        async function fetchRandomUser() {
            const output = document.getElementById('userOutput');
            output.innerHTML = '<p class="loading">Fetching user...</p>';
            
            try {
                const response = await fetch('https://randomuser.me/api/');
                const data = await response.json();
                const user = data.results[0];
                
                output.innerHTML = `
                    <div class="user-card">
                        <img src="${user.picture.large}" alt="${user.name.first}" style="border-radius: 50%; width: 100px;">
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p class="success">✓ User loaded successfully</p>
                    </div>
                `;
            } catch (error) {
                output.innerHTML = `<p class="error">Error: ${error.message}</p>`;
            }
        }
        
        // Fetch Multiple Users
        async function fetchMultipleUsers() {
            const output = document.getElementById('multiOutput');
            output.innerHTML = '<p class="loading">Fetching 3 users...</p>';
            
            try {
                const response = await fetch('https://randomuser.me/api/?results=3');
                const data = await response.json();
                const users = data.results;
                
                const usersHTML = users.map(user => `
                    <div class="user-card">
                        <img src="${user.picture.thumbnail}" alt="${user.name.first}" style="border-radius: 50%;">
                        <strong>${user.name.first} ${user.name.last}</strong>
                        <p>${user.email}</p>
                    </div>
                `).join('');
                
                output.innerHTML = usersHTML + '<p class="success">✓ All users loaded</p>';
            } catch (error) {
                output.innerHTML = `<p class="error">Error: ${error.message}</p>`;
            }
        }
    </script>
</body>
</html>
```
:::

## Promise Methods

```javascript
// Promise.all - wait for all promises
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race - first to complete
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled - wait for all, regardless of outcome
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));
```

## Practice Exercise

:::practice title="Build a Weather App"
Create a weather app using async JavaScript:
1. Fetch weather data from an API
2. Display loading state
3. Handle errors gracefully
4. Use async/await syntax
5. Show the results in a nice format

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weather App</title>
    <style>
        /* Add your styles */
    </style>
</head>
<body>
    <h1>Weather App</h1>
    <input type="text" id="city" placeholder="Enter city name">
    <button onclick="getWeather()">Get Weather</button>
    <div id="weatherOutput"></div>
    
    <script>
        // Add your async code here
    </script>
</body>
</html>
```
:::
