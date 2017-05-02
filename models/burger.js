//Import the ORM to create functions that will interact with the datbase.

var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
