import "./Navbar.css";
import React from "react";

function template() {
  return (
    <div className="second">
     <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
         
             <a href="/" className="navbar-brand font-weight-bold">QAServices</a>
           <div className=" div1 collapse navbar-collapse">
             <ul className="navbar-nav font-weight-bold ml-auto">
               <li className="nav-item mx-2"><a a href="/" class="nav-link">Home</a> </li>
            
               <li className="nav-item mx-2 "><a href="/contact" class="nav-link">ContactUs</a> </li>
               <li className="nav-item mx-2 "><a href="/about" class="nav-link">AboutUs</a> </li>
               <li className="nav-item mx-1"><a href="/login" class="nav-link">Login</a> </li>
            
            <li className="nav-item mx-1"><a href="/register" class="nav-link">Register</a> </li>
               
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
