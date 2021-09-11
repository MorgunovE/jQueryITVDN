$( document ).ready(function() {
    // $("h1").addClass("title uppercase");
    // $("h2").addClass("uppercase");
    // $("h3").removeClass("remove");
    // $("h3").removeClass("title new");
    let n = 0;
    // $("h3").removeClass(function(){
    //     if(n>0){
    //         return "remove"
    //     }
    //     return "new"
    // })
    $("button").click(function(){
        // $("button").toggleClass("active");
        // $("button").toggleClass("active", false);
        // $("button").toggleClass(function(){
        //     if(n>0){
        //         return "remove"
        //     }
        //     return "new"            
        // });
    });
    // let titleH = $("h3");
    // if(titleH.hasClass("remove")){
    //     titleH.removeClass("remove");
    // }
    // $(".block").css("background","blue");
    // $(".block").css({
    //     "background":"blue",
    //     "font-size":"30px",
    //     "color":"#fff"
    // });
    // $(".block").height(400);
    // $(".block").width(400);
    // $(".block").text($(".block").width());
    // let positionBlock = $(".block").position();
    // $(".block").text(`T:${positionBlock.top} L:${positionBlock.left}`);
    // let imgAttr = $("img").attr("src")
    // $(".block").text(imgAttr)
    // $("img").attr("alt","this img");
    // $("img").attr("alt","this img");
    // $("img").attr("data-info","image");
    // $("svg").attr({
    //     "height":"400",
    //     "width":"450"
    // });
    // $("#canvas").attr({
    //     "height":"400",
    //     "width":"450"
    // });
    // let canvas = $('#canvas')[0];
    // if (canvas.getContext){
    //     var ctx = canvas.getContext("2d");
    //     ctx.font = "30px Arial";
    //     ctx.strokeText("Hello Canvas", 10, 50);
    // }  
    // $("a").attr("href","http://127.0.0.1:5501/04/");
    // $("img").removeAttr("width");
    // $("img").removeAttr("height");
    console.log($("input").attr("checked"));
    console.log($("input").prop("checked"));
    let parag = $("p").prop("code", "US");
    // parag.text(`${parag.prop("code")}`);
    parag.removeProp("code");
    parag.text(`${parag.prop("code")}`);

});