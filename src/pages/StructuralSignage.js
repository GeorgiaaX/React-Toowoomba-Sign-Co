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

function StructuralSignage() {
  useEffect(() => {
    document.title =
      "Pylon & Freestanding Signs Toowoomba | Structural Signage";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Toowoomba Sign Co specialises in structural signage – durable pylons, freestanding signs, and large-scale outdoor branding."
      );
  }, []);

  const faqItems = [
    {
      question: "Do I need council approval for structural signage?",
      answer:
        "In some cases, yes. We can guide you through the approval process and provide compliant designs.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Timeframes vary depending on complexity but typically range from 2–6 weeks, including design and approvals.",
    },
    {
      question: "Are these signs weather resistant?",
      answer:
        "Absolutely. We use premium materials and finishes designed to withstand Toowoomba’s climate.",
    },
  ];

  //gallerySlide Urls
  const imageUrls = [
    {
      src: "../portfolio/StructuralSignage/Billboard Signage Toowoomba.webp",
      alt: "Structural signage Toowoomba – outdoor billboard signage",
    },
    {
      src: "../portfolio/StructuralSignage/Billboard Signs Toowoomba.webp",
      alt: "Large freestanding signage Toowoomba – structural installation",
    },
    {
      src: "../portfolio/StructuralSignage/Custom Billboard Signs Toowoomba.webp",
      alt: "Custom billboard signage Toowoomba – durable outdoor signs",
    },
    {
      src: "../portfolio/StructuralSignage/Custom Frame Signage Toowoomba.webp",
      alt: "Structural aluminium sign Toowoomba – custom fabrication",
    },
    {
      src: "../portfolio/StructuralSignage/Freestanding School Signage Toowoomba.webp",
      alt: "Freestanding frame signage Toowoomba – business exposure",
    },
    {
      src: "../portfolio/StructuralSignage/Hanging 3D Signage Toowoomba.webp",
      alt: "Monument sign Toowoomba – structural ground signage",
    },
    {
      src: "../portfolio/StructuralSignage/Illuminated Frame Signs Toowoomba.webp",
      alt: "Outdoor illuminated structural signage Toowoomba – large format sign",
    },
    {
      src: "../portfolio/StructuralSignage/Monolith & Pylon Signs Toowoomba.webp",
      alt: "Multi-tenant signage Toowoomba – commercial area branding",
    },
    {
      src: "../portfolio/StructuralSignage/Outdoor Frame Signs Toowoomba.webp",
      alt: "Completed structural signage Toowoomba project",
    },
    {
      src: "../portfolio/StructuralSignage/Pylon Signs Toowoomba.webp",
      alt: "Pylon sign Toowoomba – commercial directional signage",
    },
  ];

  const items = [
    {
      title: "Commercial Signage",
      desc: "Professional signage solutions to elevate your business presence.",
      to: "/commercial-signage",
    },
    {
      title: "Directional & Wayfinding Signs",
      desc: "Clear, effective signage to guide customers through your space.",
      to: "/directional-wayfinding",
    },
    {
      title: "Retail Signage",
      desc: "Eye-catching retail signage designed to attract and convert.",
      to: "/retail-pos",
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
            title: "Structural Signage",
            lastWord: "Toowoomba",
            subheading:
              "Structural signage makes a bold statement and ensures your business is visible from a distance. At Toowoomba Sign Co, we design and construct durable, large-scale signage solutions that command attention. Whether you need a pylon, monolith, or freestanding sign, our expert signwriters in Toowoomba create custom designs built for impact and longevity.",
              link: "/structural-signage"
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Why</span> Structural Signage Works
          </h2>
        </div>

        <div className="product-description">
          <p className="description-text text-muted mb-2">
            Unlike smaller shopfront signs, structural signage stands
            independently and is designed to be seen from roads, highways, or
            across large properties. These signs are perfect for businesses
            wanting to:
          </p>
          <ul
            className="signage-list list-unstyled"
            aria-label="Exterior signage options"
          >
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>Improve visibility for passing traffic.</span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Mark entrances to industrial sites, schools, or shopping
                centres.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Provide long-term brand presence with a premium finish.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> Structural Signage Options
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
              <span>Pylon Signs – Tall, illuminated, and highly visible.</span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Monolith Signs – Sleek vertical panels with modern styling.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Freestanding Signs – Customisable for businesses and complexes.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Multi-Tenant Signs – Ideal for business parks and shopping
                centres.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Entrance Signs – Durable solutions for estates, factories, and
                schools
              </span>
            </li>
          </ul>
          <p className="description-text text-muted mt-2">
            Each structure is engineered for safety, installed to council
            standards, and finished with high-quality materials.
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
            We’ve designed structural signage for retail centres, service
            stations, schools, and industrial estates across Toowoomba. View
            examples in our Portfolio.
          </p>
          <Button className="py-2 mt-4">
            <a
              href="/gallery-structural-signage"
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
            Make your business impossible to miss with structural signage from
            Toowoomba Sign Co.
            <Link to="/contact" className="text-white">
              {" "}
              Contact Toowoomba Sign Co{" "}
            </Link>{" "}
            to discuss your project.
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

export default StructuralSignage;
