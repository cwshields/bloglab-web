import "../../sass/Navbar.scss";
import { ReactComponent as BlogLabLogo } from "../../assets/BlogLab-green-logo-dark.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrap">
        <div className="navbar-left-wrap">
          <div className="logo-wrap">
            <Link to="/">
              <BlogLabLogo width={150} />
            </Link>
          </div>
          <form className="d-flex search-bar" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-green search-btn" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="navbar-right-wrap">
          <Link to="/login" className="link">
            Login
          </Link>
          <Link to="/signup">
            <button type="button" className="btn btn-outline-green">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
