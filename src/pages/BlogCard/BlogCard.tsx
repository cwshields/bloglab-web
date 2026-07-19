import "../../sass/BlogCard.scss";
import "../../sass/settings/colors.scss";
import { useState } from "react";
import TagList from "../../components/TagList/ListingTagList";
import moment from "moment";
import { Link } from "react-router-dom";
import slugify from "../../utils/slugify";
import getUserKey from "../../utils/getUserKey";

export default function BlogCard(props: Blog) {
  const { title, description, user, date, readTime, tags } = props;

  const [bookmark, setBookmark] = useState(false);

  const handleToggle = () => {
    setBookmark((current) => !current);
  };

  return (
    <>
      <div className="bloglab-card blog-card">
        <Link to={"/blog/" + slugify(title)}>
          <h2 className="title">{title}</h2>
        </Link>
        <div className="description">{description}</div>
        <div className="tags-wrap">
          <TagList tags={tags} />
        </div>
        <div className="footer">
          <div className="user-wrap">
            <img className="avatar" src={user.avatar} alt="avatar" />
            <div className="text-wrap">
              <div className="name">
                <Link to={`/profile/${getUserKey(user)}`}>
                  {user.firstName} {user.lastName}
                </Link>
              </div>
              <div className="date">{moment(date).format("MMM DD YYYY")}</div>
            </div>
          </div>
          <div className="right-wrap">
            <div className="readtime">{readTime} min read</div>
            <button onClick={handleToggle} className="btn bookmark">
              {bookmark ? (
                <i className="fa-solid fa-bookmark"></i>
              ) : (
                <i className="fa-regular fa-bookmark"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
