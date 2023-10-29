import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <Form className="contact-form">
                <h3 className="text-center">Send us a message</h3>
                <Form.Group className="mb-3">
                    <Form.Label className="contact-label" style={{ textAlign: 'left' }}>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Tell us what you need!" />
                </Form.Group>

                <Button className="contact-btn" variant="primary" type="submit" size="lg">
                    Get a Quote
                </Button>
            </Form>
        </div>
    );
});

export default ContactForm;