import "./MainServiceComp.css";
import React from "react";
import AllService from '../AllServicesComp/index'

import BImage1 from '../images/Beauty services/pexels-cottonbro-3992870.jpg'
import BImage2 from '../images/Beauty services/pexels-delbeautybox-853427.jpg'
import BImage3 from '../images/Beauty services/pexels-thgusstavo-santana-1813272.jpg'
import Footer from '../Footer/index'
import Landing from '../LandingComp/index'
import EImage1 from '../images/Electrical services/pexels-cottonbro-5090643.jpg'
import EImage2 from '../images/Electrical services/pexels-josh-sorenson-1054397.jpg'
import EImage3 from '../images/Electrical services/pexels-pixabay-257736.jpg'
import PImage1 from '../images/Cleaning services/pexels-inline-media-5229639.jpg'
import PImage2 from '../images/Cleaning services/pexels-karolina-grabowska-4239091.jpg'
import PImage3 from '../images/Cleaning services/pexels-karolina-grabowska-4239146.jpg'
import CImage1 from '../images/Carpenter services/pexels-bidvine-1249611.jpg'
import CImage2 from '../images/Carpenter services/pexels-pixabay-209235.jpg'
import CImage3 from '../images/Carpenter services/pexels-pixabay-221027.jpg'

import TImage1 from '../images/Study Services/pexels-julia-m-cameron-4144101.jpg'
import TImage2 from '../images/Study Services/pexels-julia-m-cameron-4144923.jpg'
import TImage3 from '../images/Study Services/pexels-julia-m-cameron-4145153.jpg'
import NavbarAfterLoginIn from '../NavbarAfterLoginIn/index'









function template() {
  return (
    <div className="main-service-comp">
      <NavbarAfterLoginIn  />
     <Landing />
    <AllService  title="Electrician Services" img1={EImage1} servicename1="Electricity Breakdown" img2={EImage2} servicename2="Electrical wiring" img3={EImage3} servicename3="Installation Services" />
     <AllService title="Beauty Services"  img1={BImage1} servicename1="Facial & Hair Service" img2={BImage2} servicename2="Body Massage" img3={BImage3} servicename3="Menicure&Pedicure" />
     <AllService title="Cleaning Services"  img1={PImage1} servicename1="Car Wash" img2={PImage2} servicename2="Washroom Washing" img3={PImage3} servicename3="Room Washing" />
     <AllService title="Carpenter Services"  img1={CImage1} servicename1="New Furniture Making" img2={CImage2} servicename2="Other Wood Work" img3={CImage3} servicename3="Stairs And Railings" />
   
     <AllService title="Tutorial Services"  img1={TImage1} servicename1="Home Tuition" img2={TImage2} servicename2="IT Courses" img3={TImage3} servicename3="Music Classes" />
 
     <Footer />
    </div>
  );
};

export default template;
