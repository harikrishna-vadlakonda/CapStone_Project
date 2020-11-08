import "./ProfessionalReg.css";
import React from "react";
import Navbar from '../Navbar/index';


function template() {
  return (
   
    <div className="professional-reg">
      
      <Navbar />
   
   <div className="testing-comp mx-auto my-4 animated  slideInLeft ">
   

       
     <div class="form1">

     <form className="mx-auto px-auto">
       <p className="h2 font-weight-bold mt-3 mb-3 text-center">Register As Service Provider </p>
       <div className="form-group ">
         <input type="text" placeholder="Full Name" className="form-control"
         onChange={(e)=>this.setState({
           ...this.state,
           name:e.target.value
         })} 
         />
       </div>

      
      

       

       <div className="form-group">
         <input type="number" placeholder="Mobile Number" className="form-control"
         onChange={(e)=>this.setState({
           ...this.state,
           mobilenumber:e.target.value
         })}
         />
       </div>

       <div className="form-group">
         <input type="number" placeholder="Enter Amount To Be Charged" className="form-control"
         onChange={(e)=>this.setState({
           ...this.state,
           price:e.target.value
         })}
         />
       </div>
      
       

               <div className="form-group mt-2"
       onChange={(e)=>this.setState({
         ...this.state,
         services:e.target.value
       })}
       >
                   <select className=" form-control">
                       <option>Select Service</option>
                      
                       <option>Repairs & Fixes</option>
                 <option >Electricity Breakdown</option>
                       <option>Electrical wiring</option>
                       <option>Installation Services</option>
                       <option>Repairs & Fixes</option>
                       <option>New Furniture Making</option>
                       <option>Other Wood Work</option>
                       <option>Door & Window Repairs</option>
                       <option>Pipe & Tap fitting</option>
                       <option>Water Leakage</option>
                       <option>Facial & Hair Service</option>
                       <option>Body Massage</option>
                       <option>Women Special</option>
                       <option>General Beauty Service</option>
                       <option>IT Courses</option>
                       <option>Exam Preparation</option>
                       <option>Home Tuitions</option>
                       <option>Music Classes</option>
                       <option>Car Washing</option>
                       <option>Home Cleaning</option>
                       <option>Carpet Cleaning</option>
                       <option>General Cleaning</option>
                     

                   </select>
               </div>

       <div className="form-group mt-2"
       onChange={(e)=>this.setState({
         ...this.state,
         city:e.target.value
       })}
       >
                   <select className="form-control">
                       <option>Select City</option>
                       <option>Karimnagar</option>
                       <option>Vijaywada</option>
                       <option>Warangal</option>
                       <option>Tirupati</option>
                   </select>
               </div>
               <div class="form-check"
       onChange={(e)=>this.setState({
         ...this.state,
         gender:e.target.value
       })}
       >
                   <label className="form-check-label h6 font-weight-bold">Select Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <input type="radio" value="male" name="gender" class="form-check-input" />
                   <label className="form-check-label h6 font-weight-bold">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <input type="radio" value="female" name="gender" class="form-check-input" />
                   <label className="form-check-label  h6 font-weight-bold">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <input type="radio" value="others" name="gender" class="form-check-input" />
                   <label className="form-check-label  h6 font-weight-bold">Others</label>
               </div>

               <input value="Register" type="submit" className="btn btn-outline-white font-weight-bold mt-2 mx-auto" onClick={this.getdata} />
             
     
     </form>
      </div>
 </div>
   
    </div>
  );
};

export default template;
