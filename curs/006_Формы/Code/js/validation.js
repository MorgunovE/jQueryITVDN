
$( document ).ready(function() {
    let overlay =$(".overlay");
    let username =$("input[name='username']");
    let password =$("input[name='password']");
    function isValid(element, validValue){
        if(element.val().length>validValue){
            element.removeClass("error");
            return true
        }
        else{
            element.addClass("error");
            return false
        }
    }
    $("form").on("submit", function(e){
        if(isValid(username, 3) && isValid(password, 6)){
            e.preventDefault();
            overlay.removeClass("error");
            alert("Login!");
        }
        else{
            e.preventDefault();
            overlay.addClass("error");
            alert("Error!")
        }
    });

});
