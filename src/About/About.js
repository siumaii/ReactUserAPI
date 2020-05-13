import React, {useState, useEffect} from "react";
import Avatar from "../Components/Avatar"

function About() {
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
      <h1>About</h1>
      <p>This is about.</p>
      <div className="center">
        <Avatar
          title={item.title}
          name={item.first}
          last={item.last}
          loading={loading}
          picture={picture.large}
        />
        <button onClick={refresh}>Refresh Avatar</button>
      </div>
    </div>
  );
}

export default About;
