import HomeButton from "../../generalComponents/HomeButton/HomeButton";
import s from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const subjectRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleUserData = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value === "" ||
      subjectRef.current.value === "" ||
      emailRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      nameRef.current.focus();
      return;
    }

    emailjs
      .sendForm(
        "service_b3bqjep",
        "template_ubefjka",
        formRef.current,
        "7RhgiDzoqn1bPUjZk"
      )
      .then(
        (result) => {
          console.log("AQUI!!!!!", result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    nameRef.current.value = "";
    subjectRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    nameRef.current.focus();
  };

  const handleSent = () => {
    setSent(false);
    nameRef.current.focus();
  };

  return (
    <div className={s.contactPageContainer}>
      <div className={s.topContainer}>
        <HomeButton />
      </div>
      <div className={s.bottomContainer}>
        <div className={s.contactFormContainer}>
          <form action="" className={s.contactForm} ref={formRef}>
            <input
              type="text"
              placeholder="name"
              name="name"
              autocomplete="off"
              ref={nameRef}
            />
            <input
              type="text"
              placeholder="subject"
              name="subject"
              autocomplete="off"
              ref={subjectRef}
            />
            <input
              type="text"
              placeholder="email"
              name="email"
              autocomplete="off"
              ref={emailRef}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              ref={messageRef}
            ></textarea>
            <button onClick={handleUserData}>send</button>
          </form>
        </div>
      </div>
      {sent ? (
        <div className={s.thanksMessage}>
          <div>
            message sent
            <sup
              className={s.thanksMessageButton}
              onClick={() => handleSent(false)}
            >
              close
            </sup>
          </div>
        </div>
      ) : (
        <div className={s.thanksMessage}></div>
      )}
    </div>
  );
};

export default Contact;
