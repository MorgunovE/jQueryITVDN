$( document ).ready(function() {
    $('.ajax').click(function(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/todos/1",
            success:function(result){
                console.log(result);
                $("h1").text(result.id);
                $("p").text(result.title);
            }
        });
    });
    $('.get').click(function(){
        $.get("https://jsonplaceholder.typicode.com/posts/2", function(data, status){
            console.log(status);
            $("h1").text(data.id);
            $("p").text(data.title);            
        });
    });
    $(".post").click(function(){
        $.post("https://jsonplaceholder.typicode.com/posts", {
            title:"New title",
            body:"body text",
            userId: 11
        },
        function(data){
            console.log(data);
        })
    });
    $(".delete").click(function(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/todos/1",
            type: 'DELETE',
            success:function(result){
                console.log(result);
            }
        });
    });
    $(".put").click(function(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts/1",
            type:'PUT',
            data:{
                title:"hello2"
            },
            success:function(result){
                console.log(result);
            }
        });
    });
});

