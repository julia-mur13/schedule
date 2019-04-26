const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const db = require('./connection-mysql');

// const authenticService = require('../app/controller/authentic');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    console.log('in serialize', user);
    return done(null, user.email);
  });

  passport.deserializeUser((id, done) => {
    db.query(`SELECT * FROM \`users\` WHERE \`email\` ='${id}';`, (error, rows) => {
      if (error) {
        console.log('DESER', id);
        return done(error);
      }
      console.log('DASER TRUE email', id);
      return done(error, rows[0]);
    });
  });

  // login(passport);
  // authenticService.signup(passport);

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  }, (req, username, password, done) => {
    db.query(`SELECT * FROM \`users\` WHERE \`email\` = '${req.query.email}';`, (err, rows) => {
      if (err) {
        return done(err);
      }
      if (rows.length) {
        return done(null, false);
      }
      password = bcrypt.hashSync(password, 10);
      const newUser = {
        username,
        password,
        email: req.query.email,
      };
      // db.query(`INSERT INTO \`users\`(\`username\`, \`email\`,\`password\`)VALUES('${username}', '${newUser.email}','${password}');`);
      return done(null, newUser);
    });
  }));

  passport.use('local-login', new LocalStrategy({
      usernameField: 'username', passwordField: 'password', passReqToCallback: true,
    },
    ((req, username, password, done) => { // callback with email and password from our form
      db.query(`SELECT * FROM \`users\` WHERE \`email\` = '${req.query.email}';`, (err, rows) => {
        if (err) {
          return done(err);
        }
        if (!rows.length) {
          return done(null, false);
        }
        // if the user is found but the password is wrong
        if (!bcrypt.compareSync(password, rows[0].password)) {
          return done(null, false);
        }
        return done(null, req.query);
      });
    })));
};

