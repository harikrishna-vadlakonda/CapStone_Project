import "./FeaturesComp.css";
import React from "react";

function template() {
  return (
    <div className="features-comp">
    <div className="container-fluid text-center">
     <div className="row text-white">
        <div className="col-sm-4 bg-primary " >
                  <span className="glyphicon glyphicon-heart logo-small"></span>
      <h4>TRANSPARENCY IN PRICE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    </div>
  
    <div className="col-sm-4 bg-secondary">
      <span className="glyphicon glyphicon-leaf logo-small"></span>
      <h4>HIGH QUALITY SERVICES</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4 bg-success">
      <span className="glyphicon glyphicon-certificate logo-small"></span>
      <h4>CERTIFIED PROFESSIONALS</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
     </div>

    </div>
  );
};

export default template;
