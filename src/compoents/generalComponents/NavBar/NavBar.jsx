import { Link } from "react-router-dom";
import s from "./NavBar.module.css";
import emailImg from "../../../images/email.png";
import linkedInImg from "../../../images/linkedin.png";
import igImg from "../../../images/ig.png";
import twitterImg from "../../../images/twitter.png";

const NavBar = (props) => {
  const handleNavBar = () => {
    props.navBarState.setShowNavBar(!props.navBarState.showNavBar);
  };
  return (
    <div className={s.navBarContainer}>
      <div className={s.topNavBarContainer}>
        <div className={s.moreContainer}>
          <p className={s.p} onClick={handleNavBar}>
            {props.navBarState.showNavBar ? "hide" : "more"}
          </p>
        </div>
        <div
          className={s.pageMenuContainer}
          style={props.navBarState.showNavBar ? {} : { display: "none" }}
        >
          <Link className={s.link} to="/about">
            <div className={s.menuItemContainer}>about</div>
          </Link>
          <div className={(s.menuItemContainer, s.link)}>project one</div>
          <div className={(s.menuItemContainer, s.link)}>project two</div>
          <div className={(s.menuItemContainer, s.link)}>project three</div>
          <div className={(s.menuItemContainer, s.link)}>project four</div>
          <div className={(s.menuItemContainer, s.link)}>project five</div>
        </div>
      </div>

      <div
        className={s.contactMenuContainer}
        style={props.navBarState.showNavBar ? {} : { display: "none" }}
      >
        <div className={s.contactMenuItemContainer}>
          <Link to="/contact">
            <img src={emailImg} alt="email-icon" />
          </Link>
        </div>
        <div className={s.contactMenuItemContainer}>
          <a href="https://www.linkedin.com/in/mariselalf">
            <img src={linkedInImg} alt="linkedIn-icon" />
          </a>
        </div>
        <div className={s.contactMenuItemContainer}>
          <a href="https://www.instagram.com/marisela_con_ese/">
            <img src={igImg} alt="ig-icon" />
          </a>
        </div>
        <div className={s.contactMenuItemContainer}>
          <a href="https://www.google.com">
            <img src={twitterImg} alt="twitter-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
