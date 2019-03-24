const groupModel = require('../models/group-model');

const groupController = {
  getGroups(req, res) {
    groupModel.getGroups().then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
  },
};
module.exports = groupController;
