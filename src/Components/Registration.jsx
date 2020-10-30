import "./Registration.css";
import React from "react";

function template() {
  return (

<div class="container text-center text-center">
            <form class="form-horizontal" role="form"></form>
              <center>  <h2>Registration Form</h2>  </center>
			    
				
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">First Name</label>
                    <div class="col-sm-4">
                        <input type="text" id="firstName" placeholder="Full Name" class="form-control" autofocus>
                        </input>
                    </div>
                </div>
				<div class="form-group">
                    <label for="lastName" class="col-sm-3 control-label">Last Name</label>
                    <div class="col-sm-4">
                        <input type="text" id="firstName" placeholder="Full Name" class="form-control" autofocus>
                       
                        </input>
                         </div>
                </div>
				<div class="form-group">
                    <label for="Mobile Number" class="col-sm-3 control-label">Mobile Number</label>
                    <div class="col-sm-4">
                        <input type="number" id="Number" placeholder="Mobile Number" class="form-control" autofocus>
                       
                        </input>
                        </div>
                </div>
               
                <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Password</label>
                    <div class="col-sm-4">
                        <input type="password" id="password" placeholder="Password" class="form-control">
                    </input></div>
                </div>
				                <div class="form-group">
                    <label for="Confirm Password" class="col-sm-3 control-label">Confirm Password</label>
                    <div class="col-sm-4">
                        <input type="password" id="Confirm Password" placeholder="Confirm Password" class="form-control"></input>
                    </div>
                </div>
               
                <div class="form-group">
                    <label class="control-label col-sm-3">Gender</label>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="radio-inline">
                                    <input type="radio" id="femaleRadio" value="Female">Female
                                </input></label>
								<label class="radio-inline">
                                    <input type="radio" id="maleRadio" value="Male">Male
                                    </input></label>
								<label class="radio-inline">
                                    <input type="radio" id="uncknownRadio" value="Unknown">Others
                                    </input></label>
                            </div>
                           
                            </div>
                            
                                
                            
                        </div>
                    </div>
             </div>
				);
      };
		
	
		
		

export default template;
