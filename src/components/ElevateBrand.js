import ScrollDownButton from "./ScrollDownButton";
import { Container, Row, Card } from "react-bootstrap";

function ElevateBrand({targetRef}) {
  return (
    <Container className="about-section">
      <Row className="justify-content-center align-items-center">
        <Card className="mb-2 shadow-sm about-section">
          <Card.Body>
            <Card.Title>
              <h2 className="text-center about-title">
                Elevate your brand in Toowoomba & Darling Downs
              </h2>
            </Card.Title>
            <Card.Text className="text-center" style={{fontSize: "1.3rem"}}>
              <p>
                Want your business to stand out with eye-catching, bold signage?
                Toowoomba Sign Co offer the perfect blend of local expertise and
                global standards to deliver you with a range of high-quality
                signs to increase your visibility within the Toowoomba and
                Darling Downs region.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="text-center">
          <ScrollDownButton
            targetRef={targetRef}
            title="View our range of signage solutions"
            className="mb-3 modalButton"
          />
        </div>
      </Row>
    </Container>
  );
}

export default ElevateBrand;
