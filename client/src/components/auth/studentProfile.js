import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/img/venue-info-bg.jpg";
function studentProfile(props) {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="photo">
            <img src={image} className="App-logo" alt="logo" />

            <p style={{ color: "black" }}>
              {props.details.name} <br />
              <br />
              Room Alloted : {props.details.roomNo || "NA"}
            </p>
          </div>
          <div className="buttons">
            <div className="edit">
              <Link to="/complaint" className="link">
                complaint
              </Link>
            </div>
            <div className="add">
              <Link to="/add" className="link">
                Fill Room Priorities
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default studentProfile;
