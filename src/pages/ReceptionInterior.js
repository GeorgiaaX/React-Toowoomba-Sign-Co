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
    {
      src: "../portfolio/ReceptionInterior/3D Reception & Interior Signage Toowoomba.webp",
      alt: "Reception sign Toowoomba – corporate reception branding",
    },
    {
      src: "../portfolio/ReceptionInterior/Custom Frame Prints Toowoomba.webp",
      alt: "Office wall signage Toowoomba – interior frame print installation",
    },
    {
      src: "../portfolio/ReceptionInterior/Custom Reception Signage Toowoomba.webp",
      alt: "Custom interior sign Toowoomba – company branding",
    },
    {
      src: "../portfolio/ReceptionInterior/Custom Wall Print Signage Toowoomba.webp",
      alt: "Interior wall print signage Toowoomba – creative business design",
    },
    {
      src: "../portfolio/ReceptionInterior/Illuminated Reception Signs Toowoomba.webp",
      alt: "3D illuminated logo wall signage Toowoomba – professional office decor",
    },
    {
      src: "../portfolio/ReceptionInterior/Interior Signage Toowoomba Framed Prints.webp",
      alt: "Custom framed print signs Toowoomba - reception area",
    },
    {
      src: "../portfolio/ReceptionInterior/Reception Desk Signs Toowoomba.webp",
      alt: "Acrylic reception sign Toowoomba designed by sign writers",
    },
    {
      src: "../portfolio/ReceptionInterior/Signs For Reception Desks Toowoomba.webp",
      alt: "Office branding signage Toowoomba – reception area",
    },
    {
      src: "../portfolio/ReceptionInterior/Wall Print Signs Toowoomba.webp",
      alt: "Corporate wallpaper signage Toowoomba – custom lettering",
    },
    {
      src: "../portfolio/ReceptionInterior/Wallpaper Signage Toowoomba.webp",
      alt: "Completed wall print signage Toowoomba project",
    },
  ];

  const items = [
    {
      title: "Directional & Wayfinding Signage",
      desc: "Help customers navigate your space clearly and confidently.",
      to: "/directional-wayfinding",
    },
    {
      title: "Window Graphics & Glass Films",
      desc: "Enhance privacy, branding, and style with custom window graphics.",
      to: "/window-graphics",
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
            title: "Reception & Interior Signage",
            lastWord: "Toowoomba",
            subheading:
              "First impressions don’t stop at the front door. Interior signage plays a vital role in creating a welcoming, professional, and branded environment. At Toowoomba Sign Co, we design and install reception and interior signs that enhance your workplace and impress clients from the moment they arrive.",
            link: "/reception-interior",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

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

      <section className="product-detail-section">
        <div className="text-center mx-auto px-3">
          <h2 className="mb-3 fw-bold text-heading">Portfolio Highlights</h2>
          <p
            className="description-text text-muted"
            style={{ fontSize: "1.3rem" }}
          >
            From corporate offices to healthcare providers and retail fit-outs,
            our interior signage has helped countless Toowoomba businesses build
            better workspaces. Explore our Portfolio for inspiration.
          </p>
          <Button className="py-2 mt-4">
            <a
              href="/gallery-reception-interior"
              className="text-white text-decoration-none portfolio-btn"
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
            Transform your workplace with custom interior signage from Toowoomba
            Sign Co.
            <Link to="/contact" className="text-white">
              {" "}
              Contact Toowoomba Sign Co{" "}
            </Link>{" "}
            to start your project.
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

export default ReceptionInterior;
