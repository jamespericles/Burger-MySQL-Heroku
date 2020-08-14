const connection = require("./connection.js");

const orm = {
  selectAll: function () {
    connection.query("SELECT * FROM burgers", (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function (burger, devoured) {
    connection.query(
      "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)",
      [burger, devoured],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  updateOne: function (burger) {
    connection.query(
      "UPDATE burgers SET devoured = TRUE WHERE burger_name = ?",
      [burger],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
};

module.exports = orm;
