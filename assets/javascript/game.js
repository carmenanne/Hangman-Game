var barnAnimals = [['p', 'i', 'g'], ['c', 'o', 'w'], ['s', 'h', 'e', 'e', 'p']];
var random = Math.floor((Math.random()*(barnAnimals.length)));
var barnAnimals = barnAnimals[random];

var animalChoice = new
Array(barnAnimals.length);
var start = 0;
console.log(barnAnimals)

document.onkeyup = function(event) {
console.log(animalChoice)
	var userGuess = event.key;

for (var i = 0; i < animalChoice.length; i ++){
	animalChoice[i] = "_ ";
}	
	document.getElementById('currentWord').innerHTML = animalChoice;
	
	console.log("User guess: " + userGuess)


}