import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import ModalButton from "../components/ModalButton";

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

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default GalleryRetailPOS;
