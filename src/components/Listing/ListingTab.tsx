import Listing from "../../types/Listing";
import TagList from "../TagList/ListingTagList";
import "../../sass/ListingTab.scss";

export default function ListingTab(props: Listing) {
  const { header, tags, body } = props;
  return (
    <div className="bloglab-card listing">
      <h5 className="title">{header}</h5>
      <div className="body">{body}</div>
      <div className="tags-wrap">
        <TagList tags={tags} />
      </div>
    </div>
  );
}
