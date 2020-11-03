import React    from "react";
import template from "./AllServicesComp.jsx";

class AllServicesComp extends React.Component {
  constructor(props) {
    super(props)
  
    this.Allservices =[ {
       title:props.title,
       img1:props.img1,
       servicename1:props.servicename1,
       img2:props.img2,
       servicename2:props.servicename2,
       img3:props.img3,
       servicename3:props.servicename3,


    },
   
   
  
  ]
  }
  
  render() {
    return template.call(this);
  }
}

export default AllServicesComp;
