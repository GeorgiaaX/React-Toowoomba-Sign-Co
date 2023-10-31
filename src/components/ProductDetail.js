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


  const boldFirstWord = (phrase) => {
    const words = phrase.split(' ');
    return (
      <>
        <span className="bold-word">{words[0]}</span> {words.slice(1).join(' ')}
      </>
    );
  };

  return (
    <Container className="my-4 d-flex align-items-center justify-content-center" style={{ minHeight: '45vh' }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <div className="phrase-container mb-3">
            <h2 className={`phrase ${showFirstPhrase ? 'show' : 'hide'}`}>
            {boldFirstWord(firstPhrase)}
            </h2>
            <h2 className={`phrase ${!showFirstPhrase ? 'show' : 'hide'}`}>
            {boldFirstWord(secondPhrase)}
            </h2>
          </div>
          <div className = "detailed-description">
            <p className = "description-text text-muted">
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