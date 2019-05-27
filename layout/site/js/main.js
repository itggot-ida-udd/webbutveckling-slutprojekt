
$(".button").click(function(){
  $(this).parents().find(".cover").slideUp(200);
});

$(".menu_background").hide();
$(".menu_container ").hide();

$("#close").click(function(){
  $(this).parents().find(".menu_container").hide(200);
  $(this).parents().find(".menu_background").hide();
  $(this).parents().find(".menu_button").slideDown(90);
});

$(".menu_background").click(function(){
  $(this).parents().find(".menu_container").hide(200);
  $(this).hide();
  $(this).parents().find(".menu_button").slideDown(90);

});

$("#hamburger-menu").click(function(){
  $(this).parents().find(".menu_container").show(200);
  $(this).parents().find(".menu_background").show();
  $(this).parents().find(".menu_button").slideUp(50);
});  


$(".hover_con").hide();

$(".info").hover(function(){
  $(this).find(".hover_con").show();
},function(){
  $(this).find(".hover_con").hide();

});

let descriptionIndex = 0;
let description = ["Happy and good gril. Protective of master. Loves when master talkes me out bikeing, runing fast is the best. favorite food: crakers. Wants someone else to run with who is happy and energetic."
,"Sad and lonely but calm. Master not home offen misses company.enjoys when master is home, watching tv beside master is cosy. favorite food: carrot."
,"The best gril (acording to master). mischievous and playful. Favorite of the week is when in dogpark, meeting and playing whit other dogos is the best. favorite food: hotdog! Wants someone to play whit.."
];

let transelationIndex = 0; 
let transelation = ["woff! woooof! woff woff woff! *bark* woof woooof!"
,"woff! *wnine* *wnine* bark! *wnine* woff.."
,"woooof! ahooo! woof! Ahoo!!! woff! woff! woooooooof!"
];


$(".next-like").click(function () {

  $('.description').each(function(){
    descriptionIndex = (descriptionIndex + 1) % description.length
    $(this).text(description[descriptionIndex])
  });

  $('.transelation').each(function(){
    transelationIndex = (transelationIndex + 1) % transelation.length
    $(this).text(transelation[transelationIndex])
  });  

  $(".div3").each(function(){
    console.log(this.id)
    var ids = ["nr1","nr2","nr3"];
    this.id = ids[($.inArray(this.id, ids)+1)%ids.length];
  });

  $(".div1").each(function(){
    console.log(this.id)
    var ids = ["nr2","nr3","nr1"];
    this.id = ids[($.inArray(this.id, ids)+1)%ids.length];
  });

  $(".div2").each(function(){
    console.log(this.id)
    var ids = ["nr3","nr1","nr2"];
    this.id = ids[($.inArray(this.id, ids)+1)%ids.length];
  });
});



//   tanken är att allt ser bra ut över 240 px * Xpx. upp till 640px * Xpx för mobile. 


