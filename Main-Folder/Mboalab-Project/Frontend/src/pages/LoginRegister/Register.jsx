import React from "react";
import Btn from '../../components/Button/Button'
import "./LoginRegister.css";

function Register() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <h3>Sign In</h3>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name" name="first"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name" name="last"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email ID" name="email"
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
                <Btn className="btn float-right login_btn btn-info" type="submit" href="http://localhost:3000/service" text="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
