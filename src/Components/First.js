/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import BeautyS1 from './images/beautycarousel1.jpg'
import BeautyS2 from './images/beautyCarousel2.jpg'
import ElecTricianC1 from './images/ElectricalCarousel.jpg'
import CarpenterC from './images/CarpenterCarousel.jpg';
import PlumberC1 from './images/PlumberCarousel1.jpg';
import PaintingC1 from './images/PaintinCarousel1.jpg';
import PaintingC2 from './images/PaintingCarousel2.jpg'

class First extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                 <div class="container mt-3">
       
        <div class="carousel slide carousel-fade" data-interval="2000" data-ride="carousel">
            <ul class="carousel-indicators">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
           <div class="carousel-inner">
               <div class="carousel-item active">
               <img src={PaintingC1} height="500px" width="1400px" />
              
              
               </div>

               <div class="carousel-item">
                <img src={BeautyS2} height="500px" width="1400px" />
                
                </div>
                <div class="carousel-item ">
                    <img src={ElecTricianC1} height="500px" width="1400px" />
                    <div class="carousel-caption animated heartbeat  ">
                        
         
                       </div>
                    </div>
                    <div class="carousel-item">
                        <img src={PlumberC1} height="500px" width="1400px" />
         
                        </div>


           </div>
            <a href="#" class="carousel-control-prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a href="#" class="carousel-control-next">
                <span class="carousel-control-next-icon"></span>
            </a>



        </div>




    </div>
            </div>
        );
    }
}

export default First;