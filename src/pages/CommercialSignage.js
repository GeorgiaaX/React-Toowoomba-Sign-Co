import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import GallerySlide from "../components/GallerySlide";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";
import { Button } from "react-bootstrap";

function BuildingShopface() {
  useEffect(() => {
    document.title = "Commercial Signage Toowoomba & QLD | Business Signs";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Professional commercial signage for Toowoomba & QLD businesses. From warehouses to offices, we design and install durable business signs."
      );
  }, []);

  const faqItems = [
    {
      question: "Do you work with large corporate clients?",
      answer:
        "Yes, we regularly deliver projects for both local businesses and national companies.",
    },
    {
      question: "Can you manage signage for multiple locations?",
      answer:
        "Absolutely. We provide consistent branding and installation across multiple sites.",
    },
    {
      question: "Do you provide safety and compliance signage?",
      answer:
        "Yes, we supply all required safety signs for workplaces and industrial settings.",
    },
  ];

  const imageUrls = [
    {
      src: "../portfolio/CommercialSignage/3D Illuminated Letters Toowoomba.webp",
      alt: "",
    },
    {
      src: "../portfolio/CommercialSignage/Commercial Illuminated Signage Toowoomba.webp",
      alt: "",
    },
    {
      src: "../portfolio/CommercialSignage/Commercial New Build Signage Toowoomba.webp",
      alt: "",
    },
    {
      src: "../portfolio/CommercialSignage/Commercial Signage Print Rollouts Toowoomba.webp",
      alt: "",
    },
    {
      src: "../portfolio/CommercialSignage/Custom Commercial Signage.webp",
      alt: "",
    },
    {
      src: "../portfolio/CommercialSignage/Custom Illuminated Commercial Signs Toowoomba.webp",
      alt: "",
    },
    {
      src: "../portfolio/CommercialSignage/Custom Lightboxes Toowoomba.webp",
      alt: "",
    },
    {
      src: "../portfolio/CommercialSignage/Entire Building Commercial Signage Toowoomba.webp",
      alt: "",
    },
    {
      src: "../portfolio/CommercialSignage/Large Scale Commercial Signage Toowoomba.webp",
      alt: "",
    },
    {
      src: "../portfolio/CommercialSignage/Pylon Sign Refurbishments Toowoomba.webp",
      alt: "",
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
            title: "Commercial Signage Toowoomba & ",
            lastWord: "Throughout QLD",
            subheading:
              "Large-scale businesses need signage that reflects their professionalism and durability. At Toowoomba Sign Co, we create commercial signage for offices, warehouses, factories, and corporate sites. Our solutions are built to last and designed to represent your brand with authority.",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Why</span> Commercial Signage is
            Essential
          </h2>
        </div>

        <div className="product-description">
          <p className="description-text text-muted mb-2">
            Commercial environments require clear, durable, and often
            large-format signage to:
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
              <span>Provide visibility from a distance.</span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>Direct staff and visitors safely.</span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>Showcase a strong, professional brand image.</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> Commercial Signage Solutions
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
                Corporate Branding Signs – Reception logos, feature walls, and
                entry points.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Factory & Warehouse Signs – Large-scale exterior branding.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Safety & Compliance Signs – Essential workplace signage.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Directional Signs – Guide staff and visitors with clarity.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Illuminated & Structural Signs – High-impact solutions for large
                sites.
              </span>
            </li>
          </ul>
          <p className="description-text text-muted mt-2">
            We handle everything from initial design to installation, ensuring
            seamless results.
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
            Our commercial projects include offices, industrial estates, and corporate buildings across Toowoomba. Browse our Portfolio to see what we’ve created.
          </p>
          <Button className="py-2 mt-4">
            <a
              href="/gallery-commercial-signage"
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

      <section className="product-detail-section my-4">
        <p style={{ fontSize: "1.3rem" }} className="text-center">
          For durable, professional commercial signage in Toowoomba & throughout
          QLD, trust Toowoomba Sign Co. Contact us today to start your project.
        </p>
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default BuildingShopface;
