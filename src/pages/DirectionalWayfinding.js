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

function DirectionalWayfinding() {
  const faqItems = [
    {
      question: "Can wayfinding signs include my logo and brand colours?",
      answer:
        "Yes, all signage is custom-designed to match your brand identity.",
    },
    {
      question: "Do you make both permanent and temporary signs?",
      answer:
        "Absolutely. We offer both long-term solutions and cost-effective short-term options.",
    },
    {
      question: "What materials are available?",
      answer:
        "From aluminium and acrylic to vinyl graphics, we’ll recommend the right material for your space",
    },
  ];

  useEffect(() => {
    document.title = "Wayfinding Signs Toowoomba | Directional Signage";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Improve navigation with clear wayfinding signage in Toowoomba. Professional directional signs for schools, hospitals, and commercial sites."
      );
  }, []);

  const imageUrls = [
    {
      src: "../portfolio/DirectionalWayfinding/Custom Directional Signage Toowoomba.webp",
      alt: "Directional signage Toowoomba – internal business signs",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Custom Street Signs Toowoomba.webp",
      alt: "Outdoor wayfinding signage Toowoomba – public space",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Customer Parking Signs Toowoomba.webp",
      alt: "Directional signage Toowoomba – Customer parking sign",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Directional Pylon Signs Toowoomba.webp",
      alt: "Directional pylon sign Toowoomba - large scale sign",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Directional Signs Toowoomba.webp",
      alt: "Multi tenant directional signage Toowoomba – custom arrows",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Marker Signage Toowoomba.webp",
      alt: "Custom fabricated wayfinding sign Toowoomba – garden display sign",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Statutory Signs Toowoomba.webp",
      alt: "Statutory bathroom signage Toowoomba – visual navigation solution",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Street Address Signs Toowoomba.webp",
      alt: "Street address sign Toowoomba – location signage",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Wayfinding Signs Toowoomba.webp",
      alt: "Garden wayfinding signage Toowoomba – professional design",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Wheel Stop Signs Toowoomba.webp",
      alt: "Completed directional carpark signage Toowoomba project",
    },
  ];

  const items = [
    {
      title: "Reception & Interior Signage",
      desc: "Create a professional, welcoming space with custom interior signage.",
      to: "/reception-interior",
    },
    {
      title: "Structural Signage",
      desc: "Durable building and structural signage designed for visibility and impact.",
      to: "/structural-signage",
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
            title: "Directional and Wayfinding Signs",
            lastWord: "Toowoomba",
            subheading:
              "Clear signage helps people navigate spaces with ease. At Toowoomba Sign Co, we design directional and wayfinding signs that guide staff, visitors, and customers through offices, campuses, shopping centres, and more. Our signage blends clarity with professional branding, ensuring people never feel lost.",
              link: "/directional-wayfinding"
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Why</span> Wayfinding Matters
          </h2>
        </div>

        <div className="product-description">
          <p className="description-text text-muted">
            Effective wayfinding signage improves user experience, prevents
            confusion, and keeps people moving efficiently through your space.
            From hospitals and schools to commercial buildings and event venues,
            clear directional signs make a lasting impression.
          </p>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> Directional & Wayfinding
            Solutions
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
                Directional Arrows & Maps – For offices, campuses, and
                facilities.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>Room & Department Signs – Clearly identify locations.</span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Floor & Wall Graphics – Creative navigation for large spaces.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Safety & Compliance Signage – Ensure staff and visitor safety.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Temporary Event Signage – Perfect for short-term venues and
                gatherings.
              </span>
            </li>
          </ul>
          <p className="description-text text-muted mt-2">
            All designs are tailored to your brand, ensuring functionality
            without sacrificing style.
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
            We’ve installed wayfinding signage in healthcare, education, retail,
            and commercial environments across Toowoomba. See our Portfolio for
            examples
          </p>
          <Button className="py-2 mt-4">
            <a
              href="/gallery-directional-wayfinding"
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
            Help people find their way with professional directional signage.
            <Link to="/contact" className="text-white">
              {" "}
              Contact Toowoomba Sign Co{" "}
            </Link>{" "}
            for a custom solution.
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

export default DirectionalWayfinding;
