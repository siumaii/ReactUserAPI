import React, { useState, useEffect } from "react";
import "./Profile.css";
import ProfilePic from "../Media/Profile_pic.jpg";
import Gear from "../Media/gear.png";

function Profile() {
  return (
    <div className="main-container">
      <div className="container-1">
        <div className="box-1">
          <img className="profile-pic" src={ProfilePic} alt="Profile" />
        </div>
        <div className="containerbox-2">
          <div className="container2-2">
            <div className="name-size">andytang_travel</div>
            <div>
              <button>Edit Profile</button>
            </div>
            <div>⚙️</div>
          </div>

          <div className="container2-3">
            <strong>Andy Tang ~</strong>
          </div>
          <div> Life - food - travel</div>
        </div>
        <div className="box-3"></div>
      </div>
    </div>
  );
}

export default Profile;

/*
<div>
              <strong>222</strong> posts
            </div>
            <div>
              <strong>Andy Tang ~</strong>
              <div />
              <div>Life - food - travel</div>
            </div>
*/
