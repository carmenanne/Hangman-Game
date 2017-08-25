//movie titles 
var movieList = [
	['t','i','t','a','n','i','c'],
	['j','a','w','s'],
	['i','n','c','e','p','t','i','o','n']
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
  		 
  		 	
  		};

console.log(movieSelection);
//any key starts the game
document.onkeyup = function(start){
	document.getElementById("start").innerHTML = "";
	document.getElementById("guessesLeft").innerHTML = guessesLeft --;
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	console.log(movieChoice);
	
	
	var lettersGuessed = event.key;
	console.log(lettersGuessed);
	 		for (var i = 0; i < letters.length; i++){
				var lettersGuessed = 
				document.getElementById("lettersGuessed");
				var guesses = 
				document.createTextNode(letters[i]);
				lettersGuessed.appendChild(guesses);
			  }
		  for (var i = 0; i < movieSelection.length; i++){
		  	var currentWord =
		  	document.getElementById("currentWord");
		  	var correctLetters = 
		  	document.createTextNode(movieSelection[i]);
		  	currentWord.append(correctLetters);
		  	console.log(correctLetters)
		  }
		
		  if (lettersGuessed===movieSelection.indexOf(correctLetters)){
		  	document.getElementById('correctLetters').innerText = movieList;
		  		
		  }

		  if (guessesLeft===0){
		  	alert('You lose!')
		  	return(start)
		  }
			
	}

	
 




