import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";

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
    "../images/StructuralSignage/SSImg14.jpg",
    "../images/StructuralSignage/SSImg12.jpg",
    "../images/StructuralSignage/SSImg9.jpg",
    "../images/StructuralSignage/SSImg13.jpg",
    "../images/StructuralSignage/SSImg18.jpg",
    "../images/StructuralSignage/SSImg24.jpg",
    "../images/StructuralSignage/SSImg19.jpg",
    "../images/StructuralSignage/SSImg24.jpg",
    "../images/StructuralSignage/SSImg19.jpg",
    "../images/StructuralSignage/SSImg40.jpg",
  ];

  //gallery stills urls
  const galleryUrls = [
    "../images/StructuralSignage/SSImg9.jpg",
    "../images/StructuralSignage/SSImg10.jpg",
    "../images/StructuralSignage/SSImg11.jpg",
    "../images/StructuralSignage/SSImg12.jpg",
    "../images/StructuralSignage/SSImg13.jpg",
    "../images/StructuralSignage/SSImg14.jpg",
    "../images/StructuralSignage/SSImg18.jpg",
    "../images/StructuralSignage/SSImg19.jpg",
    "../images/StructuralSignage/SSImg20.jpg",
    "../images/StructuralSignage/SSImg15.jpg",
    "../images/StructuralSignage/SSImg17.jpg",
    "../images/StructuralSignage/SSImg24.jpg",
    "../images/StructuralSignage/SSImg40.jpg",
    "../images/StructuralSignage/SSImg41.jpg",
    "../images/StructuralSignage/SSImg42.jpg",
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

      <section>
        <Gallery images={galleryUrls} title="Structural Signage Gallery" />
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
