/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';
// import Form from './Components/Form'
import Home from './Components/Home/index'
import ContactUs from './Components/ContactUs/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/index'
import Login from './Components/Leftside'
import Register from './Components/Form'



function App() {
  return (

    <div className="App">
     


<Router>
  <Navbar />
  <Switch>
    
   <Route  path="/login" component={Login} />
    <Route exact path="/contact" component={ContactUs} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/" component={Home} />
  </Switch>
</Router>
    </div>

  );
}

export default App;