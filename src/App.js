import React, { useState, useEffect } from "react";
import Profile from "./Components/Profile";
import Menu from "./Components/Menu";
import {Navbar, NavItem, DropdownMenu} from "./Components/Navbar";
import "./App.css";


function App() {
  const [item, setItem] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [items] = data.results;
    const [picture] = data.results;
    setItem(items.name);
    setPicture(picture.picture);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function refresh() {
    fetchData();
  }


  return (
    <div>
      <Navbar>
        <NavItem icon="😃" />
        <NavItem icon="🥳" />
        <NavItem icon="➖">
        <DropdownMenu/> 
        </NavItem> 
      </Navbar>
      <div className="center">
      <Menu />
        <Profile
          title={item.title}
          name={item.first}
          last={item.last}
          loading={loading}
          picture={picture.large}
        />
        <button onClick={refresh}>Refresh Profile</button>
      </div>
    </div>
  );
}


export default App;
