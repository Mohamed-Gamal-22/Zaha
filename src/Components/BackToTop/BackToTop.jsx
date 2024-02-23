import React, { useState, useEffect } from "react";
import style from "./BackToTop.module.css";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  function back() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    // component did mount
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // component will unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={() => back()}
      className={`${style.back} ${show ? "opacity-100" : "opacity-0"}`}
    >
      <i className="fa-solid fa-angle-up"></i>
    </div>
  );
}
