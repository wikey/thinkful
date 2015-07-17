$(document).ready(function(){
/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
/*--- Global Variables ---*/
    var secNum = 0;
    var guessCount = 0;
    var gList = [];
/*--- New Game ---*/
    function newGame(){
	$("#userGuess").show();/*Show the user input elements in case a successful game has already completed and they were then hidden*/
	$("#guessButton").show();
	$("#feedback").empty().append("Make your Guess!")
	secNum = 0; /* clear the secret number variable */
	guessCount = 0; /* Clear the number of guesses made in the previous game */
    /*	console.log("guessCount " + "is now " + guessCount);*/
	gList = []; /* Clear the list of guesses from last game */
    /*	console.log("gList " + "is now " + gList);*/
	guessPost(guessCount); /* Post the cleared guesses count to the site */
	guessListPost(gList); /* Post the cleared guess list to the site */
	randNum(); /* call the random number generating function*/
	console.log("New game started");
    }
/*--- Secret Number ---*/
    function randNum(){
	secNum = Math.floor(Math.random() * 100);
    /*	console.log(secNum)*/
    }
/*--- Guess Post ---*/
    function guessPost(newGuess){
	$("#count").empty().append(newGuess);
    /*	console.log("guessPost run for " + newGuess)*/
    }
/*--- Guess List Post ---*/
    function guessListPost(newGList){
	$("#guessList").empty().append(newGList.join(", "));
    /*	console.log("guessListPost run for " + newGList)*/
    }
/*--- Function to determine how far away from the secret number a given guess is ---*/
    function guessDist(aGuess){
	if((1 * (aGuess - secNum)) < 0){
	    return (-1 * (aGuess - secNum))
	}
	else {return (aGuess - secNum)}
    }
/*--- Player Feedback ---*/
    function playGuess(uGuess){
	/*-- Did you win? --*/
	if(uGuess == secNum){
	    alert("Congrats! the secret number was " + secNum)
	    $("#userGuess").hide(); /*Hide the input form to end the game*/
	    $("#guessButton").hide();
	    $("#feedback").empty().append("You won!");
	    return
	}
   /*-- Is it your first quess?Classify the first guess: How far off are they? --*/
	if (gList.length == 1){
	    if (guessDist(uGuess) > 55 ){
        /*		console.log("guessDist(uGuess) is " + guessDist(uGuess))*/
		alert("That guess is ice cold. Guess again.")
	    }
	    else if (guessDist(uGuess) > 25){
        /*		console.log("guessDist(uGuess) is " + guessDist(uGuess))*/
		alert("That guess is cold. Guess again.")
	    }
	    else if (guessDist(uGuess) > 15){
        /*		console.log("guessDist(uGuess) is " + guessDist(uGuess))*/
		alert("That guess is warm. Guess again.")
	    }
	    else if (guessDist(uGuess) > 10){
        /*		console.log("guessDist(uGuess) is " + guessDist(uGuess))*/
		alert("That guess is hot. Guess again.")
	    }
	    else {
        /*		console.log("guessDist(uGuess) is " + guessDist(uGuess))*/
		alert("That guess is burning hot! Guess again.")
	    }
	}
   /*See whether new guesses are closer or further away */
	else if (guessDist(gList[0]) > guessDist(gList[1])){
		alert("That guess was colder. Guess again.")	    
	}
	else if (guessDist(gList[0]) < guessDist(gList[1])){
		alert("That guess was hotter. Guess again.")	    
	}
	else {
		alert("That guess was neither hotter or colder. A peculiar circumstance if you think about it. Guess again.")	    
	}
    }
/*--- Event listener for player making a guess ---*/
    $("#guessButton").on("click",function(e){
	e.preventDefault(); 
	var userInput = $("#userGuess").val();
    /*	console.log(userInput);*/
    /*	console.log("Guess button clicked");*/
	$("#userGuess").val('');
	if (100 < userInput || userInput < 1 || isNaN(userInput)){
	    alert("Sorry, your guess needs to be a number between 1 and 100 to play.");
	}
        else {
	    /*Check whether the guess is already in the gList array of previous guesses*/
	    /*If it is a new guess, add it to the array and they update the site*/
	    if(gList.indexOf(userInput) > 0){
		alert("You guessed that already!");
	    }
	    else {
        /*		console.log("Adding current guess to gList array");*/
		gList.splice(0, 0, userInput); /*insert our item into the beginning of the array so we can easily refer to it*/
        /*		console.log("updating guess list with contents of gList");*/
		guessListPost(gList);
        /*		console.log("incrementing guessCount");*/
		guessCount++;
        /*		console.log("updating site guess counter with value of guessCount");*/
		guessPost(guessCount);
        /*		console.log("Passing user input to playGuess function");*/
  		playGuess(userInput);
	    }
	}
    });
    $(".new").click(function(){
	newGame();
	console.log("New Game button clicked");
    });
/*--- Run newGame at the end of page ready ---*/
    newGame()    
});
