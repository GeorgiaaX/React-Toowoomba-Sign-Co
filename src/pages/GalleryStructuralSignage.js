import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";

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

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default GalleryStructuralSignage;
