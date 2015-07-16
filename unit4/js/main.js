$(function(){
    $(".button").on("click",function(){
	/*using .empty() here to prevent flooding the box on subsequent clicks*/
	userInput = parseInt(prompt("Enter a number"));
	$(".runme").empty().append("<p>",fizzBuzz(1,userInput),"</p>");
	});
})


function fizzBuzz(start,end){
    var fbvalue = [];
    for(var i = start; i <= end; i++){
	if(i%3 == 0 && i%5 == 0){
	    fbvalue.push("fizbuzz")
	}
	else if(i%3 == 0){
	    fbvalue.push("fizz")
	}
	else if(i%5 == 0){
	    fbvalue.push("buzz")
	}
	else{fbvalue.push(i)}
    }
    return(fbvalue.join(", "));
}
