import { useState } from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";
import LoginModal from "../Login/LoginModal";
import SignupModal from "../Signup/SignupModal";
import "../../sass/Signup.scss";

export default function FormTabModal(props: any) {
  const [key, setKey]: [any, any] = useState("login");

  const [signupData, setSignupData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
    agree: false,
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: any, setData: any) => {
    const { name, value } = event.target;
    setData((prevProps: any) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any, data: any) => {
    event.preventDefault();
    console.log(data);
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
        onSelect={(k) => setKey(k)}
        fill
      >
        <Tab eventKey="login" title="Login">
          <LoginModal
            loginData={loginData}
            onHide={() => props.setModalShow(false)}
            handleInputChange={(event: any) =>
              handleInputChange(event, setLoginData)
            }
            handleSubmit={(event: any) => handleSubmit(event, loginData)}
          />
        </Tab>
        <Tab eventKey="signup" title="Signup">
          <SignupModal
            signupData={signupData}
            onHide={() => props.setModalShow(false)}
            handleInputChange={(event: any) =>
              handleInputChange(event, setSignupData)
            }
            handleSubmit={(event: any) => handleSubmit(event, signupData)}
          />
        </Tab>
      </Tabs>
    </Modal>
  );
}
