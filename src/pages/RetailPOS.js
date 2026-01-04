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

function RetailPOS() {
  useEffect(() => {
    document.title =
      "Short Term Signage Toowoomba | Corflute Signs, Posters, Banners & Displays";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Boost sales with retail and short-term signage. Toowoomba Sign Co designs corflute signs, posters, banners, and seasonal promotional displays."
      );
  }, []);

  const faqItems = [
    {
      question: "Can short-term signage be reused?",
      answer:
        "Many of our products are reusable depending on the material and storage.",
    },
    {
      question: "Do you offer fast turnaround times?",
      answer:
        "Yes, we understand retail deadlines and can deliver quickly without sacrificing quality.",
    },
    {
      question: "Can you handle bulk printing for chain stores?",
      answer:
        "Absolutely. We supply signage for single outlets and multi-store rollouts.",
    },
  ];

  //gallerySlide Urls
  const imageUrls = [
    {
      src: "../portfolio/RetailPOS/A Frame Signs Toowoomba.webp",
      alt: "Retail signage Toowoomba – promotional display sign",
    },
    {
      src: "../portfolio/RetailPOS/Banner Mesh Toowoomba.webp",
      alt: "Point of sale signage Toowoomba – product highlight",
    },
    {
      src: "../portfolio/RetailPOS/Hoarding Signage Toowoomba.webp",
      alt: "Event signage Toowoomba – short-term branding",
    },
    {
      src: "../portfolio/RetailPOS/Illuminated Short Term Signage Toowoomba.webp",
      alt: "Sale signage Toowoomba – temporary retail display",
    },
    {
      src: "../portfolio/RetailPOS/Point Of Sale Signage Toowoomba.webp",
      alt: "Banner signage Toowoomba – promotional print",
    },
    {
      src: "../portfolio/RetailPOS/Promotional Illuminated Signs Toowoomba.webp",
      alt: "Window sale graphics Toowoomba – retail advertising",
    },
    {
      src: "../portfolio/RetailPOS/Promotional Signs Toowoomba.webp",
      alt: "Poster signage Toowoomba – in-store marketing",
    },
    {
      src: "../portfolio/RetailPOS/Short Term Prints Toowoomba.webp",
      alt: "Pop-up signage Toowoomba – event display",
    },
    {
      src: "../portfolio/RetailPOS/Short Term Reception Signage Toowoomba.webp",
      alt: "Short-term retail signage Toowoomba – seasonal graphics",
    },
    {
      src: "../portfolio/RetailPOS/Short Term Signage Toowoomba.webp",
      alt: "Completed retail signage Toowoomba project",
    },
  ];

  const items = [
    {
      title: "Window Signage",
      desc: "Custom window signage and glass films for branding, privacy, and impact.",
      to: "/window-graphics",
    },
    {
      title: "Directional & Wayfinding Signage",
      desc: "Clear, professional signage to guide customers through your space.",
      to: "/directional-wayfinding",
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
            title: "Retail & Short-Term Signage",
            lastWord: "Toowoomba",
            subheading:
              "When you need signage that grabs attention quickly, retail and short-term solutions are the way to go. At Toowoomba Sign Co, we design and install promotional signage that drives sales, highlights offers, and creates memorable in-store experiences.",
            link: "/retail-pos",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Why</span> Retail Signage Matters
          </h2>
        </div>

        <div className="product-description">
          <p className="description-text text-muted">
            Retail environments are fast-paced and competitive. Customers are
            constantly influenced by signage that directs their attention to
            sales, promotions, or new arrivals. Short-term signage provides
            flexibility while maintaining professional branding.
          </p>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> Retail & Promotional
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
                Corflute signs - Cost effective, portable, perfect for short
                term signage.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Point of Sale (POS) Displays – Countertop, shelf, and floor
                signage.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Posters & Banners – Perfect for promotions, launches, and
                events.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Window Displays – Seasonal graphics and product-focused signage.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Floor Decals – Creative ways to guide customers through your
                store.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Event Signage – Portable, temporary solutions for expos or
                pop-ups.
              </span>
            </li>
          </ul>
          <p className="description-text text-muted mt-2">
            We use high-quality materials that are easy to update, replace, or
            remove when your campaign ends.
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
            From short-term sales promotions to long-term POS displays, our
            retail signage has helped Toowoomba stores boost visibility and
            sales. Check out our Porfolio for examples..
          </p>
          <Button className="py-2 mt-4">
            <a
              href="/gallery-retail-pos"
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

      <section className="w-100 d-flex justify-content-center">
        <div
          className="product-detail-section rounded-4 shadow-sm p-4 p-md-5 text-center"
          style={{ maxWidth: 900 }}
        >
          <p className="mb-3" style={{ fontSize: "1.15rem", lineHeight: 1.6 }}>
            Promote smarter with retail signage that sells.
            <Link to="/contact" className="text-white">
              {" "}
              Contact Toowoomba Sign Co{" "}
            </Link>{" "}
            to discuss your campaign needs.
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

export default RetailPOS;
