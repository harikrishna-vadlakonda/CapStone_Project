/* eslint-disable jsx-a11y/anchor-is-valid */
import "./CityComp.css";
import React from "react";
import {Link} from 'react-router-dom'


function template() {
  return (
    <div className="city-comp ">
      
     <div className="wrapper d-flex flex-column align-items-center justify-content-center">


     <p className="display-3 font-weight-bold text-white">Where Do You Need A Service</p>
           <div class="dropdown show">
       
  <a class="btn btn-outline-white bg-dark font-weight-bold text-white  btn-lg dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select A City
  </a> 

  <div class="dropdown-menu bg-dark text-white" aria-labelledby="dropdownMenuLink">
        
  
    <Link className="dropdown-item c2 text-white" to="/homelogin">Warangal</Link>
    <Link className="dropdown-item c2 text-white" to="/homelogin">Karimnagar</Link>
    <Link className="dropdown-item c2 text-white" to="/homelogin">Nizamabad</Link>
  </div>
</div>
           </div>
          
         </div>
     
  );
};

export default template;
