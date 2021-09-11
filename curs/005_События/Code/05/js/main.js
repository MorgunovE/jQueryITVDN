// $(window).on("load",function(){
//     //.on(event, [data], handler)
//     // .bind, .delegate()
//     $("#first").on("click", function(){
//         $("#second").trigger("click");
//     });
//     $("#second").on("click", function(){
//         alert("Hello event");
//     });

//     $("#first").on({
//         click:function(){

//         },
//         mousover:function(){

//         },
//         mouseout:function(){
            
//         }
//     })
// });
$(document).ready(function(){
    // DOM ready
    $(".keydown").keydown(function(){
        $(".keydown").css({
            "background":"yellow",
            "border":"3px solid blue"
        });
    });
    // if($(".keydown").keydown());
    $(".keypress").keypress(function(){
        $(".press-value").text($(".keypress").val());
    });
    // if($(".keydown").keypress());
    $(".keyup").keyup(function(){
        $(".keyup").css({
            "background":"purple",
            "border":"3px solid green"
        });
        $(".up-value").text($(".keyup").val());

    });
    // if($(".keyup").keyup());
    let i=0;
    let db=0;
    $(".click").click(function(){
        $(".click span").text(i++);
    });
    $(".dbClick").dblclick(function(){
        $(".dbClick span").text(db++);
    });

    $(".hover").hover(
        function(){
            $(this).css("background","yellow")
            $(this).addClass("yellow");
        },
        function(){
            $(this).css("background","salmon")
            $(this).removeClass("yellow");
        }
    );
    $("#focus").focus(function(){
        $(this).css({
            "background":"salmon",
            "color":"white"
        });
        $("label").text("Input focus");
    });
    $(".area-block").mouseup(function(){
        $(".area-block>p").text("MouseUp");
    });
    $(".area-block").mousedown(function(){
        $(".area-block>p").text("MouseDown");
    });
    $("[data-select=enter]").mouseleave(function(){
        $("[data-select=enter]>p").css("background","salmon")
    });
    $("[data-select=enter]").mouseenter(function(){
        $("[data-select=enter]>p").css("background","blue")
    });
    // $(document).mousemove(function(e){
    //     $("body").text(`Cordinate X:${e.pageX} Cordinate Y:${e.pageY}`);
    // })
    $(window).resize(function(){
        let w = $(window).width();
        let h = $(window).height();
        $(".windows-block").text(`Windows W:${w} H:${h}`);
    });
    $(".scroll").scroll(function(){
        $(this).css("background","pink");
    });
});
