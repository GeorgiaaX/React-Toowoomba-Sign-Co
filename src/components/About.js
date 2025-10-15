import AboutCarousel from "./AboutCarousel";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProcessSteps from "./ProcessSteps";
import ModalButton from "./ModalButton";

function About() {
  return (
    <Container className="mt-5 about-section">
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Card className="shadow-sm about-section">
            <Card.Body>
              <Card.Title>
                <h2 className="text-center about-title">
                  About Toowoomba <b className="bold-word">Sign </b>Co
                </h2>
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted text-center ">
                <h3 className="about-subheading">
                  Your trusted Toowoomba signwriter
                </h3>
              </Card.Subtitle>
              <Card.Text className="about-text text-center d-flex flex-column justify-content-center">
                <p>
                  At Toowoomba Sign Co, we are a local family business that has
                  been helping businesses across Toowoomba and the surrounding
                  region stand out with premium-quality signage solutions.
                  Whether you're looking to attract new customers, establish
                  your brand identity, or simply improve the visibility of your
                  business, we're here to deliver outstanding results tailored
                  to your needs.
                </p>
                <p>
                  From bold 3D lettering to clean and professional window
                  frosting, our team takes pride in crafting custom signage that
                  makes a lasting impression. With years of industry experience,
                  high-quality materials, and a passion for what we do,
                  Toowoomba Sign Co is your go-to choice for signs in Toowoomba.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center mt-5"
        >
          <AboutCarousel />
        </Col>
      </Row>

      <div>
        <Card className="mb-2 shadow-sm about-section mt-8">
          <Card.Body>
            <Card.Title>
              <h2 className="text-center text-heading">Why Choose us?</h2>
            </Card.Title>
            <Card.Text className="about-text text-center">
              <div>
                <p>
                  When it comes to signage, experience and attention to detail
                  make all the difference. Here's why more businesses trust
                  Toowoomba Sign Co to bring their brand to life:
                </p>
                <div>
                  <p class="text-left mt-5 bold-word shadow-sm text-heading">
                    Local Expertise
                  </p>
                  <p class="text-left">
                    As a locally owned and operated business in Toowoomba, we
                    understand what resonates with the local community. Our team
                    has worked with a wide range of businesses across industries
                    – from hospitality and retail to corporate and construction
                    – and we bring that hands-on knowledge to every project.
                  </p>
                </div>
                <div>
                  <p class="text-left mt-5 bold-word shadow-sm text-heading">
                    Tailored Solutions
                  </p>
                  <p class="text-left">
                    No two businesses are the same, which is why we specialise
                    in completely custom designs. We take the time to understand
                    your goals, brand identity, and target audience before
                    recommending the best signage option for your space and
                    budget.
                  </p>
                </div>
                <div>
                  <p class="text-left mt-5 bold-word shadow-sm text-heading">
                    High-Quality Craftsmanship
                  </p>
                  <p class="text-left">
                    We believe in getting it right the first time. Our signs in
                    Toowoomba are made using premium materials, and we employ
                    the latest production techniques to ensure a durable,
                    eye-catching finish that stands the test of time.
                  </p>
                </div>
                <div>
                  <p class="text-left mt-5 bold-word shadow-sm text-heading">
                    End-to-End Service
                  </p>
                  <p class="text-left">
                    From initial concept and design through to fabrication and
                    installation, we manage the entire process in-house. This
                    means fewer delays, better communication, and a seamless
                    experience from start to finish.
                  </p>
                </div>
                <div>
                  <p class="text-left mt-5 bold-word shadow-sm text-heading">
                    Strong Customer Relationships
                  </p>
                  <p class="text-left">
                    Our business is built on trust, reliability, and
                    word-of-mouth referrals. We work closely with our clients
                    and stand by the quality of our work. When you partner with
                    Toowoomba Sign Co, you're not just getting a sign – you're
                    getting a team committed to your success.
                  </p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div>
        <ProcessSteps />
      </div>

      <div>
        <Card className="mb-2 shadow-sm about-section">
          <Card.Body>
            <Card.Title>
              <h2 className="text-center text-heading">
                Our Portfolio of Signage Projects
              </h2>
            </Card.Title>
            <Card.Text className="about-text text-center">
              We’ve worked with businesses across Toowoomba, the Darling Downs &
              throughout QLD to deliver custom signage that gets results. Our
              portfolio includes shopfront transformations, 3D & illuminated
              signs, retail signage, and more.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card className="mb-2 shadow-sm about-section">
          <Card.Body>
            <Card.Title>
              <h2 className="text-center text-heading">
                Get a Free Signage Quote Today
              </h2>
            </Card.Title>
            <Card.Text className="about-text text-center">
              <p>
                Ready to make your business stand out? Contact Toowoomba Sign Co
                today for a free, no-obligation quote. Whether you need a bold
                new shopfront sign, a vehicle wrap, or in-store promotional
                signage, our team is here to help.
              </p>

              <div>
                <p>Call us on: 0413 733 947</p>
                <p>Email us at: jake@toowoombasignco.com.au</p>
              </div>
              <div className="d-flex flex-column align-items-center mt-4">
                <p>Or use our quote form below to get started!</p>
                <ModalButton />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default About;
