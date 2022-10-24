import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Logo from "../../asset/image/logo.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__about">
        <div className="logo">
          <img src={Logo} alt="logo" width={50} height={50} />
          <h5>MboaLab</h5>
        </div>

        <p>
          The aim of MboaLab is to catalyse sustainable local development and
          improve people’s living conditions through open science.
        </p>
        <p className="copyright-text">
          Copyright &copy; 2022 All Rights Reserved by
          <a href="https://website-mboalab.vercel.app/" className="link">
            Mboalab.
          </a>
        </p>
      </div>

      <div className="footer__links">
        <h6>Quick Links</h6>
        <ul>
          <li>
            <NavLink to="/service">Online Checkup</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/terms-of-use">Terms of use</NavLink>
          </li>
          <li>
            <a href="https://website-mboalab.vercel.app/donate">Contribute</a>
          </li>
        </ul>
      </div>

      <div className="footer__contact">
        <h6>Contact Us</h6>
        <p>Po Box: 31066, Yaoundé, Cameroon</p>
        <p>
          Email: <a href="mailto:mboalab@gmail.com">mboalab@gmail.com</a>
        </p>
        <p>
          Whatsapp: <a href="tel:+237680795542">+237680795542</a>
        </p>
        <p>
          Phone: <a href="tel:+237697465154">+237697465154</a>
        </p>
      </div>

      <div className="footer__social">
        <h6>Our Socials</h6>
        <ul>
          <li>
            <a className="facebook" href="https://www.facebook.com/mboalab/">
              <AiFillFacebook className="icon" />
            </a>
          </li>
          <li>
            <a className="twitter" href="https://twitter.com/labmboa?lang=en">
              <AiOutlineTwitter className="icon" />
            </a>
          </li>
          <li>
            <a className="github" href="https://github.com/Mboalab">
              <AiFillGithub className="icon" />
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/company/mboalab/?originalSubdomain=cm"
            >
              <AiFillLinkedin className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
