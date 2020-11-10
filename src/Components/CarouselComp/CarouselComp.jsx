/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./CarouselComp.css";
import React from "react";

import BeautyS2 from '../images/CarouselImages/BeautyServices.jpg'
import ElectricalC from '../images/CarouselImages/Electrical.jpg'
import CarpenterS from '../images/Carpenter services/pexels-pixabay-221027.jpg'
import CleaningS from '../images/Cleaning services/pexels-inline-media-5229639.jpg';
import TutorialS from '../images/CarouselImages/Tutorials.jpg';




function template() {
  return (
    <div >
     <div class="container  mt-3">
       
       <div id="carousel" class="carousel custmCarousel slide carousel-fade" data-interval="4000" data-target="carousel" data-ride="carousel">
           <ul class="carousel-indicators">
               <li data-target="#carousel "  data-slide-to="0" class="active"></li>
               <li data-target="#carousel" data-slide-to="1"></li>
               <li data-target="#carousel" data-slide-to="2"></li>
               <li data-target="#carousel" data-slide-to="3"></li>
               <li data-target="#carousel" data-slide-to="4"></li>
           </ul>
          <div class="carousel-inner">

              <div className="carousel-item s1 active">
              <img src={CleaningS} height="500px" width="1400px"  />
              <div class="carousel-caption text-left d-none d-md-block ">
        <h5 className=" display-4 animated  jackInTheBox slow delay-1s font-weight-bold t">CLEANING SERVICE</h5>
        <p className="h4 animated  zoomIn slow delay-2s text-blue-gradient">We Disappear All The Dirt.Leave your mess to us. Clean house happy house. Committed to extreme cleanliness.</p>
      </div>
             
              </div>
              <div class="carousel-item">
                       <img src={TutorialS} height="500px" width="1400px" />
                       <div class="carousel-caption text-left d-none d-md-block ">
        <h5 className=" display-4 animated  jackInTheBox slow delay-1s font-weight-bold t">TUTORIAL SERVICE</h5>
        <p className="h4 animated  zoomIn slow delay-2s text-blue-gradient">The Tutoring Center – Your child’s future begins here. Helping students reach their potential</p>
      </div>
      </div>

              <div class="carousel-item">
               <img src={BeautyS2} height="500px" width="1400px" />
               <div class="carousel-caption text-left d-none d-md-block ">
        <h5 className=" display-4 animated  jackInTheBox slow delay-1s font-weight-bold t">BEAUTY SERVICE</h5>
        <p className="h4 animated  zoomIn slow delay-2s text-blue-gradient">A Beautiful gift of God. A breath of fresh hair. A cut above the rest.</p>
      </div>
               </div>
               <div class="carousel-item ">
                   <img src={ElectricalC} height="500px" width="1400px" />
                   <div class="carousel-caption text-left d-none d-md-block ">
        <h5 className=" display-4 animated  jackInTheBox slow delay-1s font-weight-bold t">ELECTRICAL SERVICE</h5>
        <p className="h4 animated  zoomIn slow delay-2s text-blue-gradient">We are sparkling good at our work. Services always on time. One-stop shop for electrical solutions.</p>
      </div>
                   </div>
                   <div class="carousel-item">
                       <img src={CarpenterS} height="500px" width="1400px" />
                       <div class="carousel-caption text-left d-none d-md-block ">
        <h5 className=" display-4 animated  jackInTheBox slow delay-1s font-weight-bold t">CARPENTOR SERVICE</h5>
        <p className="h4 animated  zoomIn slow delay-2s text-blue-gradient">Building services for business. Specialist in construction. A complete building service</p>
      </div>
     
        
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
