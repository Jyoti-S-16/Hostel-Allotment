import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/img/venue-info-bg.jpg";
import "../../assets/css/studentProfile.css";
function studentProfile(props) {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="photo">
            <img
              src={image}
              height="100px"
              width="100px"
              style={{ height: "100px" }}
              className="App-logo"
              alt="logo"
            />

            <p style={{ color: "black" }}>
              Name:{props.details.name} <br />
              <br />
              CGPI : {props.details.CGPI || "NA"}
            </p>

            <p style={{ color: "black" }}>
              <br />
              Roll No : {props.details.rollNo || "NA"}
            </p>
            <p style={{ color: "black" }}>
              <br />
              Branch : {props.details.Branch || "NA"}
            </p>

            <p style={{ color: "black" }}>
              <br />
              Room Alloted : {props.details.RoomName || "NA"}
            </p>
          </div>
          <div className="buttons">
            <div className="edit">
              <Link
                to={{ pathname: "/complaint", state: props }}
                className="link"
              >
                complaint
              </Link>
            </div>
            <div className="add">
              <Link
                to={{ pathname: "/addRoomPriorities", state: props }}
                className="link"
              >
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
