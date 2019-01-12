var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("Request was made from: "+req.url);
	res.writeHead(200, {'Content-Type': 'application/json'});
	var myObj = {
		'name':'Toyyib',
		'job':'Programmer',
		'age':29
	}
	res.end(JSON.stringify(myObj));
});

server.listen(3000, 'localhost');
console.log('server listening on port: 3000');
