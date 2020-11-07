import "./Profile.css";
import React from "react";
import NavbarAfterLogin from '../NavbarAfterLoginIn/index'

function template() {
  return (
    <div className="profile text-white  ">
     <NavbarAfterLogin />
     <div  >
      
      
<div class="card bg-dark1 text-white  testimonial-card profileCard">





<div class="avatar mx-auto white">
  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-circle" width="100%"
    alt="woman avatar" />
</div>


<div className="card-body text-center">
  
  <p className="card-title h4">Anna Doe</p>
  <hr />
  
 <p className="h5 card-title">Email:"Alex@gmail.com"</p>
 <hr />
  <p className="h5 card-title">User ID:{this.state.data.userId}</p>
  <hr />
  <p className="h5 card-title">Mobile Number:{this.state.data.mobilenumber}</p>
  <hr />

</div>

</div>

    </div>
    </div>
    
  );
};

export default template;
