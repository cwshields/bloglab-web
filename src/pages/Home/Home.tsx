import BlogCard from "../BlogCard/BlogCard";
import "../../sass/Home.scss";
import BlogProps from "../../types/BlogProps";
import { Link } from "react-router-dom";
import { blogs, listings } from "../../data/blogs";
import Listing from "../../components/Listing/ListingTab";

const Home = () => {
  return (
    <div className="container">
      <div className="side-nav">
        <Link className="link" to="/">
          🏠 Home
        </Link>
        <Link className="link" to="/">
          📜 Listings
        </Link>
        <Link className="link" to="/">
          🎙️ Podcasts
        </Link>
        <Link className="link" to="/">
          🎥 Videos
        </Link>
        <Link className="link" to="/">
          🏷️ Tags
        </Link>
        <Link className="link" to="/">
          💡 FAQ
        </Link>
        <Link className="link" to="/">
          🛍️ Shop
        </Link>
        <Link className="link" to="/">
          👽 About
        </Link>
        <Link className="link" to="/">
          🙋 Contact
        </Link>
      </div>
      <div className="blog-list">
        {blogs.map((blog: BlogProps) => (
          <BlogCard
            id={blog.id}
            title={blog.title}
            description={blog.description}
            readTime={blog.readTime}
            tags={blog.tags}
            date={blog.date}
            user={blog.user}
          />
        ))}
      </div>
      <div className="listings">
        {listings.map((listing) => (
          <Listing
            header={listing.header}
            tags={listing.tags}
            body={listing.body}
            user={listing.user}
            date={listing.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
