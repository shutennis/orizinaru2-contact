$(function(){
  $('.header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html,body').animate({
     "scrollTop":position
    },1000);
  });  
  $('footer a').click(function(){
    var id1 = $(this).attr('href');
    var position1 =$(id1).offset().top;
    $('html,body').animate({
      "scrollTop":position1
    },1000);

  });
  $('.signup3').click(function() {
    $('.signup-modal').fadeIn();
  });
  
  $('.close-modal').click(function(){
    $('.signup-modal').fadeOut();
  });
}); 