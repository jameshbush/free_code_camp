import { CalcButton } from "./CalcButton";
import React from "react";
import { initializeTestRunner } from "../../utils/scripts/injectFCCTests";
import "./styles.scss";

type Operator = "+" | "-" | "*" | "/" | "^";
type Operand = string;
type EquationElement = Operator | Operand;
type Equation = EquationElement[];

interface IJavaScriptCalculatorState {
  equation: Equation;
}
const OPERATION_REGEX = /^[-+*/.]|\*\*$/;
const ZERO_REGEX = /^(0|-0)$/;
const DIGIT_REGEX = /^\d$/;
const CLEAR_REGEX = /^C$/;
const DECIMAL_REGEX = /^\.$/;
const CONTAINS_DECIMAL_REGEX = /\./;

class JavaScriptCalculator extends React.Component<null, IJavaScriptCalculatorState> {
  constructor(props: null) {
    super(props);
    this.state = { equation: ["0"] };

    this.handleClick = this.handleClick.bind(this);
    this.applyInputToEquation = this.applyInputToEquation.bind(this);
  }
  componentDidMount = () => initializeTestRunner();

  handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const input = (e.target as HTMLElement).innerText;

    this.setState(({ equation }) => {
      return { equation: this.applyInputToEquation(equation, input) };
    });
  }
  applyInputToEquation(equation: Equation, input: string): Equation {
    const { isClear, isDigit, isOperation, isZero, isMinus, isDecimal } = this;
    const { minusIsDigit } = this;
    var lastEl = equation.slice(-1)[0];
    var rest = equation.slice(0, -1);

    if (isClear(input)) {
      return ["0"];
    }
    if (input === "=") {
      // eslint-disable-next-line
      return [eval(equation.join(" "))];
    }
    if (isDecimal(input)) {
      if (CONTAINS_DECIMAL_REGEX.test(lastEl)) {
        return [...rest, `${lastEl}`];
      }
      return [...rest, `${lastEl}.`];
    }

    // if a digit was entered
    if (isDigit(input)) {
      if (minusIsDigit(equation)) {
        return [...rest, `${lastEl}${input}`];
      }

      // if the last element was an operation, append the digit
      if (isOperation(lastEl)) {
        return [...equation, input];
      }

      if (isZero(lastEl)) {
        // if the last element was a zero and this is a zero, ignore it
        if (isZero(input)) {
          return [...equation];
        }
        if (lastEl === "-0") {
          return [...rest, `-${input}`];
        }

        // if the last element was a zero and this is not zero, replace it
        return [...rest, input];
      }

      // otherwise, add the digit to the last element
      return [...rest, `${lastEl}${input}`];
    }

    // if an operation was entered
    if (isOperation(input)) {
      // if the entered element was a minus sign and the last element was an operation, append a minus
      if (isMinus(input) && isOperation(lastEl)) {
        return [...equation, "-"];
      }

      // if the last element was a minus sign and the second to last was an operation (aka was digit), replace both with the new symbol
      if (minusIsDigit(equation)) {
        return [...rest.slice(0, rest.length - 1), input];
      }

      // if the last element was an operation
      if (isOperation(lastEl)) {
        return [...rest, input];
      }

      return [...equation, input];
    }

    throw Error();
  }

  isZero = (str: string) => ZERO_REGEX.test(str);
  isClear = (str: string) => CLEAR_REGEX.test(str);
  isOperation = (str: string) => OPERATION_REGEX.test(str);
  isMinus = (str: string) => str === "-";
  isDecimal = (str: string) => DECIMAL_REGEX.test(str);
  isDigit = (str: string) => DIGIT_REGEX.test(str);
  minusIsDigit = (equation: Equation) =>
    equation[equation.length - 1] === "-" && this.isOperation(equation[equation.length - 2]);

  render() {
    const { equation } = this.state;
    const { handleClick } = this;
    const buttons = [
      { id: "clear", text: "C" },
      { id: "zero", text: "0" },
      { id: "decimal", text: "." },
      { id: "add", text: "+" },
      { id: "seven", text: "7" },
      { id: "eight", text: "8" },
      { id: "nine", text: "9" },
      { id: "subtract", text: "-" },
      { id: "four", text: "4" },
      { id: "five", text: "5" },
      { id: "six", text: "6" },
      { id: "divide", text: "/" },
      { id: "one", text: "1" },
      { id: "two", text: "2" },
      { id: "three", text: "3" },
      { id: "multiply", text: "*" },
      { id: "equals", text: "=" },
      { id: "power", text: "**" },
    ];
    return (
      <div id="js-calculator">
        <div className="container">
          <div className="row">
            <h1 className="text-center">JavaScript Calculator</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="display" className="text-right">
                {equation.join(" ")}
              </div>
            </div>
          </div>
          <div className="wrapper">
            {buttons.map((button) => (
              <CalcButton key={button.id} id={button.id} text={button.text} handleClick={handleClick} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export { JavaScriptCalculator };
