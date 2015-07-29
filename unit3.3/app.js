/* ================== 
    Global functions
   ================== */
 
/* ------------- Global variables */
var knownUniverse = [["1","H","hydrogen"],["2","He","helium"],["3","Li","Lithium"],["4","Be","Bererylium"],["5","B","Boron"],["6","C","Carbon"]];
var allE = [];
var chosenE = undefined;
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
    

/* ------------- Setup a new game */
    function newGame(){
      	allE = []; /* Clear values */
	eAbrevList = [];
	$(".feedback p, .curE p, .elements p, .oldE p").empty(); /* should probably change the classes here to be on the <p> elements themselves and change where CSS positioning info */
      	buildLists(); /* Build new values */
      	$(".curE p").append(chosenE.abrev); /* Attach new values to html elements */
	$(".elements p").append(eAbrevList.join(", "));
    }

    
/* ------------- Trigger new game on button press or page load*/
    $(".newgame").click(function(){
	console.log("New game triggered by button");
	newGame()});
    newGame();
})
