const db = require('./connection-mysql');

function connectionCheck() {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        if (connection) {
          connection.release();
        }
        reject(err);
      }
      resolve('success');
    });
  });
}

// function connectionRelease() {
//   db.on('release', (connection) => {
//     console.log('Connection %d released', connection.threadId);
//   });
// }

module.exports = {
  connectionCheck: connectionCheck(),
  // connectionRelease: connectionRelease(),
};
