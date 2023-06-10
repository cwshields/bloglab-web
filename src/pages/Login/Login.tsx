import { useState } from "react";
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../../sass/Login.scss";
import FadeIn from "react-fade-in";

export default function Login() {
  const [copied, setCopied] = useState(false);

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Login Credentials</Popover.Header>
      <Popover.Body>
        <div>
          <div className="instructions">
            Click username to copy to clipboard
          </div>
          <div className="help">
            <div>
              <strong>Admin</strong>
              <div className="username" onClick={() => copyText("cwshields")}>
                User: cwshields
                {copied ? (
                  <Tooltip className="tooltip" id="button-tooltip">
                    Copied!
                  </Tooltip>
                ) : null}
              </div>
              <div>Pass: 1234</div>
            </div>
            <div className="mid">
              <strong>Employee</strong>
              <div className="username" onClick={() => copyText("mpirouet1")}>
                User: mpirouet1
                <Tooltip id="button-tooltip">Copied!</Tooltip>
              </div>
              <div>Pass: 1234</div>
            </div>
            <div>
              <strong>Customer</strong>
              <div className="username" onClick={() => copyText("mhewertsonl")}>
                User: mhewertsonl
                <Tooltip id="button-tooltip">Copied!</Tooltip>
              </div>
              <div>Pass: 1234</div>
            </div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <div className="bloglab-container">
      <FadeIn>
        <div className="login-body">
          <div className="circle login-circle">
            <i className="custom-vec fas fa-user-alt"></i>
          </div>
          <div className="modal">
            <div className="login-body-wrap">
              <div className="modal-name">User Login</div>
              <div className="input-group">
                <input placeholder="Username" type="username" name="username" />
                <input placeholder="Password" type="password" name="password" />
              </div>
              <button className="signin-btn">Login</button>
              <div className="reg-query">
                Don't have an account?&nbsp;
                <Link to="/" className="blue-link">
                  Register here
                </Link>
              </div>
              <div className="login-footer">
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <span className="footer-link">Need help logging in?</span>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
