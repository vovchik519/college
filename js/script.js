$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".burger, .header__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(".link__slider").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});

$(".page__new-image").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 2500,
});