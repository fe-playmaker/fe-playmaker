export const sliderSettings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  speed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
  ],
}
