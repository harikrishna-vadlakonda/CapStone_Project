import "./OffersComp.css";
import React from "react";

import PlumberM from '../images/Water.jpg'
import Carpenter from '../images/carpennter.jpg'
import BeautyS from '../images/beauticiannnnn.jpg';
import Electrician from '../images/Electricityyy.jpg'

function template() {
  return (
    <div className="offers-comp">
   <div className="container mt-3">
      <div className="row">
        <div className="col-sm-3">
          <div className="card custCard h-20">
            <div className="card-header p-0">
            <img src={PlumberM} alt="plumber" width="100%" height="300px" />
            </div>

            <div className="card-body">
               <h4>Water Leakages</h4>
             <p class=" text-muted">Up to 50% off</p>
               <button class="btn btn-primary btn-rounded btn-md">Explore</button>
            </div>

          </div>
        </div>


        <div className="col-sm-3">
          <div className="card custCard">
            <div className="card-header m-0 p-0">
            <img src={Electrician} alt="plumber" width="100%" height="300px" />
            </div>
            <div className="card-body">
               <h4>Electricity Breakdown</h4>
               <p class=" text-muted">Up to 30% off</p>
               <button class="btn btn-primary btn-rounded btn-md">Explore</button>
            </div>
          </div>
        </div>


        <div className="col-sm-3">
          <div className="card custCard">
            <div className="card-header m-0 p-0">
            <img src={Carpenter} alt="plumber" width="100%" height="300px" />
            </div>
            <div className="card-body">
               <h4>New Furniture making</h4>
               <p class=" text-muted">Up to 60% off</p>
               <button class="btn btn-primary btn-rounded btn-md">Explore</button>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card custCard">
            <div className="card-header m-0 p-0">
            <img src={BeautyS} alt="plumber" width="100%" height="300px" />
            </div>
            <div className="card-body">
               <h4  class="card-title">Facial And Hair Services</h4>
               <p class=" text-muted">Up to 40% off</p>
               <button class="btn btn-primary btn-rounded btn-md">Explore</button>
            </div>
          </div>
        </div>
      </div>




      
    </div>
    </div>
  );
};

export default template;
