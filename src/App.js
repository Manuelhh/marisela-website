import s from "./App.module.css";
import NavBar from "./compoents/generalComponents/NavBar/NavBar";
import { Home } from "./compoents/pageComponents/Home/Home";
import { useState } from "react";

function App() {
  // NavBar state
  const [showNavBar, setShowNavBar] = useState(false);

  const navBarState = {
    showNavBar,
    setShowNavBar,
  };
  return (
    <div className={s.appContainer}>
      <NavBar navBarState={navBarState} />
      <Home />
    </div>
  );
}

export default App;
