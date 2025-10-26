import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";

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
    "../images/BuildingShopface/BSImg45.jpg",
    "../images/BuildingShopface/BSImg98.jpg",
    "../images/BuildingShopface/BSImg46.jpg",
    "../images/BuildingShopface/BSImg21.jpg",
    "../images/BuildingShopface/BSImg22.jpg",
    "../images/BuildingShopface/BSImg7.jpg",
    "../images/BuildingShopface/BSImg23.jpg",
    "../images/BuildingShopface/BSImg9.jpg",
    "../images/BuildingShopface/BSImg10.jpg",
  ];

  const galleryUrls = [
    "../images/BuildingShopface/BSImg7.jpg",
    "../images/BuildingShopface/BSImg9.jpg",
    "../images/BuildingShopface/BSImg10.jpg",
    "../images/BuildingShopface/BSImg21.jpg",
    "../images/BuildingShopface/BSImg22.jpg",
    "../images/BuildingShopface/BSImg23.jpg",
    "../images/BuildingShopface/BSImg30.jpg",
    "../images/BuildingShopface/BSImg99.jpg",
    "../images/BuildingShopface/BSImg98.jpg",
    "../images/BuildingShopface/BSImg97.jpg",
    "../images/BuildingShopface/BSImg40.jpg",
    "../images/BuildingShopface/BSImg41.jpg",
    "../images/BuildingShopface/BSImg42.jpg",
    "../images/BuildingShopface/BSImg43.jpg",
    "../images/BuildingShopface/BSImg44.jpg",
    "../images/BuildingShopface/BSImg45.jpg",
    "../images/BuildingShopface/BSImg46.jpg",
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

      <section>
        <Gallery images={galleryUrls} title="Building Signage Gallery" />
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
