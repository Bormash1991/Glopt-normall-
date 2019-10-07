

$(document).ready(function(){

    "use strict";
    require('./owl.carousel.min.js');
   
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navSpeed: 1500,
        dots: false,
        navText: ["",""], 
        responsive: {
            768: {
                center: true,
                items: 1,
                margin: 0,
            },
            992: {
                center: true,
                items: 3,
            },
           
        }

        
    });

    document.getElementsByClassName('center')[0].id = 'spack';
    $('#spack').append(document.getElementsByClassName('owl-nav'));

    $('.owl-prev').on('click', function(){
        document.getElementsByClassName('center')[0].id = 'spack';
        $('.center ').append(document.getElementsByClassName('owl-nav'));
    });
    $('.owl-next').on('click', function(){
        document.getElementsByClassName('center')[0].id = 'spack';
        $('.center ').append(document.getElementsByClassName('owl-nav'));
    });
    
});