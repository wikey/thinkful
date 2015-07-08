$(function(){
    /*Should take the value of the input field, package some html around it, and add it to the .todos class before clearing the input field.*/
    $("#newTodo").on("keydown",function(){
	/*we only want the enter key*/
	if (event.which == 13){
	    if ($("#newTodo").val() == false){
	    }
	    else {
		var preTodo = '<div class="itembox undone"><div class="itemleft">'
		var textTodo = $("#newTodo").val();
		var postTodo = '</div><div class="itemright check"></div></div>'
		$(".todos").append(preTodo + textTodo + postTodo);
		/*This clears the value from the input*/
		$("#newTodo").val('');
	    }
	}
    }
	
		    );
    $(document).on("click",".itemright",function(){
	$(this).siblings(".itemleft").toggleClass("undone").toggleClass("done");
	$(this).toggleClass("check").toggleClass("cross");
    }
	    );
})

