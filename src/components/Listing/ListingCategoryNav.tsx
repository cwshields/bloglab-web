import { Link } from "react-router-dom";
import "../../sass/Listings.scss";

export default function ListingCategoryNav() {
  return (
    <div className="listing-category-nav-wrap">
      <h2>Listings</h2>
      <form className="d-flex search-bar" role="search">
        <input
          className="form-control bloglab-bg-dark"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div className="listing-category-nav">
        <Link className="link" to="/listings/all">
          All Listings
        </Link>
        <Link className="link" to="/listings/collabs">
          Contributors/Collaborators Wanted
        </Link>
        <Link className="link" to="/listings/cfp">
          Conference CFP
        </Link>
        <Link className="link" to="/listings/forhire">
          Available for Hire
        </Link>
        <Link className="link" to="/listings/education">
          Education/Courses
        </Link>
        <Link className="link" to="/listings/jobs">
          Job Listings
        </Link>
        <Link className="link" to="/listings/mentors">
          Offering Mentorship
        </Link>
        <Link className="link" to="/listings/mentees">
          Seeking a Mentor
        </Link>
        <Link className="link" to="/listings/forsale">
          Stuff for Sale
        </Link>
        <Link className="link" to="/listings/events">
          Upcoming Events
        </Link>
        <Link className="link" to="/listings/misc">
          Miscellaneous
        </Link>
        <Link className="link" to="/listings/products">
          Products/Tools
        </Link>
      </div>
    </div>
  );
}
