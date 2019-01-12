console.log("fs module for reading file content");

// Require the file module

var fs = require('fs');

setTimeout(function(){
	fs.readFile('readme.txt', 'utf8', function(err, data){
		if (err){
			console.log(err);
		}else{
			console.log(data);
		}
	});
}, 4000);


fs.unlink('write.txt', function(err){
	if ( err ){
		console.log(err);
	}else{
		console.log("Done Deleting file");
	}
});

fs.mkdirSync('stuffs');
fs.rmdirSync('stuffs');
