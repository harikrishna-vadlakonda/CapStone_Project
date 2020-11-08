import React    from "react";
import template from "./MainServiceComp.jsx";
// import GetServerData from '../../Services/Getservercall'
import {connect} from 'react-redux'

class MainServiceComp extends React.Component {

  // componentDidMount() {
  //   alert("ComponentDidM Triggered")
  //   GetServerData("http://localhost:5000/api/servicess/").then((res)=>{
  //     console.log(res)
  //         this.props.dispatch({
  //           type:"ALLSERVICES",
  //           payload:res.data.servicess
  //         })
        

  //   })
  // }
  render() {
    return template.call(this);
  }
}

export default connect(null,(dispatch)=>{
    return {
      dispatch
    }
})(MainServiceComp);
