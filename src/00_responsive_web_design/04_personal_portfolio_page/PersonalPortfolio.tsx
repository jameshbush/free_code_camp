import React from "react";
import "./styles.css";

const PersonalPortfolio = () => {
  return (
    <div>
      <nav id="navbar">
        <a className="nav-link" href="#welcome-section">
          Welcome
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a
          className="nav-link"
          href="https://github.com/jameshbush"
          id="profile-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>

      <section id="welcome-section">
        <div>
          <h1>"Welcome to my demo portfolio page." -James H. Bush</h1>
        </div>
      </section>

      <section id="projects">
        <div className="project-tile">
          <a
            href="../../00_responsive_web_design/04_personal_portfolio_page/index.html"
            target="_blank"
          >
            Personal Portfolio (this page)
          </a>
        </div>
        <div className="project-tile">
          <a
            href="../../00_responsive_web_design/03_technical_documentation/index.html"
            target="_blank"
          >
            Technical Documentation
          </a>
        </div>
        <div className="project-tile">
          <a
            href="../../00_responsive_web_design/02_product_landing_page/index.html"
            target="_blank"
          >
            Product Landing Page
          </a>
        </div>
        <div className="project-tile">
          <a
            href="../../00_responsive_web_design/01_survey_form/index.html"
            target="_blank"
          >
            Survey Form
          </a>
        </div>
        <div className="project-tile">
          <a
            href="../../00_responsive_web_design/00_tribute_page/index.html"
            target="_blank"
          >
            Tribute Page
          </a>
        </div>
      </section>

      {/* <script src="../../../utils/takeMeHomeNavBar.js"></script>
    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> */}
    </div>
  );
};

export { PersonalPortfolio };
