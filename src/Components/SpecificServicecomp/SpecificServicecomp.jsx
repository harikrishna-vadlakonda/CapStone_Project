import "./SpecificServicecomp.css";
import React from "react";
import NavbarAfterLogin from '../NavbarAfterLoginIn/index'
import Footer from '../Footer/index'
import Image from '../images/Landing/profile-image.png'
import { Link } from "react-router-dom";

function template() {
  return (
    <div className="specific-servicecomp">
     <NavbarAfterLogin />
      
      {
        this.state.SpecificServicecomp.map((data)=>{
          return  <>
                <div class="container px-4 mb-3 rounded ">
         <div class="card bg-dark text-white m-0 p-0 mt-2" >

           <div className="row">
        <p className="h3 pl-5 pt-3 font-weight-bold text-white mx-auto">{data.services}</p>
           </div>

           <div className="row"><p></p></div>

             <div class="row ">
                 <div class="col-md-2  pl-5">
                     <img src={Image} className="rounded-circle" alt="ss" height="150" width="150" />
                 </div>&nbsp;&nbsp;

                 <div class="col-md-7 pb-5 ">
        <p className=" h5 card-title mt-3">{data.name}
        &nbsp; &nbsp; 
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  fa fa-star "></i>
        </p>
       
        <p></p>
       <p className="h5 text-muted text-primary">  <i class="fas fa-map-marker-alt"></i> {data.city}</p>
      <p></p>
      <p></p>
        <p className="  text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eum aut modi laudantium consequatur facilis sapiente numquam? Provident, itaque facere?</p>
        
                    </div>
                    <div className="col-sm-2 p-4 text-white">
                      <br></br>
                      <br></br>
                  <p className=" text-white h5">Price:&nbsp;<i class="fas fa-rupee-sign"></i>&nbsp;{data.price}</p>
                    {/* <p className="font-weight-bold" ><i class="fas fa-rupee-sign"></i>950</p> */}
                      

           <Link to="/payment"> <button class="btn  blue-gradient font-weight-bold btn-primary">Hire Me</button>
           </Link>
                     
                    </div>
             </div>
         </div>
         
     </div>

          </>
        })
      }
     <Footer className="pt-5" />
    </div>
  );
};

export default template;
