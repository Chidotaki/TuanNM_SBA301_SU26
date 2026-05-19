import { Modal, Button } from 'react-bootstrap';
import React from 'react';

export default function OrchidsModal({ show, onHide, orchid }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-success fw-bold">{orchid?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {orchid && (
          <div className="text-center">
            <img src={orchid.image} alt={orchid.name} className="img-fluid rounded mb-3 shadow-sm" style={{ maxHeight: '300px', objectFit: 'cover' }} />
            <p className="fs-5"><strong>Category:</strong> <span className="text-success">{orchid.category}</span></p>
            <p className="text-muted">{orchid.detail || "Chưa có chi tiết về loài hoa này."}</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}