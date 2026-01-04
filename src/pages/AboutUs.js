import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import AboutCarousel from "../components/AboutCarousel";
import ModalButton from "../components/ModalButton";
import { Link } from "react-router-dom";

function AboutUsPage() {
  useEffect(() => {
    document.title = "About Toowoomba Sign Co | Local Sign Writers Toowoomba";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Learn more about Toowoomba Sign Co – your trusted local sign writers in Toowoomba. We create custom signage solutions for businesses across the Darling Downs."
      );
  }, []);

  const items = [
    {
      title: "View Our Process",
      desc: "Learn how we take your signage from concept and design through to installation.",
      to: "/our-process",
    },
    {
      title: "Portfolio of Completed Signs",
      desc: "Explore real projects we've delivered for businesses across Toowoomba and beyond.",
      to: "/portfolio-gallery",
    },
    {
      title: "Contact Us",
      desc: "Get in touch with our team to discuss your signage needs or request a free quote.",
      to: "/contact",
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
            title: "About Toowoomba Sign Co – Your Local ",
            lastWord: "Signwriters",
            subheading:
              "At Toowoomba Sign Co, we’re more than just signwriters, we’re brand builders. With years of industry experience, we’ve helped local businesses across Toowoomba, the Darling Downs and throughout QLD stand out with high-quality signage that delivers real results.",
            link: "/",
          }}
        />
      </section>

      <section className="py-5">
        <div className="container">
          <div className="mb-5">
            <p className="lead mb-0">
              We believe signage should do more than just display a name — it
              should tell your story, create impact, and attract customers. From
              small startups to established enterprises, we’ve proudly partnered
              with businesses of all sizes.
            </p>
          </div>

          <div className="my-5 d-flex justify-content-center">
            <AboutCarousel />
          </div>

          <div className="row align-items-stretch g-4 mt-4">
            <div className="col-md-7 col-lg-8 mt-4">
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 mb-3 text-center text-md-start">
                <span className="badge rounded-pill bg-primary text-white text-uppercase fw-semibold px-3 py-2 mr-2">
                  Toowoomba Sign Co
                </span>
                <h2 className="mb-0 fs-2 mt-2 mt-md-0">Why Choose Us?</h2>
              </div>

              <hr className="mt-2 mb-4" />

              <ul
                className="signage-list list-unstyled mb-4 fs-5"
                aria-label="Why choose Toowoomba Sign Co"
              >
                <li className="signage-item">
                  <i
                    className="fa-solid fa-signs-post product-icons"
                    aria-hidden="true"
                  ></i>
                  <span>
                    <strong>Local Knowledge:</strong> We understand Toowoomba’s
                    market, conditions, and compliance requirements.
                  </span>
                </li>

                <li className="signage-item">
                  <i
                    className="fa-solid fa-signs-post product-icons"
                    aria-hidden="true"
                  ></i>
                  <span>
                    <strong>Custom Design &amp; Manufacturing:</strong> Every
                    sign is tailored to your brand, not pulled from a template.
                  </span>
                </li>

                <li className="signage-item">
                  <i
                    className="fa-solid fa-signs-post product-icons"
                    aria-hidden="true"
                  ></i>
                  <span>
                    <strong>End-to-End Service:</strong> From design through to
                    installation, we handle everything in-house.
                  </span>
                </li>

                <li className="signage-item">
                  <i
                    className="fa-solid fa-signs-post product-icons"
                    aria-hidden="true"
                  ></i>
                  <span>
                    <strong>Proven Results:</strong> Our signage solutions are
                    built to last and designed to maximise visibility.
                  </span>
                </li>
              </ul>

              <p className="mb-0 fs-5">
                Our team of experienced signwriters, designers, and installers
                are passionate about helping your business shine — literally and
                figuratively.
              </p>
            </div>

            <div className="col-md-5 col-lg-4 mt-4">
              <article className="tsc-process-card tsc-process-card--cta h-100 d-flex flex-column">
                <div className="tsc-process-content flex-grow-1">
                  <span className="tsc-process-label">Free quote</span>

                  <h3 className="tsc-process-title mb-3">
                    Ready to get noticed?
                  </h3>

                  <p className="tsc-process-desc mb-0">
                    Let’s bring your brand to life with signage that works as
                    hard as you do. Talk to our team about tailored solutions
                    for your business.
                  </p>
                </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-center">
                    <ModalButton />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 mx-4">
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

export default AboutUsPage;
