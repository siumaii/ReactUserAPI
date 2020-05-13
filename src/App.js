import React from "react";
import {Navbar, NavItem, DropdownMenu} from "./Components/Navbar";
import "./App.css";
import View from './View';
import logo from "./Media/instagram.png";

function App() {
  return (
    <div>
      <Navbar logo={logo}>
        <NavItem icon="〰️" link="/TBA1"/>
        <NavItem icon="➰" link="/TBA2"/>
        <NavItem icon="➖">
        <DropdownMenu/> 
        </NavItem> 
      </Navbar>
      <View/>
    </div>
  );
}


export default App;
