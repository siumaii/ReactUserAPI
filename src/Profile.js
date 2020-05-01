import React from "react";

function Profile(props) {
  return (
    <div>
      <img src={props.picture} alt="logo" />
      <p>
        {props.title} {props.name} {props.last}
      </p>
    </div>
  );
}

export default Profile;
