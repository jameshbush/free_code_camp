const pathNames = [
  {
    pageName: "00 Tribute Page",
    pathName: "/00_responsive_web_design/00_tribute_page/index.html",
  },
  {
    pageName: "01 Survey Form",
    pathName: "/00_responsive_web_design/01_survey_form/index.html",
  },
  {
    pageName: "02 Project Landing Page",
    pathName: "/00_responsive_web_design/02_product_landing_page/index.html",
  },
  {
    pageName: "03 Technical Documentation",
    pathName: "/00_responsive_web_design/03_technical_documentation/index.html",
  },
  {
    pageName: "04 Personal Portfolio",
    pathName: "/00_responsive_web_design/04_personal_portfolio_page/index.html",
  },
  {
    pageName: "00 Palindrome Checker",
    pathName:
      "/01_java_script_algorithms_and_data_structures/00_palendrome_checker/index.html",
  },
  {
    pageName: "01 Roman Numeral Converter",
    pathName:
      "/01_java_script_algorithms_and_data_structures/01_roman_numeral_converter/index.html",
  },
  {
    pageName: "02 Caesar's Cipher",
    pathName:
      "/01_java_script_algorithms_and_data_structures/02_caesars_cipher/index.html",
  },
  {
    pageName: "03 Telephone Number Validator",
    pathName:
      "/01_java_script_algorithms_and_data_structures/03_telephone_number_validator/index.html",
  },
  {
    pageName: "04 Cash Register",
    pathName:
      "/01_java_script_algorithms_and_data_structures/04_cash_register/index.html",
  },
  {
    pageName: "00 Random Quote",
    pathName: "/02_front_end_libraries/00_random_quote_machine/index.html",
  },
  {
    pageName: "01 Markdown Previewer",
    pathName: "/02_front_end_libraries/01_markdown_previewer/index.html",
  },
  {
    pageName: "02 Drum Machine",
    pathName: "/02_front_end_libraries/02_drum_machine/index.html",
  },
  {
    pageName: "03 JavaScript Calculator",
    pathName: "/02_front_end_libraries/03_javascript_calculator/index.html",
  },
  {
    pageName: "04 Pomodoro Clock",
    pathName: "/02_front_end_libraries/04_pomodoro_clock/index.html",
  },
];

const containerStyle = `display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between;`;
const childStyle = `width: 100px; height: 100px; text-align: center`;
const currentPathName = document.location.pathname; //.slice(1);
const currentPathIndex = pathNames
  .map((el) => el.pathName)
  .indexOf(currentPathName);
const previousPathIndex =
  (currentPathIndex > 0 ? currentPathIndex : pathNames.length) - 1;
const nextPathIndex = (currentPathIndex + 1) % pathNames.length;

const html = `
<nav>
  <div style="${containerStyle}">
    <a href="../..${pathNames[previousPathIndex].pathName}" style="${childStyle}"><h1><</h1></a>
    <a href="../../index.html" style="${childStyle}"><h1>Home</h1></a>
    <a href="../..${pathNames[nextPathIndex].pathName}" style="${childStyle}"><h1>></h1></a>
  </div>
</nav>
`;
document.getElementsByTagName("h1")[0].insertAdjacentHTML("beforebegin", html);
