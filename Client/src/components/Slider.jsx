import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../assets/images/banner2.jpg';
const Slider = () => {
  return (
    <section className="slider_section">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Our <br /> <strong className="black_bold">Latest </strong><br />
              <strong className="yellow_bold">Product </strong></h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
            <a>See more Products</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Our <br /> <strong className="black_bold">Latest </strong><br />
              <strong className="yellow_bold">Product </strong></h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
            <a>See more Products</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Our <br /> <strong className="black_bold">Latest </strong><br />
              <strong className="yellow_bold">Product </strong></h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
            <a>See more Products</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Slider;