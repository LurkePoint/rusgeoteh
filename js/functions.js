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



  
$(document).ready(function(){ 
  
  $('.menu_item').hover(function(){
    
    $( "header" ).css( "background", "white" )
    $( ".menu_item_a" ).css( "color", "#121212" )
    $( ".user_item_a" ).css( "color", "#121212" )
    $('.search_svg').css( "filter", "brightness(30%)" );
    $('.profile_svg').css( "filter", "brightness(30%)" );
    $('.buy_svg').css( "filter", "brightness(30%)" );
    $('.stroke_svg').css( "filter", "brightness(30%)" );
    $('.logoText').css( "filter", "brightness(0%)" );
   },
   function(){
    
    $( "header" ).css( "background", "" )
    $( ".menu_item_a" ).css( "color", "" )
    $( ".user_item_a" ).css( "color", "" )
    $('.search_svg').css( "filter", "" );
    $('.profile_svg').css( "filter", "" );
    $('.buy_svg').css( "filter", "" );
    $('.stroke_svg').css( "filter", "" );
    $('.logoText').css( "filter", "" );
   })
  
});
  
$('.headerItems_zakaz_svg').on('click', function (e) {
  e.preventDefault();
  $('.headerItems_zakaz_text').addClass('headerItems_zakaz_text-active');
  $('.headerItems_zakaz_btn').addClass('headerItems_zakaz_btn-active');
  $('.headerItems_zakaz_foto_back').addClass('headerItems_zakaz_foto_back-active');
  $('.headerItems_zakaz_svg').addClass('headerItems_zakaz_svg-active');
  $('.headerItems_zakaz').addClass('headerItems_zakaz-active');
});
$('.headerItems_zakaz_foto_back').on('click', function (e) {
  e.preventDefault();
  $('.headerItems_zakaz_text').removeClass('headerItems_zakaz_text-active');
  $('.headerItems_zakaz_btn').removeClass('headerItems_zakaz_btn-active');
  $('.headerItems_zakaz_foto_back').removeClass('headerItems_zakaz_foto_back-active');
  $('.headerItems_zakaz_svg').removeClass('headerItems_zakaz_svg-active');
  $('.headerItems_zakaz').removeClass('headerItems_zakaz-active');
});
$('.headerItems_zakaz_1430px_start').on('click', function (e) {
  e.preventDefault();
  $('.headerItems_zakaz_1430px').addClass('headerItems_zakaz_1430px-active');
  $('.headerItems_zakaz_1430px_fon').addClass('headerItems_zakaz_1430px_fon-active');
});
$('.headerItems_zakaz_1430px_foto_back').on('click', function (e) {
  e.preventDefault();
  $('.headerItems_zakaz_1430px').removeClass('headerItems_zakaz_1430px-active');
  $('.headerItems_zakaz_1430px_fon').removeClass('headerItems_zakaz_1430px_fon-active');
});
$('.headerItems_zakaz_1430px_fon').on('click', function (e) {
  e.preventDefault();
  $('.headerItems_zakaz_1430px').removeClass('headerItems_zakaz_1430px-active');
  $('.headerItems_zakaz_1430px_fon').removeClass('headerItems_zakaz_1430px_fon-active');
});



$('.menu_item_sys').on('click', function (e) {
  e.preventDefault();
  $('.podmenu_sys').addClass('podmenu_sys-active');
});
$('.zagolovok_sys').on('click', function (e) {
  e.preventDefault();
  $('.podmenu_sys').removeClass('podmenu_sys-active');
});

$('.menu_item_katalog').on('click', function (e) {
  e.preventDefault();
  $('.podmenu_katalog').addClass('podmenu_katalog-active');
});
$('.zagolovok_katalog').on('click', function (e) {
  e.preventDefault();
  $('.podmenu_katalog').removeClass('podmenu_katalog-active');
});

$('.menu_item_soft').on('click', function (e) {
  e.preventDefault();
  $('.podmenu_soft').addClass('podmenu_soft-active');
});
$('.zagolovok_soft').on('click', function (e) {
  e.preventDefault();
  $('.podmenu_soft').removeClass('podmenu_soft-active');
});

$('.menu_item_info').on('click', function (e) {
  e.preventDefault();
  $('.podmenu_info').addClass('podmenu_info-active');
});
$('.zagolovok_info').on('click', function (e) {
  e.preventDefault();
  $('.podmenu_info').removeClass('podmenu_info-active');
});









$('.burger').on('click', function (e) {
  e.preventDefault();
  $('.burger').toggleClass('burger-active');
  $('.menu').toggleClass('menu-active');
  $('body').toggleClass('body-lock');
  $('html, body').animate({
    scrollTop: 0,
  }, 0, "linear");
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


$(window).scroll(function() {
  var top = $(window).scrollTop(); 
  if(top > 1900){

  $('.headerItems_zakaz').addClass('headerItems_zakaz-hidden');

  } else {

  $('.headerItems_zakaz').removeClass('headerItems_zakaz-hidden');

  }
})


$('.block_top').on('click', function() {
  
    $('html, body').animate({
      scrollTop: 0,
    }, 0, "linear");
});


  // $( ".bar" ).animate({
  //   width: "25%",
  // }, 5000, "linear", function(){
  //   $("#owl-demo").trigger("next.owl.carousel");
  //   $( ".bar" ).animate({
  //     width: "50%",
  //   }, 5000, "linear", function(){
  //     $("#owl-demo").trigger("next.owl.carousel");
  //     $( ".bar" ).animate({
  //       width: "75%",
  //     }, 5000, "linear", function(){
  //       $("#owl-demo").trigger("next.owl.carousel");
  //       $( ".bar" ).animate({
  //         width: "100%",
  //       }, 5000, "linear", function(){
  //         $("#owl-demo").trigger("next.owl.carousel");
  //         $( ".bar" ).css({
  //           width: "0%",
  //         });
  //       });
  //     }); 
  //   }); 
  // }); 


// $( document ).ready(function(){

//     $('.slide_one').on('click', function () {
//         $( ".bar" ).stop();
//         $( ".bar" ).css({
//             width: "0%",
//           });
//         $( ".bar" ).animate({
//             width: "25%",
//           }, 5000, "linear", function(){
//             $("#owl-demo").trigger("next.owl.carousel");
//             $( ".bar" ).animate({
//               width: "50%",
//             }, 5000, "linear", function(){
//               $("#owl-demo").trigger("next.owl.carousel");
//               $( ".bar" ).animate({
//                 width: "75%",
//               }, 5000, "linear", function(){
//                 $("#owl-demo").trigger("next.owl.carousel");
//                 $( ".bar" ).animate({
//                   width: "100%",
//                 }, 5000, "linear");
//               }); 
//             }); 
//           }); 
          
          
//     });
//     $('.slide_two').on('click', function SlideTwo() {
//         $( ".bar" ).stop();
//         $( ".bar" ).css({
//             width: "25%",
//           });
//           $( ".bar" ).animate({
//             width: "50%",
//           }, 5000, "linear", function(){
//             $("#owl-demo").trigger("next.owl.carousel");
//             $( ".bar" ).animate({
//               width: "75%",
//             }, 5000, "linear", function(){
//               $("#owl-demo").trigger("next.owl.carousel");
//               $( ".bar" ).animate({
//                 width: "100%",
//               }, 5000, "linear");
//             }); 
//           }); 
          
//     });
//     $('.slide_three').on('click', function SlideThree() {
//         $( ".bar" ).stop();
//         $( ".bar" ).css({
//             width: "50%",
//           });
//           $( ".bar" ).animate({
//             width: "75%",
//           }, 5000, "linear", function(){
//             $("#owl-demo").trigger("next.owl.carousel");
//             $( ".bar" ).animate({
//               width: "100%",
//             }, 5000, "linear");
//           }); 
          
//     });
//     $('.slide_four').on('click', function SlideFour() {
//         $( ".bar" ).stop();
//         $( ".bar" ).css({
//             width: "75%",
//           });
//           $( ".bar" ).animate({
//             width: "100%",
//           }, 5000, "linear", function(){
//             $("#owl-demo").trigger("next.owl.carousel");
//             $( ".bar" ).animate({
//               width: "100%",
//             }, 5000, "linear");
//           }); 
          
//     });

// });