import React from "react";
import "./style.scss";
import githubLogo from "../../utils/staticPhotos/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png";
import profilePic from "../../utils/staticPhotos/profile_pic.jpg";

const FCC_TESTS =
  "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

class TributePage extends React.Component {
  componentDidMount() {
    // TODO: convert to hooks https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
    const script = document.createElement("script");
    script.src = FCC_TESTS;
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="main">
        <div>
          <h1 id="title">James H. Bush</h1>
          <div id="img-div">
            <img src={profilePic} alt="headshot" id="image" />
            <figcaption id="img-caption">
              Photo taken at graduation from The Iron Yard in May 2016
            </figcaption>
          </div>
          <div id="tribute-info">
            <p>
              Jim loves using his technical skills to help people achieve their
              goals. Systems bring joy to his heart. He enjoys the art of
              computer programming and solving problems. Whether he's learning
              something new or using his favorite technologies, he always brings
              a high level of dedication and focus to his craft.
            </p>
          </div>
          <a
            id="tribute-link"
            href="https://github.com/jameshbush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>GitHub</div>
            <div>
              <img id="github-logo" src={githubLogo} alt="logo" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export { TributePage };
