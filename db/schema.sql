-- Schema
DROP DATABASE IF EXISTS flashcard_db;
CREATE DATABASE flashcard_db;

USE flashcard_db;

CREATE DATABASE flashcard_db;
USE flashcard_db;

CREATE TABLE categories (
id INTEGER AUTO_INCREMENT,
name VARCHAR (50) NOT NULL,
PRIMARY KEY(id)
);


CREATE TABLE cards(
id INTEGER AUTO_INCREMENT,
question VARCHAR (50) NOT NULL,
answer VARCHAR(50) NOT NULL,
category_id VARCHAR(50) NOT NULL REFERENCES categories(id),
PRIMARY KEY(id)
);