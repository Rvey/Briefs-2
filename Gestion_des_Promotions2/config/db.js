const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pwd12331",
  database: "marjane" 
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;