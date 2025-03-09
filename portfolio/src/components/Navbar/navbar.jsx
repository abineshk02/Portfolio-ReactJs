import "react";
import "./navbar.css";
import logo from "../../assets/assets/logo.svg";
import nav_underline from "../../assets/assets/nav_underline.svg";
import menu_open from "../../assets/assets/menu_open.svg";
import menu_close from "../../assets/assets/menu_close.svg"
import { useState } from "react";
import { Link as AnchorLink } from "react-scroll";
import { useRef } from "react";


const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [menu, setMenu] = useState("home");
  // eslint-disable-next-line no-undef
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu}alt="" className="nav-mob-close"/>
        <li>
          <AnchorLink
            className="anchor-link"
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="about"
            offset={-50}
            smooth={true}
            duration={500}
            onClick={() => setMenu("about")}
          >
            <p>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="projects"
            offset={-50}
            smooth={true}
            duration={500}
            onClick={() => setMenu("projects")}
          >
            <p>Projects</p>
          </AnchorLink>
          {menu === "projects" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="contact"
            offset={-50}
            smooth={true}
            duration={500}
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={nav_underline} alt="" /> : <></>}
        </li>{" "}
      </ul>
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          to="contact"
          offset={-50}
          smooth={true}
          duration={500}
          href="#contact"
        >
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
