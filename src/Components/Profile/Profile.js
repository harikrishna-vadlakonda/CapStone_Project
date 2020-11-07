import React    from "react";
import template from "./Profile.jsx";
import {connect} from 'react-redux'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:this.props.Sdata
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
