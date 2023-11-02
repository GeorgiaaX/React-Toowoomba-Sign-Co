import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>

            <Form name = "contact" className="contact-form" action="https://formsubmit.co/gsim17@hotmail.com" method="POST">
                <h3 className="text-center">Send us a message</h3>
                <Form.Group className="mb-3">
                    <Form.Label className="contact-label" style={{ textAlign: 'left' }}>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name = "name"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Phone Number" name = "phone number"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name = "email"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Tell us what you need!" name = "message"/>
                </Form.Group>

                <Button className="contact-btn" variant="primary" type="submit" size="lg">
                    Get a Quote
                </Button>
            </Form>
        </div>
    );
});

export default ContactForm;