-- Schema
DROP DATABASE IF EXISTS flashcard_db;
CREATE DATABASE flashcard_db;
USE flashcard_db;

CREATE TABLE cards (
id INTEGER AUTO_INCREMENT,
Category INTEGER (50) NOT NULL,
Question VARCHAR (50) NOT NULL,
Answer VARCHAR (50) NOT NULL,
PRIMARY KEY (id) 
);


CREATE TABLE category (
id INTEGER AUTO_INCREMENT,
name VARCHAR (50) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (category_id) REFERENCES category(id)    
);