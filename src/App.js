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
     

<Navbar />
<Router>
  <Switch>
    <Route exact path="/" component={Home} />
   <Route path="/login" component={Login} />
    <Route  path="/contact" component={ContactUs} />
    <Route path="/register" component={Register} />
    
  </Switch>
</Router>
    </div>

  );
}

export default App;