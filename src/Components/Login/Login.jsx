/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Login.css";
import React from "react";
import Navbar from '../Navbar/index';

function template() {
  
  return (
   
    
    <div>
      
      <Navbar />
    
    <div className="login animated lightSpeedIn slow   mx-auto my-5">
     
  
        
    
     <form>
     <p className="h3 font-weight-bold mt-1 mb-3 text-center">Login Form</p>
  <div className="form-group ">
    {/* <label for="number">Mobile Number</label> */}
    <input   type="number" className="form-control" placeholder="Enter Mobile Number" id="mobilenumber" 
    onChange={(e)=>{this.setState({
      ...this.state,
      "mobilenumber":e.target.value
    })}} />
  </div>
  <div className="form-group ">
    {/* <label for="pwd">Password</label> */}
    <input type="password"  className="form-control" placeholder="Enter password" 
    id="password"
    onChange={(e)=>{this.setState({
      ...this.state,
      "password":e.target.value
    })}}
    />
  </div>

  <div class="d-flex justify-content-around">
        <div>
           
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
           
            <a href="">Forgot password?</a>
        </div>
    </div>
  
  <button type="button" className="btn mt-2 btn-outline-white font-weight-bold" onClick={this.getData}>Login</button>
  <button type="submit" className="btn btn-outline-white font-weight-bold">Register</button>
</form>
</div>

     </div>
  
  );
};

export default template;
