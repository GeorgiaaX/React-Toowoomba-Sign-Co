import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GalleryVehicleBranding() {
  useEffect(() => {
    document.title = "Vehicle Wraps Portfolio | Toowoomba Sign Writers";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Explore our vehicle wraps and fleet signage portfolio in Toowoomba. Custom car wraps, ute signage, and fleet branding that get noticed on the road."
      );
  }, []);

  const galleryItems = [
    {
      src: "../portfolio/VehicleBranding/Car Decal Signage Toowoomba.webp",
      alt: "Car signage Toowoomba – vinyl wrap installation",
    },
    {
      src: "../portfolio/VehicleBranding/Car Signage Toowoomba.webp",
      alt: "Partial wrap Toowoomba – custom vehicle branding",
    },
    {
      src: "../portfolio/VehicleBranding/Car Wraps Toowoomba.webp",
      alt: "Vehicle wrap Toowoomba – business fleet graphics",
    },
    {
      src: "../portfolio/VehicleBranding/One Way Vision Signs Toowoomba.webp",
      alt: "Van wrap Toowoomba – full coverage vehicle sign",
    },
    {
      src: "../portfolio/VehicleBranding/Tanker & Trailer Signs Toowoomba.webp",
      alt: "Truck Trailer signage Toowoomba – logo graphics",
    },
    {
      src: "../portfolio/VehicleBranding/Trailer Signage Toowoomba.webp",
      alt: "Trailer Signage Toowoomba – large format vehicle signage",
    },
    {
      src: "../portfolio/VehicleBranding/Truck Signage Toowoomba.webp",
      alt: "Truck signage Toowoomba – professional design",
    },
    {
      src: "../portfolio/VehicleBranding/Ute Signage Toowoomba.webp",
      alt: "Ute wrap Toowoomba – custom vehicle branding",
    },
    {
      src: "../portfolio/VehicleBranding/Vehicle Door Decals Toowoomba.webp",
      alt: "Fleet vehicle wraps Toowoomba by local sign writers",
    },
    {
      src: "../portfolio/VehicleBranding/Vehicle Signage & Wraps Toowoomba.webp",
      alt: "Vehicle graphics Toowoomba – commercial car wraps",
    },
  ];

  const items = [
  {
    title: "Shopfront & Building Signage",
    desc: "Shopfront transformations and building signage projects.",
    to: "/gallery-building-shopface",
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
]


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
            title: "Vehicle Wraps Portfolio ",
            lastWord: "– Mobile Toowoomba Signage",
            subheading:
              "Your vehicles are moving billboards. Our portfolio demonstrates full wraps, partial wraps, and fleet graphics that bring brands to life on the road.",
          }}
        />
      </section>

      <section className="py-4">
        <Gallery images={galleryItems} title="Vehicle Wraps Gallery" />
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
          <a href="/vehicle-branding"> Vehicle Wraps & Signage </a> services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Get a free quote for a vehicle wrap today.
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

export default GalleryVehicleBranding;
