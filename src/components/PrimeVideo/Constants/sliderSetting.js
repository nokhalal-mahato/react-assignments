let sliderSettings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  infinite: true,
  responsive: [
    {
      breakpoint: 1114,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default sliderSettings;