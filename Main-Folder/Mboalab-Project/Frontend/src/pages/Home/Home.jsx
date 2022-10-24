import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import Hero from "../../asset/image/hero-img.png";
import "./Home.scss";

function Home() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>Online Typhoid Diagnosis Tool</h1>
        <img className="mobile__hero-img" src={Hero} alt="hero" />
        <p>
          This Online Checkup Tool brought to you by MboaLab is designed to help
          with the diagnosis of typhoid by medical professionals. <br /> To give
          you an accurate prediction, this tool uses image and symptom analysis
          for a two-factor authentication.
        </p>

        <div className="hero__btn">
          <NavLink to="/online-checkup">
            <button className="checkup">Assess Yourself</button>
          </NavLink>

          <a href="tel:+2376-9746-5154">
            <button className="phone">
              Call Us
              <AiFillPhone className="phone-icon" />
            </button>
          </a>
        </div>
      </div>

      <div className="hero__img">
        <img src={Hero} alt="hero" />
      </div>

      {/* <div className="hero__chat-box">
        <iframe
          width="350"
          height="550"
          allow="microphone"
          src="https://console.dialogflow.com/api-client/demo/embedded/healthybot"
        ></iframe>
      </div> */}
    </section>
  );
}

export default Home;
