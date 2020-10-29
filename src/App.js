/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';
// import Form from './Components/Form'
import Home from './Components/Home/index'
import ContactUs from './Components/ContactUs/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/index'


function App() {
  return (

    <div className="App">
      {/* <Form /> */}
{/* <Home /> */}
<Navbar />
<Router>
  <Switch>
    <Route exact path="/" component={Home} />
   
    <Route  path="/contact" component={ContactUs} />
    
  </Switch>
</Router>
    </div>

  );
}

export default App;