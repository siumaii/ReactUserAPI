import React, {useState} from 'react';

function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav"> {props.children}</ul>
      </nav>
    );
  }

  function NavItem(props){

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

function DropdownMenu(){
    function DropDownItem(props){
        return(
            <a href="#" className="menu-item">
            <span className="icon-button">{props.leftIcon}</span>
                <div className="textspace">{props.children}</div>
            <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

return(
    <div className="dropdown">
    <DropDownItem>
        My Profile
    </DropDownItem>
    <DropDownItem leftIcon="😆" rightIcon=">">
    Hello
    </DropDownItem>
    </div>
);
}

  export {
    Navbar,
    NavItem,
    DropdownMenu
  };