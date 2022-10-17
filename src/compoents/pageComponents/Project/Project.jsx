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
            <div className={s.descText}>
              {props.project.description}
              {props.project.id === 4 ? <br></br> : ""}
              {props.project.id === 4 ? <br></br> : ""}
              {props.project.id === 4 ? <div>Team:</div> : ""}
              {props.project.id === 4 ? (
                <div>General Director: Marisela L. Fierro</div>
              ) : (
                ""
              )}
              {props.project.id === 4 ? (
                <div>Editorial Coordinator: Pedro Valderrama Villanueva</div>
              ) : (
                ""
              )}
              {props.project.id === 4 ? (
                <div>
                  Correction of texts: Diego Vázquez and Ana Lilia Larios
                </div>
              ) : (
                ""
              )}
              {props.project.id === 4 ? (
                <div>Graphic Design and Image Editing: Marisela L. Fierro</div>
              ) : (
                ""
              )}
              {props.project.id === 4 ? (
                <div>Collaborator: Victor Villalobos</div>
              ) : (
                ""
              )}
            </div>
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
