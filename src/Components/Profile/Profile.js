import React    from "react";
import template from "./Profile.jsx";
import {connect} from 'react-redux';
import GetData from '../../Services/Getservercall'

class Profile extends React.Component {
  componentDidMount() {
     GetData( `http://localhost:5000/api/users/${this.props.Sdata.userId}`)
     .then((res)=> {
       
         console.log(`UserData:${res}`)
         this.setState({
           ...this.state,
           userData:res.data.user
         })
     },(err)=>{
 alert(err)
     })
  }
  constructor(props) {
    super(props)
  
    this.state = {
       data:this.props.Sdata,
       userData:{}
    }
  }
  
  render() {
    return template.call(this);
  }
}

export default connect((store)=>{
      return {
        Sdata:store.myReducer.UserData.data
      }
})(Profile)
