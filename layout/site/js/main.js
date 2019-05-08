
$(".button").click(function(){
    $(this).parents().find(".cover").slideUp(200);
  });

$(".menu_background").hide();
$(".menu").hide();

$("#close").click(function(){
    $(this).parents().find(".menu").hide(200);
    $(this).parents().find(".menu_background").hide();
    $(this).parents().find(".hambuger_menu").slideDown(90)
  });

$(".menu_background").click(function(){
    $(this).parents().find(".menu").hide(200);
    $(this).hide();
    $(this).parents().find(".hambuger_menu").slideDown(90)

  });

$("#hamburger-menu").click(function(){
   $(this).parents().find(".menu").show(200)
   $(this).parents().find(".menu_background").show()
   $(this).parents().find(".hambuger_menu").slideUp(50)
  });  


  $(".hover_con").hide();

  $("#info").hover(function(){
    $(this).find(".hover_con").show();
  },function(){
    $(this).find(".hover_con").hide();

  });


