import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';

function AboutCarousel() {

  useEffect(() => {
    const imageUrls = [
      "../images/kfc.jpg",
      "../images/dominoes.jpg",
      "../images/bayplaza.jpg"
    ];

    imageUrls.forEach(src => {
      const img = new Image();
      img.src = src;
    });

  }, []); 

  return (
    <div className="about-carousel-container">
      <Carousel prevLabel="" nextLabel="" indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/kfc.jpg"
            alt="First slide"
            loading="lazy"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/dominoes.jpg"
            alt="Second slide"
            loading="lazy"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/bayplaza.jpg"
            alt="Third slide"
            loading="lazy"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AboutCarousel;