const groupModel = require('../models/group-model');

const groupController = {
  getGroups(req, res) {
    groupModel.getGroups().then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
  },

  getGroup(req, res) {
    groupModel.getGroup(req.query.group).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
  },

  addGroup(req, res) {
    groupModel.addGroup(req.query.group, req.query.subgroup).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
  },

  editGroup(req, res) {
    groupModel.editGroup(req.query.group, req.query.subgroup).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
  },

  deleteGroup(req, res) {
    groupModel.deleteGroup(req.query.group).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
  },
};
module.exports = groupController;
