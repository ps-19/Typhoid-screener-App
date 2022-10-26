import React from "react";
import { Router } from "@reach/router";
import {
  Home,
  Termsofuse,
  About,
  Contact,
  Service,
  Login,
  Register,
  Comments,
  Page404,
} from "../pages/index";

const routes = (
  <Router>
    <Home path="/" />
    <Home path="home" />
    <About path="about" />
    <Contact path="contact" />
    <Service path="service" />
    <Login path="login" />
    <Register path="register" />
    <Comments path="comments" />
    <Termsofuse path="terms-of-use" />
    <Page404 default />
  </Router>
);

export default routes;
