$( document ).ready(function() {
    $.ajaxSetup({
        url: "ttps://jsonplaceholder.typicode.com/todos/1",
        context: $(".content"),
        // async:false,
        statusCode:{
            404:function(){
                alert("Not found");
            }
        },
        success:function(){
            $(this).text("Done");
        },
        error:function(xhr){
            alert(`Error ${xhr.status} error text ${xhr.statusText}`);
        }
    });
    $("button").click(function(){
        $.ajax();
    });
});

