import TagCard from "../../components/TagList/TagCard";
import tags from "../../data/tags";
import FadeIn from "react-fade-in";
import { Row, Col } from "react-bootstrap";
import '../../sass/TagList.scss';

const sortedTags = [...tags].sort((a, b) => a.name.localeCompare(b.name));

export default function Tags() {

  return (
    <Col md={12} lg={9} xl={9} xxl={10} className="tag-list-wrap">
      <div className="tag-list-header">
        <h2>Tag List</h2>
        <form className="d-flex search-bar" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary search-btn"
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <FadeIn delay={100}>
        <Row xs={1} sm={1} md={2} lg={2} xl={3} xxl={3} className="g-3 tag-card-wrap">
          {sortedTags.map((tag: Tag, index: number) => (
            <Col key={index}>
              <TagCard
                name={tag.name}
                color={tag.color}
                description={tag.description}
                guidelines={tag.guidelines}
                about={tag.about}
                icon={tag.icon}
              />
            </Col>
          ))}
        </Row>
      </FadeIn>
    </Col>
  );
}
