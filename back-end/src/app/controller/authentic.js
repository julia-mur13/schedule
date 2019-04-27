const authenticModel = require('../models/authentic');

const jwt = require('jsonwebtoken');

const authenticService = {
  login(req, res) {
    authenticModel.login(req.query).then((data) => {
      if (data) {
        const email = data.email;
        const token = jwt.sign({ email }, 'secret_key', { expiresIn: 60 * 60 * 24 });
        res.json({
          success: true,
          data,
          token,
        });
      }
    }).catch((err) => {
      res.json(err);
    });
  },

  signup(req, res) {
    authenticModel.signup(req.query).then((data) => {
      if (data) {
        res.json({
          success: true,
          data,
        });
      }
    }).catch((err) => {
      res.json(err);
    });
  },
};
module.exports = authenticService;

