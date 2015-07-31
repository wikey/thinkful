/* TODOS
  - implement a "skip" button
  - better colors
  - implement other training modes (start with full name or number and guess something else)
  - leave off comma on final element added do the mastered elements list
  - make mastered elements a list of the actual elements instead of just the abbreviation string
      - Does this mean I need a displayname method of the element object to present the "H - Hydrogen" version
  - Cleanup and combine all the functions
  - Add info about playing the game
  - Auto-focus on the form field on page load
*/


/* ================== 
    Global functions
   ================== */
 
/* ------------- Global variables */
var knownUniverse = [["1","H","hydrogen"],["2","He","helium"],["3","Li","Lithium"],["4","Be","Beryllium"],["5","B","Boron"],["6","C","Carbon"]];
/*knownUniverse = [["1","H","hydrogen"],["2","He","helium"]];*/
var allE = [];
var chosenE = undefined;
var knownE = [];
var eAbrevList = [];
/* ------------- Convert our array of arrays into an array of objects */
function element(anArray){ 
    this.num = anArray[0];
    this.abrev = anArray[1];
    this.name = anArray[2];
}

/* ------------- Setup each item for quizzing */
function pickE(){
	chosenE = allE.splice(Math.floor(allE.length * Math.random()), 1)[0]; /*splice returns an array with the selected contents so we need the '[0]' at the end to set the variable to the actual object*/
}

function buildLists(){ 
    for (var i in knownUniverse){
	var newE = new element(knownUniverse[i]);
	allE.push(newE);
    }
    pickE();
    for(i in allE){
	eAbrevList.push(allE[i].abrev);
    }
}


 
/* ================== 
    jquery Functions
   ================== */

$(function(){

/* ------------- Clear current element and full element list div areas */
	    function listReset(){
		eAbrevList = [];
		for(i in allE){
		    eAbrevList.push(allE[i].abrev);
		}
		$(".curE p").append(chosenE.abrev); /* Attach new values to html elements */
		$(".elements p").empty().append(eAbrevList.join(", "));
	    }

/* ------------- Setup a new game */
    function newGame(){
      	allE = []; /* Clear values */
	knownE = [];
	eAbrevList = [];
	$(".feedback p, .curE p, .elements p, .oldE p").empty(); /* should probably change the classes here to be on the <p> elements themselves and change where CSS positioning info */
      	buildLists(); /* Build new values */
	listReset();
/*      	$(".curE p").append(chosenE.abrev); /* Attach new values to html elements */
/*	$(".elements p").append(eAbrevList.join(", "));*/
    }

/* ------------- Evaluate user guesses */

    $("#guessForm").on("submit",function(e){
	e.preventDefault();
	var userGuess = $("#guessName").val();
	console.log("userGuess is " + userGuess)
	if(userGuess.toLowerCase() === chosenE.name.toLowerCase()){
	    $(".feedback p").empty().append("That is right, ",chosenE.name," is the full name for '",chosenE.abrev,"'");  /*report win*/
	    knownE.push(chosenE.abrev + " - " + chosenE.name + ", "); /*add chosenE to list of known elements*/
	    $(".oldE p").empty().append(knownE);
	    $("#guessName").val('').empty();
	    console.log("running pickE again"+chosenE.abrev);
	    if(allE.length < 1){
		$(".curE p").empty();
		alert("You have mastered the elements! Press the 'New Game' button to play again.")
	    }
	    else {
		pickE(); /*run pickE again*/
		listReset();
		$(".curE p").empty().append(chosenE.abrev);
		console.log("chosenE is now "+chosenE.abrev);
	    }
	}
	else{
	    $(".feedback p").empty().append("Sorry ",userGuess," is not the full name for ",chosenE.abrev); /*update feedback*/
	    $("#guessName").val('').empty();
	}
    });
    
/* ------------- Trigger new game on button press or page load*/
    $(".newgame").click(function(){
	console.log("New game triggered by button");
	newGame()});
    newGame();
    console.log("page reloaded");
})
