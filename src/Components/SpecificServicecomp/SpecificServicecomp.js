import React    from "react";
import template from "./SpecificServicecomp.jsx";
import Image3 from '../images/beautycarousel1.jpg'
import Image1 from '../images/Cleaning services/pexels-karolina-grabowska-4239091.jpg'
import Image2 from '../images/Cleaning services/pexels-karolina-grabowska-4239146.jpg'

class SpecificServicecomp extends React.Component {
  constructor(props) {
    super(props)
  
    this.specificServiceData = [
      {
        servicename:"CAR WASHING",
        serviceprovidername:"Alex Carry",
        location:"Warangal",
        img:Image3,
        price:"900",
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis neque dolorum eum adipisci sequi asperiores voluptatem aliquid, nihil impedit et? '
         },
         {
          servicename:"CAR WASHING",
          serviceprovidername:"Chris David",
          location:"Warangal",
          img:Image1,
          price:"750",
          description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis neque dolorum eum adipisci sequi asperiores voluptatem aliquid, nihil impedit et? '
           },
           {
            servicename:"CAR WASHING",
            serviceprovidername:"Jhones David",
            location:"Warangal",
            img:Image2,
           price:"950",
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis neque dolorum eum adipisci sequi asperiores voluptatem aliquid, nihil impedit et? '
             },
    ]
       
    
  }
  render() {
    return template.call(this);
  }
}

export default SpecificServicecomp;
