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

const P_00 = "/00_responsive_web_design";
const P_01 = "/01_java_script_algorithms_and_data_structures";
const P_02 = "/02_front_end_libraries";

const certificationsData: ICertificationProps[] = [
  {
    path: P_00,
    name: "00 Responsive Web Design",
    component: undefined,
    description:
      "This certification covers basic HTML & CSS. I greatly improved my knowledge of flexbox and all things CSS.",
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
    description:
      "The second project dives into the JavaScript programming language. I was already comfortable with ES6, as well as common data structures, so these brain-teasers were mostly a review. By the way, if the check box is green, that means the tests are passing.",
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
    description:
      "I got the tests passing with plain JavaScript, but I want to redo these in React before claiming the certificate.",
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
        component: TributePage,
      },
      {
        path: `${P_02}/04_pomodoro_clock`,
        name: "04 Pomodoro Clock",
        component: TributePage,
      },
    ],
  },
];

export { certificationsData };
