import React from 'react';
import Slider from 'react-slick';

const SideSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div>
          <img src="/Posters.jpg" alt="Movie 1" /> 
        </div>
        <div>
          <img src="/images.jpeg" alt="Movie 2" /> 
        </div>
        <div>
          <img src="/3831a0700d61da9448ee688619062b91.jpg" alt="Movie 3" /> 
        </div>
      </Slider>
    </div>
  );
};

export default SideSlideshow;
