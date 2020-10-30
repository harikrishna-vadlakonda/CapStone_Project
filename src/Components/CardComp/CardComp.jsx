import "./CardComp.css";
import React from "react";
import PlumberM from '../images/PlumberMeduim.jpg'
import Carpenter from '../images/CarpenterMedium.jpg'
import BeautyS from '../images/BeautyMedium.jpg';
import Electrician from '../images/ElectricianMedium1.jpeg'

function template() {
  return (
    <div className="card-comp">
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3">
            <div className="card custCard h-20">
              <div className="card-header p-0">
              <img src={PlumberM} alt="plumber" width="100%" height="300px" />
              </div>

              <div className="card-body">
                 <h4>Plumber Services</h4>
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
                 <h4>Electrician Services</h4>
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
                 <h4>Carpenter Services</h4>
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
                 <h4  class="card-title">Beauty Services</h4>
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
