import "./Profile.css";
import React from "react";
import NavbarAfterLogin from '../NavbarAfterLoginIn/index'

function template() {
  return (
    <div className="profile m-4  text-white">
     <NavbarAfterLogin />
<div class="card bg-dark m-4 testimonial-card">


<div class="card-up indigo lighten-1"></div>


<div class="avatar mx-auto white">
  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle"
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
  );
};

export default template;
