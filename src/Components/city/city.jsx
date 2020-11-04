import "./City.css";
import React from "react";
import Features from '../Features/index'
import Offers from '../Offers/index'
import Statistics from '../Satistics/index'
import Footer from '../Footer/index'



function template() {
  return (
    <div className="city">
      <div class="container"> 
          <h1>High Quality Services On Demand </h1>
          
      <div class="dropdown show">
        <h2>Where do you need a service</h2>
  <a class="btn btn-secondary dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select A City
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="/#">Warangal</a>
    <a class="dropdown-item" href="/#">Karimnagar</a>
    <a class="dropdown-item" href="/#">Nizamabad</a>
  </div>
</div>
</div>
<Features/>
<Offers/> <br/><br/>
<Statistics/>
<Footer/>
    </div>
  
  );
};

export default template;
