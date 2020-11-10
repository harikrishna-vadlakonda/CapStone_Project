/* eslint-disable no-useless-constructor */
import React    from "react";
import template from "./ElectricalService.jsx";
import Image2 from '../images/Electrical services/Electrician images/7f18edcfbef3b866432ebf758deb69e8.jpg'
import Image1 from '../images/Electrical services/pexels-pixabay-257886.jpg'
import Image3 from '../images/Electrical services/Electrician images/electrician-working-on-a-plug-in-a-house-H45415.jpg'
import Image4 from '../images/Electrical services/Electrician images/industrial-electrician-feature.jpg'

import {connect} from 'react-redux'
import GetDataFromServer from '../../Services/Getservercall'



class ElectricalService extends React.Component {

  
  getData = (servicetitle) => {
    GetDataFromServer("http://localhost:5000/api/servicess/").then((res)=>{
         
          const filteredData = res.data.servicess.filter((d,i)=>{
                          return d.services === servicetitle
          })
          console.log(res)
          this.props.dispatch({
            type:'SERVICES',
            payload:filteredData

          })
         
            this.props.history.push("/specific")
      
    })
}
  
  constructor(props) {
    super(props)
  
    this.state = [
      {
     img:Image2,
     title:'Repairs & Fixes',
     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
      },
      {
        img:Image1,
        title:'Electricity Breakdown',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
         },
         {
          img:Image4,
          title:'Electrical wiring',
          description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
           },
           {
            img:Image3,
            title:'Installation Services',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
             },
    ]
       
    
  }
  
  render() {
    return template.call(this);
  }
}

export default connect(null,(dispatch)=>{
  return {
    dispatch
  }
})(ElectricalService);
