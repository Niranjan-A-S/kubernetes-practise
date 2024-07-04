const express = require('express');

const app = express();

app.get('/', function (_req, res) {
    return res.send(`
            <h1>NodeJS Application</h1>
            <h3>This is updated!!</h3>
            <p>Try sending request to /error</p>
        `);
});

app.get('/error', function () {
    process.exit(1);
});

const PORT = process.env.PORT;

app.listen(PORT, function () {
    console.log(`Server running on ${PORT}`);
});