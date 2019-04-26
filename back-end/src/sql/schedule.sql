CREATE DATABASE schedule;

USE schedule;

SHOW TABLES;

create table `users`(
idUser int (10) AUTO_INCREMENT,
username varchar(20)NOT NULL,
email varchar(50)NOT NULL,
password varchar(100)NOT NULL,
roleUser varchar(20) NULL,
PRIMARY KEY(idUser));

create table topics (
id_topic int (10) AUTO_INCREMENT,
topic_name varchar(100) NOT NULL,
id_author int (10) NOT NULL,
PRIMARY KEY (id_topic),
FOREIGN KEY (id_author) REFERENCES users (id_user)
--внешний ключ
);

create table posts (
id_post int (10) AUTO_INCREMENT,
message text NOT NULL,
id_author int (10) NOT NULL,
id_topic int (10) NOT NULL,
PRIMARY KEY (id_post),
FOREIGN KEY (id_author) REFERENCES users (id_user),
FOREIGN KEY (id_topic) REFERENCES topics (id_topic)
);