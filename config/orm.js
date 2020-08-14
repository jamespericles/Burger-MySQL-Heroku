const connection = require("./connection.js");

const orm = {
  selectAll: function () {
    const queryString = "SELECT * FROM burgers";
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function (burger, devoured) {
    const queryString =
      "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
    console.log(queryString);
    connection.query(queryString, [burger, devoured], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function (burger) {
    const queryString =
      "UPDATE burgers SET devoured = TRUE WHERE burger_name = ?";
    console.log(queryString);
    connection.query(queryString, [burger], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;
