import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import GallerySlide from "../components/GallerySlide";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalButton from "../components/ModalButton";

function WindowGraphics() {
  useEffect(() => {
    document.title = "Window Graphics Toowoomba | Glass Films & Signage";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Transform plain glass with window graphics and films from Toowoomba Sign Co. Frosted films, vinyl signage, and custom glass designs."
      );
  }, []);

  const faqItems = [
    {
      question: "Will window films damage the glass?",
      answer:
        "No. Our films are applied with professional adhesives that can be removed or replaced without damage.",
    },
    {
      question: "Can films block UV rays?",
      answer:
        "Yes, many of our films reduce UV exposure, helping protect interiors and furnishings.",
    },
    {
      question: "How long do window graphics last?",
      answer: "Depending on the film type, they typically last 3–7 years.",
    },
  ];

  const imageUrls = [
    {
      src: "../portfolio/WindowGraphics/Custom Window & Glass Signage Toowoomba.webp",
      alt: "One way vision window signage Toowoomba – retail glass graphics",
    },
    {
      src: "../portfolio/WindowGraphics/Door Frosting Toowoomba.webp",
      alt: "Frosted glass signage Toowoomba – privacy film installation",
    },
    {
      src: "../portfolio/WindowGraphics/Door Glass Signage Toowoomba.webp",
      alt: "Window decal Toowoomba – business branding",
    },
    {
      src: "../portfolio/WindowGraphics/One Way Vision Window Signage Toowoomba.webp",
      alt: "Glass film signage Toowoomba – interior design element",
    },
    {
      src: "../portfolio/WindowGraphics/Shopfront Glass Signage Toowoomba.webp",
      alt: "Shopfront window graphics Toowoomba – custom decals",
    },
    {
      src: "../portfolio/WindowGraphics/Store Glass Signs Toowoomba.webp",
      alt: "Branded glass signage Toowoomba – vinyl application",
    },
    {
      src: "../portfolio/WindowGraphics/Window & Glass Frosting Toowoomba.webp",
      alt: "Frosted glass signage Toowoomba – privacy and business display",
    },
    {
      src: "../portfolio/WindowGraphics/Window Frosting & One Way Vision Toowoomba.webp",
      alt: "Entry door glass film signage Toowoomba – privacy and branding",
    },
    {
      src: "../portfolio/WindowGraphics/Window Frosting Toowoomba Decorative.webp",
      alt: "Decorative glass film Toowoomba – modern finish",
    },
    {
      src: "../portfolio/WindowGraphics/Window Signage Toowoomba.webp",
      alt: "Completed window signage Toowoomba project",
    },
  ];

  const items = [
    {
      title: "Retail Signage",
      desc: "Eye-catching retail signage designed to attract customers and boost sales.",
      to: "/retail-pos",
    },
    {
      title: "Vehicle Wraps",
      desc: "Turn your vehicle into a moving billboard with high-quality custom wraps.",
      to: "/vehicle-branding",
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
            title: "Window Films & Signage",
            lastWord: "Toowoomba",
            subheading:
              "Windows and glass surfaces are valuable branding opportunities. At Toowoomba Sign Co, we design and install custom films and graphics that turn plain glass into eye-catching features. From frosted privacy films to promotional graphics, our solutions combine function and style.",
            link: "/window-graphics",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Benefits</span> of Glass Films &
            Graphics
          </h2>
        </div>

        <div className="product-description">
          <ul
            className="signage-list list-unstyled"
            aria-label="Exterior signage options"
          >
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Privacy – Frosted or one-way films provide discretion without
                blocking light.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Branding – Add logos, patterns, or promotional messaging to
                windows.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Energy Efficiency – Certain films reduce glare and heat.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Versatility – Perfect for offices, cafés, retail stores, and
                showrooms.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> Glass & Window Solutions
          </h2>
        </div>

        <div className="product-description">
          <ul
            className="signage-list list-unstyled"
            aria-label="Exterior signage options"
          >
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Frosted Films – Stylish and functional privacy options.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Decorative Graphics – Logos, patterns, and creative branding.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                One-Way Vision Film – Great for vehicles or street-facing
                windows.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Promotional Window Graphics – Seasonal or campaign-specific
                signage.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Safety Decals – Compliant markings for glass doors and panels.
              </span>
            </li>
          </ul>
          <p className="description-text text-muted mt-2">
            We handle everything from design to installation, ensuring a perfect
            finish.
          </p>
        </div>
      </section>

      <section className="product-detail-section">
        <div className="text-center mx-auto px-3">
          <h2 className="mb-3 fw-bold text-heading">Portfolio Highlights</h2>
          <p
            className="description-text text-muted"
            style={{ fontSize: "1.3rem" }}
          >
            Our window and glass signage projects range from subtle frosted
            designs in offices to bold retail promotions. See our Portfolio for
            inspiration.
          </p>
          <Button className="py-2 mt-4">
            <a
              href="/gallery-window-graphics"
              className="text-white text-decoration-none"
            >
              View Portfolio
            </a>
          </Button>
        </div>
      </section>

      <section className="product-detail-section my-4">
        <h2 className="mb-3 text-heading">FAQs</h2>
        <FaqAccordion
          id="accordion"
          items={faqItems}
          alwaysOpen={false}
          defaultOpenIndex={0}
          buttonClassName="btn btn-link text-left w-100"
        />
      </section>

      <section className="w-100 d-flex justify-content-center">
        <div
          className="product-detail-section rounded-4 shadow-sm p-4 p-md-5 text-center"
          style={{ maxWidth: 900 }}
        >
          <p className="mb-3" style={{ fontSize: "1.15rem", lineHeight: 1.6 }}>
            Enhance your windows with stylish, functional signage.
            <Link to="/contact" className="text-white">
              {" "}
              Contact Toowoomba Sign Co{" "}
            </Link>{" "}
            for a free consultation.
          </p>

          <div className="mt-2">
            <ModalButton />
          </div>
        </div>
      </section>

      <section className="my-5 mx-4">
        <div className="text-center mb-4 px-2">
          <h3 className="mb-2 fw-bold text-heading">
            Explore our other products
          </h3>

          <p
            className="description-text text-muted mb-0"
            style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)" }}
          >
            Looking for something different? Browse our most popular services.
          </p>
        </div>

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

export default WindowGraphics;
