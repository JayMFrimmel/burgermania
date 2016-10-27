var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	port:3306,
	user: "root", //username
	password: "", //user password
	database: "burgers"
})

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id" + cinnection.threadId);
})