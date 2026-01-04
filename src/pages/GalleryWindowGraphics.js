import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GalleryWindowGraphcis() {
  useEffect(() => {
    document.title = "Window Films & Graphics Portfolio | Signage Toowoomba";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Discover our Toowoomba portfolio of window graphics and glass films. Frosted films, vinyl signage, and custom designs to transform plain glass."
      );
  }, []);

  const galleryItems = [
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

  const items = [
    {
      title: "Vehicle Branding",
      desc: "Vehicle wraps, decals, and mobile advertising signage.",
      to: "/gallery-vehicle-branding",
    },
    {
      title: "Retail & Short Term Signage",
      desc: "Point-of-sale signage, promos, and retail campaign graphics.",
      to: "/gallery-retail-pos",
    },
    {
      title: "Commercial Signage",
      desc: "Commercial signage solutions for businesses and sites.",
      to: "/gallery-commercial-signage",
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
            title: "Window & Glass Graphics Portfolio ",
            lastWord: "– Transform Plain Glass",
            subheading:
              "Windows are an untapped branding opportunity. This portfolio showcases frosted films, decorative vinyls, and promotional window graphics that add privacy and visibility.",
          }}
        />
      </section>

      <section className="py-4">
        <Gallery
          images={galleryItems}
          title="Window Films & Graphics Gallery"
        />
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
          <a href="/reception-interior"> Window Films & Graphics</a> services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Request a free design mock-up for your glass space.
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

export default GalleryWindowGraphcis;
