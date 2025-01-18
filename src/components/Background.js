import React from "react";
import { Link } from "react-router-dom";

const Background = () => {
  return (
    <div className="container-fluid background">
      <div className="row">
        <div className="col-md-12">
          <div className="video-container ">
            <video autoPlay loop muted className="background-video">
              <source src="/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="container-fluid home navbar">
              <nav className="navbar navbar-expand-lg bg-transparent text-dark">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="#">
                    <img
                      src={"/NavLogo1.webp"}
                      alt=""
                      height={"60px"}
                      width={"200px"}
                      style={{ marginLeft: "30px" }}
                    />
                    <p
                      style={{
                        color: "#f2075d",
                        marginTop: "1px",
                        fontSize: "10px",
                        marginLeft: "80px",
                      }}
                      className="ten"
                    >
                      YOUR HOPE OUR PROMISE
                    </p>
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-right">
                      <li className="nav-item pe-3">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                          style={{ color: "white", fontSize: "20px", marginLeft:'700px'}}
                        >
                          HOME
                        </Link>
                      </li>
                      <li className="nav-item pe-3">
                        <Link
                          className="nav-link"
                          to="/About"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          ABOUT
                        </Link>
                      </li>
                      <li className="nav-item pe-3">
                        <Link
                          className="nav-link"
                          to="/Product"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          PRODUCT
                        </Link>
                      </li>
                      <li className="nav-item pe-3">
                        <Link
                          className="nav-link"
                          to="/Blog"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          BLOG
                        </Link>
                      </li>
                      <li className="nav-item pe-3">
                        <Link
                          className="nav-link"
                          to="/contact"
                          style={{
                            color: "white",
                            fontSize: "20px",
                            marginRight: "70px",
                          }}
                        >
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
