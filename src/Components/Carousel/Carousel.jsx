import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img1 from "../../Images/fff.jpg";
import style from "./Carousel.module.css";

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
      750: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };
  return (
    <>
      <div className="container">
        <div className="mt-5"></div>
        <OwlCarousel {...options}>
          <div
            className={`${style.item} mt-5 rounded rounded-3 overflow-hidden position-relative`}
          >
            <img src={img1} className="w-100" alt="img" />
            <div
              className={`${style.layer} border-0 d-flex justify-content-center align-items-center`}
            >
              <div className="btn btn-primary text-capitalize text-white">
                Veiw More
              </div>
            </div>
          </div>
          <div
            className={`${style.item} mt-5 rounded rounded-3 overflow-hidden position-relative`}
          >
            <img src={img1} className="w-100" alt="img" />
            <div
              className={`${style.layer} border-0 d-flex justify-content-center align-items-center`}
            >
              <div className="btn btn-primary text-capitalize text-white">
                Veiw More
              </div>
            </div>
          </div>
          <div
            className={`${style.item} mt-5 rounded rounded-3 overflow-hidden position-relative`}
          >
            <img src={img1} className="w-100" alt="img" />
            <div
              className={`${style.layer} border-0 d-flex justify-content-center align-items-center`}
            >
              <div className="btn btn-primary text-capitalize text-white">
                Veiw More
              </div>
            </div>
          </div>
          <div
            className={`${style.item} mt-5 rounded rounded-3 overflow-hidden position-relative`}
          >
            <img src={img1} className="w-100" alt="img" />
            <div
              className={`${style.layer} border-0 d-flex justify-content-center align-items-center`}
            >
              <div className="btn btn-primary text-capitalize text-white">
                Veiw More
              </div>
            </div>
          </div>
          <div
            className={`${style.item} mt-5 rounded rounded-3 overflow-hidden position-relative`}
          >
            <img src={img1} className="w-100" alt="img" />
            <div
              className={`${style.layer} border-0 d-flex justify-content-center align-items-center`}
            >
              <div className="btn btn-primary text-capitalize text-white">
                Veiw More
              </div>
            </div>
          </div>
          <div
            className={`${style.item} mt-5 rounded rounded-3 overflow-hidden position-relative`}
          >
            <img src={img1} className="w-100" alt="img" />
            <div
              className={`${style.layer} border-0 d-flex justify-content-center align-items-center`}
            >
              <div className="btn btn-primary text-capitalize text-white">
                Veiw More
              </div>
            </div>
          </div>
          <div
            className={`${style.item} mt-5 rounded rounded-3 overflow-hidden position-relative`}
          >
            <img src={img1} className="w-100" alt="img" />
            <div
              className={`${style.layer} border-0 d-flex justify-content-center align-items-center`}
            >
              <div className="btn btn-primary text-capitalize text-white">
                Veiw More
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}
