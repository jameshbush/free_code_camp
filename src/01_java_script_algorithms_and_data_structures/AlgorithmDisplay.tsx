import React, { Component } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-solarizedlight.css";

interface IAlgorithmSolutionProps {
  name: string;
  test: Function;
  solution: Function;
}

class AlgorithmDisplay extends Component<IAlgorithmSolutionProps> {
  test: Function;
  solution: Function;
  name: string;

  constructor(props: IAlgorithmSolutionProps) {
    super(props);
    this.test = props.test;
    this.solution = props.solution;
    this.name = props.name;
  }

  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0);
  }

  runTests(testFn: Function): string {
    try {
      testFn();
      return " ✅ all passing";
    } catch (err) {
      return "❗️ check console for test error";
    }
  }
  render() {
    return (
      <div>
        <h2>{this.name}</h2>
        <br />

        <h4>Solution</h4>
        <pre>
          <code className="language-js">{String(this.solution)}</code>
        </pre>
        <br />

        <h4>Test</h4>
        <pre>
          <code className="language-js">{String(this.test)}</code>
        </pre>
        <br />

        <h4>
          Test Result:
          <span
            id="palindrome-test-result"
            role="img"
            aria-label="Test result display"
          >
            {this.runTests(this.test)}
          </span>
        </h4>
      </div>
    );
  }
}

export { AlgorithmDisplay };
