import "./SpecificServicecomp.css";
import React from "react";
import NavbarAfterLogin from '../NavbarAfterLoginIn/index'
import Footer from '../Footer/index'

function template() {
  return (
    <div className="specific-servicecomp">
     <NavbarAfterLogin />
      
      {
        this.specificServiceData.map((data)=>{
          return  <>
                <div class="container px-4 mb-3 rounded ">
         <div class="card bg-dark text-white m-0 p-0 mt-2" >

           <div className="row">
        <p className="h3 pl-5 pt-3 font-weight-bold text-white mx-auto">{data.servicename}</p>
           </div>

           <div className="row"><p></p></div>

             <div class="row ">
                 <div class="col-md-2  pl-5">
                     <img src={data.img} className="rounded-circle" alt="ss" height="150" width="150" />
                 </div>&nbsp;&nbsp;

                 <div class="col-md-7 pb-5 ">
        <p className=" h5 card-title mt-3">{data.serviceprovidername}
        &nbsp; &nbsp; 
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  fa fa-star "></i>
        </p>
        {/* <i className=" text-primary fa fa-star checked"></i>
        <i className=" text-primary fa fa-star checked"></i>
        <i className=" text-primary fa fa-star checked"></i>
        <i className=" text-primary fa fa-star checked"></i>
        <i className=" fa fa-star "></i> */}
        <p></p>
       <p className="h5 text-muted text-primary">  <i class="fas fa-map-marker-alt"></i> {data.location}</p>
      <p></p>
      <p></p>
        <p className="  text-white ">{data.description}</p>
        {/* <p className=" text-white font-weight-bold h5">Service Rate:&nbsp;<i class="fas fa-rupee-sign"></i>950</p>
                    <p className="font-weight-bold" ></p>
                      
                    <button class="btn mr-4 px-4 blue-gradient font-weight-bold btn-primary">Hire Me</button> */}

                     {/* <button class="btn font-weight-bold btn-primary">Avail service</button> */}
                    </div>
                    <div className="col-sm-2 p-4 text-white">
                      <br></br>
                      <br></br>
                  <p className=" text-white h5">Price:&nbsp;<i class="fas fa-rupee-sign"></i>&nbsp;{data.price}</p>
                    {/* <p className="font-weight-bold" ><i class="fas fa-rupee-sign"></i>950</p> */}
                      
                    <button class="btn  blue-gradient font-weight-bold btn-primary">Hire Me</button>
                    
                     
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
