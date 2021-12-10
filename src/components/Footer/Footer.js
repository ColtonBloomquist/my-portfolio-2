import React from "react";
import FooterIcon from "./FooterIcon";
function Footer() {
  return (
    <ul className="logos">
      <FooterIcon
        iconImage={
          require("../../assets/project-pictures/twitter-logo.jpg").default
        }
        url="https://twitter.com/Colton_Bloom"
      />
      <FooterIcon
        iconImage={
          require("../../assets/project-pictures/instagram-logo.jpeg").default
        }
        url="https://www.instagram.com/colton_bloomquist_dev/"
      />
      <FooterIcon
        iconImage={
          require("../../assets/project-pictures/linkedin-logo.jpeg").default
        }
        url="https://www.linkedin.com/in/colton-bloomquist-05045117b/"
      />

      <FooterIcon
        iconImage={
          require("../../assets/project-pictures/github-logo.png").default
        }
        url="https://github.com/ColtonBloomquist"
      />
    </ul>
  );
}

export default Footer;
