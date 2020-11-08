import React    from "react";
import template from "./TutorialServices.jsx";
import Image1 from '../images/Study Services/TutorialService1.jpg'
import Image2 from '../images/Study Services/Tutorialservice2.jpg'
import Image3 from '../images/Study Services/pexels-edward-jenner-4031820.jpg'
import {connect} from 'react-redux'
import GetDataFromServer from '../../Services/Getservercall'

class TutorialServices extends React.Component {
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
  
    this.electricalServiceData = [
      {
     img:Image2,
     title:"Home Tuitions ",
     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
      },
      {
        img:Image1,
        title:'IT Courses',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
         },
         {
          img:Image3,
          title:'Exam Preparation',
          description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
           },
           {
            img:Image2,
            title:'Music Classes',
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
})(TutorialServices)

