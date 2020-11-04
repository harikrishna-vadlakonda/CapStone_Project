import "./AfterLoginFirstComp.css";
import React from "react";
import Features from '../FeaturesComp/index'
import Offers from '../OffersComp/index'
import Statistics from '../StatisticsComp/index'
import Footer from '../Footer/index'
import NavbarAfterLogin from '../NavbarAfterLoginIn/index'
import CityComp from '../CityComp/index'

function template() {
  return (
    <div className="after-login-first-comp">
      <NavbarAfterLogin />
      <CityComp />
   <Features />
<Offers />
{/* <Statistics /> */}
<Footer />
    </div>
  );
};

export default template;
