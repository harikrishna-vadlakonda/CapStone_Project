import "./Home.css";
import React from "react";
import Navbar from '../Navbar/index';
import Carousel from '../CarouselComp/index'
import CardComp from '../CardComp/index'

function template() {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      <CardComp />
    </div>
  );
};

export default template;
