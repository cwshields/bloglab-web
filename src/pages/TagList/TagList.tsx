import TagCard from "../../components/TagList/TagCard";
import tags from "../../data/tags";
import FadeIn from "react-fade-in";
import '../../sass/TagList.scss';

export default function Tags() {

  return (
    <>
      <div className="tag-list-wrap col-md-7 col-xxl-10">
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
        <FadeIn className="" delay={100}>
          <div className="tag-card-wrap">
            {tags
              .map((tag: Tag, index: number) => (
                <TagCard
                  key={index}
                  name={tag.name}
                  color={tag.color}
                  description={tag.description}
                  guidelines={tag.guidelines}
                  about={tag.about}
                  icon={tag.icon}
                />
              ))
              .sort((a, b) => a.props.name.localeCompare(b.props.name))}
          </div>
        </FadeIn>
      </div>
    </>
  );
}
