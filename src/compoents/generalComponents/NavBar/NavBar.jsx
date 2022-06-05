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
          <p onClick={handleNavBar}>
            {props.navBarState.showNavBar ? "hide" : "more"}
          </p>
        </div>
        <div
          className={s.pageMenuContainer}
          style={props.navBarState.showNavBar ? {} : { display: "none" }}
        >
          <div className={s.menuItemContainer}>about</div>
          <div className={s.menuItemContainer}>project one</div>
          <div className={s.menuItemContainer}>project two</div>
          <div className={s.menuItemContainer}>project three</div>
          <div className={s.menuItemContainer}>project four</div>
          <div className={s.menuItemContainer}>project five</div>
        </div>
      </div>

      <div
        className={s.contactMenuContainer}
        style={props.navBarState.showNavBar ? {} : { display: "none" }}
      >
        <div className={s.contactMenuItemContainer}>
          <a href="https://www.google.com">
            <img src={emailImg} alt="email-icon" />
          </a>
        </div>
        <div className={s.contactMenuItemContainer}>
          <a href="https://www.google.com">
            <img src={linkedInImg} alt="linkedIn-icon" />
          </a>
        </div>
        <div className={s.contactMenuItemContainer}>
          <a href="https://www.google.com">
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
