import BlogCard from "../BlogCard/BlogCard";
import "../../sass/Home.scss";
import "../../sass/TagList.scss";
import BlogProps from "../../types/BlogProps";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { blogs, listings } from "../../data/blogs";
import Listing from "../../components/Listing/ListingTab";
import ListingProps from "../../types/ListingProps";
import SideNav from "../../components/SideNav/SideNav";

const Home = () => {
  return (
    <div className="container">
      <SideNav />
      <div className="blog-list">
        {blogs.map((blog: BlogProps, index: number) => (
          <BlogCard
            id={blog.id}
            key={index}
            title={blog.title}
            description={blog.description}
            readTime={blog.readTime}
            tags={blog.tags}
            date={blog.date}
            user={blog.user}
          />
        ))}
      </div>
      <div className="listings-wrap">
        <div className="listings-header">
          <h3 className="header">Listings</h3>
          <Link to="/" className="green-text">See all</Link>
        </div>
        {listings.map((listing: ListingProps, index: number) => (
          <Listing
            id={listing.id}
            key={index}
            header={listing.header}
            tags={listing.tags}
            body={listing.body}
            user={listing.user}
            date={listing.date}
          />
        ))}
        <Button className="create-listing-btn green">Create Listing</Button>
      </div>
    </div>
  );
};

export default Home;
