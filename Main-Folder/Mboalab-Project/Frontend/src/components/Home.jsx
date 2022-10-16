import React from 'react';
import { NavLink } from 'react-router-dom';
import cc from '../asset/image/SecondSide.jpg';
import ins from '../asset/image/stethoscope.jpg';
import './HomeCss.css';

function Home() {
  return (
    <>
      <section id="header" className="py-4">
        <div className="nav_bg container-fluid">
          <div className="container p-0 mx-auto row">
            <div className="col-xl-5 pb-4 pt-lg-0 d-flex justify-content-center flex-column include">
              <h1>
                Online Typhoid Checkup With{' '}
                <strong className="brand-name">MboaLab</strong>
              </h1>

              <h6 className="my-3">
                MboaLab is an open and collaborative space located in{' '}
                <a
                  href={'https://goo.gl/maps/wxA41SDU4ut2TFHY7'}
                  className="nav-link2"
                >
                  Yaoundé, Cameroon
                </a>
                .
              </h6>

              <p>
                The aim of MboaLab is to catalyse sustainable local development
                and improve people’s living conditions through open science.
              </p>

              <div className="mt-3 d-flex  flex-column flex-lg-row justify-content-between align-items-start align-items-xl-center">
                <NavLink to="/service" className="btn-get-started">
                  Assess Yourself
                </NavLink>

                <a
                  href="tel:+2376-9746-5154"
                  className="btn-get-started2 mt-3 mt-lg-0"
                >
                  <img
                    src={ins}
                    alt="help line"
                    height="27px"
                    width="44px"
                    className="image"
                  />
                  HelpLine
                </a>
              </div>
            </div>

            <div className="col-xl-4 pt-0 pt-lg-0">
              <img
                src={cc}
                className="img-fluid animated change shadow-sm"
                alt="an illustration showing four people with syringe, heart line, stethoscope and first aid"
              />
            </div>

            <div className="col-xl-3 p-0  mt-3 mt-lg-0">
              <div>
                <iframe
                  title="healthy bot"
                  height="550"
                  width="100%"
                  allow="microphone;"
                  src="https://console.dialogflow.com/api-client/demo/embedded/healthybot"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
