




import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // This is the CSS for the carousel. You can customize it to your needs.
import acrophobiee from '../../../assets/images/acrophobia.jpg';
import acrophobieSolution from "../../../assets/images/achroSolution.png";
import arachrophobie from "../../../assets/images/aracrophobie1.jpg";
function CarouselTherapies({children}) {
   
  return (
   <>
   <div className="App">
      <Carousel autoPlay>
        <div>
          <img src={acrophobiee} alt="Image 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={acrophobieSolution} alt="Image 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={arachrophobie} alt="Image 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
   </>
  )
}

export default CarouselTherapies