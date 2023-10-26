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
            width="800"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Slider>
    </div>
  );
}

export default MediaCarousel;
