const orm = require("../config/orm");

let burger = {
  all: function (cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },

  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },

  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burger;
