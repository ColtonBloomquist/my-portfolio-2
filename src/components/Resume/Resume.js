import React from "react";

function Resume() {
  return (
    <div>
      <div>
        <h3 className="resume-title">
          Please click{" "}
          <span>
            <a href="/Resume/resume.docx" download>
              here
            </a>
          </span>{" "}
          to download my resume.
        </h3>
      </div>
      <section className="resume-list">
        <h2 className="page-title">Front-end</h2>
        <ul className="resume-items">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Web APIs</li>
          <li>Third-Party APIs</li>
          <li>Server-Side APIs</li>
        </ul>

        <h2 className="page-title">Back-end</h2>
        <ul className="resume-items">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>NoSQL(MongoDB)</li>
          <li>PWAs</li>
          <li>React</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
