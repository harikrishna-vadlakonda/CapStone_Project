/* eslint-disable jsx-a11y/alt-text */
import "./ElectricalService.css";
import NavbarAfterLogin from '../NavbarAfterLoginIn/index'
import Footer from '../Footer/index'
import React from "react";


function template() {
  return (
    <div className="electrical-service">
      <NavbarAfterLogin />
      
      {
        this.state.map((data,index)=>{
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
        <button class="btn font-weight-bold btn-primary" onClick={()=>{this.getData(data.title)}}>Avail service</button>
                    </div>
             </div>
         </div>
         
     </div>

          </>
        })
      }
     <Footer className="mt-3" />
    </div>
  );
};

export default template;
