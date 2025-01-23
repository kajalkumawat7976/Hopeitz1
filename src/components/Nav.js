import React from 'react';
import { Link } from 'react-router-dom';
 

const Nav = () => {
  return (
    <div className="container-fluid navbar">
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
                marginTop: "-5px",
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-right">
              <li className="nav-item pe-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "white", fontSize: "20px", marginLeft:'700px' }}
                  onClick={() => document.getElementById('BG-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link
                  className="nav-link"
                  to="/About"
                  style={{ color: "white", fontSize: "20px" }}onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link
                  className="nav-link"
                  to="/Product"
                  style={{ color: "white", fontSize: "20px" }}
                  onClick={() => document.getElementById('Product-section').scrollIntoView({ behavior: 'smooth' })}
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
                  style={{ color: "white", fontSize: "20px" }}
                  onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
