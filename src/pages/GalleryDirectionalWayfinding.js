import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";

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

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default GalleryDirectionalWayfinding;
