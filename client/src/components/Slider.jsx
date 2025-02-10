import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../assets/images/banner2.jpg';
const Slider = () => {
  return (
    <>
     <section className="slider_section">
         <Carousel id="main_slider" className="carousel slide banner-main">
            <Carousel.Item className="carousel-item active">
               <img className="first-slide d-block w-100" src={banner} alt="First slide"/>
               <Carousel.Caption className="relative">
                  <h1>Our <br/> <strong className="black_bold">Latest </strong><br/>
                     <strong className="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br/>
                    eader will be distracted by the readable content of a page </p>
                  <a  >see more Products</a>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
               <img className="second-slide d-block w-100" src={banner} alt="Second slide"/>
               <Carousel.Caption className="relative">
                  <h1>Our <br/> <strong className="black_bold">Latest </strong><br/>
                     <strong className="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br/>
                    eader will be distracted by the readable content of a page </p>
                  <a  >see more Products</a>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
               <img className="third-slide d-block w-100" src={banner}  alt="Third slide"/>
               <Carousel.Caption className="relative">
                  <h1>Our <br/> <strong className="black_bold">Latest </strong><br/>
                     <strong className="yellow_bold">Product </strong></h1>
                  <p>It is a long established fact that a r <br/>
                    eader will be distracted by the readable content of a page </p>
                  <a  >see more Products</a>
               </Carousel.Caption>
            </Carousel.Item>

         </Carousel>
      </section>
    
    
    </>
 
  );
};

export default Slider;