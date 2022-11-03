import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginRegister.css";

function Login() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <h3>Sign In</h3>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Id" name="email"
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password" name="password"
                />
              </div>
              <div className="row align-items-center remember">
                <div className="fgt-password">
                  <NavLink to="/register">Forgot your password?</NavLink>
                </div>
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group">
                <button className="btn float-right login_btn" type="submit" href="http://localhost:3000/service">Login</button>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="links">
              Don't have an account?<NavLink to="/register">Sign Up</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
