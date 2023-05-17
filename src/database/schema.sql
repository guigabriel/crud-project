DROP DATABASE IF EXISTS crud_db;

CREATE DATABASE crud_db;

USE crud_db;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255 ) NOT NULL,
  username VARCHAR(255),
  role VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO users (
  email,
  password,
  username,
  role
)
VALUES (
  "gui@gui.com",
  "senha12346789",
  "$ADB0Y3001",
  "Admin"
);
