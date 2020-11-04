/* eslint-disable jsx-a11y/alt-text */
import "./NavbarAfterLoginIn.css";
import React from "react";
import Logo from '../images/Logo2-cropped.jpg'
import {Link} from 'react-router-dom'

function template(props) {
  return (
    <div className="navbar-after-login-in">
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
           <img src={Logo} width="30px" height="30px" class="mx-1" />
             <Link to="/" className="navbar-brand font-weight-bold">HQServices</Link>
            {/* <button className="btn-toggler" data-toggle="collapse" data-target="#nav1">
              <span className="btn-toggler-icon"></span>
            </button> */}
           <div className=" div1 collapse navbar-collapse" id="nav1">
             <ul className="navbar-nav font-weight-bold ml-auto">
             {/* <li className="nav-item mx-2"><Link to='/specific' class="nav-link">Specific</Link> </li> */}
             <li className="nav-item mx-2"><Link to='/homelogin' class="nav-link">Home</Link> </li>
             <li className="nav-item mx-2 dropdown" ><Link data-toggle="dropdown" data-target="#dropdownservices" to='#' class="nav-link">Services
               <i className="fa fa-caret-down"></i>
             
             </Link> 
              
               <div className="dropdown-menu bg-dark" id="dropdownservices">
               <li className="nav-item mx-2"><Link to='/electricalservice' class="nav-link">ElectricalService</Link> </li>
            
            <li className="nav-item mx-2 "><Link to="/beautyservice" class="nav-link">BeautyService</Link> </li>
            <li className="nav-item mx-2 "><Link to="/cleaningservice" class="nav-link">CleaningService</Link> </li>
            <li className="nav-item mx-1"><Link to="/carpenterservice" class="nav-link">CarpentorService</Link> </li> 
            <li className="nav-item mx-1"><Link to="/tutorialservice" class="nav-link">TutorialService</Link> </li>    
               </div>
             
             </li>
               {/* <li className="nav-item mx-2"><Link to='/electricalservice' class="nav-link">ElectricalService</Link> </li>
            
               <li className="nav-item mx-2 "><Link to="/beautyservice" class="nav-link">BeautyService</Link> </li>
               <li className="nav-item mx-2 "><Link to="/cleaningservice" class="nav-link">CleaningService</Link> </li>
               <li className="nav-item mx-1"><Link to="/carpenterservice" class="nav-link">CarpentorService</Link> </li> */}
               <li className="nav-item mx-1"><Link to="/profile" class="nav-link">Profile</Link> </li>
            <li className="nav-item mx-1"><Link to="/logout" class="nav-link">Logout</Link> </li>
               
             </ul>
             {/* <ul className="navbar-nav font-weight-bold ml-auto ">
               <li className="nav-item mx-1"><a class="nav-link">Login</a> </li>
            
               <li className="nav-item mx-1"><a class="nav-link">Register</a> </li>
              
               
             </ul> */}
           </div>
     </nav>
    
    </div>
  );
};

export default template;
