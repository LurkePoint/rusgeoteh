$(function () {
    $('#owl-demo').owlCarousel({
        items: 1,
        autoplayHoverPause: false,
        loop: true,
        dots: true,
        smartSpeed: 500,
        startPosition: 'URLHash',
        dotsContainer: '.headerItems_dots',
        onInitialize: progressBar,
        
        onTranslate: moved,
    })


    var time = 5; // time in seconds
 
    var $progressBar,
        $bar, 
        $elem, 
        isPause, 
        tick,
        percentTime;

        $progressBar = $("headerItems_progressBar");
        $bar = $(".bar");


        function progressBar(){    
            
            
            // start counting
            start();
        }
        

      
        
        function start() {
            // reset timer
            percentTime = 0;
            isPause = false;
            
            // run interval every 0.01 second
            tick = setInterval(interval, 10);
        };
        
        function interval() {
            if(isPause === false){
                percentTime += 1 / time;
                
                $bar.css({
                    width: percentTime+"%"
                });
                
                // if percentTime is equal or greater than 100
                if(percentTime >= 100){
                    // slide to next item 
                    $("#owl-demo").trigger("next.owl.carousel");
                    percentTime = 0; // give the carousel at least the animation time ;)
                }
            }
        }
        
        
        // moved callback
        function moved(){
            // clear interval
            clearTimeout(tick);
            
            // start again
            start();
        }
})


var owl = $('.production_slider');

const next = '<img src="images/arrow-right.svg" alt:"right">';
const prev = '<img src="images/arrow-left.svg" alt:"left">';

$(function () {
    owl.owlCarousel({
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
       
        
        onInitialized: numbersProductionStart,
        onResize: numbersProduction,
        onResized: numbersProduction,
        onTranslated: numbersProduction,
        afterMove: numbersProduction,
        
        navContainer: '.contentProduction_nav',
        navText: [
            prev,
            next
        ],
        responsive : {
            0 : {
                items: 1,
                
            },
            700 : {
                items: 2,
                
            },
            1000 : {
                items: 3,
                
            },
            
            1770 : {
                items: 4,
                
            }
        }
    })

    
    function numbersProductionStart(event) {
        var item = event.item.index + 1;
        $('.contentProduction_num').html("<b>" + item + "</b>" + " / " + $(".production_slider button").length)
     }
    
    function numbersProduction(event) {
        var page = event.page.index + 1;
        var pages = event.page.count;
        $('.contentProduction_num').html("<b>" + page + "</b>" + " / " + pages)
     }
    
})



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

        onInitialized: numbersReviewsStart,
        onResize: numbersReviews,
        onResized: numbersReviews,
        onTranslated: numbersReviews,
        afterMove: numbersReviews,
        
        navContainer: '.contentClientsReviews_nav',
        navText: [
            prev,
            next
        ],
        responsive : {
            0 : {
                items: 1,
               
            },
            992 : {
                items: 2,
                
            },
            1441 : {
                items: 1,
                
            },
        }
    })
     

    function numbersReviewsStart(event) {
        var item = event.item.index + 1;
        $('.contentClientsReviews_num').html("<b>" + item + "</b>" + " / " + $(".contentReviews_slider button").length)
     }
    
    function numbersReviews(event) {
        var page = event.page.index + 1;
        var pages = event.page.count;
        $('.contentClientsReviews_num').html("<b>" + page + "</b>" + " / " + pages)
     }
})

