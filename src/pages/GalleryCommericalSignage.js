import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";

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

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default GalleryCommercialSignage;
