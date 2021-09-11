$( document ).ready(function() {
    let block = $('div');
    console.log(block.data());

    $(".set").click(function(){
        block.data("position", 15);
    });

    $(".get").click(function(){
        block.removeData();
        alert(block.data("position"));
        console.log(block.data());
    });

});

