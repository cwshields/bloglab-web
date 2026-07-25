import { Button, Modal } from "react-bootstrap";
import "../../sass/CommentActionsModal.scss";

export default function ConfirmDeleteModal({
  show,
  onHide,
  onConfirm,
  deleting,
}: ConfirmDeleteModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered className="bloglab-modal confirm-delete-modal">
      <Modal.Header closeButton>
        <Modal.Title>Delete comment?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this comment? This action cannot be undone.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-light" onClick={onHide} disabled={deleting}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={deleting}>
          {deleting ? "Deleting..." : "Delete"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
