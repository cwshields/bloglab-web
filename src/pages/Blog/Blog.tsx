import BlogType from "../../types/Blog";
import moment from "moment";
import "../../sass/Blog.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Blog(props: BlogType) {
  const { title, description, user, date } = props;

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
            <div>{description}</div>
          </div>
        </Col>
        <Col sm={4} className="author-wrap">
          <div className="author blog-card">
            <img className="avatar" alt="avatar" src={user.avatar} />
            <div className="name">
              {user.firstName} {user.lastName}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
