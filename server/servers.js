const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to calculate sum
app.post('/sum', (req, res) => {
    const { a, b } = req.body; // Expecting data in the body
    if (a !== undefined && b !== undefined) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);

        if (isNaN(numA) || isNaN(numB)) {
            return res.status(400).send('Please provide valid numbers for a and b.');
        }

        res.send(`Sum: ${numA + numB}`);
    } else {
        res.status(400).send('Please provide both a and b in the request body.');
    }
});

// Route to calculate simple interest
app.post('/interest', (req, res) => {
    const { p, r, t } = req.body; // Expecting data in the body
    if (p !== undefined && r !== undefined && t !== undefined) {
        const principal = parseFloat(p);
        const rate = parseFloat(r);
        const time = parseFloat(t);

        if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
            return res.status(400).send('Please provide valid numbers for p, r, and t.');
        }

        const simpleInterest = (principal * rate * time) / 100;
        res.send(`Simple Interest: ${simpleInterest}`);
    } else {
        res.status(400).send('Please provide p, r, and t in the request body.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
