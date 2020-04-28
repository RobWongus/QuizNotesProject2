const mysql = require("mysql")
// const pass = require("./pass")
var connection; 

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {  
    connection = mysql.createConnection({
  
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ScottSummers2!",
    database: "flashcard_db"
});
};
connection.connect(function(error) {
    if (error) throw error;
    console.log("connected as id: " + connection.threadId);
    // connection.end();
})

module.exports = connection;