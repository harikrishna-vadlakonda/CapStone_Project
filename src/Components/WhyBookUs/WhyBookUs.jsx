import "./WhyBookUs.css";
import React from "react";

function template() {
  return (
    <div className="why-book-us">
      <div className="container my-5">
        <div className="row mb-4 ">
          <p className="mx-auto  h1">How it works?</p>
        </div>
        <div className="row">
          <div className="card-deck">
          <div className="col-sm-3">
            <div className="card s ">
              <div className="card-body  text-white">
              <i class="fab fa-servicestack fa-2x"></i>
                <p className="h5">Select Service</p>
                <p className="  lead">Select Your Required Service.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card s ">
              <div className="card-body text-white">
              <i class="fas fa-user-clock fa-2x"></i>
                <p className="h5">Select Time & Date</p>
                <p className="  lead">Select your own Convinent Time</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card s ">
              <div className="card-body text-white">
              <i class="fas fa-credit-card fa-2x"></i>
                <p className="h5">Go Cash Less</p>
                <p className="  lead">Use Your Debit or Credit Card</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card s ">
              <div className="card-body text-white">
              <i class="fas fa-couch fa-2x"></i>
                <p className="h5">Time to Relax</p>
                <p className="  lead">We shall be at your Service</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default template;
