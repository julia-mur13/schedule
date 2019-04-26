const db = require('../../config/connection-mysql');

function sendRequest(dbQuery) {
  return new Promise((resolve, reject) => {
    db.query(dbQuery, (error, res) => {
      if (error) {
        reject(error);
      }
      resolve(res);
    });
  });
}

function generateId() {
  return Number((Date.now() * 1000) + Math.floor(Math.random() * 1000));
}

module.exports = sendRequest;
module.exports = generateId;

