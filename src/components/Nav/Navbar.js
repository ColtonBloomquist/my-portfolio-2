import React, { useState } from "react";

function Navbar(props) {
  function headerClickHandler(page) {
    props.pageSelect(page);
    console.log(page);
  }
  return (
    <div>
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
            className="mx-2"
            onClick={() => {
              headerClickHandler("about");
            }}
          >
            About Me
          </li>
          <li
            className="mx-2"
            onClick={() => {
              headerClickHandler("portfolio");
            }}
          >
            Portfolio
          </li>
          <li
            className="mx-2"
            onClick={() => {
              headerClickHandler("resume");
            }}
          >
            Resume
          </li>
          <li
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
