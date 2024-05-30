import React, { useRef } from "react";
import Slider from "react-slick";
import Slidercard from "./Slidercard";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function AutoPlayMethods() {
  let sliderRef = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <div className="slider-container p-8">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div>
            <Slidercard/>
        </div>
        <div>
        <Slidercard/>
        </div>
        <div>
        <Slidercard/>
        </div>
        <div>
        <Slidercard/>
        </div>
        <div>
        <Slidercard/>
        </div>
        <div>
        <Slidercard/>
        </div>
      </Slider>
    </div>
  );
}
export default AutoPlayMethods;
