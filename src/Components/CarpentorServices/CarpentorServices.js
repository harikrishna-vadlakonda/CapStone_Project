import React    from "react";
import template from "./CarpentorServices.jsx";
import Image1 from '../images/Carpenter services/pexels-bidvine-1249611.jpg'
import Image2 from '../images/Carpenter services/pexels-pixabay-209235.jpg'
import Image3 from '../images/Carpenter services/pexels-pixabay-221027.jpg'

class CarpentorServices extends React.Component {
  constructor(props) {
    super(props)
  
    this.carpentorServiceData = [
      {
     img:Image2,
     title:'New Furniture Making Service',
     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
      },
      {
        img:Image1,
        title:'Other Woodwork Service',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
         },
         {
          img:Image2,
          title:'Repair & Switche Service',
          description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
           },
           {
            img:Image3,
            title:'Fan Service',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
             },
    ]
       
    
  }
  render() {
    return template.call(this);
  }
}

export default CarpentorServices;
