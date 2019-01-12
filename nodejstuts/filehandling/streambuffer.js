var fs = require('fs');

// Create a stream

fs.unlinkSync('./write.txt');

var readStream = fs.createReadStream('../server~client/read.txt');
var writeStream = fs.createWriteStream(__dirname+'/write.txt');
readStream.on('data', function(chunk){
	console.log("New batch of data recieved");
	writeStream.write(chunk);
});
