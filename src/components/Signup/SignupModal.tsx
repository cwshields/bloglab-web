import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../sass/App.scss";
import "../../sass/Signup.scss";
import SigninMethods from "../SigninMethods/SigninMethods";

export default function SignupModal(props: SignupModalProps) {
  const { handleSubmit, signupData, handleInputChange, error } = props;
  const customLabel = (
    <div>
      I have read and agree to the{" "}
      <Link onClick={props.onHide} to="/terms">
        Terms & Conditions
      </Link>
    </div>
  );

  return (
    <>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Create New Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SigninMethods />
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <label>Email</label>
            <input
              autoComplete="off"
              placeholder="email@website.com"
              type="email"
              name="email"
              id="signup-email"
              value={signupData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <label>Username</label>
            <input
              autoComplete="off"
              placeholder="Username"
              type="username"
              name="username"
              id="username"
              value={signupData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <label>First Name</label>
            <input
              autoComplete="off"
              placeholder="First Name"
              type="text"
              name="firstName"
              id="firstName"
              value={signupData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <label>Last Name</label>
            <input
              autoComplete="off"
              placeholder="Last Name"
              type="text"
              name="lastName"
              id="lastName"
              value={signupData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <label>Password</label>
            <input
              autoComplete="off"
              placeholder="••••••••••"
              type="password"
              name="password1"
              id="password1"
              value={signupData.password1}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <label>Retype Password</label>
            <input
              autoComplete="off"
              placeholder="••••••••••"
              type="password"
              name="password2"
              id="password2"
              value={signupData.password2}
              onChange={handleInputChange}
            />
          </div>
          <Form.Check
            type="checkbox"
            name="agree"
            id="default-checkbox"
            label={customLabel}
            onChange={(e) => {
              handleInputChange({
                target: {
                  name: e.target.name,
                  value: e.target.checked,
                },
              });
            }}
            checked={signupData.agree}
          />
          {error && <div className="form-error">{error}</div>}
          <Button variant="success" className="signin-btn" type="submit">
            Signup
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </>
  );
}
