import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../asset/image/logo.png";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./Login.scss";

function Login() {
  return (
    <section className="login-section">
      <div className="login__container">
        <img src={Logo} alt="logo" />
        <h1>Log in to your Mboalab Account</h1>

        <form className="login__form">
          <label htmlFor="email">
            <input
              className="login__input"
              type="text"
              name="email"
              id=""
              placeholder="E-mail"
            />
          </label>

          <label htmlFor="password">
            <input
              className="login__input"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
          </label>

          <button className="login__button" type="submit">
            Log In
          </button>
        </form>

        <p className="to-signup">
          Don't have an account?{" "}
          <NavLink to="/signup" className="login__link">
            Sign Up
          </NavLink>
        </p>

        <div className="login__social-links">
          <p>Or Log In with</p>
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

export default Login;
