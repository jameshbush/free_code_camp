const FCC_TESTS_URL = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

type RunOption = "run" | "skip";
type TestOption =
  | undefined
  // responsive web design
  | "tribute-page"
  | "portfolio"
  | "survey-form"
  | "product-landing-page"
  | "technical-docs-page"
  // front end libraries
  | "random-quote-machine"
  | "markdown-previewer"
  | "drum-machine"
  | "25-5-clock"
  | "javascript-calculator"
  // data visualization
  | "bar-chart"
  | "scatter-plot"
  | "heat-map"
  | "choropleth"
  | "tree-map";

// TODO: convert to hooks https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
const injectFCCTests = () => {
  const script = document.createElement("script");
  script.id = "fcc-tests";
  script.src = FCC_TESTS_URL;
  script.async = true;

  document.body.appendChild(script);
};

/*
  resources:
    https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot
    https://stackoverflow.com/questions/10029276/how-to-change-dropdownlist-selected-value-in-javascript
    https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
*/
const selectFCCTest = (testOption: TestOption, run: RunOption) => {
  if (testOption === undefined) {
    return;
  }

  const selectElement = document
    .querySelector("#fcc_test_suite_wrapper")
    ?.shadowRoot?.querySelector("#test-suite-selector") as any;

  const options = Array(...(selectElement?.options ?? []));
  if (options?.length) {
    const selectOption = options.find((el) => el.value === testOption) as any;
    if (selectOption) {
      selectOption.selected = true;
    }
  }

  if (run === "run") {
    (window as any).FCC_Global?.FCCRerunTests();
  }
};

const initializeTestRunner = (
  testOption: TestOption = undefined,
  runOption: RunOption = "skip",
  timeout: number = 333
) => {
  injectFCCTests();
  setTimeout(() => selectFCCTest(testOption, runOption), timeout);
};

const cleanUpTestRunner = () => {
  const script = document.getElementById("fcc-tests");
  const div = document.getElementById("fcc_test_suite_wrapper");
  [script, div].forEach((el) => el?.remove());
};

export { initializeTestRunner, cleanUpTestRunner };
