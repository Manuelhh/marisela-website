import HomeButton from "../../generalComponents/HomeButton/HomeButton";
import s from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={s.projectContainer}>
      <div className={s.topContainer}>
        <HomeButton />
      </div>
      <div className={s.bottomContainer}>
        <div className={s.projectBottomContainer}>
          <div className={s.projectTextContainer}>
            <p>{props.project.title}</p>
          </div>
          <div className={s.projectDescContainer}>
            <p>{props.project.description}</p>
          </div>

          <div className={s.projectImagesContainer}>
            {" "}
            <div className={s.projectImgContainer}>
              <img
                className={s.projectImg}
                src={props.project.imgOne}
                alt="project"
              />
            </div>
            <div className={s.projectImgContainer}>
              <img
                className={s.projectImg}
                src={props.project.imgTwo}
                alt="project"
              />
            </div>
            <div className={s.projectImgContainer}>
              <img
                className={s.projectImg}
                src={props.project.imgThree}
                alt="project"
              />
            </div>
            <div className={s.projectImgContainer}>
              <img
                className={s.projectImg}
                src={props.project.imgFour}
                alt="project"
              />
            </div>
            <div className={s.projectImgContainer}>
              <img
                className={s.projectImg}
                src={props.project.imgFive}
                alt="project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
