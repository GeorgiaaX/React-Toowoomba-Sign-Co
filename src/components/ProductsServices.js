import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomLink from "../components/CustomLink";

function ProductsServices() {
  return (
    <>
      <h2 className="services-title">
        Signage Products and <b className="bold-word">Services</b>
      </h2>
      <p className="text-center mb-3 text-muted mx-1" style={{fontSize: "1.3rem"}}>
        Let us help you create the perfect signage for your business from our
        range of signage products and services.
      </p>
      <Container className="products-services-section">
        <Container className="product-container">
          <Row className="mt-4">
            {RenderProductColumn({
              iconClass: "fas fa-building",
              title: "Shopfront & Building Signage",
              service:
                "Make a strong first impression with professional shopfront and building signage in Toowoomba. We design and install fascia signs, building cladding, window graphics, and 3D lettering to attract customers and elevate your brand presence. Whether you own a café, retail store, or office, our custom signage ensures your business is visible and memorable.",
              description: "Fascia Signs / 3D Lettering / Lightboxes / Pylons",
              link: "building-shopface",
              bordered: true,
            })}
            {RenderProductColumn({
              iconClass: "fas fa-lightbulb",
              title: "3D & Illuminated Signs",
              service:
                "Stand out day and night with our 3D and illuminated signs. We specialise in LED lightboxes, backlit lettering, and 3D fabricated signage that grabs attention while showcasing your brand. Built to withstand local conditions, these signs are ideal for Toowoomba business’s shopfronts, offices, and commercial spaces where 24/7 visibility is key.",
              description: "Fabricated Letters / Lightboxes / 3D Signage",
              link: "illuminated-designs",
              bordered: false,
            })}
            {RenderProductColumn({
              iconClass: "fas fa-store",
              title: "Reception & Interior Signage",
              service:
                "Enhance your Toowoomba business’s professional image with custom interior signage. From reception signs and wall graphics to branded office displays, we create signage that reflects your company’s personality, reinforces your brand, and impresses clients the moment they walk through the door.",
              description:
                "Wall Graphics / 3D Lettering & Signs / Illuminated Signs & Lettering",
              link: "reception-interior",
              bordered: true,
            })}
            {RenderProductColumn({
              iconClass: "fa-brands fa-font-awesome",
              title: "Structural Signage",
              service:
                "Structural signage for Toowoomba & the Darling Downs combine form and function, helping your business stand out with large-scale, durable, and visually impactful designs. This includes pylons, monoliths, entrance signs, and freestanding structures tailored to your location, brand, and visibility requirements.",
              description:
                "New Structures & Framework / Existing Structures / Freestanding & Architectural Signage",
              link: "structural-signage",
              bordered: false,
            })}
            {RenderProductColumn({
              iconClass: "fas fa-diamond-turn-right",
              title: "Directional & Wayfinding Signs",
              service:
                "Keep customers, visitors, and staff moving efficiently with clear, professional directional and wayfinding signage. Ideal for shopping centres, campuses, hospitals, and large office complexes, our signs are designed to guide people effectively while reinforcing your brand identity.",
              description: "Directional Pylons / Wayfinding Signage",
              link: "directional-wayfinding",
              bordered: true,
            })}
            {RenderProductColumn({
              iconClass: "fas fa-tv",
              title: "Window Films & Graphics",
              service:
                "Transform windows into a branding or privacy solution with our decorative and functional glass films. We offer frosted films, perforated vinyl, promotional graphics, and custom designs to protect privacy, enhance aesthetics, or promote products and services.",
              description:
                "Window Frosting / One Way Vision / Privacy Film / Printed Vinyl Graphics / Cut Vinyl Lettering",
              link: "window-graphics",
              bordered: false,
            })}
            {RenderProductColumn({
              iconClass: "fas fa-car-side",
              title: "Vehicle Wraps & Signage",
              service:
                "Turn your vehicle fleet into moving billboards with custom wraps and signage. We provide full wraps, partial wraps, and vinyl lettering for cars, utes, vans, trailers, and trucks. Designed for maximum impact and durability, our vehicle signage is one of the most effective ways to advertise your business across Toowoomba.",
              description:
                "Vehicle Wraps / Magnetic Vehicle Signs / Vehicle Branding",
              link: "vehicle-branding",
              bordered: true,
            })}
            {RenderProductColumn({
              iconClass: "fas fa-bag-shopping",
              title: "Retail & Short Term Signs",
              service:
                "Boost your sales and attract attention with retail signage and short-term promotions. We design corflute signs, posters, banners, floor decals, point-of-sale displays, and temporary signage that captures interest, drives action, and enhances your store environment in Toowoomba.",
              description:
                "A Frames / Pull Up Banners / Stickers / Shop Hoardings / Banners / Flags / Counter Signs",
              link: "retail-pos",
              bordered: false,
            })}
            {RenderProductColumn({
              iconClass: "fas fa-sign-hanging",
              title: "Commercial Signage",
              service:
                "From corporate branding to large-scale commercial projects, our commercial signage solutions combine durability, visibility, and design. We create signs that suit offices, factories, warehouses, and commercial properties, ensuring your brand is professional, consistent, and easy to find.",
              description:
                "Truck & Trailer Lining & Scrolling / Printed Vinyl Graphics / Cut Vinyl Lettering",
              link: "commercial-signage",
              bordered: true,
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

function RenderProductColumn({
  iconClass,
  title,
  service,
  description,
  link,
  bordered = false,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsFlipped((f) => !f);
    }
  };

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    const onChange = () => mq.matches && setIsFlipped(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Col
      xl={6}
      lg={6}
      md={6}
      sm={12}
      className="d-flex justify-content-center mb-4"
    >
      <div
        className="flip-card"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
      >
        <div className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}>
          <div className="flip-card-front">
            <i className={`product-icons ${iconClass} fa-3x mb-4`} />
            <h6
              style={{
                fontSize: "24px",
                color: "rgba(12, 140, 233, 0.8)",
                fontWeight: "600",
              }}
            >
              {title}
            </h6>
            <p>{service}</p>
          </div>

          <div className="flip-card-back">
            <i className={`${iconClass} fa-3x flip-back-icons`} />
            <p>{description}</p>
            <CustomLink to={link}>
              <Button variant="outline-light">Learn More</Button>
            </CustomLink>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProductsServices;
