import "./Login.css";
import React from "react";

function template() {
  return (
    <div className="login animated lightSpeedIn slow   mx-auto my-5">
     

        
    
     <form>
     <p className="h3 font-weight-bold mt-1 mb-3 text-center">Login Form</p>
  <div className="form-group ">
    {/* <label for="number">Mobile Number</label> */}
    <input   type="number" className="form-control" placeholder="Enter Mobile Number" id="mobilenumber" />
  </div>
  <div className="form-group ">
    {/* <label for="pwd">Password</label> */}
    <input type="password"  className="form-control" placeholder="Enter password" id="password" />
  </div>
  
  <button type="submit" className="btn btn-outline-white font-weight-bold">Login</button>
  <button type="submit" className="btn btn-outline-white font-weight-bold">Register</button>
</form>
</div>
     
  );
};

export default template;
