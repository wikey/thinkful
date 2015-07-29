var knownUniverse = [["1","H","hydrogen"],["2","He","helium"],["3","Li","Lithium"],["4","Be","Bererylium"],["5","B","Boron"],["6","C","Carbon"]];
var allE = [];
var chosenE = undefined;

function elementConst(num,abrev,name){
    this.num = num;
    this.abrev = abrev;
    this.name = name;
}

function buildList(){
    for (var i in knownUniverse){
	/*	console.log(i);*/
	var a = i[0];
	var b = i[1];
	var c = i[2];
	console.log(a,b,c);
	/*	console.log(b);*/
	var newE = new elementConst(a,b,c);
/*	console.log(newE);*/
	allE.push(newE);
    }
}

function pickE(){
}

function newGame(){
}

$(function(){

    
})
