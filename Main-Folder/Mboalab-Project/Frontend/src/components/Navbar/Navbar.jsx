import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../asset/image/logo.png";
import { GoThreeBars } from "react-icons/go";
import { GoX } from "react-icons/go";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <Link className="logo" to="/">
        <img src={Logo} height="60" width="60" alt="" />
      </Link>

      <div className={`nav__container  ${isOpen ? "show__nav" : "hide__nav"}`}>
        <ul className="nav__links">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/online-checkup"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Online Checkup
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/about"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/contact"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/comments"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Public Comments
            </NavLink>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              href="https://murmuring-castle-35671.herokuapp.com"
              onClick={() => setIsOpen((prev) => !prev)}
              rel="noreferrer"
            >
              Talk
            </a>
          </li>
        </ul>

        <div className="nav__login">
          <Link to="/login" onClick={() => setIsOpen((prev) => !prev)}>
            <button className="login">Login</button>
          </Link>

          <Link to="/signup" onClick={() => setIsOpen((prev) => !prev)}>
            <button className="signup">Sign Up</button>
          </Link>
        </div>
      </div>

      <button
        className="nav__toggle-btn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <GoX /> : <GoThreeBars />}
      </button>
    </nav>
  );
}

export default Navbar;
