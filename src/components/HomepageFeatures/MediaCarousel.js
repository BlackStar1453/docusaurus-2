import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MediaCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Slider {...settings}>
        <div>
          <h3>视频演示</h3>
          <img
            style={{ display: "block", margin: "0 auto" }}
            width="800"
            height="400"
            src="/img/image.png"
            alt="Image 1"
          />
        </div>
        <div>
          <iframe
            src="https://afdian.net/leaflet?slug=afdian"
            width="640"
            scrolling="no"
            height="200"
            frameborder="0"
          ></iframe>
        </div>
      </Slider>
    </div>
  );
}

export default MediaCarousel;
