import s from "./About.module.css";
import aboutImg from "../../../images/aboutPage/aboutImg.png";
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
              <span className={s.name}>Marisela López Fierro</span> (Cd.
              Constitución, Baja California Sur. 1985. She lives in Zapopan,
              Jalisco). Artist and teacher with more than 15 years of
              experience. Teaches subjects related to the art and creativity
              development in formal education at high school level; and
              non-formal creating and participating in courses and workshops in
              social development programs. As well as arts pedagogy courses in
              government and private institutions. Trained in Visual Arts from
              the University of Guadalajara, She is a graduate of the Master's
              Degree in Education for the Arts and a student of the Master's
              Degree in Educational Psychology at the same institution.
              Currently, as part of her final work for the Master's in
              Educational Psychology, she is carrying out a psychoeducational
              intervention with young women from themes such as self-care,
              community and collaborative art at a DIF Zapopan center; She also
              works as a teacher at Preparatoria 7 and at Prepa ITESO where she
              recently designed the subject Laboratory of Culture and Art II.
            </p>
          </div>
          <div className={s.aboutImgContainer}>
            <img className={s.aboutImg} src={aboutImg} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
