import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
// import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";

function BuildingShopface() {
  useEffect(() => {
    document.title = "Shopfront Signage Toowoomba | Building Signs Toowoomba";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Toowoomba Sign Co designs and installs professional shopfront and building signage. Make your business stand out with custom signage in Toowoomba."
      );
  }, []);

  const faqItems = [
    {
      question: "How long does shopfront signage last?",
      answer:
        "With quality materials and professional installation, your signage can last 3–7 years depending on exposure, materials selected and care.",
    },
    {
      question: "Can you match my brand colours?",
      answer:
        "Absolutely. We use advanced printing and fabrication to ensure your colours are consistent and accurate.",
    },
    {
      question: "Do you handle council approvals?",
      answer:
        "Yes, we can guide you through compliance and approvals where required.",
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
            title: "Shopfront & Building Signage",
            lastWord: "Toowoomba",
            subheading:
              "Your shopfront is your business’s first impression, and the right signage makes all the difference. At Toowoomba Sign Co, we design and install custom shopfront and building signage that draws attention, communicates your brand, and brings customers through the door. Whether you run a retail store, café, office, or large commercial building, our experienced signwriters in Toowoomba deliver tailored solutions that stand out.",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      {/* <section>
        <ProductDetail
          firstPhrase="Elevate the curb appeal of your business"
          secondPhrase="Make a lasting impression"
          descriptionFirst="We specialise in creating eye-catching and professional signage solutions that reflect your brand's identity and capture the attention of passersby and potential customers."
          descriptionSecond="Whether you're looking to enhance your storefront's visibility, promote your business, or create a unique aesthetic, our customised signs are designed to meet your specific needs."
          buttonLink="/illuminated-designs"
          buttonTitle="View our 3D Illuminated Signs"
        ></ProductDetail>
      </section> */}

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Why</span> Professional Shopfront
            Signage Matters
          </h2>
        </div>

        <div className="product-description">
          <p className="description-text text-muted">
            A well-designed sign not only boosts visibility but also builds
            trust. Customers are more likely to visit a business that looks
            professional, clear, and approachable. With competition on every
            street, investing in a high-quality shopfront sign ensures you don’t
            get overlooked.
          </p>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> Shopfront &amp; Building
            Signage Solutions
          </h2>
        </div>

        <div className="product-description">
          <p className="description-text text-muted mb-3">
            We provide a wide range of exterior signage options, including:
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
              <span>
                Fascia Signs – Bold, durable signs mounted above entrances.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                3D Lettering – Adds depth and dimension to your brand.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Window Graphics – Promotional, decorative, or frosted film
                applications.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Building Wraps &amp; Panels – Large-scale branding that
                transforms your exterior.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Illuminated Signs – Perfect for night time visibility.
              </span>
            </li>
          </ul>

          <p className="description-text text-muted mt-3">
            Every project is designed in-house, manufactured with premium
            materials, and installed by our expert team.
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
      <p style={{ fontSize: "1.3rem" }} className="text-center">Ready to refresh your shopfront? Contact Toowoomba Sign Co today for custom building signage that gets your business noticed.</p>
    </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default BuildingShopface;
