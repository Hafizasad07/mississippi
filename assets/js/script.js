jQuery(".carousel0").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
    
        600: {
            items: 1
        },
    
        1024: {
            items: 2
        },
    
        1366: {
            items: 2
        }
    }
  });

$( ".carousel0 .owl-prev").html('<img src="assets/icons/left-arrow.svg" alt="">');
$( ".carousel0 .owl-next").html('<img src="assets/icons/right-arrow.svg" alt="">');

