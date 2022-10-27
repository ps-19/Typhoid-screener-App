import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { BsChatDots } from "react-icons/bs";

//internal imports
import { SlideShow } from "./components";
import "./Home.css";
import image from "../../../asset/image/photo3.jpg";

const Home = () => {
  const [show, setShow] = useState(false);
  const [fact, setFact] = useState("");
  const facts = [
    {
      id: 1,
      fact: "Typhoid fever is a bacterial infection that can cause serious illness and even death if left untreated.",
    },
    {
      id: 2,
      fact: "Typhoid fever is caused by the bacterium Salmonella typhi. It is spread through contaminated food and water.",
    },
    {
      id: 3,
      fact: "Typhoid fever is a serious illness that can cause a high fever, headache, weakness, and stomach pain.",
    },
    {
      id: 4,
      fact: "Typhoid fever can be treated with antibiotics. It is important to take all of the medicine prescribed by your doctor.",
    },
    {
      id: 5,
      fact: "Typhoid fever can be prevented by practicing good hygiene, including washing hands with soap and clean water.",
    },
    {
      id: 6,
      fact: " Typhoid fever is a serious illness that can cause a high fever, headache, weakness, and stomach pain. Typhoid fever can be prevented by practicing good hygiene, including washing hands with soap and clean water.",
    },
  ];

  // to set random fact to display
  useEffect(() => {
    const interval = setInterval(() => {
      const randomFact = Math.floor(Math.random() * facts.length);
      setFact(facts[randomFact].fact);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section>
        <div
          style={{
            width: "100%",
            height: "340px",
          }}
        >
          <SlideShow />
        </div>
        <div className=" first-container">
          <h3 className="title">
            Online Typhoid Checkup With{" "}
            <strong className="mboalab">MboaLab</strong>
          </h3>

          <div className="flex-container">
            <div className="flex-item-1">
              <h4>Fill the data form</h4>
              <p>
                Help us know more about you to provide you with the best
                service.
              </p>
            </div>
            <div className="flex-item-2">
              <h4>Tell us your symptoms</h4>
              <p>
                Pick the symptoms that you are experiencing and the level of
                severity
              </p>
            </div>
            <div className="flex-item-3">
              <h4>Get your diagnosis</h4>
              <p>
                Get your diagnosis and treatment options diagnosed with typhoid
                fever
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link to="/service">
              <button className="button get-started">Get Started</button>
            </Link>
          </div>
        </div>
        <div
          className="facts-container"
          style={{
            // backgroundColor: "#3b586b",
            backgroundImage: `url(${image})`,
            filter: "brightness(0.9)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "200px",
            width: "70%",
            margin: "auto",
          }}
        >
          <span>DO YOU KNOW?</span>
          <h6 className="fact">{fact}</h6>
        </div>

        <div
          className="section-container-grey"
          style={{
            width: "100%",
            marginTop: "50px",
            marginBottom: "40px",
          }}
        >
          <h3 className="title">
            Let Us Know Your Opinions on{" "}
            <strong className="mboalab">Typhoid Care</strong>
          </h3>
          <p className="paragraph">
            Join us to{" "}
            <a href="https://murmuring-castle-35671.herokuapp.com/">talk </a>
            about health care. <br /> Mboalab's online feedback community is
            open to everyoone to help us focus on what matters to you.
          </p>
          <h6
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              width: "70%",
            }}
          >
            Not Yet a Member? Join Us Now
          </h6>
          <Link to="/register">
            <button className="button">Click Here</button>
          </Link>
        </div>

        <div className="chatbot">
          <button
            className="chatbot-button"
            onClick={() => {
              setShow(!show);
            }}
          >
            <BsChatDots
              style={{
                fontSize: "1.5rem",
              }}
            />
          </button>
        </div>

        <div>
          <iframe
            title="chatbot"
            width="300"
            height="440"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/healthybot"
            style={{
              display: show ? "block" : "none",
              position: "fixed",
              bottom: "70px",
              right: "10px",
              border: "none",
              borderRadius: "6px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
