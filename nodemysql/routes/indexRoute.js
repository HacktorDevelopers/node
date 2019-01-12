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
var sql = "select distinct name from nodedb.nodetable";
con.connect(function(err){
	if (err) throw err;
	console.log('connected!...');
	con.query(sql, function(err, result) {
		if(err) throw err;
		//res.json(result);
	});
});

module.exports = function(app){
	
	app.get('/', function(req, res){
		
		res.render('log-in');
		
	});
	
};