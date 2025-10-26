import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";

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
    "../images/DirectionalWayfinding/DWImg9.jpg",
    "../images/DirectionalWayfinding/DWImg21.jpg",
    "../images/DirectionalWayfinding/DWImg23.jpg",
    "../images/DirectionalWayfinding/DWImg10.jpg",
    "../images/DirectionalWayfinding/DWImg15.jpg",
    "../images/DirectionalWayfinding/DWImg12.jpg",
    "../images/DirectionalWayfinding/DWImg22.jpg",
    "../images/DirectionalWayfinding/DWImg19.jpg",
    "../images/DirectionalWayfinding/DWImg2.jpg",
    "../images/DirectionalWayfinding/DWImg5.jpg",
  ];

  const galleryUrls = [
    "../images/DirectionalWayfinding/DWImg2.jpg",
    "../images/DirectionalWayfinding/DWImg5.jpg",
    "../images/DirectionalWayfinding/DWImg8.jpg",
    "../images/DirectionalWayfinding/DWImg21.jpg",
    "../images/DirectionalWayfinding/DWImg22.jpg",
    "../images/DirectionalWayfinding/DWImg9.jpg",
    "../images/DirectionalWayfinding/DWImg10.jpg",
    "../images/DirectionalWayfinding/DWImg11.jpg",
    "../images/DirectionalWayfinding/DWImg3.jpg",
    "../images/DirectionalWayfinding/DWImg4.jpg",
    "../images/DirectionalWayfinding/DWImg16.jpg",
    "../images/DirectionalWayfinding/DWImg12.jpg",
    "../images/DirectionalWayfinding/DWImg6.jpg",
    "../images/DirectionalWayfinding/DWImg13.jpg",
    "../images/DirectionalWayfinding/DWImg14.jpg",
    "../images/DirectionalWayfinding/DWImg17.jpg",
    "../images/DirectionalWayfinding/DWImg18.jpg",
    "../images/DirectionalWayfinding/DWImg19.jpg",
    "../images/DirectionalWayfinding/DWImg15.jpg",
    "../images/DirectionalWayfinding/DWImg23.jpg",
    "../images/DirectionalWayfinding/DWImg99.jpg",
    "../images/DirectionalWayfinding/DWImg40.jpg",
    "../images/DirectionalWayfinding/DWImg41.jpg",
    "../images/DirectionalWayfinding/DWImg42.jpg",
    "../images/DirectionalWayfinding/DWImg43.jpg",
    "../images/DirectionalWayfinding/DWImg44.jpg",
    "../images/DirectionalWayfinding/DWImg45.jpg",
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
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      {/* <section>
        <ProductDetail
          firstPhrase="Help your customers find you"
          secondPhrase="Easy to follow directional signage for your business or organisaion"
          descriptionFirst="Our directional and wayfinding signs offer clear and concise guidance. Whether on a sprawling university or school campus, a busy hospital or public venue, our directional signs ensure customers or visitors can find their way quickly and easily."
          descriptionSecond="For a more comprehensive understanding of your surroundings, our wayfinding signs map out routes and highlight key landmarks."
          buttonLink="/window-graphics"
          buttonTitle="View our window signage & window frosting"
        ></ProductDetail>
      </section> */}

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

      <section>
        <Gallery
          images={galleryUrls}
          title="Directional & Wayfinding Signage Gallery"
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
          Help people find their way with professional directional signage.
          Contact Toowoomba Sign Co today for a custom solution.
        </p>
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default DirectionalWayfinding;
