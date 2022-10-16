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
              La intervención artístico-educativa que dio lugar a mi trabajo de
              titulación de la Maestría en Educación y Expresión para las Artes
              fue llevada a cabo en el año 2016 durante un semestre escolar. Uso
              del pensamiento metafórico en la experimentación fotográfica.
              Estrategia didáctica para el desarrollo de la creatividad,
              consistió en la ejecución y observación sistematizada de
              actividades a manera de laboratorio poético para desarrollar la
              creatividad en estudiantes de fotografía digital de quinto
              semestre en la Preparatoria 7 de la Universidad de Guadalajara.
              Cada semana, durante tres horas, las y los estudiantes asistieron
              a una sesión del laboratorio donde se abrieron espacios para la
              experimentación con elementos físicos como papel, pinturas,
              materiales de desecho, fotografías impresas y digitales; y
              elementos simbólicos como metáforas e historias, con la intención
              de movilizar la intuición y la observación y de esta manera,
              abordar la manipulación de imágenes como medio para la activación
              de la mirada poética. Las y los estudiantes que participaron
              registraron los procesos de cada sesión en un diario que da cuenta
              de las reflexiones acerca de sus creaciones, lo que me permitió
              observar la profundidad metacognitiva que alcanzaron. Al mismo
              tiempo, realicé un registro en fotografía y video, así como en un
              diario de notas, que utilicé para triangular la información
              recabada. El programa de estrategias didácticas fue bien recibido
              por el estudiantado; sus productos y reflexiones, además de mis
              propias observaciones revelaron elementos importantes de su
              desarrollo creativo.
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
