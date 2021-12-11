import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "../../assets/css/style.css";
import gg3 from "../../assets/img/hotels/3.jpg";
import gg2 from "../../assets/img/hotels/2.jpg";
import gg1 from "../../assets/img/hotels/1.jpg";

//import gg4 from "../../assets/img/hotels/4.jpg";
//import gg5 from "../../assets/img/hotels/5.jpg";
//import gg6 from "../../assets/img/hotels/6.jpg";

//import gg7 from "../../assets/img/hotels/7.jpg";
//import gg8 from "../../assets/img/hotels/8.jpg";
//import gg9 from "../../assets/img/hotels/9.jpg";

class Home extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing">
        <header id="header" class="d-flex align-items-center header-inner">
          <div class="container-fluid container-xxl d-flex align-items-center">
            <div id="logo" class="me-auto">
              <a href="index.html" class="scrollto">
                <img src="../img/logo.png" alt="" title="" />
              </a>
            </div>

            <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a class="nav-link scrollto" href="#about">
                    About
                  </a>
                </li>

                <li>
                  <a class="nav-link scrollto" href="#hotels">
                    Hostels
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#gallery">
                    Gallery
                  </a>
                </li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <div class="dropdown">
              <button class="dropbtn buy-tickets scrollto">Admin</button>
              <div class="dropdown-content">
                <Link to="/register" className="dropbtn buy-tickets scrollto">
                  Admin Sign Up
                </Link>
                <Link to="/login" className="dropbtn buy-tickets scrollto">
                  Admin Login
                </Link>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn buy-tickets scrollto mx-5">Student</button>
              <div class="dropdown-content">
                <Link
                  to="/studentLogin"
                  className="dropbtn buy-tickets scrollto"
                >
                  StudentLogin
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section id="hero">
          <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
            <h1 class="mb-4 pb-0">
              NITH
              <br />
              <span>Hostel </span> Allotment
            </h1>
            <p class="mb-4 pb-0">10-12 December, From 9:00am onwards</p>
            <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              class="glightbox play-btn mb-4"
            ></a>
            <a href="#about" class="about-btn scrollto">
              About The Allotment
            </a>
          </div>
        </section>

        <main id="main">
          <section id="about">
            <div class="container" data-aos="fade-up">
              <div class="row">
                <div class="col-lg-6">
                  <h2>About The Allotment</h2>
                  <p>
                    Sed nam ut dolor qui repellendus iusto odit. Possimus
                    inventore eveniet accusamus error amet eius aut accusantium
                    et. Non odit consequatur repudiandae sequi ea odio
                    molestiae. Enim possimus sunt inventore in est ut optio
                    sequi unde.
                  </p>
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3">
                  <h3>When</h3>
                  <p>
                    Monday to Wednesday
                    <br />
                    10-12 December
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="hotels" class="section-with-bg">
            <div class="container" data-aos="fade-up">
              <div class="section-header">
                <h2>Hostels</h2>
                <p>Here are all the Hostel in NITH</p>
              </div>

              <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-4 col-md-6">
                  <div class="hotel">
                    <div class="hotel-img">
                      <img src={gg1} alt="Hotel 1" class="img-fluid" />
                    </div>
                    <h3>
                      <a href="#">Hostel 1</a>
                    </h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Manimahesh Girls Hostel</p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="hotel">
                    <div class="hotel-img">
                      <img src={gg2} alt="Hotel 2" class="img-fluid" />
                    </div>
                    <h3>
                      <a href="#">Hostel 2</a>
                    </h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill-half-full"></i>
                    </div>
                    <p>Ambika Girls Hostel</p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="hotel">
                    <div class="hotel-img">
                      <img src={gg3} alt="Hotel 3" class="img-fluid" />
                    </div>
                    <h3>
                      <a href="#">Hostel 3</a>
                    </h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Himgiri Boys Hostel</p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="hotel">
                    <div class="hotel-img">
                      <img src={gg3} alt="Hotel 3" class="img-fluid" />
                    </div>
                    <h3>
                      <a href="#">Hostel 3</a>
                    </h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Himgiri Boys Hostel</p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="hotel">
                    <div class="hotel-img">
                      <img src={gg3} alt="Hotel 3" class="img-fluid" />
                    </div>
                    <h3>
                      <a href="#">Hostel 3</a>
                    </h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Himgiri Boys Hostel</p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="hotel">
                    <div class="hotel-img">
                      <img src={gg3} alt="Hotel 3" class="img-fluid" />
                    </div>
                    <h3>
                      <a href="#">Hostel 3</a>
                    </h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Himgiri Boys Hostel</p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="hotel">
                    <div class="hotel-img">
                      <img src={gg3} alt="Hotel 3" class="img-fluid" />
                    </div>
                    <h3>
                      <a href="#">Hostel 3</a>
                    </h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Himgiri Boys Hostel</p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="hotel">
                    <div class="hotel-img">
                      <img src={gg3} alt="Hotel 3" class="img-fluid" />
                    </div>
                    <h3>
                      <a href="#">Hostel 3</a>
                    </h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Himgiri Boys Hostel</p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="hotel">
                    <div class="hotel-img">
                      <img src={gg3} alt="Hotel 3" class="img-fluid" />
                    </div>
                    <h3>
                      <a href="#">Hostel 3</a>
                    </h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Himgiri Boys Hostel</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="gallery">
            <div class="container" data-aos="fade-up">
              <div class="section-header">
                <h2>Gallery</h2>
                <p>Check our gallery from the recent events</p>
              </div>
            </div>

            <div class="gallery-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  <a
                    href="../../../assets/img/gallery/1.jpg"
                    class="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/1.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="../../../assets/img/gallery/2.jpg"
                    class="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="../../../assets/img/gallery/3.jpg"
                    class="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/3.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="../../../assets/img/gallery/4.jpg"
                    class="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/4.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="../../../assets/img/gallery/5.jpg"
                    class="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/5.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="../../../assets/img/gallery/6.jpg"
                    class="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/6.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="../../../assets/img/gallery/7.jpg"
                    class="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/7.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="../../../assets/img/gallery/8.jpg"
                    class="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/8.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </section>
        </main>
        <footer id="footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6 footer-info">
                  <img src="assets/img/logo.png" alt="TheEvenet" />
                  <p>
                    In alias aperiam. Placeat tempore facere. Officiis voluptate
                    ipsam vel eveniet est dolor et totam porro. Perspiciatis ad
                    omnis fugit molestiae recusandae possimus. Aut consectetur
                    id quis. In inventore consequatur ad voluptate cupiditate
                    debitis accusamus repellat cumque.
                  </p>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i> <a href="#">Home</a>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i> <a href="#">Home</a>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022
                    <br />
                    United States <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>

                  <div class="social-links">
                    <a href="#" class="twitter">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="facebook">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="instagram">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="google-plus">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="linkedin">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/*<div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Hostel-Management</h1>
                <p className="lead"></p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
                <Link
                  to="/studentLogin"
                  className="btn btn-lg btn-success ml-5"
                >
                  StudentLogin
                </Link>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
