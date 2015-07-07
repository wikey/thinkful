$(function(){
    $("#newTodo").on("keydown",function(){
	if (event.which == 13){
	    var preTodo = '<div class="itembox"><div class="itemleft">'
	    var textTodo = $("#newTodo").val();
	    /*var textTodo = document.getElementById('newTodo').value;*/
	    var postTodo = '</div><div class="itemright"></div></div>'
	    var valueTodo = preTodo + textTodo + postTodo
	    $(".todos").append(valueTodo);	    
	    /*	    $("#newTodo").find('input:text').val('');*/
	    $("#newTodo").val('');
	}
	
    }
		   );
})

