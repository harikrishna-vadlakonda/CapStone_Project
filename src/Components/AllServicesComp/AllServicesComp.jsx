import "./AllServicesComp.css";
import React from "react";


function template(props) {
  return (
    <div className="all-services-comp mt-4 ">
        
             <div className="container">
               <div className="row p-0">
  <h2 className="mx-auto dispaly-2 font-weight-bold  text-muted">{this.props.title}</h2>
               </div>

               <div className="row mt-2 p-0">
                 <div className="col-sm-4">

                   <div className="card">
                     
                     <div className="card-header p-0">
                       <img src={this.props.img1} alt="" width="100%" height="250" />
                     </div>
                     <div className="card-body">
                   
  <p className="h5 text-muted font-weight-bold">{this.props.servicename1}</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, reprehenderit?</p>
                     <button type="button" class="btn btn-rounded btn-primary blue-gradient">Avail Service</button>
                     </div>
                   </div>
                 </div>


                 <div className="col-sm-4">

<div className="card">
  <div className="card-header p-0">
    <img src={this.props.img2} alt="" width="100%" height="250px" />
  </div>
  <div className="card-body">

<p className="h5 text-muted font-weight-bold">{this.props.servicename2}</p>
 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, reprehenderit?</p>
  <button className="btn btn-primary blue-gradient waves-effect">Avail Service</button>
  
  </div>
</div>
</div>

<div className="col-sm-4">

<div className="card">
  <div className="card-header p-0">
    <img src={this.props.img3} alt="" width="100%" height="250px" />
  </div>
  <div className="card-body">

<p className="h5 text-muted font-weight-bold">{this.props.servicename3}</p>
 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, reprehenderit?</p>
  <button class="btn btn-primary btn-rounded blue-gradient">Get Service</button>
  </div>
</div>
</div>
                {/* <div className="col-sm-3">

                   <div className="card">
                     <div className="card-header p-0">
                       <img src={this.props.img2} alt="" width="100%" />
                     </div>
                     <div className="card-body">
                   
  <p className="h5 text-muted font-weight-bold">{this.props.servicename2}</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, reprehenderit?</p>
                     <button class="btn btn-primary">Get Service</button>
                     </div>
                   </div>
                 </div>
                 <div className="col-sm-3">

<div className="card">
  <div className="card-header p-0">
    <img src={this.props.img3} alt="" width="100%" />
  </div>
  <div className="card-body">

<p className="h5 text-muted font-weight-bold">{this.props.servicename3}</p>
 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, reprehenderit?</p>
  <button class="btn btn-primary">Get Service</button>
  </div>
</div>
</div> */}
               </div>
             </div>
          </div>
        
      

              
           
       
      

     
  );
};

export default template;
