import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CustomFooter from "../components/CustomFooter";
import ProductsSlide from "../components/ProductsSlide";
import ProductsServices from "../components/ProductsServices";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import About from "../components/About";
import ElevateBrand from "../components/ElevateBrand";

export default function Home() {
  useEffect(() => {
    document.title =
      "Toowoomba Sign Co | Signs Toowoomba | Custom Signage & Sign Writers Toowoomba";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Toowoomba Sign Co are trusted local sign writers in Toowoomba. We design, manufacture, and install custom signage solutions – shopfronts, vehicle wraps, interior and commercial signs."
      );
  }, []);

  const productsServicesRef = useRef(null);
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <section>
        <FixedQuoteBtn />
      </section>
      <section>
        <Hero
          isHomePage={true}
          heading={{
            title: "Signs Toowoomba – Custom Signage & Sign Writers Toowoomba",
          }}
        />
      </section>

      <section>
        <ProductsSlide />
      </section>

      <section>
        <ElevateBrand targetRef={productsServicesRef} />
      </section>

      <section ref={productsServicesRef}>
        <ProductsServices />
      </section>

      <section>
        <About isAboutSection={true} targetRef={productsServicesRef} />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}
