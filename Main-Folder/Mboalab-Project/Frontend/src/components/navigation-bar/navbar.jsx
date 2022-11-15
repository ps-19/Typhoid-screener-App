import React from "react";
import { NavLink } from "react-router-dom";
import image from "../../assets/image/icon.png";
import NavItem from "../nav-item/nav-item";
import './navbar.css'

function Navbar() {
  return (
    <>
      <div className="navigation sticky-top mb-5">
        <div className="navigation-bar">
          <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src={image} height="60" width="90" alt="MBOALAB" />
              <NavLink className="navbar-brand" to="/">
                MboaLab
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

             
                <ul className="navbar-nav ml-auto nav--links">
                <NavItem to="" child="Home" />
                <NavItem to="about" child="About Us" />
                <NavItem to="contact" child="Contact Us" />
                <NavItem to="comments" child="Public Comments" />
                <NavItem to="login" child="Login" />
                <NavItem to="register" child="Register" />
                <NavItem to="register" child="For Developers" />
                <NavLink to='/' className="btn-get-started2 ">Login/Register</NavLink>
                </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
