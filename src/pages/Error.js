import "./Error.css";
import React from "react";
import { Link } from "react-router-dom";
import errorimg from "../media/error.png";

export const Error = () => {
  return (
    <>
      <div className="e-container">
        <div className="e-message">
          <img src={errorimg} alt="" id="error-img" />
          <h1>Page not found.</h1>
          <p>Oops! There seems to be a mistake in the URL.</p>
          <p>
            Navigate back to the{" "}
            <span>
              <Link to="/">homepage</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
