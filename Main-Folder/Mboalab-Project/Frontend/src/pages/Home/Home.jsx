import React from "react";
import { NavLink } from "react-router-dom";
import cc from "../../asset/image/SecondSide.jpg";
import ins from "../../asset/image/stethoscope.jpg";
import "./HomeCss.css";

function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-md-5 pb-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column include">
                  <h1>
                    Online Typhoid Checkup With{" "}
                    <strong className="brand-name">MboaLab</strong>
                  </h1>
                  <h6 className="my-3">
                    MboaLab is an open and collaborative space located in{" "}
                    <a
                      href={"https://goo.gl/maps/wxA41SDU4ut2TFHY7"}
                      className="nav-link2"
                    >
                      Yaoundé, Cameroon
                    </a>
                    .
                  </h6>
                  <p>
                    The aim of MboaLab is to catalyse sustainable local
                    development and improve people’s living conditions through
                    open science.
                  </p>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">
                      Assess Yourself
                    </NavLink>
                    <a
                      href="tel:+2376-9746-5154"
                      className="btn-get-started2 ml-3"
                    >
                      <img
                        src={ins}
                        height="27px"
                        width="44px"
                        className="image"
                      />
                      HelpLine
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 pt-0 pt-lg-0 order-2 order-lg-1">
                  <img src={cc} className="img-fluid animated change" alt="" />
                </div>

                <div className="col-lg-3 pt-0 pt-lg-0 order-2 order-lg-1">
                  <iframe width="350" height="550" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/healthybot"></iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
