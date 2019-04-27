const authenticService = require('../controller/authentic');

module.exports = (app) => {
  // app.route('/login').post(passport.authenticate('local-login', {
  //   // successRedirect: '/index', // redirect to the secure profile section
  //   // failureRedirect: '/login', // redirect back to the signup page if there is an error
  //   // failureFlash: true, // allow flash messages
  // }), (req, res) => {
  //   console.log('hello', req.body);
  //
  //   if (req.body.remember) {
  //     req.session.cookie.maxAge = 1000 * 60 * 3;
  //   } else {
  //     req.session.cookie.expires = false;
  //   }
  //   res.redirect('/');
  // });

  app.route('/logout').get((req, res) => {
    req.logout();
    res.redirect('/');
  });
  app.route('/signup')
    .post(authenticService.signup);
  app.route('/login')
    .post(authenticService.login);
};
