import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import cc from "../asset/image/SecondSide.jpg";
import ins from "../asset/image/stethoscope.jpg";
import "./HomeCss.css";

const BotModal = () => {
  return (
    <div>
      <iframe
        width="350"
        height="450"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/healthybot"
      ></iframe>
    </div>
  );
};

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="header">
      <div className="d-flex main">
        <div className="content">
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
            The aim of MboaLab is to catalyse sustainable local development and
            improve people’s living conditions through open science.
          </p>
          <div className="mt-3">
            <Link to="/service" className="btn-get-started">
              Assess Yourself
            </Link>
            <a href="tel:+2376-9746-5154" className="btn-get-started2 pdn">
              <img
                src={ins}
                height="27px"
                width="44px"
                className="image"
                alt=""
              />
              HelpLine
            </a>
          </div>
        </div>
        <div>
          <img src={cc} className="animated change" alt="" />
        </div>
      </div>
      <div className="bot-controll">
        {!modalOpen && (
          <div onClick={() => setModalOpen(!modalOpen)} className="bot-icon">
            <AiFillMessage className="bot" />
          </div>
        )}

        {modalOpen && (
          <div className="bot-modal">
            <AiOutlineCloseCircle
              onClick={() => setModalOpen(false)}
              className="bot-close"
            />
            <BotModal className="modal" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
