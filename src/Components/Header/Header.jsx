import React, { useState } from "react";
import style from "./Header.module.css";
import SideNav from "./../SideNav/SideNav";
import SearchInput from "../SearchInput/SearchInput";
import Cart from "./../Cart/Cart";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClidcked] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleClick = () => {
    setClidcked((c) => !c);
  };

  return (
    <>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <SearchInput searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <nav
        className={`bg-color p-3 text-capitalize fixed-top light-color shadowx`}
      >
        <div className="container d-flex justify-content-between align-items-center ">
          <div
            className="bar small"
            onClick={() => {
              setIsOpen(true);
              handleClick();
            }}
          >
            <i className="fa-solid fa-bars fs-5 pointer small"></i>
          </div>
          <div className="logo">
            <h2 className="my-0 pointer fw-bold text-uppercase">zaha</h2>
          </div>
          <div className="icons">
            <i
              onClick={() => setSearchOpen((search) => !search)}
              className="fa-solid fa-magnifying-glass small me-3  pointer"
            ></i>
            <i
              onClick={() => setCartOpen((cart) => !cart)}
              className="fa-solid fa-cart-arrow-down small  pointer"
            ></i>
          </div>
        </div>
      </nav>
      <SideNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        clicked={clicked}
        setClidcked={setClidcked}
      />
    </>
  );
}
