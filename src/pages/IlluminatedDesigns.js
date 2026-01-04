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

  const items = [
    {
      title: "Shopfront Signage",
      desc: "Make a strong first impression with eye-catching shopfront signage.",
      to: "/building-shopface",
    },
    {
      title: "Reception & Interior Signage",
      desc: "Create a professional, welcoming space with custom interior signage.",
      to: "/reception-interior",
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
            link: "/illuminated-designs",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <Link to="/illuminated-designs" className="text-white">
              <span className="bold-word">Why</span> Choose 3D & Illuminated
              Signs
            </Link>
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
            We’ve produced 3D & illuminated signage for retail, hospitality, and
            corporate clients across Toowoomba & throughout QLD. Explore our
            Portfolio to see how these signs transform businesses at night.
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
        <h2 className="text-heading">FAQs</h2>
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
            Shine brighter & stand out with 3D and illuminated signage from
            Toowoomba Sign Co.
            <Link to="/contact" className="text-white">
              {" "}
              Contact Toowoomba Sign Co{" "}
            </Link>{" "}
            to discuss your custom design.
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

export default IlluminatedDesigns;
