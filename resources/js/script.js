$(document).ready(function() {
    
    /* For the main navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    }, {
      offset: '60px;'
    })
    
    /* Animations on link */
    $('.js--rutgers-link').waypoint(function(direction){
        $('.js--wp-1').addClass('animated pulse');
    }, {
        offset: '50%'
    })
}