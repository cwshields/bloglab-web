import BlogProps from "../../types/BlogProps";
import avatar from "../../assets/PngItem_4042710.png";
import "../../sass/BlogCard.scss";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Blog(props: BlogProps) {
  
  const { title, description, user, date, readTime, avatar, tags } = props;
  const [bookmark, setBookmark] = useState(false);

  const handleToggle = () => {
    setBookmark((current) => !current);
  };

  return (
    <div className="blog-card">
      <h2 className="title">{title}</h2>
      <div className="description">{description}</div>
      <div className="tags-wrap">
        <div className="tag magenta">#{tags[0]}</div>
        <div className="tag red">#{tags[1]}</div>
        <div className="tag green">#{tags[2]}</div>
      </div>
      <div className="footer">
        <div className="user-wrap">
          <img className="avatar" src={avatar} alt="avatar" />
          <div className="text-wrap">
            <div className="user">{user}</div>
            <div className="date">{date}</div>
          </div>
        </div>
        <div className="right-wrap">
          <div className="readtime">{readTime} minute read</div>
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
