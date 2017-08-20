//page opens
var movie = [['t', 'i', 't', 'a', 'n', 'i', 'c'], ['a', ' ', 'f', 'e', 'w', ' ', 'g', 'o', 'o', 'd', ' ', 'm', 'e', 'n'], 
['f', 'o', 'r', 'r', 'e', 's', 't', ' ', 'g', 'u', 'm', 'p'], ['h', 'o', 'm', 'e', ' ', 'a', 'l', 'o', 'n', 'e']];
var random = Math.floor((Math.random()*(movie.length)));
var movie = movie[random];

var movieChoice = new
Array(movie.length);
var start = 0;
var wins = 0;
console.log(movie)

var guessesLeft = 12
//press any key to start the game
document.onkeyup = function(event) {
console.log(movieChoice)
document.getElementById('start').innerHTML = ""
document.getElementById('guessesLeft').innerHTML = guessesLeft
}
//game starts
	
//computer selects a word from list at random
document.onkeyup = function(event) {
console.log(movieChoice)
document.getElementById('start').innerHTML = ""

//generates the word as "_" for each letter
 	for (var i = 0; i < movieChoice.length; i ++){
 	movieChoice[i] = "_ "
 	var lettersGuessed = event.key;
		document.getElementById('currentWord').innerHTML = movieChoice;
		
	}

//if letter matches letter in random movie title...
	// if (lettersGuessed.forEach(movieChoice(element))
	// //letter(s) appears on screen
	// 	document.getElementById("_").innerHTML = movieChoice(element);
	
	
	//number of guesses goes down by 1
	

//if letter doesn't match letter in random movie title...
	//display letter in "letters guessed"
	//number of guesses goes down by 1

//if movie title is guessed, wins increases by 1
	//restart game
//if player runs out of guesses, display losing banner
	//restart game
document.getElementById('guessesLeft').innerHTML = guessesLeft - 1;
}