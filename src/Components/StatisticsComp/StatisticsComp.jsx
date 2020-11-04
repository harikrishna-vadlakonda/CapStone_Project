import "./StatisticsComp.css";
import React from "react";

function template() {
  return (
    <div className="statistics-comp">
    <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">50,000 Customers Served</h5>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">5000 Verified Professionals</h5>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">50+ live Services</h5>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default template;
