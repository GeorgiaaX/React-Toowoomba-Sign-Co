import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GalleryStructuralSignage() {
  useEffect(() => {
    document.title = "Structural Signage Portfolio | Toowoomba Signage Experts";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Browse our Toowoomba structural signage projects. From pylon signs to freestanding designs, we build durable, large-scale signage solutions."
      );
  }, []);

  const galleryItems = [
    {
      src: "../portfolio/StructuralSignage/Billboard Signage Toowoomba.webp",
      alt: "Structural signage Toowoomba – outdoor billboard signage",
    },
    {
      src: "../portfolio/StructuralSignage/Billboard Signs Toowoomba.webp",
      alt: "Large freestanding signage Toowoomba – structural installation",
    },
    {
      src: "../portfolio/StructuralSignage/Custom Billboard Signs Toowoomba.webp",
      alt: "Custom billboard signage Toowoomba – durable outdoor signs",
    },
    {
      src: "../portfolio/StructuralSignage/Custom Frame Signage Toowoomba.webp",
      alt: "Structural aluminium sign Toowoomba – custom fabrication",
    },
    {
      src: "../portfolio/StructuralSignage/Freestanding School Signage Toowoomba.webp",
      alt: "Freestanding frame signage Toowoomba – business exposure",
    },
    {
      src: "../portfolio/StructuralSignage/Hanging 3D Signage Toowoomba.webp",
      alt: "Monument sign Toowoomba – structural ground signage",
    },
    {
      src: "../portfolio/StructuralSignage/Illuminated Frame Signs Toowoomba.webp",
      alt: "Outdoor illuminated structural signage Toowoomba – large format sign",
    },
    {
      src: "../portfolio/StructuralSignage/Monolith & Pylon Signs Toowoomba.webp",
      alt: "Multi-tenant signage Toowoomba – commercial area branding",
    },
    {
      src: "../portfolio/StructuralSignage/Outdoor Frame Signs Toowoomba.webp",
      alt: "Completed structural signage Toowoomba project",
    },
    {
      src: "../portfolio/StructuralSignage/Pylon Signs Toowoomba.webp",
      alt: "Pylon sign Toowoomba – commercial directional signage",
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
            title: "Structural Signage Portfolio  ",
            lastWord: "– Large-Scale Toowoomba Signs",
            subheading:
              "When visibility is everything, structural signage delivers. Our portfolio features pylons, freestanding signs, and custom-built structures designed for durability and impact.",
          }}
        />
      </section>

      <section className="py-4">
        <Gallery images={galleryItems} title="Structural Signage Gallery" />
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
          <a href="/structural-signage"> Structural Signage </a> services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Talk to our team today about custom structural signage.
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

export default GalleryStructuralSignage;
