import React from "react";
import "./Page404.css";
import { Link } from "@reach/router";

function Page404() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>
            4<span>0</span>4
          </h1>
        </div>
        <h2>the page you requested could not found</h2>
        <br />
        <br />
        <Link to="/" className="btn2 px-4 p-2">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default Page404;
