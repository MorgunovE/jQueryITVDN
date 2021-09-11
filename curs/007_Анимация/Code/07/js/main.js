$(document).ready(function(){
    $(".simple").click(function(){
        $(".animate").animate({
            width:'200px',
            height:'200px',
            left:'+=100px'
        });
    });
    $(".slow").click(function(){
        $(".animate_a").animate({
            width:'300px',
            opacity:'0.7'
        }, "slow");
    });
    $(".fast").click(function(){
        $(".animate_b").animate({
            width:'300px',
            opacity:'0.7'
        },"fast");
    });
    $(".custom").click(function(){
        $(".animate_c").animate({
            width:'300px',
            opacity:'0.7'
        },3000);
        $(".animate_c").animate({
            width:'600px',
            opacity:'1'
        },500);
        $(".animate_c").animate({
            width:'200px',
            opacity:'0.1'
        },1000);
    });
    $(".delay").click(function(){
        $(".delay-block").delay("slow").animate({
            opacity:'0.7'
        });
        // $(".delay-block").delay("fast").animate({
        //     opacity:'0.3'
        // });
        // $(".delay-block").delay(1000).animate({
        //     opacity:'1'
        // });
        // console.log($(".delay-block").queue());
        // $(".delay-block").text($(".delay-block").queue().length);
    });
    $(".dequeue-start").click(function(){
        let block = $(".deqeue-block");
        block.animate({
            width:'100px'
        }, 500);

        block.animate({
            width:'400px'
        }, 1000);
        block.queue(function(){
            block.css('background', 'red');
            block.dequeue();         
        })
        block.animate({
            width:'200px'
        }, 500);
    });
    $(".dequeue-start").click(function(){
        let block = $(".deqeue-block-stop");
        block.animate({
            width:'100px'
        }, 1500);

        // block.animate({
        //     width:'400px'
        // }, 1000);
        // block.queue(function(){
        //     block.css('background', 'red');
        //     block.dequeue();         
        // })
        // block.animate({
        //     width:'200px'
        // }, 500);
        // block.queue(function(){
        //     block.css('background', 'blue');
        //     block.dequeue();         
        // })
        // block.animate({
        //     width:'400px'
        // }, 1000);
    });
    $(".dequeue-clear").click(function(){
        $(".deqeue-block-stop").clearQueue();
    });
    $(".stop-animation").click(function(){
        $(".deqeue-block-stop").stop();
    });
    $(".show").click(function(){
        $('.hide').show(500);
    });
    $(".hide-block").click(function(){
        $('.hide').hide(1000);
    });
    $(".slideUp").click(function(){
        $(".slide").slideUp(1700);
    });
    $(".slideDown").click(function(){
        $(".slide").slideDown(1700);
    });
    $(".toggle-button").click(function(){
        $(".toggle").slideToggle();
    });
    $(".fadeOut").click(function(){
        $(".fade-block").fadeOut(700);
    });
    $(".fadeIn").click(function(){
        $(".fade-block").fadeIn(700);
    });
    $(".fadeTo").click(function(){
        $(".fade-block").fadeTo(1000, 0.4);
    });
});
