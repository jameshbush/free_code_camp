const FCC_TESTS_URL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

// TODO: convert to hooks https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
const injectFCCTests = () => {
  const script = document.createElement("script");
  script.src = FCC_TESTS_URL;
  script.async = true;
  document.body.appendChild(script);
};

export { injectFCCTests };
