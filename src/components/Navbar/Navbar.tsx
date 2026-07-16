import { useState } from "react";
import "../../sass/Navbar.scss";
import { ReactComponent as BlogLabLogo } from "../../assets/BlogLab-green-logo-dark.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import FormTabModal from "../FormTabModal/FormTabModal";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [modalShow, setModalShow] = useState(false);
  const { user, logout } = useAuth();
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
            {user ? (
              <Dropdown align="end" className="account-dropdown">
                <Dropdown.Toggle variant="success" id="account-dropdown">
                  <img className="account-avatar" src={user.avatar} alt="avatar" />
                  {user.firstName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="dropdown-item" as={Link} to="/profile">
                    <i className="fa-regular fa-user"></i>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" as={Link} to="/settings">
                    <i className="fa-solid fa-gear"></i>
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="dropdown-item" onClick={logout}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button variant="success" onClick={() => setModalShow(true)}>
                <i className="fa-regular fa-circle-user"></i>
                Account
              </Button>
            )}
          </div>
        </div>
      </div>
      <FormTabModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
