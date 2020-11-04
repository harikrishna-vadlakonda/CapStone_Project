/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import React from "react";
import {Link} from 'react-router-dom'

function template() {
  return (
    <div className="footer sticky-bottom mt-3 ">
 
<footer class="page-footer font-small bg-dark">


  <div class="container">

   
    <div class="row text-center d-flex justify-content-center pt-5 mb-3">

     
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          {/* <a href="#!">About us</a> */}
          <Link to="/about">About Us</Link>
        </h6>
      </div>
    

     
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          {/* <a href="#!">Products</a> */}
          <Link to="/">Products</Link>

        </h6>
      </div>
   

     
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          {/* <a href="#!">Awards</a> */}
          <Link to="/">Awards</Link>
        </h6>
      </div>
      
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          {/* <a href="#!">Help</a> */}
          <Link to="/contact">Help</Link>
        </h6>
      </div>
     
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          {/* <a href="/contact">Contact</a> */}
          <Link to="/contact">Contact</Link>
        </h6>
      </div>
      

    </div>
   
    <hr class="rgba-white-light hr1"  />

  
    <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">

      <div class="col-md-8 col-12 mt-5">
        <p class="p1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
      </div>
      

    </div>
   
    <hr class="clearfix d-md-none rgba-white-light hr2"  />

    
    <div class="row pb-3">

     
      <div class="col-md-12">

        <div class="mb-5 flex-center">

         
          <a class="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
          </a>
        
          <a class="tw-ic">
            <i class="fab fa-twitter fa-lg white-text mr-4"> </i>
          </a>
         
          <a class="gplus-ic">
            <i class="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
          </a>
        
          <a class="li-ic">
            <i class="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
          </a>
        
          <a class="ins-ic">
            <i class="fab fa-instagram fa-lg white-text mr-4"> </i>
          </a>
         
          <a class="pin-ic">
            <i class="fab fa-pinterest fa-lg white-text"> </i>
          </a>

        </div>

      </div>
      

    </div>
 

  </div>


 
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    {/* <a href="/" class="font-weight-bold"> HQ-Services</a> */}
    <Link to="" class="font-weight-bold"> HQServices</Link>
  </div>


</footer>

    </div>
  );
};

export default template;
