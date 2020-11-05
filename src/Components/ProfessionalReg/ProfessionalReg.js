import React    from "react";
import template from "./ProfessionalReg.jsx";
import SendDatatoServer from  '../../Services/servercall'

class ProfessionalReg extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       "fullname":'',
       "password":'',
       "mobilenumber":'',
       "service":'',
       "city":''

    }
  }
  getdata = ()=>{
   SendDatatoServer("",this.state).then((res)=>{
    if(res.statusText==="OK"){
      this.props.history.push("/login");
    }       

   },(err)=>{

   })
  }
  
  render() {
    return template.call(this);
  }
}

export default ProfessionalReg;
