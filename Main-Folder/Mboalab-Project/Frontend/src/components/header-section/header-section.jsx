import './header-section.css';
import { NavLink } from "react-router-dom";
import cc from "../../assets/image/SecondSide.jpg";
import ins from "../../assets/image/stethoscope.jpg";
import se from "../../assets/image/woman-removebg.png"
import {ReactComponent as Telephone} from '../../assets/svg/telephone-fill.svg'

function HeaderSection() {
    return(
        <section id="header" className="d-flex align-items-center mb-5 app-container">
        <div className="container-fluid nav_bg">
          <div className="rowy">
            <div className="">
              <div className="row m-0">
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
                  <div className="mt-3 d-flex">
                    <NavLink to="/service" className="btn-get-started"> Assess Yourself</NavLink>
                    <a href="tel:+2376-9746-5154" className="btn-get-started2 pdn d-flex align-items-center justify-content-center gap-1 ">
                      <Telephone />
                      HelpLine
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 pt-0 pt-lg-0 order-2 order-lg-1 home-img" >
                <img src={se} className="header-img " alt="" />
                 </div>
             {/*
                <div className="col-lg-4 pt-0 pt-lg-0 order-2 order-lg-1 home-img" >
                   <img src={se} className="img-fluid " alt="" />
                </div>

                <div className="col-lg-3 pt-0 pt-lg-0 order-2 order-lg-1">
                <iframe width="350" height="550" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/healthybot"></iframe>
                </div>
    */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}


export default HeaderSection