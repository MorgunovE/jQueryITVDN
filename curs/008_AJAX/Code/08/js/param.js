$( document ).ready(function() {
    let form = {
        name:"User",
        email:"test@gmail.com",
        password:"123qwerty456"
    }
    $(".result").text($.param(form));
});

