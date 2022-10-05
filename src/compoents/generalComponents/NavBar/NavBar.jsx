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
          {/*  */}

          <div className={s.pageMenuContainerTop}>
            <Link className={s.link} to="/about">
              <div className={s.menuItemContainer}>about</div>
            </Link>

            <Link className={s.link} to="/blog">
              <div className={s.menuItemContainer}>blog</div>
            </Link>
          </div>

          {/*  */}

          <div className={s.pageMenuContainerBottom}>
            <div className={s.pageMenuContainerBottom1}>
              <div>projects:</div>
              <br />
              <Link className={s.link} to="/lacuerpaquesomos">
                <div className={s.menuItemContainer}>one</div>
              </Link>
              <Link className={s.link} to="/asociacion">
                <div className={s.menuItemContainer}>two</div>
              </Link>
              <Link className={s.link} to="/dif">
                <div className={s.menuItemContainer}>three</div>
              </Link>
              <Link className={s.link} to="/intervencion">
                <div className={s.menuItemContainer}>four</div>
              </Link>
              <Link className={s.link} to="/dada">
                <div className={s.menuItemContainer}>five</div>
              </Link>
            </div>

            <div className={s.pageMenuContainerBottom2}>
              <Link className={s.link} to="/signin">
                <div className={s.menuItemContainer}>+++</div>
              </Link>
            </div>
          </div>
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
