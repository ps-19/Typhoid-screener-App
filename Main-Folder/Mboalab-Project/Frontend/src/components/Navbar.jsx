import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';
import image from '../asset/image/icon.png';

function Navbar() {
  return (
    <>
      <div className="nav_bg bg-light">
        <div className="lg-row">
          <div className="col-lg-10  mx-lg-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
              <img src={image} height="60" width="90" alt="" />

              <NavLink className="navbar-brand" to="/">
                MboaLab
              </NavLink>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse app-nav" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/service">
                      Online Checkup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/comments">
                      Public Comments
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://murmuring-castle-35671.herokuapp.com"
                      rel="noreferrer"
                    >
                      Talk
                    </a>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
