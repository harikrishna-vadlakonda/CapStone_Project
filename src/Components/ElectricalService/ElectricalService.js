import React    from "react";
import template from "./ElectricalService.jsx";
import Image2 from '../images/Electrical services/pexels-pixabay-257736.jpg'
import Image1 from '../images/Electrical services/pexels-pixabay-257886.jpg'


class ElectricalService extends React.Component {
  constructor(props) {
    super(props)
  
    this.electricalServiceData = [
      {
     img:Image2,
     title:'Fan Service',
     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
      },
      {
        img:Image1,
        title:'AC Service',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
         },
         {
          img:Image2,
          title:'Switch Service',
          description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
           },
           {
            img:Image2,
            title:'Fan Service',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias eaque fugiat! Culpa saepe nihil facere eos doloribus in obcaecati officiis distinctio? Harum, cum perferendis inventore autem facere non iste tempore labore hic, deserunt illum, expedita commodi tempora nam quaerat laudantium ad voluptas ducimus dolor optio obcaecati repudiandae nemo. Laudantium.'
             },
    ]
       
    
  }
  
  render() {
    return template.call(this);
  }
}

export default ElectricalService;
