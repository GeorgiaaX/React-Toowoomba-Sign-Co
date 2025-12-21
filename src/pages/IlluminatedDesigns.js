import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
// import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";
import { Button } from "react-bootstrap";

function IlluminatedDesigns() {
  useEffect(() => {
    document.title = "3D Signs & Illuminated Signage Toowoomba";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Shine day and night with 3D and illuminated signs from Toowoomba Sign Co. Custom LED signs, lightboxes, and fabricated lettering."
      );
  }, []);

  const faqItems = [
    {
      question: "Do illuminated signs use a lot of power?",
      answer:
        "No. Our LED solutions are highly energy-efficient and cost-effective to run.",
    },
    {
      question: "Can you repair or replace existing illuminated signage?",
      answer:
        "Yes, we offer upgrades and refurbishments as well as new installations.",
    },
    {
      question: "Are illuminated signs weatherproof?",
      answer:
        "All our products are designed for durability in Toowoomba’s climate.",
    },
  ];

  const imageUrls = [
    {
      src: "../portfolio/IlluminatedDesigns/3D Acrylic Signage Toowoomba.webp",
      alt: "3D acrylic sign Toowoomba – custom fabricated logo signage",
    },
    {
      src: "../portfolio/IlluminatedDesigns/Custom 3D Lettering Toowoomba.webp",
      alt: "Reception wall business sign Toowoomba – bright reception design",
    },
    {
      src: "../portfolio/IlluminatedDesigns/Freestanding Lightbox Signs Toowoomba.webp",
      alt: "Backlit signage Toowoomba – premium business sign",
    },
    {
      src: "../portfolio/IlluminatedDesigns/Illuminated Letter Signs Toowoomba.webp",
      alt: "Halo-lit 3D letters Toowoomba – illuminated wall signage",
    },
    {
      src: "../portfolio/IlluminatedDesigns/Illuminated Push Through Letter Signs Toowoomba.webp",
      alt: "Corporate 3d illuminated sign Toowoomba – creative branding",
    },
    {
      src: "../portfolio/IlluminatedDesigns/Laser Cut Acrylic Signage Toowoomba.webp",
      alt: "3d lettering sign Toowoomba installed by sign writers",
    },
    {
      src: "../portfolio/IlluminatedDesigns/Light Up Signage Toowoomba.webp",
      alt: "Corporate 3D illuminated signage Toowoomba – modern finish",
    },
    {
      src: "../portfolio/IlluminatedDesigns/Lightbox Signage Toowoomba.webp",
      alt: "Lightbox sign Toowoomba – high-impact advertising",
    },
    {
      src: "../portfolio/IlluminatedDesigns/Painted 3D Signs Toowoomba.webp",
      alt: "Exterior 3D letters Toowoomba – custom signage installation",
    },
    {
      src: "../portfolio/IlluminatedDesigns/Router Cut 3D Signage Toowoomba.webp",
      alt: "Completed 3D signage Toowoomba project",
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
            title: "3D & Illuminated Signs",
            lastWord: "Toowoomba",
            subheading:
              "When you want your business to have depth & shine — literally — 3D and illuminated signage is the answer. Toowoomba Sign Co designs and installs eye-catching signs that deliver maximum impact both day and night. From LED lightboxes to backlit 3D letters, we create signage that ensures your brand never fades into the background.",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      {/* <section>
              <ProductDetail 
              firstPhrase = "Illuminate your brand in the Toowoomba region"
              secondPhrase = "Put your business up in lights"
              descriptionFirst= "These striking illuminated signs light up your business and brand, day or night. Our customisable 3D letters are designed to showcase your brand's personality, with a variety of colours, styles and sizes available to suit your business and location."
              descriptionSecond = "From sleek sophistication to eye-catching vibrancy, our 3D illuminated letters and display signage add a touch of elegance and professionalism to your business, leaving a lasting impression on customers."
              buttonLink = "/reception-interior"
                buttonTitle = "View our reception and interior signage">
              </ProductDetail>
            </section> */}

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Why</span> Choose 3D & Illuminated Sign
          </h2>
        </div>

        <div className="product-description">
          <p className="description-text text-muted">
            Illuminated signage works around the clock, giving your business
            visibility 24/7. 3D lettering adds sophistication and depth, making
            your logo or name impossible to miss. These signs are ideal for
            businesses on main roads, shopping strips, or any location where
            standing out matter
          </p>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> 3D & Illuminated Sign Options
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
                LED Lightboxes – Energy-efficient, bright, and highly
                customisable.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Backlit 3D Letters – Perfect for logos and names with striking
                night effects.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Neon-Style LED Signs – Modern technology with a retro look.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Front & Side Lit Signage – Tailored to your brand’s style and
                visibility needs.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Cnc Cut Text & Signage - Ideal for 3D non illuminated signage.
              </span>
            </li>
          </ul>

          <p className="description-text text-muted mt-3">
            Every 3D & illuminated sign is built to last, with weather-resistant
            materials and professional installation.
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
            We’ve produced 3D & illuminated signage for retail, hospitality, and corporate clients across Toowoomba & throughout QLD. Explore our Portfolio to see how these signs transform businesses at night.
          </p>
          <Button className="py-2 mt-4">
            <a
              href="/gallery-illuminated-designs"
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
          Shine brighter & stand out with 3D and illuminated signage from
          Toowoomba Sign Co. Contact us today to discuss your custom design.
        </p>
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default IlluminatedDesigns;
