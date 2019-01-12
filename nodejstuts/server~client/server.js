var http = require('http');
var fs = require('fs');

//console.log(__dirname);

var readStream = fs.createReadStream(__dirname+'/read.txt', 'utf8');

/*readStream.on('data', function(chunk){
	console.log("New batch of file recieved");
	console.log(chunk);
});*/

var server = http.createServer(function(req, res){
	console.log(req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	var readStream = fs.createReadStream(__dirname+'/index.html', 'utf8');
	readStream.on('data', function(chunk){
		res.end(chunk);
	})
	//readStream.pipe(res);
});


// Listen to port
server.listen(3000, 'localhost');
console.log('Listening to port 3000');
