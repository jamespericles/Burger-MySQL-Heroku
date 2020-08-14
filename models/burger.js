const orm = require("../config/orm");

let burger = {
  all: function (cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },

  create: function (cols, val, cb) {
    orm.create("cats", cols, val, (res) => {
      cb(res);
    });
  },

  update: function (objColVal, condition, cb) {
    orm.update("cats", objColVal, condition, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burger;
