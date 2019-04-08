

$(document).ready(function(){

    $('.my_but').click(function() {
      	$('.logo').toggleClass('logo_light');
      	$('.navbar_header_top').toggleClass('header_bar_red');
    });
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        992:{
            items:3
        }
    }
})
 });

