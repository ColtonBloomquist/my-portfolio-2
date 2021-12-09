import React from "react";

function About() {
  return (
    <section>
      <h2 className=" about-title page-title">
        <span>Who am I?</span>
      </h2>
      <div className="about-info flex-row">
        <img
          src={
            require("../../assets/project-pictures/picture-of-me.JPG").default
          }
          alt="Picture of Colton Bloomquist"
          className="mx-1 picture-of-me"
        ></img>
        <p className="self-description">
          I am a full-stack web developer and am currently enrolled in the
          University of Utah's "Full-Stack Web Developer" program. I am
          proficient in HTML, CSS, JavaScript, WebAPIs, SQL, NoSQL, Express,
          MONGODB, PWAs and most recently, React. I am excited to continue my
          education in the ever growing field of web developement.
        </p>
      </div>
    </section>
  );
}

export default About;
