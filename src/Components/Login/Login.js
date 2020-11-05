import React    from "react";
import template from "./Login.jsx";
import GetServerData from '../../Services/servercall'


class Login extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       "mobilenumber":'',
       "password":'',
       "LogedIn":"false"
    }
  }
      getData = ()=>{
    
           GetServerData("http://localhost:5000/api/users/login",this.state).then((res)=>{
             alert(JSON.stringify(res.data.token));
            //  document.write(JSON.stringify(res))
          
         
            if(res.statusText==="OK"){
              this.props.history.push("/citycomp");
            }

           },(err)=>{
              alert(err)
              console.log(err)
           });
      }

  render() {
    return template.call(this);
  }
}

export default Login;
