import Listing from "../../types/Listing";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ListingCard(props: Listing) {
  const { header, body, user, date, category, tags } = props;

  const tagList = tags.map((tag: string, index: number) => {
    return (
      <span key={index} className="listing-tag">
        #{tag}
      </span>
    );
  });

  return (
    <div className="bloglab-card listing-card">
      <div className="listing-content">
        <div>
          <h4 className="header">{header}</h4>
          <div className="date">{moment(date).format("MMM DD YYYY")}</div>
          <div className="tags">{tagList}</div>
        </div>
        <div className="body">{body}</div>
        <div className="user-wrap">
          <LazyLoadImage
            effect="blur"
            alt="Avatar"
            className="avatar"
            src={user.avatar}
          />
          <div className="text-wrap">
            <div className="user">{user.name}</div>
            <div className="category">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
