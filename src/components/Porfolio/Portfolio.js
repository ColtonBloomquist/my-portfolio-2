import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
function Portfolio() {
  //   const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <h1 className="page-title">My Projects</h1>
      <section className="flex-row">
        <PortfolioCard
          title="Budget Tracker"
          assetpath={
            require(`../../assets/project-pictures/budget-tracker.png`).default
          }
          url="https://budget-tracker-challenge-19.herokuapp.com/"
          githuburl="https://github.com/ColtonBloomquist/budget-tracker"
        />

        <PortfolioCard
          title="Horiseon"
          assetpath={
            require(`../../assets/project-pictures/horiseon.png`).default
          }
          url="https://coltonbloomquist.github.io/Horiseon-Code-Refractor-/"
          githuburl="https://github.com/ColtonBloomquist/Horiseon-Code-Refractor-"
        />
        <PortfolioCard
          title="Playlist Generator"
          assetpath={
            require(`../../assets/project-pictures/playlistgenerator.png`)
              .default
          }
          url="https://joseepina.github.io/bc-project-01/"
          githuburl="https://github.com/JoseEPina/bc-project-01"
        />
        <PortfolioCard
          title="Riley's Kitchen"
          assetpath={
            require(`../../assets/project-pictures/rileyskitchen.png`).default
          }
          url="https://rileys-kitchen.herokuapp.com/login"
          githuburl="https://github.com/jeshuasalgado/Project2"
        />
        <PortfolioCard
          title="Run Buddy"
          assetpath={
            require(`../../assets/project-pictures/run-buddy.png`).default
          }
          url="https://coltonbloomquist.github.io/run-buddy/"
          githuburl="https://github.com/ColtonBloomquist/run-buddy"
        />
        <PortfolioCard
          title="Password Generator"
          assetpath={
            require(`../../assets/project-pictures/password-generator.png`)
              .default
          }
          url="https://coltonbloomquist.github.io/Random-Password-Generator-/"
          githuburl="https://github.com/ColtonBloomquist/Random-Password-Generator-"
        />
      </section>
    </div>
  );
}

export default Portfolio;
