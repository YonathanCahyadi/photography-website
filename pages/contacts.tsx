import { useRef, useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

function isEmpty(str: string) {
  return str.trim().length === 0;
}

function isEmail(str: string) {
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regEmail.test(str);
}

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameValidity, setNameValidity] = useState(null);
  const [emailValidity, setEmailValidity] = useState(null);
  const [subjectValidity, setSubjectValidity] = useState(null);
  const [messageValidity, setMessageValidity] = useState(null);

  const handleSubmit = (e) => {
    // check if name is valid
    if (isEmpty(name)) {
      setNameValidity(false);
      return;
    }
    setNameValidity(true);

    // check if email is valid
    if (isEmpty(email) || !isEmail(email)) {
      setEmailValidity(false);
      return;
    }
    setEmailValidity(true);

    // check if subject is valid
    if (isEmpty(subject)) {
      setSubjectValidity(false);
      return;
    }
    setSubjectValidity(true);

    // check if message is valid
    if (isEmpty(message)) {
      setMessageValidity(false);
      return;
    }
    setMessageValidity(true);

    // send message
    alert("sending message");

    e.preventDefault();
  };

  return (
    <div id="contacts-page">
      <Heading text="Contacts" backgroundUrl="contacts-bg-img.jpg" />

      <div id="contacts-segment">
        <SubHeading title="Stay In Touch" />

        <form className="contacts-form">
          <input
            className={`${nameValidity === false && "invalid"}`}
            type="text"
            required
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={`${emailValidity === false && "invalid"}`}
            type="email"
            required
            placeholder="Enter Your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={`${subjectValidity === false && "invalid"}`}
            type="text"
            required
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className={`${messageValidity === false && "invalid"}`}
            placeholder="Enter Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="button" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
