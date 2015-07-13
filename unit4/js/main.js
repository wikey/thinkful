$(function(){
    $(".button").on("click",function(){
	/*using .empty() here to prevent flooding the box on subsequent clicks*/
	$(".runme").empty().append("<p>",fizzBuzz(1,100),"</p>");
	});
})

function fizzBuzz(){
    var fbvalue = [];
    for(var i = 1; i <= 100; i++){
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
