import React    from "react";
import template from "./Registration.jsx";
import GetData from '../../Services/servercall'

class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.url = "http://jsonplaceholder.typicode.com/users"
    this.state = {
     "firstname":"",
     "lastname":"",
     "email":"",
      "password":"",
      "city":"",
     "gender":"",
      "mobilenumber":'',
     
    }
  }
  getdata = ()=> {
   alert("getdata Clicked")
    GetData("http://localhost:5000/api/users/signup",this.state).then((res)=>{
      alert("Got data from server")
      alert(res)
      console.log(res)
      
  },(err)=>{
    alert("error occured")
    alert(err)
  })
    
  }

  render() {
    return template.call(this);
  }
}

export default Registration;
