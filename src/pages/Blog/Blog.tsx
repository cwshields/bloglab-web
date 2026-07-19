import moment from "moment";
import "../../sass/Blog.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import CommentList from "../../components/CommentList/CommentList";
import getUserKey from "../../utils/getUserKey";

export default function Blog(props: Blog) {
  const { title, body, user, date, comments } = props;
  const { description, location, education, work, joined_date } = user;
  const [follow, setFollow] = useState(false);
  const bodyHtml = useMemo(
    () => DOMPurify.sanitize(marked.parse(body ?? "") as string),
    [body],
  );
  return (
    <Container>
      <Row sm={8}>
        <Col className="blog-wrap">
          <div className="blog-card">
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
            <h2>{title}</h2>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
          <CommentList comments={comments ?? []} />
        </Col>
        <Col sm={4} className="author-wrap">
          <div className="author blog-card">
            <div className="user-wrap">
              <img className="avatar" alt="avatar" src={user.avatar} />
              <div className="name">
                <Link to={`/profile/${getUserKey(user)}`}>
                  {user.firstName} {user.lastName}
                </Link>
              </div>
            </div>
            <Button
              className={`follow-button${follow ? " following" : ""}`}
              variant={follow ? "outline-light" : "primary"}
              onClick={() => setFollow((current) => !current)}
            >
              <span className="label-default">{follow ? "Following" : "Follow"}</span>
              {follow && <span className="label-hover">Unfollow</span>}
            </Button>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="info-wrap">
              <div className="sub-header">Location</div>
              <div>{location}</div>
              <div className="sub-header">Education</div>
              <div>{education}</div>
              <div className="sub-header">Work</div>
              <div>{work}</div>
              <div className="sub-header">Joind</div>
              <div>{joined_date}</div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://medium.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-medium"></i>
              </a>
              <a href="https://dev.to" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-dev"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
