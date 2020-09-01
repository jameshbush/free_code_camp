(function () {
  const display = document.getElementById("display");
  let calculation = display.innerText;
  const OPERATIONS = ["*", "+", "-", "/"];
  const OPERATIONS_REGEX = /[\d-+\*\/\.]/;
  const DIGIT_REGEX = /\d/;
  const DECIMAL = ".";
  const CLEAR = "C";
  const HAS_DECIMAL_REGEX = /\d{0,}\.\d{0,}$/;

  const clickEvent = ({ target: { innerText: inputText } }) => {
    if (inputText === CLEAR) {
      calculation = "0";
    } else if (inputText.match(DIGIT_REGEX)) {
      if (calculation === "0") {
        calculation = inputText;
      } else {
        calculation += inputText;
      }
    } else if (inputText === DECIMAL) {
      if (!HAS_DECIMAL_REGEX.test(calculation)) {
        calculation += ".";
      }
    } else if (inputText.match(OPERATIONS_REGEX)) {
      const last = calculation[calculation.length - 1];
      const secondLast = calculation[calculation.length - 2];

      // last 2 are operations EX: 1/-[inputText]
      if (OPERATIONS.includes(secondLast) && OPERATIONS.includes(last)) {
        calculation = calculation.slice(0, calculation.length - 2);

        // last 1 is operation and inputText isn't (-) EX: 1/[+]
      } else if (OPERATIONS.includes(last) && inputText !== "-") {
        calculation = calculation.slice(0, calculation.length - 1);

        // last 1 is (-) and inputText is (-) EX: 1-[-]
      } else if (last === "-" && inputText === "-") {
        calculation = calculation.slice(0, calculation.length - 1);
        inputText = "+";
      }

      calculation += inputText;
    } else if (inputText === "=") {
      try {
        calculation = eval(calculation);
      } catch (e) {
        console.error(e);
        calculation = "Err";
      }
    }

    display.innerText = calculation;
  };

  Array(...document.getElementsByClassName("input")).forEach((el) => {
    el.addEventListener("click", clickEvent);
  });
})();
