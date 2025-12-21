import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";

function GalleryReceptionInterior() {
  useEffect(() => {
    document.title = "Reception & Interior Signage Portfolio | Sign Writers Toowoomba";
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

      <section className="product-detail-section my-4 text-center">
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          See more about our{" "}
          <a href="/reception-interior"> Reception & Interior Signage </a>{" "}
          services.
        </p>
        <p style={{fontSize: "1.3rem"}} className="mb-4">
          Contact us to create a welcoming interior space.
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

export default GalleryReceptionInterior;
