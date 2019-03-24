const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// routs
const groupRoute = require('../app/routes/group-routes');

// settings
app.set('port', 3001);
// app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, '../static')));

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });
//
// connection.query(`INSERT INTO \`group\` (\`idGroup\`, \`group\`, \`subgroup\`) VALUES (${2}, ${1}, ${2})`, (err, result) => {
//   console.log(err);
//   console.log(result);
// });

groupRoute(app);

module.exports = app;
