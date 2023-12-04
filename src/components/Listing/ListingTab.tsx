import Listing from "../../types/Listing";
import TagList from "../TagList/ListingTagList";
import "../../sass/ListingTab.scss";
import { useState } from "react";
import ListingModal from "../ListingModal/ListingModal";

export default function ListingTab(props: Listing) {
  const { header, body, tags } = props;
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="taglist-wrap">
      <div className="bloglab-card listing" onClick={() => setModalShow(true)}>
        <h5 className="title">{header}</h5>
        <div className="body">{body}</div>
        <div className="tags-wrap">
          <TagList tags={tags} />
        </div>
      </div>
      <ListingModal
        {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
