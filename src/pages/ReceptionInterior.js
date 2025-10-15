import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";

function ReceptionInterior() {
  useEffect(() => {
    document.title = "Interior Signage Toowoomba | Reception Signs Toowoomba";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Create a lasting impression with reception and interior signage. Toowoomba Sign Co delivers professional office signs, wall graphics, and branding."
      );
  }, []);

  const faqItems = [
    {
      question: "Can interior signage be updated if we rebrand?",
      answer:
        "Yes, most signage can be redesigned and replaced to reflect your new brand.",
    },
    {
      question: "Do you install after hours?",
      answer:
        "We can arrange after-hours installation to minimise disruption to your business.",
    },
    {
      question: "Can you help with design ideas?",
      answer:
        "Definitely. Our in-house designers will work with you to develop creative, functional signage solutions.",
    },
  ];

  //gallerySlide Urls
  const imageUrls = [
    "../images/ReceptionInterior/RIImg12.jpg",
    "../images/ReceptionInterior/RIImg9.jpg",
    "../images/ReceptionInterior/RIImg3.jpg",
    "../images/ReceptionInterior/RIImg13.jpg",
    "../images/ReceptionInterior/RIImg1.jpg",
    "../images/ReceptionInterior/RIImg10.jpg",
    "../images/ReceptionInterior/RIImg4.jpg",
    "../images/ReceptionInterior/RIImg11.jpg",
    "../images/ReceptionInterior/RIImg8.jpg",
    "../images/ReceptionInterior/RIImg6.jpg",
  ];

  //gallery stills urls
  const galleryUrls = [
    "../images/ReceptionInterior/RIImg1.jpg",
    "../images/ReceptionInterior/RIImg3.jpg",
    "../images/ReceptionInterior/RIImg4.jpg",
    "../images/ReceptionInterior/RIImg6.jpg",
    "../images/ReceptionInterior/RIImg8.jpg",
    "../images/ReceptionInterior/RIImg9.jpg",
    "../images/ReceptionInterior/RIImg10.jpg",
    "../images/ReceptionInterior/RIImg11.jpg",
    "../images/ReceptionInterior/RIImg12.jpg",
    "../images/ReceptionInterior/RIImg13.jpg",
    "../images/ReceptionInterior/RIImg40.jpg",
    "../images/ReceptionInterior/RIImg41.jpg",
    "../images/ReceptionInterior/RIImg42.jpg",
    "../images/ReceptionInterior/RIImg43.jpg",
    "../images/ReceptionInterior/RIImg44.jpg",
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
            title: "Reception & Interior Signag",
            lastWord: "Toowoomba",
            subheading:
              "First impressions don’t stop at the front door. Interior signage plays a vital role in creating a welcoming, professional, and branded environment. At Toowoomba Sign Co, we design and install reception and interior signs that enhance your workplace and impress clients from the moment they arrive.",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      {/* <section>
        <ProductDetail
          firstPhrase="Reception signage that makes a lasting impression"
          secondPhrase="Impress customers with elegant signage"
          descriptionFirst="From elegant reception desk signs that convey professionalism to interior signs that guide visitors seamlessly through your office, shop or warehouse, we offer a range of customisable solutions."
          descriptionSecond="Our attention to detail ensures your brand identity is consistently reinforced throughout your space, leaving a lasting and positive impression on all customers and visitors."
          buttonLink="/structural-signage"
          buttonTitle="View our structural signage"
        ></ProductDetail>
      </section> */}

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Why</span> Interior Signage Matters
          </h2>
        </div>

        <div className="product-description">
          <p className="description-text text-muted">
            Reception and office signage communicates professionalism and
            consistency. Whether it’s a polished reception logo, wall graphics,
            or internal wayfinding, effective signage ensures your space
            reflects your business values and identity.
          </p>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> Interior Signage Options
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
                Reception Signs – Branded wall plaques, 3D lettering, or
                illuminated logos
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Wall Graphics & Murals – Custom designs for feature walls or
                branding.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Office Directional Signs – Guide staff and visitors with
                clarity.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Frosted Glass Film – For privacy and style in meeting rooms or
                offices.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Plaques & Nameplates – Professional solutions for offices and
                departments.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <Gallery images={galleryUrls} title="Reception & Interior Signage" />
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
          Transform your workplace with custom interior signage from Toowoomba
          Sign Co. Get in touch today to start your project.
        </p>
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default ReceptionInterior;