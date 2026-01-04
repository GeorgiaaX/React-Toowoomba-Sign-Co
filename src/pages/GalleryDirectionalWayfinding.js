import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GalleryDirectionalWayfinding() {
  useEffect(() => {
    document.title =
      "Wayfinding & Directional Signs Portfolio | Toowoomba Signs";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Check out our directional and wayfinding signage portfolio in Toowoomba. Clear, professional signs to guide visitors through any space."
      );
  }, []);

  const galleryItems = [
    {
      src: "../portfolio/DirectionalWayfinding/Custom Directional Signage Toowoomba.webp",
      alt: "Directional signage Toowoomba – internal business signs",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Custom Street Signs Toowoomba.webp",
      alt: "Outdoor wayfinding signage Toowoomba – public space",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Customer Parking Signs Toowoomba.webp",
      alt: "Directional signage Toowoomba – Customer parking sign",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Directional Pylon Signs Toowoomba.webp",
      alt: "Directional pylon sign Toowoomba - large scale sign",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Directional Signs Toowoomba.webp",
      alt: "Multi tenant directional signage Toowoomba – custom arrows",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Marker Signage Toowoomba.webp",
      alt: "Custom fabricated wayfinding sign Toowoomba – garden display sign",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Statutory Signs Toowoomba.webp",
      alt: "Statutory bathroom signage Toowoomba – visual navigation solution",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Street Address Signs Toowoomba.webp",
      alt: "Street address sign Toowoomba – location signage",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Wayfinding Signs Toowoomba.webp",
      alt: "Garden wayfinding signage Toowoomba – professional design",
    },
    {
      src: "../portfolio/DirectionalWayfinding/Wheel Stop Signs Toowoomba.webp",
      alt: "Completed directional carpark signage Toowoomba project",
    },
  ];

  const items = [
    {
      title: "Window Films & Graphics",
      desc: "Window graphics, frosting, and privacy films.",
      to: "/gallery-window-graphics",
    },
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
            title: "Directional & Wayfinding Signs Portfolio ",
            lastWord: "– Signage That Guides",
            subheading:
              "Clear signage makes navigation effortless. Our portfolio demonstrates how directional and wayfinding signs improve customer flow in commercial, educational, and medical environments.",
          }}
        />
      </section>

      <section className="py-4">
        <Gallery
          images={galleryItems}
          title="Directional & Wayfinding Gallery"
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
          <a href="/directional-wayfinding"> Directional & Wayfinding Signs </a>{" "}
          services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Contact us to improve the flow of your site with professional
          wayfinding.
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

export default GalleryDirectionalWayfinding;
