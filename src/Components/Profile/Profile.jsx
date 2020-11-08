import "./Profile.css";
import React from "react";
import NavbarAfterLogin from '../NavbarAfterLoginIn/index'
import Image1 from '../images/Landing/profile-image.png'

function template() {
  return (
    <div className="profile">
     <NavbarAfterLogin />
     <div class="wrapper1 s">
    <div class="left">
        <img src={Image1}
        alt="user" width="100" />
        <h4>{this.state.userData.firstname}{this.state.userData.lastname}</h4>
       
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
  <p>{this.state.userData.email}</p>&nbsp;
                 </div>
                 <div class="data">
                   <h4>Phone</h4>
  <p>{this.state.data.mobilenumber}</p>
              </div>
            </div>
        </div>



        
      
      <div class="projects">
            
            <div class="projects_data">
                 <div class="data">
                    <h4>City</h4>
  <p>{this.state.userData.city}</p>
                 </div>
                 <div class="data">
  <h4 >Gender</h4>
                    <p>{this.state.userData.gender}</p>
              </div>
            </div>
        </div>
      
        <div class="social_media">
            <ul>
              <li className="text-white"><i class="fab fa-facebook-f"></i></li>
              <li className="text-white"><i class="fab fa-twitter"></i></li>
              <li className="text-white"><i class="fab fa-instagram"></i></li>
          </ul>
      </div>
    </div>
</div>

    </div>
    
  );
};

export default template;
