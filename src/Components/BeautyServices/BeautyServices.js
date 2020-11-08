import React    from "react";
import template from "./BeautyServices.jsx";
import Image2 from '../images/Beauty services/pexels-cottonbro-3993449.jpg'
import Image1 from '../images/Electrical services/pexels-pixabay-257886.jpg'
import GetDataFromServer from '../../Services/Getservercall'
import {connect} from 'react-redux'

class BeautyServices extends React.Component {
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
  
    this.beautyServiceData = [
      {
     img:Image2,
     title:'Facial & Hair Service',
     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
      },
      {
        img:Image1,
        title:'Body Massage',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
         },
         {
          img:Image2,
          title:'Women Special',
          description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
           },
           {
            img:Image2,
            title:'General Beauty Service',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
             }
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
})(BeautyServices)
