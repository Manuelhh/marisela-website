import s from "./Login.module.css";
import HomeButton from "../../generalComponents/HomeButton/HomeButton";

export const Login = () => {
  return (
    <div className={s.loginPageContainer}>
      <div className={s.top}>
        <HomeButton />
      </div>
      <div className={s.bottom}>
        <div className={s.loginFormContainer}>
          <form action="" className={s.loginForm}>
            <input
              type="text"
              name="username"
              placeholder="username"
              autocomplete="off"
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              autocomplete="off"
            />
            <button>log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};
