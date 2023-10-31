import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ProductDetail({ firstPhrase, secondPhrase, descriptionFirst, descriptionSecond }) {
  const [showFirstPhrase, setShowFirstPhrase] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstPhrase(prev => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="my-4 d-flex align-items-center justify-content-center" style={{ minHeight: '45vh' }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <div className="phrase-container mb-3">
            <h2 className={`phrase ${showFirstPhrase ? 'show' : 'hide'}`}>
                {firstPhrase}
            </h2>
            <h2 className={`phrase ${!showFirstPhrase ? 'show' : 'hide'}`}>
                {secondPhrase}
            </h2>
          </div>
          <div className = "detailed-description">
            <p className = "text-muted">
                {descriptionFirst}
                <br></br>
                <br></br>
                {descriptionSecond}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;