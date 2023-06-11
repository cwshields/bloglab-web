import { Button } from "react-bootstrap";
import "../../sass/App.scss";
import "../../sass/Signup.scss";
import FadeIn from "react-fade-in";

export default function Signup() {
  return (
    <div className="bloglab-container">
      <FadeIn>
        <div className="modal-wrap">
          <h3>Register</h3>
          <div>
            <div>Email</div>
            <input type="email" name="email" id="email" />
            <div>Passowrd</div>
            <input type="password" name="password" id="password1" />
            <div>Re-type Passowrd</div>
            <input type="password" name="password" id="password2" />
          </div>
          <Button>Create Account</Button>
        </div>
      </FadeIn>
    </div>
  );
}
