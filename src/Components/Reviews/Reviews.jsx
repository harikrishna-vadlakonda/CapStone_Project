import "./Reviews.css";
import React from "react";


function template() {
  return (
 
    <div class="container review mt-4 ">
        <div className="row text-center ">
          <div className="col-sm-12">

         
        <p className="h2">Customer Reviews</p>
        </div>
        </div>
        <div className="row ">
          <div className="col-sm-12">

          
        <p className="h4 text-center text-muted">What Customer Are Saying About Us</p>
       </div>
        </div>

      <div className="row mt-4">
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
  <img src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="250px" height="250px" class="  rounded-circle"
    alt="woman avatar" />
</div>


<div class="card-body">
 
  <h4 class="card-title">Anna Doe</h4>
  <hr />

  <p><i class="fas fa-quote-left"></i>My  home was definitely in need of a renovation. I booked an appointment with HQServices and I must say the people are professional and are on time. </p>
</div>

</div>
</div>

             <div className="col-sm-4">
             <div class="card morpheus-den-gradient text-white  testimonial-card">


         <div class="card-up indigo "></div>


        <div class=" img-gradient mx-auto ">
 <img src="https://images.pexels.com/photos/3772531/pexels-photo-3772531.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="250px" height="250px" class="  rounded-circle"
   alt="woman avatar" />
</div>


<div class="card-body">

 <h4 class="card-title">Aish Goel</h4>
 <hr />

 <p><i class="fas fa-quote-left"></i> my husband and I decided to get it done as soon as the relaxation on the lockdown happens and we got it done through HQServvices and I must say, they have done an amazing job. I feel like I got a new sofa again.
 </p>
</div>
</div>
 </div>

            <div className="col-sm-4">
             
             <div class="card morpheus-den-gradient text-white  testimonial-card">


<div class="card-up indigo "></div>


<div class=" img-gradient mx-auto ">
 <img src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="250px" height="250px" class="  rounded-circle"
   alt="woman avatar" />
</div>


<div class="card-body">

 <h4 class="card-title">Jayson Roy</h4>
 <hr />

 <p><i class="fas fa-quote-left"></i> They used good quality materials and made sure that I was updated and intimated on the progress. My house is completed now, and I'm really happy with how it looks!


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
<img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="250px" height="250px" class="  rounded-circle"
alt="woman avatar" />
</div>


<div class="card-body">

<h4 class="card-title">Enna Joel</h4>
<hr />

<p><i class="fas fa-quote-left"></i> My refrigerator needed servicing. I booked HQServices and the experience was good and the technician knew what he was doing. Their services are definitely worth a try.
</p>
</div>

</div>
</div>

<div className="col-sm-4">

<div class="card morpheus-den-gradient text-white  testimonial-card">


<div class="card-up indigo "></div>


<div class=" img-gradient mx-auto ">
<img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="250px" height="250px" class="  rounded-circle"
alt="woman avatar" />
</div>


<div class="card-body">

<h4 class="card-title">Adam Pattison</h4>
<hr />

<p><i class="fas fa-quote-left"></i> " I got the exterior of my house painted. The people from HQServices were extremely helpful and helped me in getting all the necessary information and details. I am extremely happy with how vibrant my house looks post the painting. Do try their painting services
</p>
</div>

</div>
</div>

<div className="col-sm-4">

<div class="card morpheus-den-gradient text-white  testimonial-card">


<div class="card-up indigo "></div>


<div class=" img-gradient mx-auto ">
<img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="250px" height="250px" class="  rounded-circle"
alt="woman avatar" />
</div>


<div class="card-body">

<h4 class="card-title">Vaish Hales</h4>
<hr />

<p><i class="fas fa-quote-left"></i> I booked HQServices at-home saloon services for a haircut. I was sceptical at first but looking at the end result, I could not have been happier. The new haircut looks nice and the professional did a really good and clean job at it. Worth a try!
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
    </div>
   
  );
};

export default template;
