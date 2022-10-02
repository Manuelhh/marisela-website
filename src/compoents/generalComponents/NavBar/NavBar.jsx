import { Link } from "react-router-dom";
import s from "./NavBar.module.css";
import emailImg from "../../../images/contactBar/email.png";
import linkedInImg from "../../../images/contactBar/linkedin.png";
import igImg from "../../../images/contactBar/ig.png";
import twitterImg from "../../../images/contactBar/twitter.png";

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
          <Link className={s.link} to="/lacuerpaquesomos">
            <div className={s.menuItemContainer}>la cuerpa que somos</div>
          </Link>
          <Link className={s.link} to="/project2">
            <div className={s.menuItemContainer}>project two</div>
          </Link>
          <Link className={s.link} to="/project3">
            <div className={s.menuItemContainer}>project three</div>
          </Link>
          <Link className={s.link} to="/project4">
            <div className={s.menuItemContainer}>project four</div>
          </Link>
          <Link className={s.link} to="/project5">
            <div className={s.menuItemContainer}>project five</div>
          </Link>
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
          <a href="https://www.twitter.com/marisela_con_s">
            <img src={twitterImg} alt="twitter-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
