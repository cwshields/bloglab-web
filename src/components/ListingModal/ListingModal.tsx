import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Listing from "../../types/Listing";

interface ListingModalType extends Listing {
  show: boolean;
  onHide: () => void;
}

export default function ListingModal(props: ListingModalType) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="bloglab-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          facilis excepturi magni reiciendis debitis placeat corporis omnis in,
          exercitationem amet aut quos voluptatem.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
