var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

//var sql = "CREATE TABLE `nodedb`.`nodetable` (id int not null auto_increment, name varchar(225) not null, primary key(id))";
//var sql = "DROP TABLE nodedb.nodetable ";
//var sql = "insert into nodedb.nodetable(name) values ?";
/*var values = [
	['Abdullah'],
	['Toyyib'],
	['Ishola']
];*/
//var sql = "select * from nodedb.nodetable";

var sql = "show databases";
con.connect(function(err){
	if (err) return console.log(err);
	console.log('connected!...');
});

module.exports = function(app){
	
	app.get('/database/all', function(req, res){
		
		con.query(sql, function(err, result) {
			if(err) throw err;
			res.render('database/all', {users: result});
			//console.log(result);
		});
		
	});
	
};