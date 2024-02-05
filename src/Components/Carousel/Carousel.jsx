import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img1 from "../../Images/fff.jpg";

export default function Carousel() {
  const options = {
    margin: 20,
    responsiveClass: true,
    loop: true,
    // nav: true,
    // dots: false,
    autoplay: false,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      550: {
        items: 2,
      },
      700: {
        items: 3,
      },
      850: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <>
      <div className="container">
        <OwlCarousel {...options}>
          <div className="item mt-5 pt-5 rounded rounded-3 overflow-hidden">
            <img src={img1} className="w-100 rounded rounded-3" alt="img" />
          </div>
          <div className="item mt-5 pt-5 rounded rounded-3 overflow-hidden">
            <img src={img1} className="w-100 rounded rounded-3" alt="img" />
          </div>
          <div className="item mt-5 pt-5 rounded rounded-3 overflow-hidden">
            <img src={img1} className="w-100 rounded rounded-3" alt="img" />
          </div>
          <div className="item mt-5 pt-5 rounded rounded-3 overflow-hidden">
            <img src={img1} className="w-100 rounded rounded-3" alt="img" />
          </div>
          <div className="item mt-5 pt-5 rounded rounded-3 overflow-hidden">
            <img src={img1} className="w-100 rounded rounded-3" alt="img" />
          </div>
          <div className="item mt-5 pt-5 rounded rounded-3 overflow-hidden">
            <img src={img1} className="w-100 rounded rounded-3" alt="img" />
          </div>
          <div className="item mt-5 pt-5 rounded rounded-3 overflow-hidden">
            <img src={img1} className="w-100 rounded rounded-3" alt="img" />
          </div>
          <div className="item mt-5 pt-5 rounded rounded-3 overflow-hidden">
            <img src={img1} className="w-100 rounded rounded-3" alt="img" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}
