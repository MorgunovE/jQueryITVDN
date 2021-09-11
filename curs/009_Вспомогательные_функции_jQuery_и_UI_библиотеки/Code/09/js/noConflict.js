let jQ = $.noConflict();

jQ(document).ready(function(){
    jQ("p").text("It work");
    jQ("button").click(function(){
        alert("work");
    });
});