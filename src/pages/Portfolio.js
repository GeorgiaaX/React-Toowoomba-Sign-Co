import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import { Container, Row, Col } from "react-bootstrap";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";

function Portfolio() {
  useEffect(() => {
    document.title = "Signage Portfolio Toowoomba | Toowoomba Sign Co";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Explore our signage portfolio showcasing shopfronts, vehicle wraps, interior signage, and more. Toowoomba’s trusted sign writers."
      );
  }, []);

  const items = [
    {
      title: "About Us",
      desc: "Get to know the people behind Toowoomba Sign Co and how we work with our clients.",
      to: "/about-us",
    },
    {
      title: "Contact Us",
      desc: "Get in touch with our team to discuss your signage needs or request a free quote.",
      to: "/contact",
    },
    {
      title: "Learn About Our Process",
      desc: "See how we take your signage from concept and design through to installation.",
      to: "/our-process",
    },
  ];

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <FixedQuoteBtn />
      </section>

      <section>
        <Header
          isGenericPage={true}
          isContactPage={false}
          heading={{
            title: "Our Signage Portfolio – Toowoomba Signs That Stand ",
            lastWord: "Out",
            subheading:
              "At Toowoomba Sign Co, we’re proud to showcase the diverse range of custom signage projects we’ve delivered for local businesses across Toowoomba, the Darling Downs and throughout QLD. From small retail shops to large commercial clients, every project reflects our commitment to quality, creativity, and impact.",
          }}
        />
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col md={8} className="mx-auto text-center">
              <h2 className="display-6 fw-bold text-heading">
                Explore Our Work
              </h2>
              <p className="lead text-muted">
                From bold shopfronts to full vehicle wraps, we design and
                install signage that showcases your brand and gets you noticed
                around Toowoomba and beyond.
              </p>
            </Col>
          </Row>

          <Row className="gy-4">
            {[
              {
                title: "Shopfront & Building Signage",
                description:
                  "Eye-catching shopfront signs, fascia signage, and exterior branding that make a strong first impression.",
                href: "/gallery-building-shopface",
                icon: "fas fa-building",
              },
              {
                title: "3D & Illuminated Signs",
                description:
                  "Bright and bold illuminated signs, LED lightboxes, and 3D lettering that shine day or night.",
                href: "/gallery-illuminated-designs",
                icon: "fas fa-lightbulb",
              },
              {
                title: "Reception & Interior Signage",
                description:
                  "Professional office signs, wall graphics, and reception signage that bring interiors to life.",
                href: "/gallery-reception-interior",
                icon: "fas fa-store",
              },
              {
                title: "Structural Signage",
                description:
                  "Large-scale pylon and freestanding signage designed for maximum visibility and durability.",
                href: "/gallery-structural-signage",
                icon: "fa-brands fa-font-awesome",
              },
              {
                title: "Directional & Wayfinding Signs",
                description:
                  "Functional signage that helps customers navigate businesses, schools, hospitals, and public spaces.",
                href: "/gallery-directional-wayfinding",
                icon: "fas fa-diamond-turn-right",
              },
              {
                title: "Window Films & Graphics",
                description:
                  "Stylish frosted films, vinyl graphics, and privacy solutions for shops and offices.",
                href: "/gallery-window-graphics",
                icon: "fas fa-tv",
              },
              {
                title: "Vehicle Wraps & Signage",
                description:
                  "Custom car wraps, fleet signage, and vinyl lettering that turn vehicles into moving billboards.",
                href: "/gallery-vehicle-branding",
                icon: "fas fa-car-side",
              },
              {
                title: "Retail & Short-Term Signage",
                description:
                  "Posters, banners, and promotional graphics that boost sales and seasonal campaigns.",
                href: "/gallery-retail-pos",
                icon: "fas fa-bag-shopping",
              },
              {
                title: "Commercial Signage",
                description:
                  "Corporate branding, factory signs, and warehouse signage for businesses of all sizes.",
                href: "/gallery-commercial-signage",
                icon: "fas fa-sign-hanging",
              },
            ].map((service) => (
              <Col md={6} lg={4} key={service.title}>
                <a
                  href={service.href}
                  className="d-block h-100 service-card-link"
                  role="button"
                >
                  <div className="h-100 p-4 bg-transparent text-white shadow-sm rounded-3 border-top border-3 border-primary d-flex flex-column service-card">
                    <i
                      className={`product-icons ${service.icon} fa-3x mb-4`}
                      aria-hidden="true"
                    />
                    <h3 className="h5 fw-bold mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="mb-0 text-white-50">{service.description}</p>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="d-flex justify-content-center py-5">
        <div className="product-description">
          <h2 className="description-text text-heading font-lg mb-3">
            Why Choose Toowoomba Sign Co?
          </h2>
          <ul
            className="signage-list list-unstyled"
            aria-label="Exterior signage options"
          >
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>Local sign writers with years of experience</span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>Custom solutions designed for your brand</span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>High-quality materials and professional installation</span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>Proven results for Toowoomba businesses</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="product-detail-section my-4 text-center">
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Like what you see? Contact us today to discuss your own signage
          project and request a free quote.
        </p>
        <div className="d-flex justify-content-center">
          <ModalButton />
        </div>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col md={8} className="mx-auto text-center">
              <h2 className="display-6 fw-bold text-heading">
                Explore Our Services
              </h2>
            </Col>
          </Row>

          <Row className="gy-4">
            {[
              {
                title: "Shopfront & Building Signage",
                description:
                  "Eye-catching shopfront signs, fascia signage, and exterior branding that make a strong first impression.",
                href: "/building-shopface",
                icon: "fas fa-building",
              },
              {
                title: "3D & Illuminated Signs",
                description:
                  "Bright and bold illuminated signs, LED lightboxes, and 3D lettering that shine day or night.",
                href: "/illuminated-designs",
                icon: "fas fa-lightbulb",
              },
              {
                title: "Reception & Interior Signage",
                description:
                  "Professional office signs, wall graphics, and reception signage that bring interiors to life.",
                href: "/reception-interior",
                icon: "fas fa-store",
              },
              {
                title: "Structural Signage",
                description:
                  "Large-scale pylon and freestanding signage designed for maximum visibility and durability.",
                href: "/structural-signage",
                icon: "fa-brands fa-font-awesome",
              },
              {
                title: "Directional & Wayfinding Signs",
                description:
                  "Functional signage that helps customers navigate businesses, schools, hospitals, and public spaces.",
                href: "/directional-wayfinding",
                icon: "fas fa-diamond-turn-right",
              },
              {
                title: "Window Films & Graphics",
                description:
                  "Stylish frosted films, vinyl graphics, and privacy solutions for shops and offices.",
                href: "/window-graphics",
                icon: "fas fa-tv",
              },
              {
                title: "Vehicle Wraps & Signage",
                description:
                  "Custom car wraps, fleet signage, and vinyl lettering that turn vehicles into moving billboards.",
                href: "/vehicle-branding",
                icon: "fas fa-car-side",
              },
              {
                title: "Retail & Short-Term Signage",
                description:
                  "Posters, banners, and promotional graphics that boost sales and seasonal campaigns.",
                href: "/retail-pos",
                icon: "fas fa-bag-shopping",
              },
              {
                title: "Commercial Signage",
                description:
                  "Corporate branding, factory signs, and warehouse signage for businesses of all sizes.",
                href: "/commercial-signage",
                icon: "fas fa-sign-hanging",
              },
            ].map((service) => (
              <Col md={6} lg={4} key={service.title}>
                <a
                  href={service.href}
                  className="d-block h-100 service-card-link"
                  role="button"
                >
                  <div className="h-100 p-4 bg-transparent text-white shadow-sm rounded-3 border-top border-3 border-primary d-flex gap-3 align-items-center service-card">
                    <i
                      className={`product-icons ${service.icon} fa-2x`}
                      aria-hidden="true"
                    />
                    <h3 className="h5 fw-bold mb-0 text-white ml-2">
                      {service.title}
                    </h3>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="my-5 mx-4">
        <div className="row gap-3 justify-content-center">
          {items.map((item) => (
            <div key={item.to} className="col-12 col-md-4">
              <Link to={item.to} className="text-decoration-none d-block">
                <div className="shadow-sm rounded-4 p-4 other-products-card">
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <div className="flex-grow-1">
                      <h4
                        className="mb-1 text-heading"
                        style={{ fontSize: "1.05rem" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-muted mb-0"
                        style={{ lineHeight: 1.5 }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default Portfolio;
