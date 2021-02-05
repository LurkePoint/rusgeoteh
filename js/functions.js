$(window).scroll(function() {
    var height = $(window).scrollTop(); 
    if(height > 0){
    $('.logoText').addClass('logoText-black');
    $('.menu_item_a').addClass('menu_item_a-black');
    $('.user_item_a').addClass('user_item_a-black');
    $('.search_svg').addClass('user_item_svg-black');
    $('.profile_svg').addClass('user_item_svg-black');
    $('.buy_svg').addClass('user_item_svg-black');
    $('.stroke_svg').addClass('menu_item_svg-black');
    } else {
    $('.logoText').removeClass('logoText-black');
    $('.menu_item_a').removeClass('menu_item_a-black');
    $('.user_item_a').removeClass('user_item_a-black');
    $('.search_svg').removeClass('user_item_svg-black');
    $('.profile_svg').removeClass('user_item_svg-black');
    $('.buy_svg').removeClass('user_item_svg-black');
    $('.stroke_svg').removeClass('menu_item_svg-black');
    }
    //выдвижная шапка
    var height = $(window).scrollTop();
    if(height > 0){
    $('header').addClass('header-background');
    } else {
    $('header').removeClass('header-background');
    }

    if (height > 200 && height > lastScrollTop){
    $('header').addClass('header-background-down');
    $('header').removeClass('header-background-up');
    } else {
    $('header').removeClass('header-background-down');
    $('header').addClass('header-background-up');
    }
lastScrollTop = height;
});



  
$(document).ready(function () { 
  
  $('.menu_item').hover(
   function () {
    
    $( "header" ).css( "background", "white" )
    $( ".menu_item_a" ).css( "color", "#121212" )
    $( ".user_item_a" ).css( "color", "#121212" )
    $('.search_svg').css( "filter", "brightness(30%)" );
    $('.profile_svg').css( "filter", "brightness(30%)" );
    $('.buy_svg').css( "filter", "brightness(30%)" );
    $('.stroke_svg').css( "filter", "brightness(30%)" );
    $('.logoText').css( "filter", "brightness(0%)" );
   },
   function () {
    
    $( "header" ).css( "background", "" )
    $( ".menu_item_a" ).css( "color", "" )
    $( ".user_item_a" ).css( "color", "" )
    $('.search_svg').css( "filter", "" );
    $('.profile_svg').css( "filter", "" );
    $('.buy_svg').css( "filter", "" );
    $('.stroke_svg').css( "filter", "" );
    $('.logoText').css( "filter", "" );
   }
   )
  
});
  


$('.profile_svg').on('click', function (e) {
    e.preventDefault();
    $('.profile_svg').toggleClass('profile_svg-active');
    $('.login').toggleClass('login-active');
    
});


$(window).scroll(function() {
  var top = $(window).scrollTop(); 
  if(top > 2000){

  $('.block_top').addClass('block_top-active');

  } else {

  $('.block_top').removeClass('block_top-active');

  }
})

$('.block_top').on('click', function() {
  
    $('html, body').animate({
      scrollTop: 0,
    }, 0, "linear");
});







$( document ).ready(function(){

    $('.slide_one').on('click', function SlideOne() {
        $( ".bar" ).stop();
        $( ".bar" ).css({
            width: "0%",
          });
        $( ".bar" ).animate({
            width: "25%",
          }, 5000, "linear");
          
    });
    $('.slide_two').on('click', function SlideTwo() {
        $( ".bar" ).stop();
        $( ".bar" ).css({
            width: "25%",
          });
          $( ".bar" ).animate({
            width: "50%",
          }, 5000, "linear");
          
    });
    $('.slide_three').on('click', function SlideThree() {
        $( ".bar" ).stop();
        $( ".bar" ).css({
            width: "50%",
          });
          $( ".bar" ).animate({
            width: "75%",
          }, 5000, "linear");
          
    });
    $('.slide_four').on('click', function SlideFour() {
        $( ".bar" ).stop();
        $( ".bar" ).css({
            width: "75%",
          });
          $( ".bar" ).animate({
            width: "100%",
          }, 5000, "linear");
          
    });

});