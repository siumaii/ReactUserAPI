import React from "react";
import {Navbar, NavItem, DropdownMenu} from "./Components/Navbar";
import "./App.css";
import View from './View';

function App() {
  return (
    <div>
      <Navbar>
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
