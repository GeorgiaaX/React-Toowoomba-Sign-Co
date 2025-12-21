import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";

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

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default GalleryWindowGraphcis;
