import s from "./ProjectInt.module.css";
import HomeButton from "../../generalComponents/HomeButton/HomeButton";

export const ProjectInt = () => {
  return (
    <div className={s.projectIntContainer}>
      <div className={s.top}>
        <HomeButton />
      </div>
      <div className={s.bottom}>
        <div className={s.descContainer}>
          <div className={s.descTitleContainer}>
            Intervención artístico-educativa:
          </div>
          <div className={s.descriptionContainer}>
            <p className={s.textContainer}>
              The artistic-educative intervention that carried to my final paper
              for my Master’s Degree in Art Education and Expression occurred
              during the year 2016 during a school semester. Use of metaphorical
              thought in photographic experimentation. Didactic strategy for the
              development of creativity, consisted in the systemized execution
              and observation of activities as a laboratory to develop the
              creativity in students of the digital photography subject in the
              fifth semester of the Preparatoria 7 of the University of
              Guadalajara.
              <br></br>
              <br></br>
              Every week, for three hours, the students attended a laboratory
              session during which spaces were opened for experimentation with
              physical elements such as paper, paint, design materials, printed
              and digital photographs; and symbolic elements such as metaphors
              and stories, with the intention of mobilizing intuition and
              observation and, in this way, addressing the manipulation of
              images as a means of activating the poetic gaze.
              <br></br>
              <br></br>
              The students who participated recorded the processes of each
              session in a diary that accounts for the reflections on their
              creations, which allowed me to observe the metacognitive depth
              they reached. At the same time, I made a photographic and video
              record, as well as a journal of notes, which I used to triangulate
              the information collected. The teaching strategies program was
              well received by the students; his products and reflections, as
              well as my own observations, revealed important elements of his
              creative development.
            </p>
          </div>
        </div>
        <div className={s.imgsContainer}>
          <div className={s.imgContainer}>
            <img
              className={s.image}
              src="https://res.cloudinary.com/mangud/image/upload/v1664991402/Marisela/Screen_Shot_2022-10-05_at_1.36.20_PM_xswmkc.png"
              alt="project image"
            />
          </div>
          <div className={s.imgContainer}>
            <img
              className={s.image}
              src="https://res.cloudinary.com/mangud/image/upload/v1664990651/Marisela/Atrapada_ctbhe0.png"
              alt="project image"
            />
          </div>
          <div className={s.imgContainer}>
            <img
              className={s.image}
              src="https://res.cloudinary.com/mangud/image/upload/v1664990648/Marisela/Caja_espacial_x2hlyv.jpg"
              alt="project image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
