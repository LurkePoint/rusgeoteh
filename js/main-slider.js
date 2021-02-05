$(function () {
    $('.main_slider').owlCarousel({
        items: 1,
        // autoplay: true,
        autoplayHoverPause: false,
        loop: true,
        dots: false,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        startPosition: 'URLHash',
        
        // arrows: false,
        // dots: false,
        // autoplay: true, 
        // autoplaySpeed: 5500,
        // speed: 1500
    })
})






const next = '<img src="images/arrow-right.svg" alt:"right">';
const prev = '<img src="images/arrow-left.svg" alt:"left">';

$(function () {
    $('.production_slider').owlCarousel({
        items: 4,
        margin: 40,
        autoHeight: true,
        nav: true,
        dots: true,
        scrollPerPage: true,
        mouseDrag: false,
        touchDrag: false,
        // autoplay: true,
        autoplayHoverPause: false,
        autoplayTimeout: 5000,
        smartSpeed: 200,
        startPosition: 'URLHash',
        responsiveClass: true,
        slideBy: 'page',
        onInitialized: numbersProduction,
        onTranslated: numbersProduction,
        navContainer: '.contentProduction_nav',
        navText: [
            prev,
            next
        ],
        responsive : {
            0 : {
                items: 1,
                
            },
            760 : {
                items: 2,
                
            },
            1200 : {
                items: 3,
                
            },
            1440 : {
                items: 4,
                
            }
        }
    })
     
})

function numbersProduction(event) {
    
    var page = event.page.index + 1;     
    var pages = event.page.count;
    $('.contentProduction_num').html(page + " / " + pages)
    
 }
window.onresize = numbersProduction;

 $(function () {
    $('.contentReviews_slider').owlCarousel({
        items: 1,
        margin: 40,
        autoHeight: true,
        nav: true,
        dots: true,
        scrollPerPage: true,
        mouseDrag: false,
        touchDrag: false,
        slideBy: 'page',
        // autoplay: true,
        autoplayHoverPause: false,
        autoplayTimeout: 5000,
        smartSpeed: 200,
        startPosition: 'URLHash',
        responsiveClass: true,
        onInitialized: numbersReviews,
        onTranslated: numbersReviews,
        navContainer: '.contentClientsReviews_nav',
        navText: [
            prev,
            next
        ],
        // responsive : {
        //     0 : {
        //         items: 1,
        //        
        //     },
        //     1440 : {
        //         items: 2,
        //         
        //     },
        //     1920 : {
        //         items: 1,
        //         
        //     }
        // }
    })
     
})

function numbersReviews(event) {
    
    var page = event.page.index + 1;     
    var pages = event.page.count;
    $('.contentClientsReviews_num').html(page + " / " + pages)
    
 }
window.onresize = numbersReviews;