import React from "react";
import "./style.css";

interface IProps {}
interface IState {}

const TributePage = (props: IProps, state: IState): JSX.Element => {
  return (
    <body id="main">
      <div>
        <h1 id="title">James H. Bush</h1>
        <div id="img-div">
          <img
            // src="../../../utils/staticPhotos/profile_pic.jpg"
            src="https://avatars1.githubusercontent.com/u/17484767"
            alt="headshot"
            id="image"
          />
          <figcaption id="img-caption">
            Photo taken at graduation from The Iron Yard in May 2016
          </figcaption>
        </div>
        <div id="tribute-info">
          <p>
            Jim loves using his technical skills to help people achieve their
            goals. Systems bring joy to his heart. He enjoys the art of computer
            programming and solving problems. Whether he's learning something
            new or using his favorite technologies, he always brings a high
            level of dedication and focus to his craft.
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
            {/* <img
              id="github-logo"
              src="../../../utils/staticPhotos/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png"
              alt="logo"
            /> */}
          </div>
        </a>
      </div>

      {/* <script src="../../../utils/takeMeHomeNavBar.js"></script> */}
      {/* <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> */}
    </body>
  );
};
export { TributePage };
