import ListingProps from "../../types/ListingProps";
import moment from "moment";

export default function ListingCard(props: ListingProps) {
  const { header, body, user, date, category, tags } = props;
  return (
    <div className="listing-card">
      <div className="listing-content">
        <div>
          <h4 className="header">{header}</h4>
          <div className="date">{moment(date).format("MMM DD YYYY")}</div>
          <div className="tags">#{tags}</div>
        </div>
        <div className="body">{body}</div>
        <div className="user-wrap">
          <img className="avatar" src={user.avatar} alt="Avatar" />
          <div className="text-wrap">
            <div className="user">{user.name}</div>
            <div className="category">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
