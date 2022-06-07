import { Routes, Route } from "react-router-dom";
import s from "./App.module.css";
import NavBar from "./compoents/generalComponents/NavBar/NavBar";
import { Home } from "./compoents/pageComponents/Home/Home";
import ErrorPage from "./compoents/pageComponents/ErrorPage/ErrorPage";
import About from "./compoents/pageComponents/About/About";
import { useState } from "react";
import LaCuerpaQueSomos from "./compoents/pageComponents/LaCuerpaQueSomos/LaCuerpaQueSomos";

function App() {
  // NavBar state
  const [showNavBar, setShowNavBar] = useState(false);

  // NavBar/About props
  const navBarState = {
    showNavBar,
    setShowNavBar,
  };
  return (
    <div className={s.appContainer}>
      <NavBar navBarState={navBarState} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lacuerpaquesomos" element={<LaCuerpaQueSomos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
