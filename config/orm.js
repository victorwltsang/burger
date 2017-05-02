// Import MySQL Connection
var connection = require("../config/connection.js");

//Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }
  //,
  // insertOne: function() {
  //
  // },
  // updateOne: function() {
  //
  // }
};

//export ORM
module.exports = orm;
