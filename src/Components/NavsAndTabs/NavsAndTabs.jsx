import React from "react";
import style from "./NavsAndTabs.module.css";
import img from "../../Images/fff.jpg";

export default function NavsAndTabs() {
  return (
    <>
      <div className="mt-5">
        <ul className={`nav ${style.tabs}`} id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link tabLink ${style.link} active `}
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all"
              type="button"
              role="tab"
              aria-controls="all"
              aria-selected="true"
            >
              all
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link tabLink ${style.link}`}
              id="coats-tab"
              data-bs-toggle="tab"
              data-bs-target="#coats"
              type="button"
              role="tab"
              aria-controls="coats"
              aria-selected="false"
            >
              Coats
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link tabLink ${style.link}`}
              id="dresses-tab"
              data-bs-toggle="tab"
              data-bs-target="#dresses"
              type="button"
              role="tab"
              aria-controls="dresses"
              aria-selected="false"
            >
              Dresses
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link tabLink ${style.link}`}
              id="sets-tab"
              data-bs-toggle="tab"
              data-bs-target="#sets"
              type="button"
              role="tab"
              aria-controls="sets"
              aria-selected="false"
            >
              Sets
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div className="container my-5">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="mycard rounded rounded-3 overflow-hidden">
                    <div className={`${style.myimg}`}>
                      <img src={img} className="w-100" alt="img" />
                      <div className={`${style.layer}`}>
                        <div className={`${style.sold}`}>sold out</div>
                        <span className={`${style.eye}`}>
                          <i className={` fa-solid fa-eye`}></i>
                          <small className={`${style.small}`}>overveiw</small>
                        </span>
                        <i className="fa-solid fa-cart-plus"></i>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className="contnet">
                      <div className="left">
                        <h6>trench coat</h6>
                        <ul>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p>1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className="right">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="coats"
            role="tabpanel"
            aria-labelledby="coats-tab"
          >
            Coats Show
          </div>
          <div
            className="tab-pane fade"
            id="dresses"
            role="tabpanel"
            aria-labelledby="dresses-tab"
          >
            Dresses show
          </div>
          <div
            className="tab-pane fade"
            id="sets"
            role="tabpanel"
            aria-labelledby="sets-tab"
          >
            Sets show
          </div>
        </div>
      </div>
    </>
  );
}
