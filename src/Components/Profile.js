import React from "react";

function Profile(props) {
  return (
    <div>
     {props.loading ? <div>Loading picture..</div> : <img src={props.picture} alt="logo" />} 
      <p>
        {props.title} {props.name} {props.last}
      </p>
    </div>
  );
}

export default Profile;
