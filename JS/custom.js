$(document).ready(function(){

    // aside menu and nav btn
    $(".nav-btn").click(function() {
        $(".aside-menu").delay(10000).toggleClass("aside-menu-visible");
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


    // portfolio
    $('#mixitup-items').mixItUp();


   
    
});