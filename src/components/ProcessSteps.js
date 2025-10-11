import { Container, Row, Col } from "react-bootstrap";

const steps = [
  {
    k: 1,
    label: "CONSULTATION",
    title: "Custom signage consultation & quote",
    desc: "Discuss your needs and receive a free quote.",
  },
  {
    k: 2,
    label: "DESIGN",
    title: "Design that matches your brand",
    desc: "Custom concepts thoughtfully crafted to reflect your identity.",
  },
  {
    k: 3,
    label: "PRODUCTION",
    title: "Built to last",
    desc: "High-quality manufacturing with durable materials.",
  },
  {
    k: 4,
    label: "INSTALLATION",
    title: "Installed with care",
    desc: "Professional installation for long-term impact.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="process-section py-5 py-md-6">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg={9}>
            <h2 className="display-5 fw-bold text-heading mb-2">
              Our Simple 4 Step Signage Process
            </h2>
          </Col>
        </Row>

        <Row>
          {steps.map((s) => (
            <Col md={6} lg={6} key={s.k} className="mb-4 px-3">
              <article className="step-card h-100">
                <div className="step-number" aria-hidden="true">
                  {s.k}
                </div>

                <div className="step-content">
                  <span className="step-label">{s.label}</span>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc text-body-secondary mb-0">{s.desc}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
