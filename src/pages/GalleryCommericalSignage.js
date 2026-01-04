import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GalleryCommercialSignage() {
  useEffect(() => {
    document.title = "Commercial Signage Portfolio | Signage Toowoomba";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "See our Toowoomba commercial signage portfolio. From factory signs to corporate branding, we deliver professional business signage solutions."
      );
  }, []);

  const galleryItems = [
    {
      src: "../portfolio/CommercialSignage/3D Illuminated Letters Toowoomba.webp",
      alt: "Commercial 3d signage Toowoomba – business exterior sign",
    },
    {
      src: "../portfolio/CommercialSignage/Commercial Illuminated Signage Toowoomba.webp",
      alt: "Corporate signage Toowoomba – full branding solution",
    },
    {
      src: "../portfolio/CommercialSignage/Commercial New Build Signage Toowoomba.webp",
      alt: "Illuminated business sign Toowoomba – exterior installation",
    },
    {
      src: "../portfolio/CommercialSignage/Commercial Signage Print Rollouts Toowoomba.webp",
      alt: "Drive thru signage Toowoomba – retail site branding",
    },
    {
      src: "../portfolio/CommercialSignage/Custom Commercial Signage.webp",
      alt: "Custom commercial sign Toowoomba – post locker structure",
    },
    {
      src: "../portfolio/CommercialSignage/Custom Illuminated Commercial Signs Toowoomba.webp",
      alt: "Office signage Toowoomba – internal illuminated graphics",
    },
    {
      src: "../portfolio/CommercialSignage/Custom Lightboxes Toowoomba.webp",
      alt: "Shopfront signage Toowoomba – retail building sign",
    },
    {
      src: "../portfolio/CommercialSignage/Entire Building Commercial Signage Toowoomba.webp",
      alt: "Exterior business signage Toowoomba – custom design",
    },
    {
      src: "../portfolio/CommercialSignage/Large Scale Commercial Signage Toowoomba.webp",
      alt: "Large commercial banner signage Toowoomba – corporate branding",
    },
    {
      src: "../portfolio/CommercialSignage/Pylon Sign Refurbishments Toowoomba.webp",
      alt: "Completed commercial signage Toowoomba project",
    },
  ];

  const items = [
    {
      title: "Shopfront & Building Signage",
      desc: "Shopfront transformations and building signage projects.",
      to: "/gallery-building-shopface",
    },
    {
      title: "3D & Illuminated Signs",
      desc: "Illuminated and 3D signage designed to stand out day and night.",
      to: "/gallery-illuminated-designs",
    },
    {
      title: "Reception & Interior Signage",
      desc: "Interior branding, reception signage, and office fit-outs.",
      to: "/gallery-reception-interior",
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
            title: "Commercial Signage Portfolio ",
            lastWord: "– Custom Toowoomba Business Solutions",
            subheading:
              "From warehouses to office parks, our commercial signage solutions deliver impact. This portfolio includes large-scale signs built for durability, consistency, and brand recognition.",
          }}
        />
      </section>

      <section className="py-4">
        <Gallery images={galleryItems} title="Commercial Signage Gallery" />
      </section>

      <section className="product-detail-section">
        <div className="text-center mx-auto px-3">
          <h2 className="mb-3 fw-bold text-heading">Portfolio Highlights</h2>
          <p
            className="description-text text-muted"
            style={{ fontSize: "1.3rem" }}
          >
            From cafés to multi-storey businesses, we’ve delivered building and
            shopfront signage across Toowoomba that reflects each client’s brand
            and personality. Explore more examples in our Portfolio
          </p>
          <Button className="py-2 mt-4 ">
            <a
              href="/portfolio-gallery"
              className="text-white text-decoration-none"
            >
              View Portfolio
            </a>
          </Button>
        </div>
      </section>

      <section className="product-detail-section my-4 text-center">
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          See more about our{" "}
          <a href="/commercial-signage"> Commercial Signage </a> services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Request a free quote for your commercial project.
        </p>
        <div className="d-flex justify-content-center">
          <ModalButton />
        </div>
      </section>

      <section className="my-5 mx-4">
        <div className="text-center mb-4 px-2">
          <h3 className="mb-2 fw-bold text-heading">
            View more from our Portfolio
          </h3>
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

export default GalleryCommercialSignage;
