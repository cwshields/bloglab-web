import BlogCard from "../BlogCard/BlogCard";
import "../../sass/Home.scss";
import BlogProps from "../../types/BlogProps";
import { Link } from "react-router-dom";
import blogs from "../../data/blogs"

const Home = () => {
  return (
    <div className="container">
      <div className="side-nav">
        <Link className="link" to="/">🏠 Home</Link>
        <Link className="link" to="/">📜 Listings</Link>
        <Link className="link" to="/">🎙️ Podcasts</Link>
        <Link className="link" to="/">🎥 Videos</Link>
        <Link className="link" to="/">🏷️ Tags</Link>
        <Link className="link" to="/">💡 FAQ</Link>
        <Link className="link" to="/">🛍️ Shop</Link>
        <Link className="link" to="/">👽 About</Link>
        <Link className="link" to="/">🙋 Contact</Link>
      </div>
      <div className="blog-list">
        <div>
          {blogs.map((blog:BlogProps) => (
            <BlogCard
              id={blog.id}
              title={blog.title}
              description={blog.description}
              readTime={blog.readTime}
              tags={blog.tags}
              date={blog.date}
              user={blog.user}
              avatar={blog.avatar}
            />
          ))}
        </div>
      </div>
      <div className="listings">
        <div>Listing #1</div>
        <div>Listing #2</div>
        <div>Listing #3</div>
      </div>
    </div>
  );
};

export default Home;
