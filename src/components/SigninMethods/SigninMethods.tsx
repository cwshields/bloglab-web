import { Button } from "react-bootstrap";

export default function SigninMethods() {
  return (
    <div className="signin-method-wrap">
      <Button className="mx-2">
        <i className="fab fa-facebook-f"></i>
      </Button>
      <Button className="mx-2">
        <i className="fab fa-google"></i>
      </Button>
      <Button className="mx-2">
        <i className="fab fa-twitter"></i>
      </Button>
      <Button className="mx-2">
        <i className="fab fa-github"></i>
      </Button>
    </div>
  );
}
