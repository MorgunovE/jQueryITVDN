$( document ).ready(function() {
    $('.request').click(function(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/todos/1",
            success:function(result){
                console.log(result);
            }
        });
    });
    $('.broken').click(function(){
        $.ajax({
            url:"ttps://jsonplaceholder.typicode.com/todos/1",
            success:function(result){
                console.log(result);
            }
        });
    });
    // $(document).ajaxSuccess(function(e, xhr, opt){
    //     alert("completed");
    //     console.log(e);
    //     console.log(xhr);
    //     console.log(opt);
    // });
    // $(document).ajaxError(function(e, xhr, opt){
    //     alert("completed");
    //     console.log(e, 1);
    //     console.log(xhr, 2);
    //     console.log(opt, 3);
    // });
    $('.start').click(function(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/photos",
            success:function(result){
                console.log(result);
            }
        });
    });
    $(document).ajaxStart(function(){
        // alert("start");
        $(".loading").show(700);
    });
    $(document).ajaxStop(function(){
        // alert("Stop");
        $(".loading").hide(700);
    });
    $(document).ajaxComplete(function(){
        alert("Completed")
    });
});

