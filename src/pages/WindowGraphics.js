import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import GallerySlide from "../components/GallerySlide";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import FaqAccordion from "../components/Faqs";
import { Button } from "react-bootstrap";

function WindowGraphics() {
  useEffect(() => {
    document.title = "Window Graphics Toowoomba | Glass Films & Signage";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Transform plain glass with window graphics and films from Toowoomba Sign Co. Frosted films, vinyl signage, and custom glass designs."
      );
  }, []);

  const faqItems = [
    {
      question: "Will window films damage the glass?",
      answer:
        "No. Our films are applied with professional adhesives that can be removed or replaced without damage.",
    },
    {
      question: "Can films block UV rays?",
      answer:
        "Yes, many of our films reduce UV exposure, helping protect interiors and furnishings.",
    },
    {
      question: "How long do window graphics last?",
      answer: "Depending on the film type, they typically last 3–7 years.",
    },
  ];

  const imageUrls = [
    {
      src: "../portfolio/WindowGraphics/Custom Window & Glass Signage Toowoomba.webp",
      alt: "One way vision window signage Toowoomba – retail glass graphics",
    },
    {
      src: "../portfolio/WindowGraphics/Door Frosting Toowoomba.webp",
      alt: "Frosted glass signage Toowoomba – privacy film installation",
    },
    {
      src: "../portfolio/WindowGraphics/Door Glass Signage Toowoomba.webp",
      alt: "Window decal Toowoomba – business branding",
    },
    {
      src: "../portfolio/WindowGraphics/One Way Vision Window Signage Toowoomba.webp",
      alt: "Glass film signage Toowoomba – interior design element",
    },
    {
      src: "../portfolio/WindowGraphics/Shopfront Glass Signage Toowoomba.webp",
      alt: "Shopfront window graphics Toowoomba – custom decals",
    },
    {
      src: "../portfolio/WindowGraphics/Store Glass Signs Toowoomba.webp",
      alt: "Branded glass signage Toowoomba – vinyl application",
    },
    {
      src: "../portfolio/WindowGraphics/Window & Glass Frosting Toowoomba.webp",
      alt: "Frosted glass signage Toowoomba – privacy and business display",
    },
    {
      src: "../portfolio/WindowGraphics/Window Frosting & One Way Vision Toowoomba.webp",
      alt: "Entry door glass film signage Toowoomba – privacy and branding",
    },
    {
      src: "../portfolio/WindowGraphics/Window Frosting Toowoomba Decorative.webp",
      alt: "Decorative glass film Toowoomba – modern finish",
    },
    {
      src: "../portfolio/WindowGraphics/Window Signage Toowoomba.webp",
      alt: "Completed window signage Toowoomba project",
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
            title: "Window Films & Signage",
            lastWord: "Toowoomba",
            subheading:
              "Windows and glass surfaces are valuable branding opportunities. At Toowoomba Sign Co, we design and install custom films and graphics that turn plain glass into eye-catching features. From frosted privacy films to promotional graphics, our solutions combine function and style.",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      {/* <section>
        <ProductDetail
          firstPhrase="Transform your windows"
          secondPhrase="Enhance your storefront"
          descriptionFirst="Our custom-designed window graphics add a touch of vibrancy and intrigue to your business. From eye-catching displays that promote your products or services to elegant window decals that convey your brand message, we offer a variety of creative solutions."
          descriptionSecond="Frosting and signage on your office windows or storefront not only grab the attention of potential customers driving by, but also help to showcase the services and products that your business offers."
          buttonLink="/vehicle-branding"
          buttonTitle="View our vehicle branding signage"
        ></ProductDetail>
      </section> */}

      <section className="product-detail-section">
        <div>
          <h2 className="section-title mt-4">
            <span className="bold-word">Benefits</span> of Glass Films &
            Graphics
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
                Privacy – Frosted or one-way films provide discretion without
                blocking light.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Branding – Add logos, patterns, or promotional messaging to
                windows.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Energy Efficiency – Certain films reduce glare and heat.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Versatility – Perfect for offices, cafés, retail stores, and
                showrooms.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="section-title mt-5">
            <span className="bold-word">Our</span> Glass & Window Solutions
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
                Frosted Films – Stylish and functional privacy options.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Decorative Graphics – Logos, patterns, and creative branding.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                One-Way Vision Film – Great for vehicles or street-facing
                windows.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Promotional Window Graphics – Seasonal or campaign-specific
                signage.
              </span>
            </li>
            <li className="signage-item">
              <i
                className="fa-solid fa-signs-post product-icons"
                aria-hidden="true"
              ></i>
              <span>
                Safety Decals – Compliant markings for glass doors and panels.
              </span>
            </li>
          </ul>
          <p className="description-text text-muted mt-2">
            We handle everything from design to installation, ensuring a perfect
            finish.
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
            Our window and glass signage projects range from subtle frosted
            designs in offices to bold retail promotions. See our Portfolio for
            inspiration.
          </p>
          <Button className="py-2 mt-4">
            <a
              href="/gallery-window-graphics"
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
          Enhance your windows with stylish, functional signage. Contact
          Toowoomba Sign Co today for a free consultation.
        </p>
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default WindowGraphics;
