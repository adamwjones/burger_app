DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)
);