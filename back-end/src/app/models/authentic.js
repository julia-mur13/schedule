const db = require('../../config/connection-mysql');
const bcrypt = require('bcrypt');

const authenticModel = {

  login(user) {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM \`users\` WHERE \`email\` = '${user.email}';`, (err, rows) => {
        if (err) {
          reject(err);
        }
        // if the user is found but the password is wrong
        bcrypt.compare(user.password, rows[0].password, (err, isMatch) => {
          if (err) {
            reject(err);
          } else if (isMatch) {
            resolve(rows);
          }
          reject(err, { success: false, message: 'password does not match' });
        });
      });
    });
  },
  signup(user) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) {
            reject(err);
          }
          user.password = hash;
          db.query(`SELECT * FROM \`users\` WHERE \`email\` = '${user.email}';`, (error, rows) => {
            if (error) {
              reject(error);
            } else if (rows.length > 0) {
              reject(error, { success: false, message: 'user already exist!' });
            }
            // db.query(`INSERT INTO \`users\`(\`username\`, \`email\`,\`password\`)VALUES('${newUser.username}', '${newUser.email}','${newUser.password}');`, (error, rows) => {
            //   if (error) {
            //     reject(error);
            //   }
            //   resolve(rows);
            // });
            resolve(user);
          });
        });
      });
    });
  },
};

module.exports = authenticModel;
