/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';
import ProfessionalReg from './Components/ProfessionalReg/index'
import Profile from './Components/Profile/index'
import Home from './Components/Home/index'
import ContactUs from './Components/ContactUs/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import ElectricalService from './Components/ElectricalService/index'
import Login from './Components/Login/index';
import Test from './Components/TestingComp/index'
import About from './Components/Aboutus/index'
import Mainservice from './Components/MainServiceComp/index'
import BeautyService from './Components/BeautyServices/index'
import TutorialService from './Components/TutorialServices/index'
import CarpentorService from './Components/CarpentorServices/index'
import CleaningService from './Components/CleaningServices/index'
import AfterLoginCityComp from './Components/AfterLoginFirstComp/index'
// import City from './Components/CityComp/index'
import Specific from './Components/SpecificServicecomp/index'
import TestingComp from './Components/TestingComp/TestingComp'
import PaymentGateway from './Components/PaymentGateway' 





function App() {
  return (

    <div className="App">
     


<Router>

  <Switch>
  <Route exact path="/specific" component={Specific} />
  <Route exact path="/profile" component={Profile} />
  <Route exact path="/tutorialservice" component={TutorialService} />
  <Route exact path="/cleaningservice" component={CleaningService} />
  <Route exact path="/carpenterservice" component={CarpentorService} />
 <Route exact path="/beautyservice" component={BeautyService} />
  <Route exact path="/contact" component={ContactUs} />
   <Route  path="/citycomp" component={AfterLoginCityComp} />
   <Route path="/login" component={Login} />
   <Route  path="/homelogin" component={Mainservice} />
   <Route  path="/logout" component={Home} />
   
   <Route  path="/payment" component={PaymentGateway} />

    <Route exact path="/electricalservice" component={ElectricalService} />
    <Route exact path="/register" component={TestingComp} />
    <Route exact path="/registerasprofessional" component={ProfessionalReg} />
    <Route exact path="/about" component={About} />
    <Route exact path="/" component={Home} />
  </Switch>
</Router>
    </div>

  );
}

export default App;