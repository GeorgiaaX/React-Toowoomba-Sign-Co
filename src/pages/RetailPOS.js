import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import GallerySlide from "../components/GallerySlide";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";
import { Button } from "react-bootstrap";

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
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      {/* <section>
        <ProductDetail
          firstPhrase="Elevate your retail space"
          secondPhrase="Boost your sales"
          descriptionFirst="These eye-catching displays are strategically positioned to captivate shoppers' attention and influence their purchasing decisions. From enticing product promotions to showcasing your products or services, our custom-designed signs enhance the overall shopping experience for your customers."
          descriptionSecond="With a focus on clarity and aesthetics, our POS signage adds a professional touch to your retail store, office or workshop, helping you to maximise sales and keep your customers engaged."
          buttonLink="/truck-lining"
          buttonTitle="View our truck lining & scrolling signage"
        ></ProductDetail>
      </section> */}

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
            From short-term sales promotions to long-term POS displays, our retail signage has helped Toowoomba stores boost visibility and sales. Check out our Porfolio for examples..
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

      <section className="product-detail-section my-4">
        <p style={{ fontSize: "1.3rem" }} className="text-center">
          Promote smarter with retail signage that sells. Contact Toowoomba Sign
          Co today to discuss your campaign needs.
        </p>
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default RetailPOS;
