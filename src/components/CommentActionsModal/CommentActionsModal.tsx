import { Modal } from "react-bootstrap";
import "../../sass/CommentActionsModal.scss";

export default function CommentActionsModal({
  show,
  onHide,
  canEdit,
  canDelete,
  onEdit,
  onDelete,
}: CommentActionsModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered className="bloglab-modal comment-actions-modal">
      <Modal.Body>
        {canEdit && (
          <button type="button" className="sheet-action" onClick={onEdit}>
            <i className="fa-solid fa-pen"></i>
            <span>Edit comment</span>
          </button>
        )}
        {canDelete && (
          <button
            type="button"
            className="sheet-action sheet-action-danger"
            onClick={onDelete}
          >
            <i className="fa-solid fa-trash"></i>
            <span>Delete comment</span>
          </button>
        )}
      </Modal.Body>
    </Modal>
  );
}
