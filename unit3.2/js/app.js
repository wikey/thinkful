$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*--- New Game ---*/
    /*------ Should work without refreshing the page */
    /*------ Should connect to the existing New Game button $(".new") */
    function newGame(){
	$("#userGuess").show();/*Show the user input elements in case a successful game has already completed and they were then hidden*/
	$("#guessButton").show();
	var secNum = 0; /* clear the secret number variable */
	var guessCount = 0; /* Clear the number of guesses made in the previous game */
	var gList = []; /* Initialize an empty array for storing all the guesses in a game */
	guessPost(guessCount); /* Post the cleared guesses count to the site */
	guessListPost(gList); /* Post the cleared guess list to the site */
	randNum(); /* call the random number generating function*/

    }
    
    /*--- Secret Number ---*/
    /*------ This random number should be between 1 and 100 */
    function randNum(){
	var secNum = Math.floor(Math.random() * 100);
	console.log(secNum)
    }
    
    /*--- Guess Post ---*/
    function guessPost(newGuess){
	$("#count").empty().append("newGuess");
    }

    /*--- Guess List Post ---*/
    function guessListPost(newGList){
	$("#guessList").empty().append(newGList.join(", "));
    }

    /*--- Function to determine how far away from the secret number a given guess is ---*/
    function guessDist(aGuess){
	return 1(aGuess - secNum);
    }

    /*--- Player Feedback ---*/
    /*------ Should increment the "Guesses" counter */
    /*------ Should append the guesses a user has made to the list of guesses $("#guessList") */
    /*------ (optional) Should tell users if they have guessed a number previously */
    /*------ Should tell the user if they are right and prompt for new game */
    /*------ Should classify player guesses based on the distance from the secret number with something like rangeCats["Ice cold","Cold","Warm","Hot","Burning Hot"] */
    /*------ (optional) Tell players whether their guesses are getting closer, "warmer", or further away, "colder", from the secret number */
    /*------ Should give feedback on incorrect guesses based on which direction the user needs to go to get to the correct number */
    function playGuess(uGuess){
	guessCount++;
	if(uGuess == secNum){
	    alert("Congrats! the secret number <strong>was</strong> " + secNum)
	    $("#userGuess").hide(); /*Hide the input form to end the game*/
	    $("#guessButton").hide();
	    return
	}
	/*Check whether the guess is already in the gList array of previous guesses*/
	/*If it is a new guess, add it to the array and they update the site*/
	if(gList.indexOf() >= 0){ 
	    alert("You guessed that already!");
	}
	else { 
	    gList.push(uGuess);
	    guessListPost(gList);
	}
	
	/*-- Classify the first guess: How far off are they? --*/
	/*Ice Cold = guestDist > 55*/
	/*Cold = guestDist > 40*/
	/*Warm = guestDist > 25*/
	/*Hot = guestDist > 10*/
	/*Burning Hot = guestDist > 5*/
	if (gList.length == 0){
	    if (guessDist(uGuess) > 55 ){
		alert("That guess is ice cold. Guess again.")
	    }
	    else if (guessDist(uGuess) > 40){
		alert("That guess is cold. Guess again.")
	    }
	    else if (guessDist(uGuess) > 25){
		alert("That guess is warm. Guess again.")
	    }
	    else if (guessDist(uGuess) > 10){
		alert("That guess is hot. Guess again.")
	    }
	    else {
		alert("That guess is burning hot! Guess again.")
	    }
	}
	/*See whether new guesses are closer or further away */
	else if (guessDist(gList[-1]) > guessDist(gList[-2])){
		alert("That guess was colder. Guess again.")	    
	}
	else if (guessDist(gList[-1]) < guessDist(gList[-2])){
		alert("That guess was hotter. Guess again.")	    
	}
	else {
		alert("That guess was neither hotter or colder. A peculiar circumstance if you think about it. Guess again.")	    
	}

    }


    
    /*--- Event listener for player making a guess ---*/
    /*------ Should pull player guess from input field */
    /*------ Should clear input field */
    /*------ Should validate that user input is a number from 1-100 (empty input is handled by the form) */
    $("#guessButton").click(function(){
	var userInput = $("#userGuess").val();
	$("#userGuess").clear();
	if (100 > userInput < 1 || isNaN(userInput)){
	    alert("Sorry, your guess needs to be a number between 1 and 100 to play.");
	}
        else {
  	    playGuess(userInput);
	}
    });

    /*--- Run newGame at the end of page ready ---*/
    newGame()    
    
});


