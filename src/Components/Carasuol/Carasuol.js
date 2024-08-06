import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slider2 from '../Assets/slider2.webp';
import slider4 from '../Assets/slider4.webp';
import slider6 from '../Assets/slider6.webp';
import '../Carasuol/Carasuol.css';
const Carasuol = () => {

   return (
      <div className="oozz">
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={slider2}
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'90vh'}} 
          className="d-block w-100"
          src={slider4}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{height:'90vh'}}
          className="d-block w-100"
          src={slider6}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



      </div>



   )

}
export default Carasuol;