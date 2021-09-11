$( document ).ready(function() {
  let arr =[ 1,2,3,4,5,1,8,9,10,12,3,2,1];
  arr = $.grep(arr, function(n, i){
      return ( n!=5 && i >6);
  });
  $(".grep").text(arr);

  let inArr =['Angular', 'React', 'Vue'];
  let li = $("li");
  li.eq(0).text($.inArray("React", inArr));
  li.eq(1).text($.inArray("Vue", inArr));
  li.eq(2).text($.inArray("Angular", inArr));

  console.log(li);
  let elemArr = $.makeArray(li);
  console.log(elemArr);
  console.log($.isArray(elemArr));

  let userA = {
      name:"Ivan",
      email:"ivan@gmail.com"
  }
  let userAinfo ={
      age:18,
      bonus:100
  }
  let user = $.extend(userA, userAinfo);
  console.log(user);

  let indexEl = $(".index2");
  $(".index-val").text(li.index(indexEl));
  
});

