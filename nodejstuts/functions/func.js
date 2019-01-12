var topic = "Functions";

console.log(topic);

// NORMAL WAY OF CREATING FUNCTION
//
function sayHi(){
	console.log("Hi");
}

// FUNCTION EXPRESSION
//
var sayBye = function(){
	console.log("Bye");
}

sayHi();

setTimeout(
	function(){
		sayBye()
	}, 3000
);

