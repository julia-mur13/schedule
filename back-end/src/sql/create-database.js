const db = require('.config/connection-mysql');

db.query('CREATE DATABASE ' + db.database);
db.query('USE ' + db.database);

db.query('\
CREATE TABLE `user` ( \
    `idUser` INT(10) NULL AUTO_INCREMENT, \
    `username` VARCHAR(20) NOT NULL, \
    `password` CHAR(60) NOT NULL, \
    `email` VARCHAR(40) NOT NULL, \
    `roleUser` VARCHAR(20) NULL, \
    PRIMARY KEY (`idUser`) \
)');

console.log('Success: Database Created!');

db.end();