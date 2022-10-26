import React from "react";
import { Link } from "@reach/router";
import {
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";
import image from "../../../../asset/image/icon.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <Link to="/" className="social-logo">
          <img src={image} alt="logo" className="navbar-icon" />
          MBOALAB
        </Link>
      </div>
      <p>
        A community biology lab and makerspace based in Yaounde, Cameroon.{" "}
        <br /> The aim of MboaLab is to catalyse sustainable local development
        and improve people’s living conditions through open science.
      </p>
      {/* <h6>QUICK LINKS</h6> */}
      <div className="footer-link-items">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">Online Checkup</Link>
        <a href="https://website-mboalab.vercel.app/donate">Contribute</a>
      </div>
      <hr />
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">
            {" "}
            Copyright ©{currentYear} All Rights Reserved by Mboalab
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="https://www.facebook.com/mboalab/"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className="social-icon-link"
              href="https://github.com/Mboalab
              "
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              className="social-icon-link"
              href={
                "https://www.youtube.com/watch?v=Tfx-C--iELU&t=27s&ab_channel=BeneficialBio"
              }
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              className="social-icon-link"
              href="https://twitter.com/labmboa?lang=en"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/company/mboalab/?originalSubdomain=cm"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
