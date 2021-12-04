if (document.documentElement.clientWidth < 980) {
    $(document).ready(function(){
        $('.slider').slick({
            centerMode: true,
            centerPadding: '0px',
            centerMargin: '20px',
            arrows:true,
            dots:true,
            adaptiveHeight:false,
            slidesToShow:1,
            slidesToScroll: 1,
            speed: 800,
            easing: 'linerar',
            infinite: true,
            initialSlide: 0,
            centerMode:true,
        });
    });
}
else{
$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '0px',
        centerMargin: '20px',
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:3,
        slidesToScroll: 1,
        speed: 800,
        easing: 'linerar',
        infinite: true,
        initialSlide: 0,
        centerMode:true,
    });
});
}


