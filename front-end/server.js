const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// create a GET route
app.get('/express_backend', (req, res) => {
    const newsData = JSON.parse(fs.readFileSync('./src/scenes/login/data.json'));

    res.send(newsData, { express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});