/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';

function MyModal({ show, handleClose, childAction, title, children }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {childAction}
    </Modal>
  );
}

export default MyModal;