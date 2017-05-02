// Setup up MySql Connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Test Connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as", connection.threadId);
});

// export connection for ORM
module.exports = connection;
