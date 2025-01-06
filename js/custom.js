//awards-slider
$("#partners-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: false,
        margin: 0,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        nav: true,
        dots: false,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            autoplay: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        480:{
            items:2,
            autoplay: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        568:{
            items:2,
            autoplay: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        600:{
            items:2,
            autoplay: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        667:{
            items:2,
            autoplay: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        1000:{
            items:3
        }
    }   
        
    }); 

$("#highlights-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: false,
        margin: 3,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        nav: true,
        dots: false, 
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
             autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        480:{
            items:1,
             autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        568:{
            items:2,
             autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        600:{
            items:2,
             autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        667:{
            items:2,
             autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        1000:{
            items:3
        }
    }   
        
    });

$("#ranking-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 4, //Set Testimonial items
        loop: false,
        margin: 15,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        nav: true,
        dots: false, 
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        480:{
            items:1,
             autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        568:{
            items:2,
             autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        600:{
            items:2,
             autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        667:{
            items:2,
             autoplay: true,
            nav: false,
            dots: true, 
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        1000:{
            items:4
        }
    }   
        
    });
  
//Client Carousel
$("#client-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 7, //Set Testimonial items
        loop: false,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: false,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav: false,
            dots: true,
        },
        480:{
            items:2,
            nav: false,
            dots: true,
        },
        568:{
            items:3,
            nav: false,
            dots: true,
        },
        600:{
            items:3,
            nav: false,
            dots: true,
        },
        667:{
            items:3,
            nav: false,
            dots: true,
        },
        1000:{
            items:7,
        }
    }   
        
    }); 

$('.counter').counterUp({
delay: 10,
time: 1000
});

/* -------------------------------	

		 WOW ANIMATED JS START

/* ----------------------------- */

new WOW().init();


/* -------------------------------	

		INPUT PLACEHOLDER

/* ----------------------------- */

$('input,textarea').focus(function(){

   $(this).data('placeholder',$(this).attr('placeholder'))

          .attr('placeholder','');

}).blur(function(){

   $(this).attr('placeholder',$(this).data('placeholder'));

});

/* ---------------------	

		STICKY NAV

/* --------------------- */

var stickyNavTop = $('#header').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
if (scrollTop > stickyNavTop) { 

    $('#header').addClass('sticky');

} else {

    $('#header').removeClass('sticky'); 

}

};

stickyNav();

 

$(window).scroll(function() {

    stickyNav();

});



/* ---------------------	

		back-top

/* --------------------- */

if ($('#back-top').length) {

    var scrollTrigger = 100, // px

        backToTop = function () {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollTrigger) {

                $('#back-top').addClass('show');

            } else {

                $('#back-top').removeClass('show');

            }

        };

    backToTop();

    $(window).on('scroll', function () {

        backToTop();

    });

    $('#back-top').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

}



$('a[href^="#applyBox"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('#sideNavi').fadeIn();
    } else {
        $('#sideNavi').fadeOut();
    }

});