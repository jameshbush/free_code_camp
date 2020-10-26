import { ICertificationProps } from "./Home";
import { TributePage } from "./00_responsive_web_design/00_tribute_page/TributePage";
import { SurveyForm } from "./00_responsive_web_design/01_survey_form/SurveyForm";
import { ProductLandingPage } from "./00_responsive_web_design/02_product_landing_page/ProductLandingPage";
import { TechnicalDocumentation } from "./00_responsive_web_design/03_technical_documentation/TechnicalDocumentation";
import { PersonalPortfolio } from "./00_responsive_web_design/04_personal_portfolio_page/PersonalPortfolio";
import { PalendromeChecker } from "./01_java_script_algorithms_and_data_structures/00_palendrome_checker/PalendromeChecker";
import { RomanNumeralConverter } from "./01_java_script_algorithms_and_data_structures/01_roman_numeral_converter/RomanNumeralConverter";
import { CaesarsCipher } from "./01_java_script_algorithms_and_data_structures/02_caesars_cipher/CaesarsCipher";
import { TelephoneNumberValidator } from "./01_java_script_algorithms_and_data_structures/03_telephone_number_validator/TelephoneNumberValidator";
import { CashRegister } from "./01_java_script_algorithms_and_data_structures/04_cash_register/CashRegister";
import { RandomQuoteMachine } from "./02_front_end_libraries/00_random_quote_machine/RandomQuoteMachine";
import { MarkdownPreviewer } from "./02_front_end_libraries/01_markdown_previewer/MarkdownPreviewer";
import { DrumMachine } from "./02_front_end_libraries/02_drum_machine/DrumMachine";
import { JavaScriptCalculator } from "./02_front_end_libraries/03_javascript_calculator/JavaScriptCalculator";
import { PomodoroClock } from "./02_front_end_libraries/04_pomodoro_clock/PomodoroClock";
import { BarChart } from "./03_data_visualization/00_bar_chart/BarChart";
import { ScatterplotGraph } from "./03_data_visualization/01_scatterplot_graph/ScatterplotGraph";

const P_00 = "/00_responsive_web_design";
const P_01 = "/01_java_script_algorithms_and_data_structures";
const P_02 = "/02_front_end_libraries";
const P_03 = "/03_data_visualization";

const certificationsData: ICertificationProps[] = [
  {
    path: P_00,
    name: "00 Responsive Web Design",
    component: undefined,
    description: `This certification covers basic HTML & CSS.
      While I'm comfortable implementing front-end logic, I have less experience with web design.
      02 Product Landing Page, and 03 Technical Documentation are the most refined because they were the most interesting projects.`,
    projects: [
      {
        path: `${P_00}/00_tribute_page`,
        name: "00 Tribute Page",
        component: TributePage,
      },
      {
        path: `${P_00}/01_survey_form`,
        name: "01 Survey Form",
        component: SurveyForm,
      },
      {
        path: `${P_00}/02_product_landing_page`,
        name: "02 Project Landing Page",
        component: ProductLandingPage,
      },
      {
        path: `${P_00}/03_technical_documentation`,
        name: "03 Technical Documentation",
        component: TechnicalDocumentation,
      },
      {
        path: `${P_00}/04_personal_portfolio_page`,
        name: "04 Personal Portfolio",
        component: PersonalPortfolio,
      },
    ],
  },
  {
    path: P_01,
    name: "01 JavaScript Algorithms and Data Structures",
    component: undefined,
    description: `I am comfortable implementing data structures and algorithms using ES6.
      When developing algorithms I minimize repeated code, use straightforward iteration, extract functions, use guard statements, and leverage data structures appropriately.
      By the way, if the check box at the bottom of the UI is green, that means the tests are passing.`,
    projects: [
      {
        path: `${P_01}/00_palendrome_checker`,
        name: "00 Palindrome Checker",
        component: PalendromeChecker,
      },
      {
        path: `${P_01}/01_roman_numeral_converter`,
        name: "01 Roman Numeral Converter",
        component: RomanNumeralConverter,
      },
      {
        path: `${P_01}/02_caesars_cipher`,
        name: "02 Caesar's Cipher",
        component: CaesarsCipher,
      },
      {
        path: `${P_01}/03_telephone_number_validator`,
        name: "03 Telephone Number Validator",
        component: TelephoneNumberValidator,
      },
      {
        path: `${P_01}/04_cash_register`,
        name: "04 Cash Register",
        component: CashRegister,
      },
    ],
  },
  {
    path: P_02,
    name: "02 Front End Libraries",
    description: `Initially solved these problems using plain JavaScript. Then re-implemented in TypeScript/React.
      00 Random Quote fetches data from a serverless API.
      03 JavaScript Calculator has some fairly complicated input logic.
      04 Pomodoro Clock has more complex state management.`,
    component: undefined,
    projects: [
      {
        path: `${P_02}/00_random_quote_machine`,
        name: "00 Random Quote",
        component: RandomQuoteMachine,
      },
      {
        path: `${P_02}/01_markdown_previewer`,
        name: "01 Markdown Previewer",
        component: MarkdownPreviewer,
      },
      {
        path: `${P_02}/02_drum_machine`,
        name: "02 Drum Machine",
        component: DrumMachine,
      },
      {
        path: `${P_02}/03_javascript_calculator`,
        name: "03 JavaScript Calculator",
        component: JavaScriptCalculator,
      },
      {
        path: `${P_02}/04_pomodoro_clock`,
        name: "04 Pomodoro Clock",
        component: PomodoroClock,
      },
    ],
  },
  {
    path: P_03,
    name: "03 Data Visualization",
    description: "Visualizing data from external APIs using D3.js.",
    component: undefined,
    projects: [
      {
        path: `${P_03}/00_bar_chart`,
        name: "00 Bar Chart",
        component: BarChart,
      },
      {
        path: `${P_03}/01_scatterplot_graph`,
        name: "01 Scatterplot Graph",
        component: ScatterplotGraph,
      },
      {
        path: `${P_03}/02_heat_map`,
        name: "02 Heat Map (under construction)",
        component: TributePage,
        isDisabled: true,
      },
      {
        path: `${P_03}/03_choropleth_map`,
        name: "03 Choropleth Map (under construction)",
        component: TributePage,
        isDisabled: true,
      },
      {
        path: `${P_03}/04_treemap_diagram`,
        name: "04 Treemap Diagram (under construction)",
        component: TributePage,
        isDisabled: true,
      },
    ],
  },
];

export { certificationsData };
