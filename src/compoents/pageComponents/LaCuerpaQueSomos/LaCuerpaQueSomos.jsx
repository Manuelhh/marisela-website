import HomeButton from "../../generalComponents/HomeButton/HomeButton";
import s from "./LaCuerpaQueSomos.module.css";
// Imgs
import one from "../../../images/laCuerpaQueSomosPage/one.jpeg";
import two from "../../../images/laCuerpaQueSomosPage/two.jpeg";
import three from "../../../images/laCuerpaQueSomosPage/three.jpeg";
import four from "../../../images/laCuerpaQueSomosPage/four.jpeg";
import five from "../../../images/laCuerpaQueSomosPage/five.jpeg";

const LaCuerpaQueSomos = () => {
  return (
    <div className={s.laCuerpaQueSomosPageContainer}>
      <div className={s.top}>
        <HomeButton />
      </div>
      <div className={s.bottom}>
        <div className={s.LaCuerpaQueSomosContainer}>
          <div className={s.projectTextContainer}>
            <p>La cuerpa que somos:</p>
          </div>
          <div className={s.projectDescContainer}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              consectetur voluptatum architecto cum, delectus, cupiditate,
              voluptatibus voluptas officia earum nobis sed. Nobis est odio
              doloremque laborum velit hic inventore minus?
            </p>
          </div>
          <div className={s.projectTextContainer}>
            <p className={s.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={s.projectImgContainer}>
            <img className={s.projectImg} src={one} alt="project" />
          </div>
          <div className={s.projectTextContainer}>
            <p className={s.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={s.projectImgContainer}>
            <img className={s.projectImg} src={two} alt="project" />
          </div>
          <div className={s.projectTextContainer}>
            <p className={s.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={s.projectImgContainer}>
            <img className={s.projectImg} src={three} alt="project" />
          </div>
          <div className={s.projectTextContainer}>
            <p className={s.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={s.projectImgContainer}>
            <img className={s.projectImg} src={four} alt="project" />
          </div>
          <div className={s.projectTextContainer}>
            <p className={s.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={s.projectImgContainer}>
            <img className={s.projectImg} src={five} alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaCuerpaQueSomos;
