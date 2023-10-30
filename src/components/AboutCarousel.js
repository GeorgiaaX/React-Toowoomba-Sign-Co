import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function AboutCarousel() {
  return (
    <div className="about-carousel-container">
      <Carousel prevLabel="" nextLabel="" indicators={false} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='./images/kfc.jpg'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='./images/dominoes.jpg'
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='./images/bayplaza.jpg'
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AboutCarousel;