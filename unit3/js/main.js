$(function(){
    $("#newTodo").on("keydown",function(){
	if (event.which == 13){
	    var preTodo = '<div class="itembox"><div class="itemleft">'
	    var textTodo = $("#newTodo").val();
	    /*var textTodo = document.getElementById('newTodo').value;*/
	    var postTodo = '</div><div class="itemright"></div></div>'
	    var valueTodo = preTodo + textTodo + postTodo

	    /*	    console.log("enter pressed");*/
	    /*	    $(".todos").append(valueTodo);*/ /*The CSS works for this part but it cannot read the value of the input. All new todos are set as "undefined".*/
	    $(".todos").append(valueTodo);	    
	    $("#newTodo").find('input:text').val('');
	}
	
    }
		   );
})

