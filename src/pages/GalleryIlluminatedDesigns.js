import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";

function GalleryIlluminatedDesigns() {
  useEffect(() => {
    document.title = "3D & Illuminated Signage Portfolio | Signage Toowoomba";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "View our Toowoomba portfolio of 3D and illuminated signs. From LED lightboxes to 3D lettering, our signage helps businesses shine day and night."
      );
  }, []);

const galleryItems = [
  {
    src: "../portfolio/IlluminatedDesigns/3D Acrylic Signage Toowoomba.webp",
    alt: "3D acrylic sign Toowoomba – custom fabricated logo signage",
  },
  {
    src: "../portfolio/IlluminatedDesigns/Custom 3D Lettering Toowoomba.webp",
    alt: "Reception wall business sign Toowoomba – bright reception design",
  },
  {
    src: "../portfolio/IlluminatedDesigns/Freestanding Lightbox Signs Toowoomba.webp",
    alt: "Backlit signage Toowoomba – premium business sign",
  },
  {
    src: "../portfolio/IlluminatedDesigns/Illuminated Letter Signs Toowoomba.webp",
    alt: "Halo-lit 3D letters Toowoomba – illuminated wall signage",
  },
  {
    src: "../portfolio/IlluminatedDesigns/Illuminated Push Through Letter Signs Toowoomba.webp",
    alt: "Corporate 3d illuminated sign Toowoomba – creative branding",
  },
  {
    src: "../portfolio/IlluminatedDesigns/Laser Cut Acrylic Signage Toowoomba.webp",
    alt: "3d lettering sign Toowoomba installed by sign writers",
  },
  {
    src: "../portfolio/IlluminatedDesigns/Light Up Signage Toowoomba.webp",
    alt: "Corporate 3D illuminated signage Toowoomba – modern finish",
  },
  {
    src: "../portfolio/IlluminatedDesigns/Lightbox Signage Toowoomba.webp",
    alt: "Lightbox sign Toowoomba – high-impact advertising",
  },
  {
    src: "../portfolio/IlluminatedDesigns/Painted 3D Signs Toowoomba.webp",
    alt: "Exterior 3D letters Toowoomba – custom signage installation",
  },
  {
    src: "../portfolio/IlluminatedDesigns/Router Cut 3D Signage Toowoomba.webp",
    alt: "Completed 3D signage Toowoomba project",
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
            title: "3D & Illuminated Signs Portfolio ",
            lastWord: "– Light Up Your Brand",
            subheading:
              "Illuminated signs ensure visibility day and night. Our portfolio showcases LED signs, neon-style lighting, and 3D lettering that make businesses shine bright across Toowoomba.",
          }}
        />
      </section>

      <section className="py-4">
        <Gallery images={galleryItems} title="Illuminated Signage Gallery" />
      </section>

      <section className="product-detail-section my-4 text-center">
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          See more about our{" "}
          <a href="/illuminated-designs"> 3D & Illuminated Signs </a>{" "}
          services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Get a quote today and make your brand impossible to miss!
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

export default GalleryIlluminatedDesigns;
