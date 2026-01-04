import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GalleryRetailPOS() {
  useEffect(() => {
    document.title = "Retail & Promotional Signage Portfolio | Toowoomba Signs";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "View our portfolio of retail and short-term signage in Toowoomba. Posters, banners, and seasonal promotional signs that boost sales fast."
      );
  }, []);

  const galleryItems = [
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
            title: "Retail & Promotional Signage Portfolio ",
            lastWord: "– Boost Sales Fast",
            subheading:
              "Retail thrives on seasonal promotions, and our signage helps Toowoomba shops maximise visibility. This portfolio highlights posters, banners, and temporary retail displays.",
          }}
        />
      </section>

      <section className="py-4">
        <Gallery
          images={galleryItems}
          title="Retail & Promotional Signage Gallery"
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
          <a href="/retail-pos"> Retail & Short-Term Signages</a> services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Contact us for fast, affordable promotional signage.
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

export default GalleryRetailPOS;
