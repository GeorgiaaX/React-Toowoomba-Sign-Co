import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function ModalComponent({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide} centered className="custom-modal">
            <div className='modal-container'>
            <Modal.Header className=" modalHeader text-white">
                <Modal.Title>Get a Quote</Modal.Title>
                <Button variant="link" onClick={onHide} className="close text-white">
                    &times;
                </Button>
            </Modal.Header>
            <Modal.Body className='modal-background'>
                <Form name = "contact" action="https://formsubmit.co/9f7151693a5664d596342942bd7b3ba8" method="POST">
                    {/* honeyPOt */}
                <input type = "text" name = "_honey" style = {{ display: "none"}}/>
                {/* Disable captcha */}
                <input type = "hidden" name = "_captcha" value = "false"/>

                {/* Success Page */}
                <input type = "hidden" name = "_next" value = "https://papaya-puffpuff-9ff99c.netlify.app/success"></input>
                
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" autoFocus className="border-primary"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="contact-form-label">Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Phone Number" name = "phone number"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="border-info"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Tell us what you need!" className="border-success"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <Button variant="outline-secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary">
                    Get a Quote
                </Button>
            </Modal.Footer>
            </div>
            
        </Modal>
    );
}