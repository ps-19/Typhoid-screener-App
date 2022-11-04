import staff from "../../images/staff5.png";
import "../../dist/css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="controll">
          <img src={staff} alt="staff" />
        </div>
        <div className="home-text">
          <h1>Online Typhoid Checkup With MboaLab</h1>
          <p>
            MboaLab is an open and collaborative space located in{" "}
            <a
              href={"https://goo.gl/maps/wxA41SDU4ut2TFHY7"}
              className="nav-link2"
            >
              Yaoundé, Cameroon.
            </a>
          </p>
          <p>
            The aim of MboaLab is to catalyse sustainable local development and
            improve people’s living conditions through open science.
          </p>
          <button>Assess Yourself</button>
        </div>
      </div>
    </>
  );
};

export default Home;
