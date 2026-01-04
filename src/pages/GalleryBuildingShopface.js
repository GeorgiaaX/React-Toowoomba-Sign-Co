import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GalleryBuildingShopface() {
  useEffect(() => {
    document.title = "Shopfront & Building Signage Portfolio | Toowoomba Signs";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Explore our shopfront and building signage projects in Toowoomba. Toowoomba Sign Co designs custom fascia signs and exterior signage that elevate business visibility."
      );
  }, []);

  const galleryItems = [
    {
      src: "../portfolio/BuildingShopface/3D Painted Shopfront Signage Toowoomba.webp",
      alt: "Completed shopfront sign Toowoomba – 3d signage example",
    },
    {
      src: "../portfolio/BuildingShopface/3D Shopfront Signs Toowoomba.webp",
      alt: "Business building signage Toowoomba – modern branding",
    },
    {
      src: "../portfolio/BuildingShopface/Building Signage Toowoomba Flat Panel.webp",
      alt: "Custom building signage Toowoomba – company branding signs installation",
    },
    {
      src: "../portfolio/BuildingShopface/Complete Building Signage Toowoomba.webp",
      alt: "Retail fascia signage Toowoomba designed by sign writers",
    },
    {
      src: "../portfolio/BuildingShopface/Custom Frame Building Signs Toowoomba.webp",
      alt: "Large outdoor building sign Toowoomba – commercial property signage",
    },
    {
      src: "../portfolio/BuildingShopface/Hanging Signs Toowoomba.webp",
      alt: "Boutique shop signage Toowoomba – premium finish",
    },
    {
      src: "../portfolio/BuildingShopface/Painted & Router Cut Building Signs Toowoomba.webp",
      alt: "Complete building business signs Toowoomba – creative business signage",
    },
    {
      src: "../portfolio/BuildingShopface/Roof Signs Toowoomba.webp",
      alt: "Custom roof signs Toowoomba – high visibility signage",
    },
    {
      src: "../portfolio/BuildingShopface/Router Cut Text Signage Toowoomba.webp",
      alt: "Completed building signage Toowoomba project",
    },
    {
      src: "../portfolio/BuildingShopface/Shed Signs Toowoomba.webp",
      alt: "Aluminium panel sign Toowoomba – shed branding project",
    },
  ];

  const items = [
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
    {
      title: "Structural Signage",
      desc: "Durable structural signage for buildings and long-term installs.",
      to: "/gallery-structural-signage",
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
            title: "Shopfront & Building Signage Portfolio ",
            lastWord: "– Toowoomba Signs That Impress",
            subheading:
              "Your shopfront is the face of your business, and our portfolio shows how effective signage can completely transform first impressions. From bold fascia signs to elegant building lettering, we’ve helped Toowoomba businesses stand out on busy streets and shopping strips.",
          }}
        />
      </section>

      <section className="py-4">
        <Gallery images={galleryItems} title="Building Signage Gallery" />
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
          <a href="/building-shopface"> Shopfront & Building Signage </a>{" "}
          services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Contact us today for a free design consultation.
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

export default GalleryBuildingShopface;
