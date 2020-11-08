import React    from "react";
import template from "./SpecificServicecomp.jsx";

import {connect} from 'react-redux'
class SpecificServicecomp extends React.Component {
 
  componentDidMount(){
   
    this.setState({
      SpecificServicecomp:this.props.storeData
    })
    
  }
  constructor(props) {
    super(props)
  
    this.state = {
    SpecificServicecomp:  [
      
    ]}
       
    
  }
  render() {
    return template.call(this);
  }
}

export default connect((store)=>{
  return {
    storeData:store.myReducer.Services
  }
})(SpecificServicecomp);
