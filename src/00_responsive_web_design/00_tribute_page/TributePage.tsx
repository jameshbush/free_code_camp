import React from "react";
import { initializeTestRunner, cleanUpTestRunner } from "../../utils/scripts/injectFCCTests";
import "./style.scss";
import githubLogo from "../../utils/staticPhotos/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png";
import profilePic from "../../utils/staticPhotos/profile_pic.jpg";

class TributePage extends React.Component {
  componentDidMount = () => initializeTestRunner();
  componentWillUnmount = () => cleanUpTestRunner();

  render() {
    return (
      <div id="main">
        <div>
          <h1 id="title">James H. Bush</h1>
          <div id="img-div">
            <img src={profilePic} alt="headshot" id="image" />
            <figcaption id="img-caption">Photo taken at graduation from The Iron Yard in May 2016</figcaption>
          </div>
          <div id="tribute-info">
            <p>
              Jim loves using his technical skills to help people achieve their goals. Systems bring joy to
              his heart. He enjoys the art of computer programming and solving problems. Whether he's learning
              something new or using his favorite technologies, he always brings a high level of dedication
              and focus to his craft.
            </p>
          </div>
          <a id="tribute-link" href="https://github.com/jameshbush" target="_blank" rel="noopener noreferrer">
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
