import React, { useEffect, useState } from "react";
import axios from "axios";
function StudentRoomRegistration(props) {
  console.log("hiiiiiilll", "this is props location", props.location);
  const [firstName, setFirstName] = useState();
  const [rooms, setRooms] = useState(null);
  const [Array1, setPreferences] = useState([]);
  const [Successfull, setSuccesfull] = useState(null);
  useEffect(() => {
    const handleStatusChange = async () => {
      console.log("hiiiii");
      const headers = {
        contentType: "application/json",
      };
      await axios
        .get("/api/RoomRegistration/getAllRooms", { headers })
        .then((res) => {
          console.log("helloo");
          setRooms(res.data.message);
        });
    };
    handleStatusChange();
  }, []);

  async function HandleSubmit(e) {
    e.preventDefault();
    const headers = {
      contentType: "application/json",
    };
    const obj = {
      rollNo: props.location.state.details.rollNo,
      name: props.location.state.details.name,
      Array1,
    };
    await axios
      .post("/api/RoomRegistration/registerprioritiesforroom", obj, { headers })
      .then((res) => {
        setSuccesfull(res.data.message);
      });
  }
  if (Successfull === null && props.location.state.details.Booked == false) {
    if (rooms != null) {
      return (
        <div style={{ alignItems: "center" }}>
          <h1>These are Rooms Available</h1>
          <p style={{ colour: "red" }}>
            *Count beside the room Number is How many student filled this as
            priority*
          </p>
          {rooms.map((e) => {
            return (
              <button
                class="btn btn-primary"
                key={e._id}
                value={e._id}
                style={{ marginRight: "5px" }}
              >
                {e.Name}&nbsp;/Count:{e.count}&nbsp;
              </button>
            );
          })}

          <div>
            <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
              <div class="wrapper wrapper--w680">
                <div class="card card-4">
                  <div class="card-body">
                    <h2 class="title"> Form for Filling Priorites</h2>
                    <form
                      method="POST"
                      onSubmit={HandleSubmit}
                      style={{ borderStyle: "ridge" }}
                    >
                      <div class="row row-space"></div>
                      <div style={{ borderStyle: "none", margin: "20px" }}>
                        <h1>Priority 1</h1>
                        <div class="row row-space">
                          <div class="col-2">
                            <div class="input-group">
                              <p>Select Option</p>
                              <select
                                style={{
                                  appearance: "none",
                                  backgroundColor: "powderblue",
                                  borderStyle: "solid",
                                  padding: "0 1em 0 0",
                                  margin: 0,

                                  height: "50px",
                                  width: "100%",
                                  fontFamily: "inherit",
                                  fontSize: "inherit",
                                  cursor: "inherit",
                                  lineHeight: "inherit",
                                }}
                                onChange={(e) => {
                                  console.log(
                                    "selected this optionnnnnnnn",
                                    e.target.value
                                  );
                                  setPreferences([...Array1, e.target.value]);
                                }}
                              >
                                {" "}
                                {rooms.map((e) => {
                                  return (
                                    <option
                                      key={e._id}
                                      value={e._id}
                                      style={{
                                        marginRight: "5px",
                                        backgroundColor: "whitesmoke",
                                      }}
                                    >
                                      {e.Name}&nbsp;/Count:{e.count}&nbsp;
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ borderStyle: "none", margin: "20px" }}>
                        <h1>Priority 2</h1>
                        <div class="row row-space">
                          <div class="col-2">
                            <div class="input-group">
                              <p>Select Option:</p>
                              <select
                                style={{
                                  appearance: "none",
                                  // Additional resets for further consistency
                                  backgroundColor: "powderblue",
                                  borderStyle: "solid",
                                  padding: "0 1em 0 0",
                                  margin: 0,

                                  height: "50px",
                                  width: "100%",
                                  fontFamily: "inherit",
                                  fontSize: "inherit",
                                  cursor: "inherit",
                                  lineHeight: "inherit",
                                }}
                                onChange={(e) => {
                                  setPreferences([...Array1, e.target.value]);
                                }}
                              >
                                {" "}
                                {rooms.map((e) => {
                                  return (
                                    <option
                                      key={e._id}
                                      value={e._id}
                                      style={{
                                        marginRight: "5px",
                                        backgroundColor: "whitesmoke",
                                        height: "50px",
                                        marginBottom: "8px",
                                      }}
                                    >
                                      {e.Name}&nbsp;/Count:{e.count}&nbsp;
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ borderStyle: "none", margin: "20px" }}>
                        <h3>Priority 3</h3>
                        <div class="row row-space">
                          <div class="col-2">
                            <div class="input-group">
                              <p>Select Option</p>:
                              <select
                                style={{
                                  appearance: "none",
                                  // Additional resets for further consistency
                                  backgroundColor: "powderblue",
                                  borderStyle: "solid",
                                  padding: "0 1em 0 0",
                                  margin: 0,

                                  height: "50px",
                                  width: "100%",
                                  fontFamily: "inherit",
                                  fontSize: "inherit",
                                  cursor: "inherit",
                                  lineHeight: "inherit",
                                }}
                                onChange={(e) => {
                                  console.log(Array1);
                                  setPreferences([...Array1, e.target.value]);
                                }}
                              >
                                {" "}
                                {rooms.map((e) => {
                                  return (
                                    <option
                                      key={e._id}
                                      value={e._id}
                                      style={{
                                        marginRight: "5px",
                                        backgroundColor: "whitesmoke",
                                      }}
                                    >
                                      {e.Name}&nbsp;/Count:{e.count}&nbsp;
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div class="p-t-15">
                        <button
                          class="btn btn-info"
                          type="submit"
                          style={{ margin: "20px" }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>No rooms available</h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          {Successfull || "You filled your Priorities"}
        </h1>
      </div>
    );
  }
}

export default StudentRoomRegistration;
