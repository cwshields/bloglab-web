import BlogType from "../../types/Blog";
import moment from "moment";
import "../../sass/BlogCard.scss";

export default function Blog(props: BlogType) {
  const { title, description, user, date, readTime, tags, banner } = props;

  return (
    <div className="blog-wrap">
      <div className="blog-card">
        <div className="user-wrap">
          <img className="avatar" src={user.avatar} alt="avatar" />
          <div className="text-wrap">
            <div className="user">{user.name}</div>
            <div className="date">{moment(date).format("MMM DD YYYY")}</div>
          </div>
        </div>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
    </div>
  );
}
