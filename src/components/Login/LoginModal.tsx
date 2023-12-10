import { useState } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import "./../../sass/Login.scss";
import SigninMethods from "../SigninMethods/SigninMethods";

export default function LoginModal(props: any) {
  const [copied, setCopied] = useState(false);
  const { handleSubmit, loginData, handleInputChange } = props;

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
              </div>
              <div>Pass: 1234</div>
            </div>
            <div className="mid">
              <strong>Employee</strong>
              <div className="username" onClick={() => copyText("mpirouet1")}>
                User: mpirouet1
              </div>
              <div>Pass: 1234</div>
            </div>
            <div>
              <strong>Customer</strong>
              <div className="username" onClick={() => copyText("mhewertsonl")}>
                User: mhewertsonl
              </div>
              <div>Pass: 1234</div>
            </div>
          </div>
          {copied && (
            <div className="modal-tooltip-wrap">
              <div className="modal-tooltip" id="tooltip">
                Copied!
              </div>
            </div>
          )}
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SigninMethods />
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <div>Email</div>
            <input
              placeholder="email@website.com"
              type="email"
              name="email"
              id="login-email"
              value={loginData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <div>Password</div>
            <input
              placeholder="••••••••••"
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>
          <Button variant="success" className="signin-btn" type="submit">
            Login
          </Button>
          <div className="forgot-password">
            <Link to="/">Forgot Password?</Link>
          </div>
        </form>
      </Modal.Body>
      <div className="login-footer">
        <OverlayTrigger
          trigger="click"
          rootClose
          placement="bottom"
          overlay={popover}
        >
          <span className="footer-link">Need help logging in?</span>
        </OverlayTrigger>
      </div>
    </>
  );
}
