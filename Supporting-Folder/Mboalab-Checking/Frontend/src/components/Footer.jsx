import React from "react";
import { NavLink } from "react-router-dom";
import './Style.css'

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify"><b>Mboalab</b> The aim of <i>MboaLab</i> is to catalyse sustainable local development and improve people’s living conditions through open science.</p>
            </div>

            <div className="col-xs-6 col-md-3 Cmine"> {/* class included */}
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><NavLink to="/service">Online Checkup</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/terms-of-use">Terms of use</NavLink></li>
                <li><a href="https://website-mboalab.vercel.app/donate">Contribute</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                <a href="https://website-mboalab.vercel.app/" className="link"> Mboalab</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://www.facebook.com/mboalab/"><i className="fab fa-facebook-square"></i></a></li>
                <li><a className="twitter" href="https://twitter.com/labmboa?lang=en"><i className="fab fa-twitter"></i></a></li>
                <li><a className="github" href="https://github.com/Mboalab"><i className="fab fa-github"></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/company/mboalab/?originalSubdomain=cm"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
