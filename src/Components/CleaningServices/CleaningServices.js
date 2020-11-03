import React    from "react";
import template from "./CleaningServices.jsx";
import Image1 from '../images/Cleaning services/pexels-inline-media-5229639.jpg'
import Image2 from '../images/Cleaning services/pexels-karolina-grabowska-4239091.jpg'
import Image3 from '../images/Cleaning services/pexels-karolina-grabowska-4239146.jpg'

class CleaningServices extends React.Component {
  constructor(props) {
    super(props)
  
    this.cleaningServiceData = [
      {
     img:Image2,
     title:'Home Cleaning Service',
     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
      },
      {
        img:Image1,
        title:'Car Washing Service',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
         },
         {
          img:Image2,
          title:' General Cleaning Service',
          description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
           },
           {
            img:Image3,
            title:'Carpet Cleaning Service',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
             },
    ]
  }
       
    
  render() {
    return template.call(this);
  }
}

export default CleaningServices;
