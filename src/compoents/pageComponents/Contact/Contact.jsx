import HomeButton from "../../generalComponents/HomeButton/HomeButton";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={s.contactPageContainer}>
      <div className={s.topContainer}>
        <HomeButton />
      </div>
      <div className={s.bottomContainer}>
        <div className={s.contactFormContainer}>
          <form action="" className={s.contactForm}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              autocomplete="off"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              autocomplete="off"
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              autocomplete="off"
            />
            <textarea name="message" rows="5" placeholder="Message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
