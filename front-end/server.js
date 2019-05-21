const express = require('express');
const fs = require('fs');
const url = require('url');
const app = express();

// create a GET route
app.get('/*', (req, res) => {
    const pathes = req.url.split('/');
    console.log(req.url.split('/'));
    const newsData = JSON.parse(fs.readFileSync(`./src/scenes/input-data/input-${pathes[2]}/service/reducers/data.json`));

    res.send({express: newsData});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});