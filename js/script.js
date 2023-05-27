$(".btn-send").click(function () {
  $(".btn-send-wrapper").addClass("active");
});
$(".btn-send-window .close, .btn-send-wrapper").click(function (event) {
  if (this === event.target) {
    $(".btn-send-wrapper").removeClass("active");
  }
});

$("#slider-cards").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  margin: 40,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$("#slider-items").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  margin: 40,
  items: 4,
  responsive: {
    0: {
      items: 1,
      margin: 20,
    },
    760: {
      items: 4,
      margin: 40,
    },
  },
});
