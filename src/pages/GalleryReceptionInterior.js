import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GalleryReceptionInterior() {
  useEffect(() => {
    document.title =
      "Reception & Interior Signage Portfolio | Sign Writers Toowoomba";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "See our reception and interior signage portfolio in Toowoomba. Professional sign writers creating office signs, wall graphics, and stylish brand displays."
      );
  }, []);

  const galleryItems = [
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
      title: "Structural Signage",
      desc: "Durable structural signage for buildings and long-term installs.",
      to: "/gallery-structural-signage",
    },
    {
      title: "Directional & Wayfinding Signs",
      desc: "Clear signage for navigation, safety, and accessibility.",
      to: "/gallery-directional-wayfinding",
    },
    {
      title: "Window Films & Graphics",
      desc: "Window graphics, frosting, and privacy films.",
      to: "/gallery-window-graphics",
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
            title: "Reception & Interior Signage Portfolio ",
            lastWord: "– Professional First Impressions",
            subheading:
              "Inside your business, signage sets the tone. This portfolio highlights reception signs, wall graphics, and directional interior signs that enhance brand identity and professionalism.",
          }}
        />
      </section>

      <section className="py-4">
        <Gallery images={galleryItems} title="Reception & Interior Gallery" />
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
          <a href="/reception-interior"> Reception & Interior Signage </a>{" "}
          services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Contact us to create a welcoming interior space.
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

export default GalleryReceptionInterior;
