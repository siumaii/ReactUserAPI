import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {BrowserRouter, Link} from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}
//props.children, allt som är under NavItem i App.js

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el){
      const height = el.offsetHeight;
      setMenuHeight(height);
  }
  // <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
  
  function DropDownItem(props) {
    return (
       <BrowserRouter>
       <Link to="/about">s
      <a href={props.link} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
         <span className="icon-button">{props.leftIcon}</span>
        <div className="textspace">{props.children}</div>
        <span className="icon-right">{props.rightIcon}</span>
        </a>
        </Link>
        </BrowserRouter>
    );
  }

  return (
    <div className="dropdown" style={{height: menuHeight}}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
       <div className="menu">
        <DropDownItem leftIcon="👤" link="profile">My Profile</DropDownItem>
        <DropDownItem leftIcon="⚙️" goToMenu="settings">
          Settings
        </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight} >
       <div className="menu">
        <DropDownItem leftIcon="🔙" goToMenu="main">
          Go back
        </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export { Navbar, NavItem, DropdownMenu };
