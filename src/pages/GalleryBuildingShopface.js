import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";

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

      <section className="product-detail-section my-4 text-center">
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          See more about our <a href="/building-shopface"> Shopfront & Building Signage </a> services.
        </p>
        <p style={{ fontSize: "1.3rem" }} className="mb-4">Contact us today for a free design consultation.</p>
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

export default GalleryBuildingShopface;