const db = require('../../config/connection-mysql');

function generateId() {
  return Number((Date.now()) + Math.floor(Math.random())) / 100000;
}

const groupModel = {
  sendRequest(dbQuery) {
    return new Promise((resolve, reject) => {
      db.query(dbQuery, (error, res) => {
        if (error) {
          reject(error);
        }
        resolve(res);
      });
    });
  },

  getGroups() {
    return groupModel.sendRequest('SELECT * FROM `group`');
  },

  getGroup(group) {
    return groupModel.sendRequest(`SELECT * FROM \`group\` WHERE \`group\` = ${group}`);
  },

  addGroup(group, subgroup) {
    return groupModel.sendRequest(`INSERT INTO \`group\`(\`idGroup\`,\`group\`,\`subgroup\`)VALUES(${generateId()}, ${group}, ${subgroup})`);
  },
  // +
  deleteGroup(group) {
    return groupModel.sendRequest(`DELETE FROM \`group\` WHERE \`group\` = ${group}`);
  },
};

module.exports = groupModel;
