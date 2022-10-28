import { MobileOutlined } from "@ant-design/icons";

//internal imports
import img1 from "../../../asset/image/photo1.jpg";
import img2 from "../../../asset/image/photo2.jpg";
import img3 from "../../../asset/image/photo3.jpg";
import img4 from "../../../asset/image/photo4.jpg";
import img5 from "../../../asset/image/photo5.jpg";
import { TimelineCard, Testimonials, Card } from "./components";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "100%",
          position: "relative",
          marginBottom: "50px",
        }}
      >
        <div className="about-us-text">
          <h1>
            BETTER
            <div className="animated-info">
              <div className="animated-info-text">
                <span className="animated-text">HEALTH</span>
                <span className="animated-text">DAYS</span>
                <span className="animated-text">LIVES</span>
              </div>
            </div>
          </h1>

          <p>
            Mboalab is a non-profit organization that aims to improve the health
            of the people of the Democratic Republic of Congo through the
            development of innovative solutions.
          </p>
          <div className="hero-links">
            <a
              href="https://website-mboalab.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
              data-hover="learn more"
            >
              Learn More
            </a>
            <p className="contact-phone">
              <MobileOutlined /> +2376 9746 5154
            </p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="about-us-paragraph-container">
          <div>
            <p className="about-us-paragraph">
              <h2>ABOUT US</h2>
              MboaLab is a non-profit organization that aims to improve the
              health of the people through the development of innovative
              solutions. We are a team of young people who are passionate about
              the health of the people and the development of their country.
            </p>
          </div>
        </div>
        <div className="timeline-container">
          <TimelineCard />
        </div>
        <Card
          image={img1}
          title={"Dr Danielle Carson"}
          paragraph={
            " Dr Carson is a medical doctor with over 2 years of experience, a specialist in cardiology and has a passion for helping people."
          }
        />
      </div>
      <div className="testimonials-container">
        <div className="testimonials">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
