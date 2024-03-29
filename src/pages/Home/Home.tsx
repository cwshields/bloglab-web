import "../../sass/Home.scss";
import "../../sass/TagList.scss";
import { listings } from "../../data/listings";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListingTab from "../../components/Listing/ListingTab";
import Listing from "../../types/Listing";
import FadeIn from "react-fade-in";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
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
          <Link to="/listings/all" className="green-text">
            See all
          </Link>
        </div>
        <FadeIn delay={100}>
          {listings.map((listing: Listing, index: number) => (
            <ListingTab
              id={listing.id}
              key={index}
              header={listing.header}
              tags={listing.tags}
              body={listing.body}
              user={listing.user}
              date={listing.date}
              category={listing.category}
            />
          ))}
          <Button className="create-listing-btn btn-success green">
            Create Listing
          </Button>
        </FadeIn>
      </div>
    </>
  );
};

export default Home;
