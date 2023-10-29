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
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" autoFocus className="border-primary"/>
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