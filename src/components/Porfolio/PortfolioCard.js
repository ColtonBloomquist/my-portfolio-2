import React, { useState } from "react";

function PortfolioCard(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      style={{
        // border: isShown ? "1px solid blue" : "1px solid red",
        width: "33%",
        paddingTop: "100px",
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => window.open(props.url)}
    >
      <img
        src={props.assetpath}
        alt="portfolio card"
        className="img-thumbnail mx-1"
      ></img>
    </div>
  );
}

export default PortfolioCard;
