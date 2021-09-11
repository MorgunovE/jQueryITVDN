$(document).ready(function(){
    // $("input").blur(function(){
    //     if($(this).val().length === 0){
    //         $(".blur-text").text("Input value 0");
    //     }
    //     else{
    //         $(".blur-text").text("");
    //     }
    // });
    // $(".change").change(function(){
    //     if($(this).val().length>3){
    //         $(".change-text").text(`Input text chsnge ${$(this).val()} L:  ${$(this).val().length}`);
    //     }
    //     else{
    //         $(".change-text").text("Change value");
    //     }
    // });
    // $("form").change(function(){
    //     alert("Form data changed");
    // });
    $("form").focusin(function(){
        $(this).css({
            "background":"#ccc",
            "border":"3px solid #333"
        });
    });
    $("form").focusout(function(){
        $(this).css({
            "background":"#fff",
            "border":"none"
        });
    });
    $("input, textarea").select(function(){
        $(".warning").text("Text selected");
        $(this).css({
            "background":"red",
            "color":"#fff"
        })
    });
    $("form").submit(function(e){
        e.preventDefault();
        // console.log($("form").serialize());
        $(".focus").val("null value");
        console.log($("form").serializeArray());

        // alert("Form submit");
    });

});
