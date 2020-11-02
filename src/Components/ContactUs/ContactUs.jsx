import "./ContactUs.css";
import React from "react";
import Footer from '../Footer/index'
import Navbar from '../Navbar/index';

function template() {
  return (
    <div className="contact-us">
    <Navbar />
      <section id="sec1">
        <div class="divcover">
        <p class="display-1 font-weight-bold">Contact Us</p>
        <p class="font-size-bold h3 text-primary"><label class="text-white">EMAIL:</label> HQServices@gmail.com</p>
        </div>
        

      </section>
      <Footer />
    </div>
  );
};

export default template;
