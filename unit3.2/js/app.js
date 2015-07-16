$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*--- Get the page ready for a new game ---*/
    function pageLoad(){
    }

    /*--- New Game ---*/
    /*------ Should work without refreshing the page */
    /*------ Should connect to the existing New Game button $(".new") */
    function newGame(){

	var secNum = 0; /* clear the secret number variable */
	var guessCount = 0; /* Clear the number of guesses made in the previous game */
	randNum(); /* call the random number generating function*/
    }

    /*--- Secret Number ---*/
    /*------ This random number should be between 1 and 100 */
    function randNum(){

	var secNum = 
    }

    /*--- Player Feedback ---*/
    /*------ Should pull player guess from imput field */
    /*------ Should validate that user input is a number from 1-100 (empty input is handled by the form) */
    /*------ Should increment the "Guesses" counter */
    /*------ Should append the guesses a user has made to the list of guesses */
    /*------ (optional) Should tell users if they have guessed a number previously */
    /*------ Should tell the user if they are right and prompt for new game */
    /*------ Should classify player guesses based on the distance from the secret number with something like rangeCats["Ice cold","Cold","Warm","Hot","Burning Hot"] */
    /*------ (optional) Tell players whether their guesses are getting closer, "warmer", or further away, "colder", from the secret number */
    /*------ Should give feedback on incorrect guesses based on which direction the user needs to go to get to the correct number */
    function playGuess(){
    }


    /*---  ---*/
    /*---  ---*/
    /*---  ---*/
    
    
});


