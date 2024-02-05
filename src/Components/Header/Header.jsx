import React from "react";
import style from "./Header.module.css";

export default function Header() {
  return (
    <>
      <nav
        className={`bg-color p-3 text-capitalize fixed-top light-color shadowx`}
      >
        <div className="container d-flex justify-content-between align-items-center ">
          <div className="bar small">
            <i className="fa-solid fa-bars fs-5 pointer small"></i>
          </div>
          <div className="logo">
            <h2 className="my-0 pointer fw-bold text-uppercase">zaha</h2>
          </div>
          <div className="icons">
            <i className="fa-solid fa-magnifying-glass small me-3  pointer"></i>
            <i className="fa-solid fa-cart-arrow-down small  pointer"></i>
          </div>
        </div>
      </nav>
    </>
  );
}
