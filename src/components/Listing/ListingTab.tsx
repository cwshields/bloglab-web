import ListingProps from "../../types/ListingProps";
import TagList from "../TagList/TagList";
import "../../sass/ListingTab.scss"

export default function ListingTab(props: ListingProps) {
  const { header, tags, body, user, date } = props;
  return (
    <div className="listing">
      <h5 className="header">{header}</h5>
      <div className="body">{body}</div>
      <div className="tags-wrap">
        <TagList tags={tags}/>
      </div>
    </div>
  );
}
