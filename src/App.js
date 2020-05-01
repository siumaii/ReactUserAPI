import React, { useState, useEffect } from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [item, setItem] = useState("");
  const [picture, setPicture] = useState("");
  async function fetchData() {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [items] = data.results;
    const [picture] = data.results;
    setItem(items.name);
    setPicture(picture.picture);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function refresh() {
    fetchData();
  }

  return (
    <div className="App">
      <header className="App-header">
        <Profile
          title={item.title}
          name={item.first}
          last={item.last}
          picture={picture.large}
        />
        <button onClick={refresh}>Refresh Profile</button>
      </header>
    </div>
  );
}

export default App;
