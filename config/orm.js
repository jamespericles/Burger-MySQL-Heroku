const connection = require("./connection.js");

const orm = {
  all: function () {
    connection.query("SELECT * FROM burgers", (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  create: function (burger, devoured) {
    connection.query(
      "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)",
      [burger, devoured],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
  update: function (burger) {
    connection.query(
      "UPDATE burgers SET devoured = TRUE WHERE burger_name = ?",
      [burger],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
