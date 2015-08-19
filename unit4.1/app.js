function wikiParse(lesson){
    lessonId(lesson); //Lesson identifing
    objectIfy(lesson.cards); //Card processing
}

function lessonId(lesson){
    var sideNumber = lesson.answer_columns.length + lesson.prompt_columns.length
//    console.log(sideNumber);
    $(".lessonInfo").append("<p><strong>Lesson Info</strong><br>" + "Groups: " + lesson.dividers.length + "<br>" + "Cards:" + lesson.cards.length + "<br>" + "Sides per card: " + sideNumber + "</p>");
}

function objectIfy(cardArray, cardNum){
    cards_to_search = cardArray[cardNum] || cardArray
    // This level is the array of cards/arrays belonging to a page
    var card_counter = 0;
    for (var card in Object.keys(cards_to_search)){
	// This level is the array of sides/objects belonging to a single card
	card_counter += 1;
	var card_info = "<p>" + "Card " + card_counter + ":</br>" + "</p>";
	var side_counter = 0;
	var side_info = [];
	for (var side in Object.keys(cardArray[card])){
	    //This level is the collection of properties belonging to a single side/object of a single card
	    side_counter += 1;
	    console.log("side: " + side_counter);
	    side_info.push("side" + side_counter);
	    for (var property in cardArray[card][side]){
		console.log("property: " + property);
		side_info.push(property + ": " + cardArray[card][side][property]);
	    }//End Property
	}//End side
	$(".card").append("<h2>" + card_info + "</h2>" + "<p>" + side_info.join("<br>") + "</p>");
    } //End card level
}//End cardArray

$(function(){
    function fetch_and_clean_wiki(){
	lesson_url = prompt("Give me your wikiotics lesson please.")
	$.ajax({
	    url: lesson_url + "?view=resource_jsonp",
	    dataType: 'jsonp',
	    jsonpCallback: 'callback',
	    success: function(data){
		lesson_json_simplified = transform1(data);
		console.log(lesson_json_simplified.cards);
		//		objectIfy(lesson_json_simplified.cards);
		wikiParse(lesson_json_simplified)
	    }
	});
    }
    fetch_and_clean_wiki();
});
