DROP DATABASE IF EXISTS chfgklez6l8fh36t;

CREATE DATABASE chfgklez6l8fh36t;

Use chfgklez6l8fh36t;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    PRIMARY KEY(id)
)