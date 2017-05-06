// Setup up MySql Connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "burgers_db"
  });
};

// Test Connection
connection.connect();

// export connection for ORM
module.exports = connection;
