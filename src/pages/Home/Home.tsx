import "../../sass/Home.scss";
import "../../sass/TagList.scss";
import { blogs, listings } from "../../data/blogs";
import BlogCard from "../BlogCard/BlogCard";
import BlogProps from "../../types/BlogProps";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Listing from "../../components/Listing/ListingTab";
import ListingProps from "../../types/ListingProps";
import SideNav from "../../components/SideNav/SideNav";
import FadeIn from "react-fade-in";
import { Route, Routes, Outlet } from "react-router-dom";
import BlogList from "../BlogList/BlogListLatest";

const Home = () => {
  return (
    <div className="container">
      <SideNav />
      <div className="blog-list">
        <div className="category">
          <Link className="link" to="/home/latest">
            Latest
          </Link>
          <Link className="link" to="/home/top">
            Top
          </Link>
        </div>
        <Outlet />
      </div>
      <div className="listings-wrap">
        <div className="listings-header-wrap">
          <h3 className="header">Listings</h3>
          <Link to="/listings" className="green-text">
            See all
          </Link>
        </div>
        <FadeIn>
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
          <Button className="create-listing-btn btn-success green">
            Create Listing
          </Button>
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
