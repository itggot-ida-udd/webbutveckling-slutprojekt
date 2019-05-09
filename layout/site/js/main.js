
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

//   $(".next").click(function(){
//     $(this).parents().child().find("#dog1").toggle(2)
//     $(this).parents().child().find("#dog2").toggle(2)
//     $(this).parents().child().find("#dog3").hide(2)
//    });  
// ".next-like"  kunna kilka på "next" och "next+like" och kunna bläddra mellan både bild och tillhörande text.
//  om detta funkar blir det även mindre content i articeln och då kan den vara flera olika stolekar utan att innehållet hamnar utanför. tanken är att allt ser bra ut över 240 px * Xpx. 


