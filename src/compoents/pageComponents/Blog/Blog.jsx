import s from "./Blog.module.css";
import HomeButton from "../../generalComponents/HomeButton/HomeButton";

export const Blog = () => {
  return (
    <div className={s.blogPageContainer}>
      <div className={s.top}>
        <HomeButton />
      </div>
      <div className={s.bottom}>
        <div className={s.text}>
          <p>blog under construction</p>
        </div>
      </div>
    </div>
  );
};
