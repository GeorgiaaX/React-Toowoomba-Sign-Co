import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";

function VehicleBranding() {
  useEffect(() => {
    document.title = "Car Wraps Toowoomba | Vehicle Signage & Fleet Branding";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Drive your brand further with custom vehicle wraps and signage in Toowoomba. Car wraps, ute graphics, and fleet signage."
      );
  }, []);

  const faqItems = [
    {
      question: "How long does a vehicle wrap last?",
      answer: "With proper care, wraps last 3–5 years or more.",
    },
    {
      question: "Will a wrap damage my vehicle’s paint?",
      answer:
        "No, provided the existing paint condition is fine. In fact, wraps can protect the paint underneath from scratches and sun damage.",
    },
    {
      question: "Can I update or remove the wrap later?",
      answer: "Yes, wraps can be safely removed or replaced when you rebrand.",
    },
  ];

  //gallerySlide Urls
  const imageUrls = [
    "../images/VehicleBranding/VFImg12.jpg",
    "../images/VehicleBranding/VFImg44.jpg",
    "../images/VehicleBranding/VFImg3.jpg",
    "../images/VehicleBranding/VFImg9.jpg",
    "../images/VehicleBranding/VFImg46.jpg",
    "../images/VehicleBranding/VFImg2.jpg",
    "../images/VehicleBranding/VFImg45.jpg",
    "../images/VehicleBranding/VFImg13.jpg",
    "../images/VehicleBranding/VFImg14.jpg",
    "../images/VehicleBranding/VFImg11.jpg",
  ];

  //gallery stills urls
  const galleryUrls = [
    "../images/VehicleBranding/VFImg2.jpg",
    "../images/VehicleBranding/VFImg12.jpg",
    "../images/VehicleBranding/VFImg10.jpg",
    "../images/VehicleBranding/VFImg11.jpg",
    "../images/VehicleBranding/VFImg13.jpg",
    "../images/VehicleBranding/VFImg14.jpg",
    "../images/VehicleBranding/VFImg3.jpg",
    "../images/VehicleBranding/VFImg9.jpg",
    "../images/VehicleBranding/VFImg40.jpg",
    "../images/VehicleBranding/VFImg41.jpg",
    "../images/VehicleBranding/VFImg42.jpg",
    "../images/VehicleBranding/VFImg43.jpg",
    "../images/VehicleBranding/VFImg44.jpg",
    "../images/VehicleBranding/VFImg45.jpg",
    "../images/VehicleBranding/VFImg46.jpg",
    "../images/VehicleBranding/VFImg47.jpg",
    "../images/VehicleBranding/VFImg48.jpg",
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
            title: "Car Wraps & Signage ",
            lastWord: "Toowoomba",
            subheading:
              "Your vehicles can do more than just get you from A to B — they can advertise your business 24/7. At Toowoomba Sign Co, we design and install custom car wraps and signage that transform your fleet into powerful mobile billboards. Whether you need a single car wrap or branding for an entire fleet, we create standout designs that get noticed on the road.",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      {/* <section>
        <ProductDetail
          firstPhrase="Drive your brand forward with a mobile billboard"
          secondPhrase="Car wrapping Toowoomba"
          descriptionFirst="With attention-grabbing graphics logos, and contact information, your brand message is on the move, reaching a broader audience every time you jump in your car"
          descriptionSecond="Not only do these graphics enhance brand recognition, but they also add a professional touch to your vehicles, leaving a lasting impression on potential customers everywhere you go. Help your business stand out when driving around Toowoomba and the Darling Downs with car wrapping and vehicle signage."
          buttonLink="/retail-pos"
          buttonTitle="View our retail point of sale signage"
        ></ProductDetail>
      </section> */}

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Why</span> Vehicle Wraps Work
          </h2>
        </div>

        <div className="product-description">
          <p className="description-text text-muted">
            Vehicle signage is one of the most cost-effective forms of
            advertising. With thousands of people seeing your car, ute, or truck
            every week, a well-designed wrap provides long-term brand exposure
            for a one-time investment.
          </p>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> Vehicle Signage Solutions
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
                Full Vehicle Wraps – Complete coverage for maximum impact.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Vinyl Lettering & Logos – Simple, professional, and durable.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Partial Wraps – Cost-effective branding with a sleek look.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Fleet Signage – Consistent branding across multiple vehicles.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                One-Way Vision Film – Perfect for windows without blocking
                visibility.
              </span>
            </li>
          </ul>
          <p className="description-text text-muted mt-2">
            All wraps use premium quality vinyls and laminates, and are applied
            by experienced installers for a flawless finish.
          </p>
        </div>
      </section>

      <section>
        <Gallery
          images={galleryUrls}
          title=" Vehicle Branding Signage Gallery"
        />
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
          Turn your vehicle into a moving advertisement with Toowoomba Sign Co.
          Contact us today to get a custom wrap design.
        </p>
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default VehicleBranding;
