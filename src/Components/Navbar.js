import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";


function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-nav-left">
        <Link to="/">
          <img src={props.logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-nav-right"> {props.children}</div>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link
        to={props.link}
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        <span>{props.icon}</span>
      </Link>
      {open && props.children}
    </li>
  );
}
//props.children, allt som är under NavItem i App.js

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return (
      <Link
        to={props.link}
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        <div className="textspace">{props.children}</div>
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon="👤" link="/profile">
            My Profile
          </DropDownItem>
          <DropDownItem leftIcon="⚙️" goToMenu="settings">
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon="❔" link="/about">
            About
          </DropDownItem>
          <DropDownItem leftIcon="🔙" goToMenu="main">
            Go back
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export { Navbar, NavItem, DropdownMenu };
