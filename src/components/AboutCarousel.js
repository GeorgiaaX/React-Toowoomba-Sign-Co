import React from "react"
import Carousel from "react-bootstrap/Carousel"

function AboutCarousel() {
  const images = [
    {
      src: "/carousel/3D Acrylic Fascia Shopfront Signs Toowoomba.webp",
      alt: "3D acrylic fascia shopfront sign installed on a Toowoomba storefront",
    },
    {
      src: "/carousel/3D Reception Signs Toowoomba.webp",
      alt: "3D reception sign mounted behind a front desk in a Toowoomba business",
    },
    {
      src: "/carousel/Billboard Signage Toowoomba.webp",
      alt: "Large outdoor billboard signage installed in Toowoomba",
    },
    {
      src: "/carousel/Directional Pylon Signs Toowoomba.webp",
      alt: "Directional pylon sign with multiple tenant listings in Toowoomba",
    },
    {
      src: "/carousel/Router Cut 3D Signs Toowoomba.webp",
      alt: "Router-cut 3D lettering signage for a Toowoomba business",
    },
    {
      src: "/carousel/Vehicle Signage & Wraps Toowoomba.webp",
      alt: "Branded vehicle signage and wrap on a work vehicle in Toowoomba",
    },
  ]

  return (
    <div className="about-carousel-container">
      <Carousel prevLabel="" nextLabel="" indicators={false}>
        {images.map((img) => (
          <Carousel.Item key={img.src} className="about-carousel-item">
            <img className="about-carousel-img" src={img.src} alt={img.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default AboutCarousel
