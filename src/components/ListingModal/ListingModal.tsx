import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Listing from "../../types/Listing";
import moment from "moment";

interface ListingModalType extends Listing {
  show: boolean;
  onHide: () => void;
}

export default function ListingModal(props: ListingModalType) {
  const { header, body, user, date, onHide } = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="bloglab-modal listingtab-wrap"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{body}</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="user-wrap">
          <img className="avatar" src={user.avatar} alt="avatar" />
          <div className="text-wrap">
            <div className="user">{user.name}</div>
            <div className="date">{moment(date).format("MMM DD YYYY")}</div>
          </div>
        </div>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
