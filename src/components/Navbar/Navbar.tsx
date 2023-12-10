import { useState } from "react";
import "../../sass/Navbar.scss";
import { ReactComponent as BlogLabLogo } from "../../assets/BlogLab-green-logo-dark.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormTabModal from "../FormTabModal/FormTabModal";

export default function Navbar() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
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
              <button
                className="btn btn-outline-green search-btn"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="navbar-right-wrap">
            <Button variant="success" onClick={() => setModalShow(true)}>
              Login/Signup
            </Button>
          </div>
        </div>
      </div>
      <FormTabModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
