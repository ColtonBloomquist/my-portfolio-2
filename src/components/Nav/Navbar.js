import React, { useState } from "react";

function Navbar(props) {
  function headerClickHandler(page) {
    props.pageSelect(page);
    console.log(page);
  }
  return (
    <div className="navbar-main">
      <header
        className="flex-row"
        onClick={() => {
          headerClickHandler("home");
        }}
      >
        <h1 className="navbar-title">Colton Bloomquist</h1>
      </header>
      <nav>
        <ul className="flex-row">
          <li
            style={{
              color: props.selectedPage === "about" ? "#8c54ff" : "white",
            }}
            className="mx-2"
            onClick={() => {
              headerClickHandler("about");
            }}
          >
            About Me
          </li>
          <li
            style={{
              color: props.selectedPage === "portfolio" ? "#8c54ff" : "white",
            }}
            className="mx-2"
            onClick={() => {
              headerClickHandler("portfolio");
            }}
          >
            Portfolio
          </li>
          <li
            style={{
              color: props.selectedPage === "resume" ? "#8c54ff" : "white",
            }}
            className="mx-2"
            onClick={() => {
              headerClickHandler("resume");
            }}
          >
            Resume
          </li>
          <li
            style={{
              color: props.selectedPage === "contact" ? "#8c54ff" : "white",
            }}
            className="mx-2"
            onClick={() => {
              headerClickHandler("contact");
            }}
          >
            Contact Me
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
