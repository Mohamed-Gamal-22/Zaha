import React, { useEffect, useState } from "react";
import style from "./NavsAndTabs.module.css";
import img from "../../Images/fff.jpg";
import axios from "axios";

export default function NavsAndTabs() {
  const [product, setProduct] = useState([]);
  async function getAllProducts() {
    const { data } = await axios.get(
      `https://www.zahascarves.com/api/userproduct/all`,
      {
        headers: {
          Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
        },
      }
    );
    setProduct(data.products);
    console.log(data.products);
  }


  useEffect(() => {
    getAllProducts();
  }, []);

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
        <div className="tab-content text-capitalize" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div className="container my-5">
              <div className="row g-3">
                {product.length > 0
                  ? product.map((product) => (
                      <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                        <div className="mycard rounded rounded-3 overflow-hidden">
                          <div className={`${style.myimg}`}>
                            <img src={product.images[1]} height={200} className="w-100 object-fit-cover" alt="img" />
                            <div className={`${style.layer}`}>
                              {product.quantity == 0 ? <div className={`${style.sold}`}>sold out</div> : ""}
                              <span className={`${style.eye}`}>
                                <i className={` fa-solid fa-eye`}></i>
                                <small className={`${style.small}`}>
                                  overveiw
                                </small>
                              </span>
                              <div className={`${style.shopCart} pointer`}>
                                <i className="fa-solid fa-cart-plus"></i>
                              </div>
                              <span className={style.title}>{product.desc} description</span>
                            </div>
                          </div>
                          <div className={`${style.content}`}>
                            <div className="left">
                              <h6 className="small my-2">{product.name}</h6>
                              <p className="small my-0">Material : {product.material}</p>
                              <p className="small my-0">Size : {product.size}</p>
                              <ul className="p-0 my-2">
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star"></i>
                              </ul>
                              <p className="small">
                                {product.price} LE
                              </p>
                            </div>
                            <div className={`${style.right}`}>
                              <div
                                className={`bg-danger ${style.circle}`}
                              ></div>
                              <div className={`bg-info ${style.circle}`}></div>
                              <div
                                className={`bg-success ${style.circle}`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="coats"
            role="tabpanel"
            aria-labelledby="coats-tab"
          >
            <div className="container my-5">
              <div className="row g-3">
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="dresses"
            role="tabpanel"
            aria-labelledby="dresses-tab"
          >
            <div className="container my-5">
              <div className="row g-3">
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="sets"
            role="tabpanel"
            aria-labelledby="sets-tab"
          >
            <div className="container my-5">
              <div className="row g-3">
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <div className={`${style.shopCart} pointer`}>
                          <i className="fa-solid fa-cart-plus"></i>
                        </div>
                        <span className={style.title}>this is title</span>
                      </div>
                    </div>
                    <div className={`${style.content}`}>
                      <div className="left">
                        <h6 className="small my-2">trench coat</h6>
                        <ul className="p-0 my-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star"></i>
                        </ul>
                        <p className="small">1.400,00 EGP – 1.700,00 EGP</p>
                      </div>
                      <div className={`${style.right}`}>
                        <div className={`bg-danger ${style.circle}`}></div>
                        <div className={`bg-info ${style.circle}`}></div>
                        <div className={`bg-success ${style.circle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
