$(function(){
   //assignment no 4
   $("#btn").click(function(){
    
    $("p").css("background-color", "red");

   });
  //end

  //assignment no 6

  $("#btn2").click(function(){
    
   $("p").hide(1000);

  });

  //end

  //assignment 7 start here

  $(".box3").show(5000);

  //end

  //assignment 10

  $("#btn4").click(function(){
   $("ul").append("<li>Appended item</li>");
 });

 $("#btn5").click(function(){
   $(".list").append("<ul></ul>");
 });

 //end

 //assingment 3 start here
 $(".fade-out").click(function(){
  $(".animation-div").fadeOut("slow");
});

$(".show").click(function(){
  $(".animation-div").show();
});
$(".increase-height").click(function(){
  $(".animation-div").css("height", "+=20px");
});

$(".increase-width").click(function(){
  $(".animation-div").css("width", "+=20px");
});

$(".move-right").click(function(){
  $(".animation-div").animate("right","200px");
});

//ends


//assignment 2nd start  from here

$(".addcols").click(function(){
     $('#tbl1 tr').append(function(){
    $(this).append('<td style="width:70px";></td>');
    });   
  });

});

 


