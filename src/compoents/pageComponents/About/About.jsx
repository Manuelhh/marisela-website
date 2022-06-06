import s from "./About.module.css";
import aboutImg from "../../../images/aboutImg.png";
import HomeButton from "../../generalComponents/HomeButton/HomeButton";

const About = () => {
  return (
    <div className={s.aboutPageContainer}>
      <div className={s.top}>
        <HomeButton />
      </div>
      <div className={s.bottom}>
        <div className={s.aboutContainer}>
          <div className={s.aboutTextContainer}>
            <p className={s.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut minus
              perferendis facilis officiis velit harum impedit, nesciunt
              molestias ipsam totam laboriosam adipisci doloremque debitis
              quidem reprehenderit esse laudantium minima placeat ipsum dolor
              sit amet consectetur adipisicing elit. Ut minus perferendis
              facilis officiis velit harum impedit, nesciunt molestias ipsam
              totam laboriosam adipisci doloremque debitis quidem reprehenderit
              esse laudantium minima placeat.
            </p>
          </div>
          <div className={s.aboutImgContainer}>
            <img className={s.aboutImg} src={aboutImg} alt="about-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
