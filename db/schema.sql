-- Schema
DROP DATABASE IF EXISTS flashcard_db;
CREATE DATABASE flashcard_db;
USE flashcard_db;

CREATE TABLE cards (
id INTEGER AUTO_INCREMENT,
category INTEGER (50) NOT NULL,
question VARCHAR (50) NOT NULL,
answer VARCHAR (50) NOT NULL,
PRIMARY KEY (id) 
);


CREATE TABLE category (
id INTEGER AUTO_INCREMENT,
name VARCHAR (50) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (category_id) REFERENCES category(id)    
);