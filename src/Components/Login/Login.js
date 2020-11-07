import React    from "react";
import template from "./Login.jsx";
import GetServerData from '../../Services/servercall'
import {connect} from 'react-redux'
import myStore from '../../Store/store'


class Login extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       "mobilenumber":'',
       "password":'',
       "LogedIn":"false",
       data:this.props.Data
    }
  }
      getData = ()=>{
          //this is used to call ajxcall
           GetServerData("http://localhost:5000/api/users/login",this.state).then((res)=>{
             alert(JSON.stringify(res.data.token));

             //Calling Dispatch method
             myStore.dispatch({
               
             })
           
          
         
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
    

export default connect((dispatch)=>{
  return {
    distaptch:myStore.dispatch,
  }
})(Login)
