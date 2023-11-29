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
      <div className={tagClass + tagColor}>
        <Link to={linkURL}>
          <h4>
            <span className={tagTextColor}>#</span>
            {name}
          </h4>
        </Link>
        <p>{description}</p>
        <div className="footer-wrap">
          <Button
            className="bl-button"
            variant={follow ? "outline-light" : "primary"}
            onClick={() => setFollow((current) => !current)}
          >
            {follow ? "Following" : "Follow"}
          </Button>
          <img className="icon" src={icon} alt="tag icon" />
        </div>
      </div>
    </div>
  );
}
