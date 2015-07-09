$(function(){
    $(".button").on("click",function(){
	var the100 = fizzBuzz(1,100)
	$(".runme").append(the100)
    });


})

function fizzBuzz(){
    var fbvalue = [];
    var fbreturn = "";
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
    fbreturn = fbvalue.join(", ");
    console.log(fbreturn);
}

var the100 = fizzBuzz(1,100);


