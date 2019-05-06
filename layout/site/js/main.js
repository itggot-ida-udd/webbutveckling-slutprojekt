
$(".button").click(function(){
    $(this).parents().find(".cover").slideUp(200);
  });

$(".menu_background").hide();
$(".menu").hide();

$("#close").click(function(){
    $(this).parents().find(".menu").hide(200);
    $(this).parents().find(".menu_background").hide();
  });

$(".menu_background").click(function(){
    $(this).parents().find(".menu").hide(200);
    $(this).hide();
  });

$("#hamburger-menu").click(function(){
   $(this).parents().find(".menu").show(200)
   $(this).parents().find(".menu_background").show()
  });  


  $(".hover_con").hide();

  $("#info").hover(function(){
    $(this).find(".hover_con").show();
  },function(){
    $(this).find(".hover_con").hide();

  });


