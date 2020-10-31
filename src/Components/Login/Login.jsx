import "./Login.css";
import React from "react";

function template() {
  return (
    <div className="login container   mt-1">
      <div className="row mx-auto">
        <div className="col-lg-12">

        
    
     <form>
  <div className="form-group ">
    {/* <label for="number">Mobile Number</label> */}
    <input style={{width:"30%"}}  type="number" className="form-control" placeholder="Enter Mobile Number" id="mobilenumber" />
  </div>
  <div className="form-group ">
    {/* <label for="pwd">Password</label> */}
    <input type="password" style={{width:"30%"}} className="form-control" placeholder="Enter password" id="password" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
      </div>
    </div>
  );
};

export default template;
