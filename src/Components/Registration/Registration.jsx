import "./Registration.css";
import React from "react";

function template() {
  return (

<div class=" container   bg-primary ">
    <div className="row">
        <div className="col-sm-12">
 
<form>

<div className="form-row">
    <div className="form-group col-md-6">
      <label  className="font-weight-bold text-white">First Name</label>
      <p>{JSON.stringify(this.state.data1)}</p>
      <input 
      type="text" 
      className="form-control"
      id="inputFirstName" 
      placeholder="First Name" 
      onChange={(e)=>this.setState({
        ...this.state,
        firstname:e.target.value
      })} />
    </div>
    </div>

    <div className="form-row">
    <div className="form-group col-md-6">
      <label  className="font-weight-bold text-white">Last Name</label>
      <input type="text" className="form-control" id="inputLastName" 
      placeholder="Last Name"
      onChange={(e)=>this.setState({
        ...this.state,
        lastname:e.target.value
      })}
      />
    </div>
    </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label  className="font-weight-bold text-white">Email</label>
      <input type="email" className="form-control" id="inputEmail4" 
      placeholder="Email" 
      onChange={(e)=>this.setState({
        ...this.state,
        email:e.target.value
      })}/>
    </div>
    </div>

   <div className="form-row">
    <div className="form-group col-md-6">
      <label  className="font-weight-bold text-white">Password</label>
      <input type="password" className="form-control" id="inputPassword4"
       placeholder="Password"
       onChange={(e)=>this.setState({
        ...this.state,
        password:e.target.value
      })} />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label  className="font-weight-bold text-white">Mobile Number</label>
      <input type="number" className="form-control" id="inputMobileNumber" 
      placeholder="Mobile Number" 
      onChange={(e)=>this.setState({
        ...this.state,
        mobilenumber:e.target.value
      })}/>
    </div>
  </div>

  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label  className="font-weight-bold text-white">Gender</label>
      
      <select id="inputGender" className="form-control" onChange={(e)=>this.setState({
        ...this.state,
        gender:e.target.value
      })}>
        <option selected>Choose Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
    

      


    </div>
    </div>
  
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label className="font-weight-bold text-white">City</label>
      
      <select id="inputCity" className="form-control"onChange={(e)=>this.setState({
        ...this.state,
        gender:e.target.value
      })} >
        <option selected>Select City</option>
        <option value="siddipet">Siddipet</option>
        <option value="karimnagar">Karimnagar</option>
        <option value="nizamabad">Nizamabad</option>

      </select>
    

      


    </div>
    </div>




    <div className="form-row">
    <div className=" col-md-6">

    
  {/* <div class="form-group">
    <label for="exampleFormControlFile1" class="font-weight-bold text-white">Upload Picture</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div> */}

     
      {/* <input type="submit" value="Register" class="btn btn-danger"  /> */}
      <button  className="btn btn-outline-white" onClick={this.getdata}>Register</button>

    </div>
  </div>
    
 
  
      

          
             </form>
             </div>
             </div>
             </div>
				);
      };
		
	
		
		

export default template;
