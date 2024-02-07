import React from "react";
import style from "./Home.module.css";
import Carousel from "../Carousel/Carousel.jsx";
import NavsAndTabs from "../NavsAndTabs/NavsAndTabs.jsx";

export default function Home() {
  return (
    <>
      <Carousel />
      <NavsAndTabs />
    </>
  );
}
