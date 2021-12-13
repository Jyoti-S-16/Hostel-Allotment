import React, { useState } from "react";
import axios from "axios";
function Hostels() {
  const [state, setVariable] = useState(null);
  async function handleChange() {
    const headers = {
      contentType: "application/json",
    };
    await axios
      .get("/api/staff/RoomallocationForHostel", { headers })
      .then((res) => {
        setVariable(res.data.message);
      });
  }
  if (state == null) {
    return (
      <div>
        <h1>Hostels</h1>
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <span style={{ marginRight: "200px" }}>Hostel1</span>{" "}
              <button class="btn btn-primary" onClick={handleChange}>
                Initiate
              </button>
            </li>
            <li class="list-group-item">
              <span style={{ marginRight: "200px" }}>Hostel2</span>{" "}
              <button class="btn btn-primary" onClick={handleChange}>
                Initiate
              </button>
            </li>
            <li class="list-group-item">
              <span style={{ marginRight: "200px" }}>Hostel4</span>{" "}
              <button class="btn btn-primary" onClick={handleChange}>
                Initiate
              </button>
            </li>
            <li class="list-group-item">
              <span style={{ marginRight: "200px" }}>Hostel5</span>{" "}
              <button class="btn btn-primary" onClick={handleChange}>
                Initiate
              </button>
            </li>
            <li class="list-group-item">
              <span style={{ marginRight: "200px" }}>Hostel6</span>{" "}
              <button class="btn btn-primary" onClick={handleChange}>
                Initiate
              </button>
            </li>
            <li class="list-group-item">
              <span style={{ marginRight: "200px" }}>Hostel7</span>{" "}
              <button class="btn btn-primary" onClick={handleChange}>
                Initiate
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1> "Hostel Allocation Done" {state}</h1>
      </div>
    );
  }
}

export default Hostels;
