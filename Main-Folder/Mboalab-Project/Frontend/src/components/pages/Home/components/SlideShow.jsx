import React from "react";
import { Link } from "@reach/router";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

//internal imports
import assess from "../../../../asset/image/call.jpg";
import cc from "../../../../asset/image/doc.jpg";
import ins from "../../../../asset/image/hands.jpg";
import "./SlideShow.css";

const slideImages = [cc, ins, assess];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const SlideShow = () => {
  return (
    <>
      <div className="slide-container">
        <Slide
          {...properties}
          style={{
            height: "500px",
            width: "100%",
          }}
        >
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <span>
                <h5>Free Typhoid Checkup With MboaLab</h5>
                <button>
                  <Link to="/service" className="slide-link">
                    Assess Yourself
                  </Link>
                </button>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>
                <h5>Better Health, Better Days, Better Life</h5>
                <button>
                  <Link to="/about" className="slide-link">
                    About Us
                  </Link>
                </button>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>
                <h5>You are not alone, We are just a call away</h5>
                <button>
                  <a href="tel:+2376-9746-5154" className="slide-link">
                    HelpLine
                  </a>
                </button>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default SlideShow;
