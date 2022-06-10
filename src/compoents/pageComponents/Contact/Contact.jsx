import HomeButton from "../../generalComponents/HomeButton/HomeButton";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={s.contactPageContainer}>
      <div className={s.topContainer}>
        <HomeButton />
      </div>
      <div className={s.bottomContainer}>
        <div className={s.contactFormContainer}></div>
      </div>
    </div>
  );
};

export default Contact;
