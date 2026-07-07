import BlogType from "../../types/Blog";
import moment from "moment";
import "../../sass/Blog.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useMemo, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default function Blog(props: BlogType) {
  const { title, body, user, date } = props;
  const [follow, setFollow] = useState(false);
  const bodyHtml = useMemo(
    () => DOMPurify.sanitize(marked.parse(body ?? "") as string),
    [body]
  );
  return (
    <Container>
      <Row sm={8}>
        <Col className="blog-wrap">
          <div className="blog-card">
            <div className="user-wrap">
              <img className="avatar" src={user.avatar} alt="avatar" />
              <div className="text-wrap">
                <div className="user">
                  {user.firstName} {user.lastName}
                </div>
                <div className="date">{moment(date).format("MMM DD YYYY")}</div>
              </div>
            </div>
            <h2>{title}</h2>
            <div className="body" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </div>
        </Col>
        <Col sm={4} className="author-wrap">
          <div className="author blog-card">
            <div className="user-wrap">
              <img className="avatar" alt="avatar" src={user.avatar} />
              <div className="name">
                {user.firstName} {user.lastName}
              </div>
            </div>
            <Button
              className="follow-button"
              variant={follow ? "outline-light" : "primary"}
              onClick={() => setFollow((current) => !current)}
            >
              {follow ? "Following" : "Follow"}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
