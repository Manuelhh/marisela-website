import HomeButton from "../../generalComponents/HomeButton/HomeButton";
import s from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={s.mainProjectContainer}>
      <div className={s.topContainer}>
        <HomeButton />
      </div>
      <div className={s.bottomContainer}>
        <div className={s.projectContainer}>
          <div className={s.titleContainer}>{props.project.title}</div>
          <div className={s.descContainer}>
            <p className={s.descText}>{props.project.description}</p>
          </div>
          <div className={s.imagesContainer}>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgOne}
                alt="projectImage"
              />
            </div>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgTwo}
                alt="projectImage"
              />
            </div>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgThree}
                alt="projectImage"
              />
            </div>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgFour}
                alt="projectImage"
              />
            </div>
            <div className={s.imageContainer}>
              <img
                className={s.image}
                src={props.project.imgFive}
                alt="projectImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
