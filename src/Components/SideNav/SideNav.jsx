import React, { useEffect, useState } from "react";
import style from "./SideNav.module.css";
import "animate.css";

export default function SideNav({ isOpen, setIsOpen, clicked, setClidcked }) {
  return (
    <>
      <div
        className={`${style.side} ${
          isOpen ? "visible opacity-1" : "invisible opacity-0"
        }`}
      >
        <div
          className={`${style.links} animate__animated ${
            clicked
              ? "animate__fadeInLeft delay-2s"
              : "animate__fadeOutLeft delay-2s"
          }`}
        >
          <h1 className="text-center text-uppercase">Zaha</h1>
          <ul className="list-unstyled">
            <li>home</li>
            <li>shop</li>
            <li>dress</li>
            <li>sets</li>
            <li>coats</li>
            <li></li>
          </ul>
          <div
            className={`${style.toggle} test`}
            onClick={() => {
              setIsOpen(false);
              setClidcked((c) => !c);
            }}
          >
            <i className="fa-solid fa-angle-left test"></i>
          </div>
        </div>
      </div>
    </>
  );
}
