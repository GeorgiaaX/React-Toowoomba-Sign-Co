import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import { Container, Row, Col } from "react-bootstrap";
import ModalButton from "../components/ModalButton";

function OurProcess() {
  useEffect(() => {
    document.title = "Our Signage Process | Toowoomba Signs & Installations";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Discover how Toowoomba Sign Co brings your signage project to life – from design to installation. Reliable, professional sign writers in Toowoomba."
      );
  }, []);

  const steps = [
    {
      k: 1,
      label: "STEP 1",
      title: "Consultation & Quote",
      desc: "We start with a chat to understand your goals, brand, and budget. Our team then provides a tailored signage recommendation with a clear, upfront quote.",
    },
    {
      k: 2,
      label: "STEP 2",
      title: "Custom Design",
      desc: "Our in-house designers bring your vision to life with concepts that capture your brand identity. You’ll have the opportunity to review and approve before production.",
    },
    {
      k: 3,
      label: "STEP 3",
      title: "Manufacturing",
      desc: "Using quality materials and advanced equipment, we manufacture your signage to the highest standard — ensuring durability and a premium finish.",
    },
    {
      k: 4,
      label: "STEP 4",
      title: "Installation",
      desc: "Our skilled installers handle everything from site prep to safety checks. Whether it’s a shopfront, vehicle wrap, or structural signage, we make sure your sign is installed securely and looks flawless.",
    },
    {
      k: 5,
      label: "STEP 5",
      title: "Aftercare & Support",
      desc: "We stand by our work. Our team offers maintenance advice and aftercare support to keep your signage looking great long after installation.",
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
            title: "Our Signage Process – How We",
            lastWord: "Work",
            subheading:
              "At Toowoomba Sign Co, we make signage simple. Our clear step-by-step process ensures your project runs smoothly from start to finish.",
          }}
        />
      </section>

      {/* ADD IT HERE */}
      <section className="tsc-process py-5 py-md-6">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={9}>
              <h2 className="tsc-process-heading mb-2">
                Our 5-Step Signage Process
              </h2>
              <p className="tsc-process-sub">
                From first chat to final install — we keep it clear, local and
                professional.
              </p>
            </Col>
          </Row>

          <Row>
            {steps.map((s) => (
              <Col md={12} lg={12} key={s.k} className="mb-4 px-3">
                <article className="tsc-process-card">
                  <div className="tsc-process-num" aria-hidden="true">
                    {s.k.toString()}
                  </div>

                  <div className="tsc-process-content">
                    <span className="tsc-process-label">{s.label}</span>
                    <h3 className="tsc-process-title">{s.title}</h3>
                    <p className="tsc-process-desc mb-0">{s.desc}</p>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="product-detail-section my-4 text-center">
        <p style={{ fontSize: "1.3rem" }} className="mb-4">
          Start your signage journey today — get a free quote.
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

export default OurProcess;
