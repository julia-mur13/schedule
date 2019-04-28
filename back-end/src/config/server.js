const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const session = require('express-session');
const mongoose = require('mongoose');
// const SessionStore = require('connect-mongo')(session);
const SessionStore = require('express-mysql-session')(session);

const app = express();

// routs
const groupRoute = require('../app/routes/group-routes');
const authentic = require('../app/routes/authentic');

// connection
const db = require('./connection-mysql');

// const dbfunc = require('./db-function');

// app.use((req, res) => {
//   dbfunc.connectionCheck.then((data) => {
//     res.send(data);
//   }).catch((err) => {
//     res.send(err);
//   });
// });

// settings
app.set('port', 3003);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../static')));
app.use(cookieParser());

app.use(session({
  secret: 'secret-session',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: true,
    httpOnly: true,
    path: '/',
    expires: null,
  },
  store: new SessionStore(db),
}));

authentic(app);
groupRoute(app);

module.exports = app;
