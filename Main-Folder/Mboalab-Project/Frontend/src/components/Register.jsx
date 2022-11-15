import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginRegister.css";
import { useState } from "react";
import {ReactComponent as SuccessIcon} from '../assets/svg/check-circle.svg'


function Register() {
  const URL = "https://typhoid-main.herokuapp.com/"
    const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""

  })
  
  function handle(e){
    const newdata = {...data};
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  return (
    <>
      <div className="container">
      <div className="d-flex justify-content-center h-100">
      <div className="card">
          
            <div className="card-header">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              <form action={`${URL}auth/register`}  method="post" role="form">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    onChange={(e) => handle(e)}
                    id = "firstname"
                    className="form-control"
                    placeholder="First Name" name="firstname" value={data.firstname}
                    required
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
                    onChange={(e) => handle(e)}
                    id = "lastname"
                    className="form-control"
                    placeholder="Last Name" name="lastname" value={data.lastname}
                    required
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
                    onChange={(e) => handle(e)}
                    id = "email"
                    className="form-control"
                    placeholder="Email ID" name="email" value={data.email}
                    required
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
                    onChange={(e) => handle(e)}
                    id = "password"
                    className="form-control"
                    placeholder="Password" name="password" value={data.password}
                    required
                  />
                </div>
                <div className="form-group">
                  <button className="btn float-right login_btn" type="submit" href="http://localhost:3000/service">Register</button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Already have an account?<NavLink to="/login">Sign In</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
