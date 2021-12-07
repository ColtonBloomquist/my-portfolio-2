import React from "react";
import Footer from "./Footer";

function FooterIcon(props) {
  return (
    <li className="footer-icon">
      <a href={props.url}>
        <img src={props.iconImage} alt="footer icon"></img>
      </a>
    </li>
  );
}

export default FooterIcon;
