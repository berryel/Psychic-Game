


   var message = "Guess The Letter From a to z";
   var alphaRay = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];
   var wins = 0;
   var losses = 0;
   var guesses =9;
   var letterToGuess = "";
   var lettersGuessed =[];
   var gameOver = false;
   var left = 9;

   var computerLet = alphaRay[Math.floor(Math.random() * alphaRay.length)];

   var leftMinus = function (){
   		document.querySelector('#left').innerHTML = "Guesses Left: " + left; 

   };

   var addLetter = function () {
   	this.letterToGuess = this.alphaRay[Math.floor(Math.random() * this.alphaRay.length)];
   };

   var showLetter = function () {
   	document.querySelector('#guessed').innerHTML = "Your wrong guesses so far:" + lettersGuessed.join(', ');
   };

   var redo = funtion() {
   	allGuesses = 9;
   	left = 9;
   	lettersGuessed =[];

   	leftMinus();
   	addLetter();
   	showLetter();


   }

   leftMinus();
   addLetter();

   document.onekeyup = function(event) {
   	left--;
   	var userKey = String.fromCharCode(event.keycode).toLowerCase();

   	lettersGuessed.push(userKey);

   	leftMinus();
   	showLetter();

   	if (left > 0) {
   		if (userKey ==lettersGuessed){
   			wins++;
   			document.querySelector('#wins').innerHTML= "wins: " + wins;

   				redo()
   		}
   	
   	} else if (left == 0){
   		losses++;
   		document.querySelector('#losses').innerHTML = "losses: " + losses;

   		redo();
   	}
   };

  