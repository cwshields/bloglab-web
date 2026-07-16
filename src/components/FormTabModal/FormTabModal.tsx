import { useState } from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";
import LoginModal from "../Login/LoginModal";
import SignupModal from "../Signup/SignupModal";
import "../../sass/Signup.scss";
import { useAuth } from "../../context/AuthContext";

export default function FormTabModal(props: FormTabModalProps) {
  const { login, signup } = useAuth();
  const [key, setKey] = useState("login");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [signupError, setSignupError] = useState<string | null>(null);

  const [signupData, setSignupData] = useState<SignupDataType>({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password1: "",
    password2: "",
    agree: false,
  });

  const [loginData, setLoginData] = useState<LoginDataType>({
    identifier: "",
    password: "",
  });

  const handleInputChange = (
    event: { target: { name: string; value: string | boolean } },
    setData: any,
  ) => {
    const { name, value } = event.target;
    setData((prevProps: SignupDataType | LoginDataType) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = await login(loginData.identifier, loginData.password);
    if (error) {
      setLoginError(error);
      return;
    }
    setLoginError(null);
    setLoginData({ identifier: "", password: "" });
    props.onHide();
  };

  const handleSignupSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = await signup(signupData);
    if (error) {
      setSignupError(error);
      return;
    }
    setSignupError(null);
    setSignupData({
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      password1: "",
      password2: "",
      agree: false,
    });
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="bloglab-modal"
    >
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => k && setKey(k)}
        fill
      >
        <Tab eventKey="login" title="Login">
          <LoginModal
            loginData={loginData}
            error={loginError}
            onHide={props.onHide}
            handleInputChange={(event) =>
              handleInputChange(event, setLoginData)
            }
            handleSubmit={handleLoginSubmit}
          />
        </Tab>
        <Tab eventKey="signup" title="Signup">
          <SignupModal
            signupData={signupData}
            error={signupError}
            onHide={props.onHide}
            handleInputChange={(event) =>
              handleInputChange(event, setSignupData)
            }
            handleSubmit={handleSignupSubmit}
          />
        </Tab>
      </Tabs>
    </Modal>
  );
}
