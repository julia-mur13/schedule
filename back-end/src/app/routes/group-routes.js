const groupController = require('../controllers/group-controller');

module.exports = (app) => {
  app.route('/groups')
    .get(groupController.getGroups);
  // .post(addGroup);
};
