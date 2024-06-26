import React from "react";
import style from "./ProductDetails.module.css";
import image from "../../Images/model.jpg";
import Delivery from "./../Delivery/Delivery";
import CallBack from "./../CallBack/CallBack";
import BackToTop from "./../BackToTop/BackToTop";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import AskQuestions from './../AskQuestions/AskQuestions';

export default function ProductDetails() {
  return (
    <>
      <div className="py-5"></div>
      <div className="container my-5 ">
        <div className="row g-3">
          <div className="col-lg-4 text-center">
            {" "}
            <img src={image} alt="model dress" className="w-100" />
          </div>
          <div className="col-lg-8">
            <div className="item">
              <h2>Daniah Black Abaya</h2>
              <h3>1.800,00 EGP</h3>
              <p>size</p>
              <ul className="list-unstyled d-flex gap-3">
                <li className="rounded-circle border p-1">L/XL</li>
                <li className="rounded-circle border p-1">XS/S</li>
                <li className="rounded-circle border p-1">M/L</li>
              </ul>
              <form>
                <div className="buy d-flex align-items-center">
                  <input
                    type="number"
                    placeholder="number of items"
                    className={`${style.input} form-control w-25`}
                    min={0}
                    max={100}
                  />
                  <button className="btn btn-success mx-2 px-4">
                    Add to cart
                  </button>
                  <button className="btn btn-success px-4">Buy now</button>
                </div>
              </form>
              <div className="item p-2 mb-2 mt-3 rounded-3 bg-light shadow-lg">
                <h3>Thouria satin set</h3>
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span className="ms-2">(7 customer reviews)</span>
                </div>
              </div>
              <div className="item my-2 p-2 rounded-3 bg-light shadow-lg ">
                <h4>Color</h4>
                <div className="color my-2 d-flex align-items-center">
                  <div className={`${style.ball}`}></div>
                  <div className={`${style.ball} mx-2`}></div>
                  <div className={`${style.ball}`}></div>
                  <div className={`${style.ball} mx-2`}></div>
                  <div className={`${style.ball}`}></div>
                </div>
              </div>{" "}
              <div className="item my-2 p-3 bg-light rounded-3 shadow-lg pointer">
                <span>
                  <i className="fa-solid fa-heart"></i> Add To WhishList
                </span>
              </div>
              <div className="item my-2 bg-light rounded-3 shadow-lg pointer">
                <CallBack />
              </div>
              <div className="item my-2 bg-light rounded-3 shadow-lg pointer">
                <AskQuestions />
              </div>
              <div className="item my-2 p-2 rounded-3 bg-light shadow-sm">
                <span>
                  <i className="fa-solid fa-truck-fast"></i> Estimated Delivery:
                  Mar 07 – Mar 09
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <hr className={style.hr} />
        <div className="desc my-5">
          <h2>Description</h2>
          <div className="small my-3">
            <p className="my-1">
              Free size satin blouse and 2 sizes of the skirt.
            </p>
            <p className="my-1">Size 1 : S/M</p>
            <p className="my-1">Skirt waist “stretchy “ from 70:85 CM</p>
          </div>
          <div className="small my-3">
            <p className="my-1">
              Size 2 :L/XL <br /> Skirt waist “stretchy “
            </p>
            <p className="my-1">From 80:95 cm</p>
            <p className="my-1">Skirt length of both sizes is 107 CM</p>
          </div>
          <div className="small my-3">
            <p className="my-1">البلوزة مقاس فري سايز ومتاح مقاسين</p>
            <p className="my-1">
              Size 1 : S/M الطول <br />
              ١٠٧
            </p>
            <p className="my-1">الوسط يلبس من ٧٠ الى ٨٥ س</p>
          </div>
        </div>
        <hr className={`${style.hr} my-4`} />
        <div className="small my-3">
          <h3>Additional information</h3>
          <p className="my-1 ms-5">
            <span className="fw-bolder me-2">Color</span> Black, Brown, nude,
            Olive, purple
          </p>
          <p className="my-1 ms-5">
            <span className="fw-bolder me-2">Size</span>
            S/M, L/XL
          </p>
        </div>
        <hr className={`${style.hr} my-4`} />
        <div className="small my-3">
          <h3>Reviews (3)</h3>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="rev">
                  <h4 className="mt-4">Based On 7 Reviews</h4>
                  <p className="my-1">
                    <span className="fw-bold fs-3 text-success">4.86</span>{" "}
                    Overall
                  </p>

                  <div className="container">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <div className="col-sm-6"></div>
                      <div className="col-sm-3">85.71%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="add">
                  <h4>Add Review</h4>
                  <p className="my-1">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <p className="my-1">
                    <span className="me-3">Your rating:</span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>{" "}
                  </p>
                  <label htmlFor="rev">Your Review:</label> *
                  <textarea
                    name="rev"
                    id="rev"
                    className={`${style.area} form-control p-3`}
                    placeholder="add your review here...."
                  ></textarea>
                  <form>
                    <div
                      className={`${style.form} d-flex justify-content-between my-3`}
                    >
                      <div className={`${style.cont}`}>
                        <label htmlFor="name" className="mb-2">
                          Name
                        </label>{" "}
                        *
                        <input
                          id="name"
                          type="text"
                          className={`${style.input} form-control`}
                        />
                      </div>
                      <div className={`${style.cont}`}>
                        <label htmlFor="email" className="mb-2">
                          Email :
                        </label>{" "}
                        *
                        <input
                          className={`${style.input} form-control`}
                          id="email"
                          type="text"
                        />
                      </div>
                    </div>

                    <p className="my-1">
                      Pictures (max size: 3000 kB, max files: 1){" "}
                    </p>
                    <label htmlFor="file" className="text-success fw-bold me-2">
                      Upload Image :
                    </label>
                    <input type="file" id="file" />
                    <br />
                    <br />
                    <div className="d-flex align-align-items-center">
                      <input type="checkbox" name="saveme" id="save" />
                      <label htmlFor="save" className="ms-2 small pointer">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success btn-sm my-3 px-4"
                    >
                      {" "}
                      Sibmit{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <hr className={`${style.hr} my-4`} />
            <div className="allrev my-5">
              <h2 className="text-uppercase text-center fw-bold">
                no reviews yet
              </h2>

              <div className="rev my-5">
                <div className=" comment align-items-center d-flex justify-content-start ">
                  <img className={style.userImage} src={image} alt="user" />
                  <div className="ms-4">
                    <div className="icon">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="my-1">username</p>
                    <p className="my-1">comment</p>
                  </div>
                </div>
                <hr className={style.hr} />
              </div>
              <div className="rev my-5">
                <div className=" comment align-items-center d-flex justify-content-start ">
                  <img className={style.userImage} src={image} alt="user" />
                  <div className="ms-4">
                    <div className="icon">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="my-1">username</p>
                    <p className="my-1">comment</p>
                  </div>
                </div>
                <hr className={style.hr} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Delivery />
      <BackToTop />
    </>
  );
}
