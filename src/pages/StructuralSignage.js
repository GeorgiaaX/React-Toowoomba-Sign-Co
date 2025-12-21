import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import GallerySlide from "../components/GallerySlide";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";
import { Button } from "react-bootstrap";

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
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      {/* <section>
        <ProductDetail
          firstPhrase="Make a bold statement"
          secondPhrase="Freestanding signs for your business"
          descriptionFirst="Crafted with precision and durability in mind, our structural signage seamlessly integrates with your space, conveying essential information in a visually striking way"
          descriptionSecond="Whether it's identifying key locations in a corporate building, enhancing the  aesthetics of a public space, or providing crucial safety information, our structural signs serve a dual purpose – form and function."
          buttonLink="/directional-wayfinding"
          buttonTitle="View our directional and wayfinding signage"
        ></ProductDetail>
      </section> */}

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
         We’ve designed structural signage for retail centres, service stations, schools, and industrial estates across Toowoomba. View examples in our Portfolio.
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

      <section className="product-detail-section my-4">
        <p style={{ fontSize: "1.3rem" }} className="text-center">
          Make your business impossible to miss with structural signage from
          Toowoomba Sign Co. Contact us today to discuss your project.
        </p>
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default StructuralSignage;
