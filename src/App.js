/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';
// import Form from './Components/Form'
import Home from './Components/Home/index'
import ContactUs from './Components/ContactUs/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/index'

// import Register from './Components/Registration/index'
import Login from './Components/Login/index';
import Test from './Components/TestingComp/index'
import About from './Components/Aboutus/index'



function App() {
  return (

    <div className="App">
     


<Router>
  <Navbar />
  <Switch>
    
   <Route  path="/login" component={Login} />
    <Route exact path="/contact" component={ContactUs} />
    <Route exact path="/register" component={Test} />
    {/* <Route exact path="/register" component={Register} /> */}
    <Route exact path="/about" component={About} />
    <Route exact path="/" component={Home} />
  </Switch>
</Router>
    </div>

  );
}

export default App;