import React from 'react';
import { Form, Button } from 'react-bootstrap';


const ContactForm = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>

            <Form name = "contact" className="contact-form" action="https://formsubmit.io/send/gsim17@hotmail.com" method="POST">
                <h3 className="text-center">Send us a message</h3>
                {/* honeyPOt */}
                <input name="_formsubmit_id" type="text" style={{display: "none"}} />
                {/* Disable captcha */}
                <input type = "hidden" name = "_captcha" value = "false"/>

                {/* Success Page */}
                <input name="_redirect" type="hidden" id="name" value="https://www.toowoombasignco.com.au/success" />

                <Form.Group className="mb-3">
                    <Form.Label className="contact-label" style={{ textAlign: 'left' }}>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name = "name" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Phone&nbsp;Number" name = "phone number" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" name = "email" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Tell us what you need!" name = "message" rows = "5" required/>
                </Form.Group>

                <Button className="contact-btn" variant="primary" type="submit" size="lg">
                    Get a Quote
                </Button>
            </Form>
        </div>
    );
});

export default ContactForm;