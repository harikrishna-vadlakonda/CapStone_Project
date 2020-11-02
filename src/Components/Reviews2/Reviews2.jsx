/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import "./Reviews2.css";
import React from "react";

import BeautyS2 from '../images/beautyCarousel2.jpg'
import ElectricalC from '../images/ElectricalCarousel.jpg'

import PlumberC1 from '../images/PlumberCarousel1.jpg';
import PaintingC1 from '../images/PaintinCarousel1.jpg';



function template() {
  return (
    <div>
     <div class="container  mt-3">
     <div id="carousel-example-multi" class="carousel custmCarousel slide carousel-multi-item v-2" data-interval="2000" data-ride="carousel">
          
     
          
          
          
     <ol class="carousel-indicators">
    <li data-target="#carousel-example-multi" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-multi" data-slide-to="1"></li>
    <li data-target="#carousel-example-multi" data-slide-to="2"></li>
    <li data-target="#carousel-example-multi" data-slide-to="3"></li>
    <li data-target="#carousel-example-multi" data-slide-to="4"></li>
    <li data-target="#carousel-example-multi" data-slide-to="5"></li>
  </ol>


          <div class="carousel-inner">

      <div class="carousel-item p-4 active">
      <div className="row">

      <div className="col-sm-4">
      <div class="card morpheus-den-gradient text-white  testimonial-card">

 
<div class="card-up indigo "></div>


<div class=" img-gradient mx-auto ">
  <img src={BeautyS2} width="250px" height="250px" class="  rounded-circle"
    alt="woman avatar" />
</div>


<div class="card-body">
 
  <h4 class="card-title">Anna Doe</h4>
  <hr />

  <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci
  </p>
</div>

</div>
</div>

             <div className="col-sm-4">
             <div class="card morpheus-den-gradient text-white  testimonial-card">


         <div class="card-up indigo "></div>


        <div class=" img-gradient mx-auto ">
 <img src={PaintingC1} width="250px" height="250px" class="  rounded-circle"
   alt="woman avatar" />
</div>


<div class="card-body">

 <h4 class="card-title">Anna Doe</h4>
 <hr />

 <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci
 </p>
</div>
</div>
 </div>

            <div className="col-sm-4">
             
             <div class="card morpheus-den-gradient text-white  testimonial-card">


<div class="card-up indigo "></div>


<div class=" img-gradient mx-auto ">
 <img src={ElectricalC} width="250px" height="250px" class="  rounded-circle"
   alt="woman avatar" />
</div>


<div class="card-body">

 <h4 class="card-title">Anna Doe</h4>
 <hr />

 <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci
 </p>
</div>

</div>
 </div>


            </div>
              </div>


              <div class="carousel-item p-4 ">



<div className="row">
<div className="col-sm-4">

<div class="card morpheus-den-gradient text-white  testimonial-card">


<div class="card-up indigo "></div>


<div class=" img-gradient mx-auto ">
<img src={BeautyS2} width="250px" height="250px" class="  rounded-circle"
alt="woman avatar" />
</div>


<div class="card-body">

<h4 class="card-title">Anna Doe</h4>
<hr />

<p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci
</p>
</div>

</div>
</div>

<div className="col-sm-4">

<div class="card morpheus-den-gradient text-white  testimonial-card">


<div class="card-up indigo "></div>


<div class=" img-gradient mx-auto ">
<img src={PlumberC1} width="250px" height="250px" class="  rounded-circle"
alt="woman avatar" />
</div>


<div class="card-body">

<h4 class="card-title">Anna Doe</h4>
<hr />

<p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci
</p>
</div>

</div>
</div>

<div className="col-sm-4">

<div class="card morpheus-den-gradient text-white  testimonial-card">


<div class="card-up indigo "></div>


<div class=" img-gradient mx-auto ">
<img src={PlumberC1} width="250px" height="250px" class="  rounded-circle"
alt="woman avatar" />
</div>


<div class="card-body">

<h4 class="card-title">Anna Doe</h4>
<hr />

<p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci
</p>
</div>

</div>
</div>
</div>
</div>

              


   </div>




   </div>
   </div>
    </div>
  );
};

export default template;
