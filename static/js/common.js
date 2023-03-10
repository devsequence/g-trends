// AOS.init({disable: 'mobile'});
$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
    $('.header').toggleClass('active');
});
$('.header-logo a, .footer-logo a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
if($('.hero').length > 0 ){

}else{
    $('.header').addClass('header-page')
}
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() > 1) {
        $header.addClass('scroll-nav');
    }
    else{
        $header.removeClass('scroll-nav');
    }
});
$('.header-nav a, .header .btn-primary').on('click', function (e) {

    var ths = $(this);
    var thsId = ths.data('id');

    if($('.hero').length > 0 ){
        if ($(ths).data('id')) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#'+thsId).offset().top - 120
            }, 1000);
            $('.header, .header-btn').removeClass('active');
            return false;
        }
    }

});
$('.reviews-slider').slick({
    speed: 300,
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});
$('.header-lang span').on('click', function (e) {
   e.preventDefault();
   var ths = $(this);
   ths.parent().toggleClass('active');
});
$('.header-lang a').on('click', function (e) {
    $('.header-lang').removeClass('active');
});

$(document).mouseup(function (e){
    var div = $('.header-lang');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('active');
    }
});