$(document).ready(function(){

    // scroll with navbar
    // $('#aside-menu').scroller();



    // aside menu and nav btn
    $(".nav-btn").click(function() {
        $(".aside-menu").delay(10000).toggleClass("aside-menu-visible");
    });


    // nav-link active class
    $(".nav-link").click(function () {
        // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
        if ($(this).hasClass("active")) {
          $(".nav-link").removeClass("active");
        }
        // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
        else {
          $(".nav-link").removeClass("active");
          $(this).addClass("active");
        }
    });


    // testimonial slider
    $('.testimonial-slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // testimonial slider btns
    $('.left-arrow').click(function(){
        $('.testimonial-slider').slick('slickPrev');
    });
      
    $('.right-arrow').click(function(){
        $('.testimonial-slider').slick('slickNext');
    });

    // if($("body").hasClass("side-header")){
    //     $('.smooth-scroll').on('click', function() {
    //         event.preventDefault();
    //         var sectionTo = $(this).attr('href');
    //         $('html, body').stop().animate({
    //           scrollTop: $(sectionTo).offset().top}, 1500, 'easeInOutExpo');
    //     });
    //        }else {
    //     $('.smooth-scroll').on('click', function() {
    //         event.preventDefault();
    //         var sectionTo = $(this).attr('href');
    //         $('html, body').stop().animate({
    //           scrollTop: $(sectionTo).offset().top - 50}, 1500, 'easeInOutExpo');
    //     });
    //     }


    // portfolio
    // $('.portfolio-target').mixItUp({
    //     animation: {
    //         enable: true,
    //         effects: 'fade scale',
    //         duration: 600,
    //         easing: 'ease',
    //         perspectiveDistance: '3000px',
    //         perspectiveOrigin: '50% 50%',
    //         queue: true,
    //         queueLimit: 1,
    //         animateChangeLayout: false,
    //         animateResizeContainer: true,
    //         animateResizeTargets: false,
    //         staggerSequence: null,
    //         reverseOut: false
    //     }
    // });


   
    
});