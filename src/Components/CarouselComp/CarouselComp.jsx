/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./CarouselComp.css";
import React from "react";

import BeautyS2 from '../images/Beauty services/pexels-delbeautybox-853427.jpg'
import ElectricalC from '../images/Beauty services/pexels-anderson-guerra-1115128.jpg'

import PlumberC1 from '../images/Carpenter services/pexels-pixabay-209235.jpg';
import PaintingC1 from '../images/Study Services/pexels-thisisengineering-3862130.jpg';



function template() {
  return (
    <div >
     <div class="container  mt-3">
       
       <div  class="carousel custmCarousel slide carousel-fade" data-interval="2000" data-target="carousel" data-ride="carousel">
           <ul class="carousel-indicators">
               <li data-target="#carousel"></li>
               <li data-target="#carousel"></li>
               <li></li>
               <li></li>
           </ul>
          <div class="carousel-inner">
              <div class="carousel-item active">
              <img src={PaintingC1} height="500px" width="1400px" />
             
             
              </div>

              <div class="carousel-item">
               <img src={BeautyS2} height="500px" width="1400px" />
               
               </div>
               <div class="carousel-item ">
                   <img src={ElectricalC} height="500px" width="1400px" />
                   <div class="carousel-caption animated heartbeat  ">
                       
        
                      </div>
                   </div>
                   <div class="carousel-item">
                       <img src={PlumberC1} height="500px" width="1400px" />
        
                       </div>


          </div>
           <a href="#" class="carousel-control-prev">
               <span class="carousel-control-prev-icon"></span>
           </a>
           <a href="#" class="carousel-control-next">
               <span class="carousel-control-next-icon"></span>
           </a>



       </div>




   </div>
    </div>
  );
};

export default template;
