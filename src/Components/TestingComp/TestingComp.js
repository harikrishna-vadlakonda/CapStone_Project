import React    from "react";
import template from "./TestingComp.jsx";
import GetDataserver from '../../Services/servercall'

class TestingComp extends React.Component {

    

  getdata = ()=> {
    alert("getdata Triggered")
    GetDataserver("http://localhost:5000/api/users/signup",this.state).then((res)=>{
      alert(JSON.stringify(res))
      console.log(res);
    },(err)=>{
      alert(err);
      console.log(err)
    })
    
   
    
  }
  constructor(props) {
    super(props)
  
    this.state = {
      
      "firstname":"",
      "lastname":"",
     "email":"",
     "password":"",
      "city":"",
      "gender":"",
      "mobilenumber":''
      
    }
  }
  
  render() {
    return template.call(this);
  }
}

export default TestingComp;
