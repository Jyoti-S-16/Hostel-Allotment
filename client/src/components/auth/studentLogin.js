import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";
import StudentProfile from "../auth/studentProfile";
import "../../login.css";
import axios from "axios";
function StudentLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [details, setDetails] = useState(null);
  async function HandleChange(e) {
    e.preventDefault();
    console.log("hi");
    const obj = {
      email,
      password,
    };
    const headers = {
      contentType: "application/json",
    };
    await axios
      .post("/api/RoomRegistration/studentlogin", obj, { headers })
      .then((res) => {
        setDetails(res.data.Find);
      });
  }
  if (details == null) {
    return (
      <div>
        <section
          class="vh-100"
          style={{ backgroundColor: "rgb(161, 124, 129)", fontSize: "20px" }}
        >
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{ borderRadius: "25px" }}>
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        {/*<!-- <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>*/}
                        {/*<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_fw6h59eu.json" class="login_gif" background="transparent"  speed="1"  loop  autoplay></lottie-player> -->*/}
                        {/*<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>*/}
                        {/*<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_yjlOdw.json" class="login_gif" background="transparent"  speed="1"  loop autoplay></lottie-player>*/}
                      </div>

                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login
                        </p>

                        <form
                          class="mx-1 mx-md-4"
                          //action="login"
                          method="POST"
                          onSubmit={HandleChange}
                        >
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3"
                                value={email}
                                class="form-control form-control-lg"
                                placeholder="Enter a valid email address"
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                              <label class="form-label" for="form3Example3">
                                Email address
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4"
                                class="form-control form-control-lg"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              />
                              <label class="form-label" for="form3Example4">
                                Password
                              </label>
                            </div>
                          </div>

                          <div class="text-center text-lg-start mt-4 pt-2">
                            <button
                              type="submit"
                              class="btn btn-lg"
                              style={{
                                paddingLeft: "2.5rem",
                                paddingRight: "2.5rem",
                                backgroundColor: "#f82249",
                                color: "white",
                              }}
                            >
                              Login
                            </button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">
                              Don't have an account?{" "}
                              <a href="#!" class="link-danger">
                                Register
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <StudentProfile details={details}
		 />
      </div>
    );
  }
}

export default StudentLogin;
