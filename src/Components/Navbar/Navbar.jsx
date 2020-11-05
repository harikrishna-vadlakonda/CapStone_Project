/* eslint-disable jsx-a11y/alt-text */
import "./Navbar.css";
import React from "react";
import Logo from '../images/Logo2-cropped.jpg'
import {Link} from 'react-router-dom'

function template() {
  return (
    <div className="second">
    
     <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
           <img src={Logo} width="30px" height="30px" class="mx-1" />
             <Link to="/" className="navbar-brand font-weight-bold">HQServices</Link>
            {/* <button className="btn-toggler" data-toggle="collapse" data-target="#nav1">
              <span className="btn-toggler-icon"></span>
            </button> */}
           <div className=" div1 collapse navbar-collapse" id="nav1">
             <ul className="navbar-nav font-weight-bold ml-auto">
             <li className="nav-item mx-2 reg"><Link to="/registerasprofessional" class=" reg nav-link"><i class="fas fa-user-tie "></i>&nbsp;Register As A Professional</Link> </li>
               <li className="nav-item mx-2"><Link to="/" class="nav-link">Home</Link> </li>
            
               <li className="nav-item mx-2 "><Link to="/contact" class="nav-link">ContactUs</Link> </li>
               <li className="nav-item mx-2 "><Link to="/about" class="nav-link">AboutUs</Link> </li>
               <li className="nav-item mx-1"><Link to="/login" class="nav-link">Login</Link> </li>
            
            <li className="nav-item mx-1"><Link to="/register" class="nav-link">Register</Link> </li>
               
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
