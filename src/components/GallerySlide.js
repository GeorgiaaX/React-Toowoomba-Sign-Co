import { Container, Image } from "react-bootstrap"

export default function GallerySlide({ images = [] }) {
  const repeats = 5

  return (
    <Container fluid className="gallery-container">
      <div className="gallery-slide">
        {Array.from({ length: repeats }).flatMap((_, repeatIndex) =>
          images.map((image, index) => (
            <Image
              key={`${repeatIndex}-${image.src}-${index}`}
              src={image.src}
              alt={image.alt || `Gallery Image ${index + 1}`}
              loading="lazy"
              className="gallery-slide-img"
            />
          )),
        )}
      </div>
    </Container>
  )
}
