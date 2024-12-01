const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files from the "public" folder
app.use(express.static('public'));

// Route to add two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers');
    }

    const result = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
