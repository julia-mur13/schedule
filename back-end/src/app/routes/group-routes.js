const groupController = require('../controller/group-controller');

module.exports = (app) => {
  app.route('/get-groups')
    .get(groupController.getGroups);
  app.route('/get-group')
    .post(groupController.getGroup);
  app.route('/add-group')
    .post(groupController.addGroup);
  app.route('/delete-group')
    .delete(groupController.deleteGroup);
};
