import { useState } from "react";
import { Button } from "react-bootstrap";
import FadeIn from "react-fade-in";
import "../../sass/Contact.scss";

const MAX_MESSAGE_LENGTH = 500;

export default function Contact() {
  const [contactData, setContactData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setContactData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <FadeIn delay={100}>
      <div className="jumbotron contact-wrap">
        <h1>Contact Us</h1>
        <p>
          <em>
            Have a question or feedback? Fill out the form below and we'll get
            back to you.
          </em>
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-wrap">
            <label htmlFor="contact-email">Email</label>
            <input
              autoComplete="off"
              placeholder="email@website.com"
              type="email"
              name="email"
              id="contact-email"
              value={contactData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="contact-first-name">First Name</label>
            <input
              autoComplete="off"
              placeholder="First Name"
              type="text"
              name="firstName"
              id="contact-first-name"
              value={contactData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="contact-last-name">Last Name</label>
            <input
              autoComplete="off"
              placeholder="Last Name"
              type="text"
              name="lastName"
              id="contact-last-name"
              value={contactData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="contact-message">Message</label>
            <textarea
              placeholder="Type your message here..."
              name="message"
              id="contact-message"
              rows={6}
              maxLength={MAX_MESSAGE_LENGTH}
              value={contactData.message}
              onChange={handleInputChange}
            />
            <div className="char-counter">
              {contactData.message.length}/{MAX_MESSAGE_LENGTH}
            </div>
          </div>
          <Button variant="success" className="signin-btn" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </FadeIn>
  );
}
