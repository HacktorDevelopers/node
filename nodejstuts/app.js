var express = require('express');
var parser = require('body-parser');

var app = express();

var encoded = parser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res){
	console.log(req.url);
	res.render(`index`);
});

app.get('/contact', function(req, res){
	//console.log(req.query);
	console.log(req.url);
	res.render(`contact`, {qs: req.query});
});

app.post('/contact', encoded, function(req, res){
	console.log(req.body);
	console.log(req.url);
	res.render(`contact-success`, {qs: req.body});
});

app.get('/profile/:name', function(req, res){
	console.log(req.url);
	var data = {name: req.params.name, age:25, job: 'programmer', hobbies: ['eating', 'playing', 'fishing']};
	res.render('profile', {data: data});
});

app.listen(3000);
