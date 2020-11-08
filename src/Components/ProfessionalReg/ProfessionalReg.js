import React    from "react";
import template from "./ProfessionalReg.jsx";
import SendDatatoServer from  '../../Services/Postservercall'


class ProfessionalReg extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       "name":'',
       "mobilenumber":'',
       "services":'',
       "city":'',
       "gender":'',
       "price":'',
     
     
      
       
       

    }
  }
  
  getdata = ()=>{
    alert(JSON.stringify(this.state))
   SendDatatoServer("http://localhost:5000/api/servicess/",this.state).then((res)=>{
     
     alert("Registered Successfully")
     console.log(res)
     
      // this.props.history.push("/login");
         

   },(err)=>{
     alert("Error Occured")
     alert(err)

   })
  }
  
  render() {
    return template.call(this);
  }
}

export default ProfessionalReg;
