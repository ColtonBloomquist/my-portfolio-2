import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
function Portfolio() {
  //   const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <h1 className="page-title">My Projects</h1>
      <section className="flex-row">
        <PortfolioCard
          assetpath={
            require(`../../assets/project-pictures/budget-tracker.png`).default
          }
          url="https://budget-tracker-challenge-19.herokuapp.com/"
        />

        <PortfolioCard
          assetpath={
            require(`../../assets/project-pictures/horiseon.png`).default
          }
          url="https://coltonbloomquist.github.io/Horiseon-Code-Refractor-/"
        />
        <PortfolioCard
          assetpath={
            require(`../../assets/project-pictures/playlistgenerator.png`)
              .default
          }
          url="https://joseepina.github.io/bc-project-01/"
        />
        <PortfolioCard
          assetpath={
            require(`../../assets/project-pictures/rileyskitchen.png`).default
          }
          url="https://rileys-kitchen.herokuapp.com/login"
        />
        <PortfolioCard
          assetpath={
            require(`../../assets/project-pictures/run-buddy.png`).default
          }
          url="https://coltonbloomquist.github.io/run-buddy/"
        />
        <PortfolioCard
          assetpath={
            require(`../../assets/project-pictures/password-generator.png`)
              .default
          }
          url="https://coltonbloomquist.github.io/Random-Password-Generator-/"
        />
      </section>
    </div>
  );
}

export default Portfolio;
