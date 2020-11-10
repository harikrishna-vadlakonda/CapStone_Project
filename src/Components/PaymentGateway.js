/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import StripeCheckout from "react-stripe-checkout"
import {Link} from 'react-router-dom'
import './PaymentGateway.css' 
import NavbarAfterLogin from './NavbarAfterLoginIn/index'

function App1() {


  const [product, setProduct ] = useState({
    name: "Home Services",
    price : 30,
    productBy: "Quality Home Services"
  });

  const makePayment = token => {
    const body = {
      token, 
      product
    }
    const headers = {
      "content-type":  "application/json"

    }
  

  return fetch ('http://localhost:8282/payment',{
    method: "POST",
    headers,
    body: JSON.stringify(body)
}).then(response => {
  console.log("RESPONSE", response)
  const {status} = response;
  console.log("STATUS ", status)
})
.catch(error => console.log(error));
  };




  return (
    <div className="App1 ">
     <NavbarAfterLogin />
      <header className="App-header">
      <div className="container text-white">
        <div className="row mb-3">
          <div className="col-md-12">
          <p className="lead font-weight-bold h3">CONFIRMATION</p>
          </div>
          
        </div>

<div className="row">
<div className="col-sm-4"></div>
  <div className="col-md-2">
  <label className="lead font-weight-bold">Select Date: </label>
  </div>

  <div className="col-md-2">
  <div className="form-group">
   
   <input type="date" className="form-control" />
       </div>
       </div>
       </div>
       
       <div className="row">
         <div className="col-sm-4"></div>

  <div className="col-md-2">
  <label className="lead font-weight-bold">Select Time: </label>
  </div>

  <div className="col-md-2">
  <div className="form-group">
   
   <input type="time" className="form-control" />
       </div>
  </div>

</div>
</div>
    
        
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <StripeCheckout 
        
          stripekey = "pk_test_51HkQZHGuJWNTxBAlQEZK5D8E47p6E8hd7fok5PRksTExJD2R9RfFep6ZoMUMLUXuP9IV9Sp9D8MToLNtrEfp3V2w00dvu2EiSY"
          token={makePayment}
          name ="Avail Service"
          amount = {product.price * 100}

          >
            {/* <div className="container">

            <div className="row">

              <div className="col-md-6">
              <label className="text-muted">Select Date: </label>
              </div>

              <div className="col-md-6">
              <div className="form-group">
               
               <input type="date" className="form-control" />
                   </div>
                   </div>
                   </div>
                   
                   <div className="row">

              <div className="col-md-6">
              <label className="text-muted">Select Time: </label>
              </div>

              <div className="col-md-6">
              <div className="form-group">
               
               <input type="time" className="form-control" />
                   </div>
              </div>
           
       </div>
        */}
         
        <Link to="/payment"> <button className="btn btn-outline-primary  text-white ">Book </button></Link>
        {/* <Link to="/specific"> <button className="btn btn-outline-primary text-white ">Cancel </button></Link> */}
          </StripeCheckout> 
          {/* <Link to="/specific"> <button className="btn btn-outline-primary text-white  ">Cancel </button></Link> */}
       
      </header>
    
      </div>
  );
}

export default App1;
