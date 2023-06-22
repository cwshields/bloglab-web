import SideNav from "../../components/SideNav/SideNav";
import TagCard from "../../components/TagList/TagCard";
import tags from "../../data/tags";
import Tag from "../../types/Tag";
import FadeIn from "react-fade-in";

export default function Tags() {
  let last = window.location.pathname
    .replace(/\/$/, "")
    .split("/")
    .splice(-1, 1);
  
  console.log(tags)

  return (
    <div className="container">
      <SideNav />
      <div className="tag-list-wrap">
        <div className="tag-list-header">
          <h2>Tag List</h2>
          {last}
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
    </div>
  );
}