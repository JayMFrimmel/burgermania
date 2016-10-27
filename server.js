// make an express server available
var express = require('express');
var app = express();

// add the mysql components
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: "",
	database: 'burgers'

});

// connect the mySQL database
connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.thread.ID)
});
 
//app.get('/', function (req, res){
	//connection.query('SELECT * FROM burgers' function (err, result) {
		//var html = <h1>BurgerMania</h1>;

		//res.send(html);
	//});
//});

// telling the server to run
var port = 3000;
app.listen(port);

