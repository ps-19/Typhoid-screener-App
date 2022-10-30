import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../asset/image/logo.png";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./SignUp.scss";

function SignUp() {
  return (
    <section className="signup-section">
      <div className="signup__container">
        <img src={Logo} alt="logo" />
        <h1>Create an Mboalab Account</h1>

        <form className="signup__form">
          <label htmlFor="email">
            <input
              className="signup__input"
              type="text"
              name="email"
              id=""
              placeholder="E-mail"
            />
          </label>

          <label htmlFor="password">
            <input
              className="signup__input"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
          </label>

          <button className="signup__button" type="submit">
            Sign Up
          </button>
        </form>

        <p className="to-login">
          Already have an account?{" "}
          <NavLink to="/signup" className="login__link">
            Log In
          </NavLink>
        </p>

        <div className="signup__social-links">
          <p>Or Sign Up with</p>
          <div className="social-links">
            <a href="facebook.com" className="social-link">
              <AiFillFacebook />
            </a>
            <a href="google.com" className="social-link">
              <AiFillGoogleCircle />
            </a>
            <a href="twitter.com" className="social-link">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
