import "./CleaningServices.css";
import {Link} from 'react-router-dom'
import React from "react";
import NavbarAfterLogin from '../NavbarAfterLoginIn/index'
import Footer from '../Footer/index'

function template() {
  return (
    <div className="cleaning-services">
   <NavbarAfterLogin />
      
      {
        this.cleaningServiceData.map((data,index)=>{
          return  <>
                <div class="container">
         <div class="card m-0 p-0  mt-3" >
             <div class="row">
                 <div class="col-md-4">
                     <img src={data.img}  alt="ss" height="300" width="300" />
                 </div>
                 <div class="col-md-8  ">
        <h3 class="card-title mt-3">{data.title}</h3>
        <p>{data.description}</p>
          <Link to="/specific"><button class="btn font-weight-bold btn-primary">Avail service</button></Link>
                    </div>
             </div>
         </div>
         
     </div>

          </>
        })
      }
     <Footer  />
    </div>
  );
};

export default template;
