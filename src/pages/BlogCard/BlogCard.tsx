import BlogProps from "../../types/BlogProps";
import avatar from "../../assets/PngItem_4042710.png";
import "../../sass/BlogCard.scss";
import "../../sass/settings/colors.scss";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Blog(props: BlogProps) {
  const { title, description, user, date, readTime, tags } = props;
  
  const colors = [
    "red",
    "magenta",
    "blue",
    "green",
    "violet",
    "orange",
    "yellow",
    "aqua",
    "teal",
  ];
  
  const getRandom = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  const [bookmark, setBookmark] = useState(false);
  
  const handleToggle = () => {
    setBookmark((current) => !current);
  };


  const classList = "tag ";

  return (
    <div className="blog-card">
      <h2 className="title">{title}</h2>
      <div className="description">{description}</div>
      <div className="tags-wrap">
        {tags.map((tag) => (
          <div className={classList + getRandom()}>#{tag}</div>
        ))}
      </div>
      <div className="footer">
        <div className="user-wrap">
          <img className="avatar" src={user.avatar} alt="avatar" />
          <div className="text-wrap">
            <div className="user">{user.name}</div>
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
