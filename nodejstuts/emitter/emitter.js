var topic = "Event Emitter";

var events = require('events');
var util = require('util');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
	console.log(msg);
});

myEmitter.emit('someEvent', 'This event eas emitted');

// The Util modules allow to inherit properties from modules

var Person = function(name, age){
	this.name = name;
	this.age = age;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('James', 26);
var mary = new Person('Marry', 21);
var hakeem = new Person('Hakeem', 19);

var people = [james, mary, hakeem];

people.forEach(function(Person){
	Person.on('speak', function(msg){
		console.log(Person.name + " said: " + msg);
	});
});

james.emit('speak', "i love myself");
