import Tag from "../../types/Tag";
import "../../sass/TagList.scss";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TagCard(props: Tag) {
  const { name, description, color, icon } = props;

  const tagClass = "tag-card ";
  const tagColor = "tag-" + color;
  const tagTextColor = color + "-text";
  const linkURL = "/tags/" + name;

  const [follow, setFollow] = useState(false);

  return (
    <div className="display-inline-wrap">
      <Link to={linkURL} className={tagClass + tagColor}>
        <h4>
          <span className={tagTextColor}>#</span>
          {name}
        </h4>
        <p>{description}</p>
        <div className="footer-wrap">
          {follow ? (
            <Button
              variant="outline-light"
              onClick={() => setFollow((current) => !current)}
            >
              Following
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => setFollow((current) => !current)}
            >
              Follow
            </Button>
          )}
          <img className="icon" src={icon} alt="tag icon" />
        </div>
      </Link>
    </div>
  );
}
