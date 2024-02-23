import React from "react";
import style from "./SearchInput.module.css";
import "animate.css";

export default function SearchInput({searchOpen, setSearchOpen}) {
  return (
    <>
      <div
        // className={`${style.side}`}
        className={`${style.side} ${
          searchOpen ? "visible opacity-1" : "invisible opacity-0"
        }`}
      >
        <div className={`${style.links} bg-dark animate__animated`}>
          <div className="container">
            <div className="d-flex align-items-center justify-content-center">
              <input
                type="search"
                className="form-control p-2 mx-auto"
                placeholder="Search By Name.."
              />
              <i onClick={() => setSearchOpen((search) => !search)} class="fa-regular fa-circle-xmark text-white ms-3 pointer fs-3"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
