import "./Home.css";
import React from "react";
import Navbar from '../Navbar/index';
import Carousel from '../CarouselComp/index'
import CardComp from '../CardComp/index'
import TextC from '../TextComp/index'
import Reviews from '../Reviews/index'
import Footer from '../Footer/index'

function template() {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      <TextC />
      <CardComp />
      <Reviews />
      <Footer />
    </div>
  );
};

export default template;
