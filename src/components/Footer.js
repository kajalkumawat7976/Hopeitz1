import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 about">
          <footer className="text-center">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div className="me-5 d-none d-lg-block" style={{ color: "#EDE6D6" }}>
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <Link to="https://www.facebook.com/people/Hopeitz-Software-Pvt-Ltd/100070474315465/" className="me-4 text-reset">
                  <i className="bi bi-facebook" style={{ color: '#EDE6D6' }}></i>
                </Link>
                <Link to="https://x.com/i/flow/login?redirect_after_login=%2FHopeitz1" className="me-4 text-reset">
                  <i className="bi bi-twitter" style={{ color: '#EDE6D6' }}></i>
                </Link>
                <Link to="https://www.instagram.com/hopeitz_software/" className="me-4 text-reset">
                  <i className="bi bi-instagram" style={{ color: '#EDE6D6' }}></i>
                </Link>
                <Link to="https://www.linkedin.com/company/hopeitz-software-pvt-ltd/" className="me-4 text-reset">
                  <i className="bi bi-linkedin" style={{ color: '#EDE6D6' }}></i>
                </Link>
                <Link to="https://in.pinterest.com/hopeitz/" className="me-4 text-reset">
                  <i className="bi bi-pinterest" style={{ color: '#EDE6D6' }}></i>
                </Link>
                <Link to="https://www.youtube.com/channel/UCbJkZeiMMFzHOrhQK3KWjvQ" className="me-4 text-reset">
                  <i className="bi bi-youtube" style={{ color: '#EDE6D6' }}></i>
                </Link>
              </div>
            </section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-12 col-md-6 col-lg-4 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#EDE6D6', textDecorationLine: 'underline' }}>
                      <i className="fas fa-gem me-3"></i>Company name
                    </h6>
                    <p style={{ color: '#EDE6D6' }}>
                      HOPEITZ SOFTWARE PVT. LTD.
                    </p>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#EDE6D6', textDecorationLine: 'underline' }}>Contact</h6>
                    <p style={{ color: '#EDE6D6' }}>
                      <i className="fas fa-home me-3"></i> EMAIL :-
                    </p>
                    <p style={{ color: '#EDE6D6' }}>
                      <i className="fas fa-envelope me-3"></i>
                      feedback@hopeitz.com
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="text-center p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: '#EDE6D6' }}
            >
              2023 ©
              <a className="text-reset fw-bold" href="https://www.hopeitz.com/index.php#box2" style={{ color: '#EDE6D6' }}>
                HOPEITZ PVT.LTD All rights reserved
              </a>
            </div>
          </footer>
        </div>
        <div className="col-12 col-md-6">
          <img src="/light-moon.png" style={{ opacity: '0.7', height: '400px', marginTop: '-429px' }} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
