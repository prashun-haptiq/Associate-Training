import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <div className="container">

<Slider {...settings}>
     <div className="slide">
  <img src="images/logo192.png" alt="Banner" />
</div>
<div className="slide">
  <img src="images/logo192.png" alt="Banner" />
</div>
<div className="slide">
  <img src="" alt="Banner" />
</div>
<div className="slide">
  <img src="" alt="Banner" />
</div>

    </Slider>

    </div>
    
  );
}