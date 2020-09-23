import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const certifications = [
  {
    name: "00 Responsive Web Design",
    description:
      "This certification covers basic HTML & CSS. I greatly improved my knowledge of flexbox and all things CSS.",
    projects: [
      {
        name: "00 Tribute Page",
        route: "/00_responsive_web_design/00_tribute_page",
      },
      {
        name: "01 Survey Form",
        route: "/00_responsive_web_design/01_survey_form",
      },
      {
        name: "02 Project Landing Page",
        route: "/00_responsive_web_design/02_product_landing_page",
      },
      {
        name: "03 Technical Documentation",
        route: "/00_responsive_web_design/03_technical_documentation",
      },
      {
        name: "04 Personal Portfolio",
        route: "/00_responsive_web_design/04_personal_portfolio_page",
      },
    ],
  },
];

interface IHomeProps {}

interface ICertificationProps {
  name: string;
  description: string;
  projects: IProjectProps[];
}
interface IProjectProps {
  name: string;
  route: string;
}

const Certification = (props: ICertificationProps): JSX.Element => (
  <div>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <ul>{props.projects.map((project) => Project(project))}</ul>
  </div>
);

const Project = (props: IProjectProps): JSX.Element => (
  <li>
    <Link to={`${props.route}/project-route`}>{props.name}</Link>
  </li>
);

export function Home(props: IHomeProps) {
  return (
    <Container>
      <h1 className="text-center">Home Page</h1>
      {certifications.map((certification) => Certification(certification))}
      {/* Project 00 */}
      {/* <h2>00 Responsive Web Design</h2>
      <p>
        The initial projects cover basic HTML & CSS. I greatly improved my
        knowledge of flexbox and all things CSS.
      </p>
      <ul>
        <li>
          <Link to="/00_responsive_web_design/00_tribute_page">
            00 Tribute Page
          </Link>
        </li>
        <li>
          <Link to="./00_responsive_web_design/01_survey_form">
            01 Survey Form
          </Link>
        </li>
        <li>
          <Link to="./00_responsive_web_design/02_product_landing_page">
            02 Project Landing Page
          </Link>
        </li>
        <li>
          <Link to="./00_responsive_web_design/03_technical_documentation">
            03 Technical Documentation
          </Link>
        </li>
        <li>
          <Link to="./00_responsive_web_design/04_personal_portfolio_page">
            04 Personal Portfolio
          </Link>
        </li>
      </ul> */}

      {/* Project 01 */}

      <h2>01 JavaScript Algorithms and Data Structures</h2>
      <p>
        The second project dives into the JavaScript programming language. I was
        already comfortable with ES6, as well as common data structures, so
        these brain-teasers were mostly a review. By the way, if the check box
        is green, that means the tests are passing.
      </p>
      <ul>
        <li>
          <a href="./01_java_script_algorithms_and_data_structures/00_palendrome_checker/index.html">
            00 Palindrome Checker
          </a>
        </li>
        <li>
          <a href="./01_java_script_algorithms_and_data_structures/01_roman_numeral_converter/index.html">
            01 Roman Numeral Converter
          </a>
        </li>
        <li>
          <a href="./01_java_script_algorithms_and_data_structures/02_caesars_cipher/index.html">
            02 Caesar's Cipher
          </a>
        </li>
        <li>
          <a href="./01_java_script_algorithms_and_data_structures/03_telephone_number_validator/index.html">
            03 Telephone Number Validator
          </a>
        </li>
        <li>
          <a href="./01_java_script_algorithms_and_data_structures/04_cash_register/index.html">
            04 Cash Register
          </a>
        </li>
      </ul>

      {/* Project 02 */}

      <h2>02 Front End Libraries</h2>
      <p>
        I got the tests passing with plain JavaScript, but I want to redo these
        in React before claiming the certificate.
      </p>
      <ul>
        <li>
          <a href="./02_front_end_libraries/00_random_quote_machine/index.html">
            00 Random Quote
          </a>
        </li>
        <li>
          <a href="./02_front_end_libraries/01_markdown_previewer/index.html">
            01 Markdown Previewer
          </a>
        </li>
        <li>
          <a href="./02_front_end_libraries/02_drum_machine/index.html">
            02 Drum Machine
          </a>
        </li>
        <li>
          <a href="./02_front_end_libraries/03_javascript_calculator/index.html">
            03 JavaScript Calculator
          </a>
        </li>
        <li>
          <a href="./02_front_end_libraries/04_pomodoro_clock/index.html">
            04 Pomodoro Clock
          </a>
        </li>
      </ul>
    </Container>
  );
}
