import React, { useEffect } from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ContactDetails from "../components/ContactDetails";
import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Toowoomba Sign Co | Signs Toowoomba";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Get in touch with Toowoomba Sign Co today. Expert signage solutions in Toowoomba – call us or request a free signage quote online."
      );
  }, []);

  const [, forceUpdate] = React.useState();

  React.useEffect(() => {
    forceUpdate({});
  }, []);

  const contactFormRef = React.createRef();

  const items = [
    {
      title: "Our Services",
      desc: "Explore the full range of signage services we offer for businesses of all sizes.",
      to: "/#services-section",
    },
    {
      title: "Portfolio",
      desc: "View a selection of signage projects we’ve completed for clients across the region.",
      to: "/portfolio-gallery",
    },
    {
      title: "Learn About Our Process",
      desc: "See how we take your signage from concept and design through to installation.",
      to: "/our-process",
    },
  ];

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <section>
        <Header
          isGenericPage={false}
          isContactPage={true}
          heading={{
            title: "Contact Toowoomba Sign",
            lastWord: "Co",
            subheading:
              "Looking for custom signs in Toowoomba? Our expert signwriters are here to help. Get in touch for a free quote or to discuss your signage project.",
          }}
          contactFormRef={contactFormRef}
        />
      </section>

      <section>
        <ContactDetails />
      </section>

      <section>
        <Form ref={contactFormRef} />
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
