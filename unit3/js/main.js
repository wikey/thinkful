$(function(){
    $("#newTodo").on("keydown",function(){
	if (event.which == 13){
	    /*	    console.log("enter pressed");*/
	    $(".todos").append("<div class=\"itembox\"><div class=\"itemleft\">",$('#newTodo').val(),"</div><div class=\"itemright\"></div></div>");
	}
	
    }
		   );
})

var valueTodo=$('#newTodo').val();
