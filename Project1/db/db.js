const mysql = require("mysql2");
const dbConfig = require("./db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
host: dbConfig.HOST,
user: dbConfig.USER,
password: dbConfig.PASSWORD,
database: dbConfig.DB
});


connection.connect(error => {
  if (error) {
    console.error(" Failed to connect to the database!");
    console.error(error);
    return;
  }
  console.log(" Successfully connected to the database.");
});
module.exports = connection;
