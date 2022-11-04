import { useState } from "react";
import { Link } from "react-router-dom";
import "../../dist/css/Navbar.css";
import logo from "../../images/icon.png";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ForumIcon from "@material-ui/icons/Forum";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

const links = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Services", to: "/services" },
  { id: 3, name: "About us", to: "/about" },
  { id: 4, name: "Terms", to: "/terms" },
  { id: 5, name: "Comments", to: "/comments" },
  { id: 6, name: "Login", to: "/login" },
  { id: 7, name: "Register", to: "/register" },
];

const Navbar = () => {
  const [active, setActive] = useState(0);

  const handleClicked = (id) => {
    setActive(id);
    setIcon1Active(false);
    setIcon2Active(false);
    setIcon3Active(false);
    setIcon4Active(false);
  };
  const [icon1, setIcon1Active] = useState(false);
  const [icon2, setIcon2Active] = useState(false);
  const [icon3, setIcon3Active] = useState(false);
  const [icon4, setIcon4Active] = useState(false);

  const icon1Clicked = () => {
    setIcon1Active(true);
    setIcon2Active(false);
    setIcon3Active(false);
    setIcon4Active(false);
    setActive(0);
  };

  const icon2Clicked = () => {
    setIcon2Active(true);
    setIcon1Active(false);
    setIcon3Active(false);
    setIcon4Active(false);
    setActive(0);
  };

  const icon3Clicked = () => {
    setIcon3Active(true);
    setIcon1Active(false);
    setIcon2Active(false);
    setIcon4Active(false);
    setActive(0);
  };

  const icon4Clicked = () => {
    setIcon4Active(true);
    setIcon1Active(false);
    setIcon2Active(false);
    setIcon3Active(false);
    setActive(0);
  };

  return (
    <div className="container">
      <div className="controll">
        <span>
          <Link to="/">
            <img src={logo} alt="MboaLab" width="80px" height="60px" />
          </Link>
        </span>
        <ul className="horizontalNav">
          {links.map((link) => (
            <div key={link.id}>
              <li
                onClick={() => handleClicked(link.id)}
                className={active === link.id ? "active" : ""}
              >
                <Link to={link.to}>{link.name}</Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <ul id="verticalNav">
        <li onClick={icon1Clicked} className={icon1 ? "icon1 active" : "icon1"}>
          <div></div>
          <Link to="/">
            <ForumIcon className="icon" />
          </Link>
        </li>

        <li onClick={icon2Clicked} className={icon2 ? "icon2 active" : "icon2"}>
          <div></div>
          <Link to="/services">
            <LibraryAddCheckIcon className="icon" />
          </Link>
        </li>

        <li onClick={icon3Clicked} className={icon3 ? "icon3 active" : "icon3"}>
          <div></div>
          <Link to="/contacts">
            <MailOutlineIcon className="icon" />
          </Link>
        </li>

        <li onClick={icon4Clicked} className={icon4 ? "icon4 active" : "icon4"}>
          <div></div>
          <a href="tel:+2376-9746-5154">
            <CallIcon className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
