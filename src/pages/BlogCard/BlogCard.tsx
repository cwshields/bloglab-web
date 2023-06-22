import Blog from "../../types/Blog";
import "../../sass/BlogCard.scss";
import "../../sass/settings/colors.scss";
import { useState } from "react";
import TagList from "../../components/TagList/ListingTagList";
import moment from 'moment'

export default function BlogCard(props: Blog) {
  const { title, description, user, date, readTime, tags } = props;

  const [bookmark, setBookmark] = useState(false);

  const handleToggle = () => {
    setBookmark((current) => !current);
  };

  return (
    <div className="blog-card">
      <h2 className="title">{title}</h2>
      <div className="description">{description}</div>
      <div className="tags-wrap">
        <TagList tags={tags}/>
      </div>
      <div className="footer">
        <div className="user-wrap">
          <img className="avatar" src={user.avatar} alt="avatar" />
          <div className="text-wrap">
            <div className="user">{user.name}</div>
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
  );
}
