//movie titles 
var movieList = [
	['t','i','t','a','n','i','c'],
	['j','a','w','s'],
	['i','n','c','e','p','t','i','o','n']

	// "a few good men",
	// "home alone",
	// "titanic",
	// "forrest gump",
	// "fight club",
	// "the big lebowski",
]
var random = Math.floor((Math.random() * (movieList.length-1)));
var movieChoice = movieList[random];
var movieSelection = new Array(movieChoice.length);
var error = 0
//var lettersGuessed = event.key;

//# of guesses remaining
var guessesLeft = 12
//letters already guessed
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
//# of wins
var wins = 0
//# of losses
var losses = 0

for (var i = 0; i < movieSelection.length; i ++){
 		   		movieSelection[i] = "_ ";
 		 	console.log(movieChoice)
 		 	;
 		 };

//any key starts the game
document.onkeyup = function(){
	document.getElementById("start").innerHTML = "";
	document.getElementById("guessesLeft").innerHTML = guessesLeft --;
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	
	


		document.getElementById("currentWord").innerText = movieSelection
	
	function print(){
		for (var i = 0; i < movieSelection.length; i++){
			var currentWord =
			document.getElementById("currentWord");
			var correctLetters = 
			document.createTextNode(movieSelection[i]);
			currentWord.appendChild(correctLetters);
		}
	}
	console.log(movieSelection);
	
var lettersGuessed = event.key;
 if (lettersGuessed===letters.length){

	 if (lettersGuessed===movieSelection[i]) function(){
	 	var currentWord = document.getElementById("currentWord");
	 		currentWord.innerText="";
	 		printcurrentWord()
	}
};
	// letters.forEach(function(guess){
	// var lettersGuessed = event.key
	// document.getElementById("lettersGuessed");
	// var guesses = 
	// document.createTextNode(letters[i]);
	//lettersGuessed.appendChild(guesses);
		 	
		document.getElementById("lettersGuessed").innerText = "Letters guessed: " + guesses;
		console.log(lettersGuessed)
	}
 		

//if player guesses letter not in title, it appears (append) on letters guessed

//if player guesses all letters in a title, win + 1

//if # of guesses remaining = 0, lose +1

 };




