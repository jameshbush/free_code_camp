import React from "react";
import Prism from "prismjs";
import { palindrome, palindromeTest } from "./palindrome_checker";
import "../prism.css";

interface IPalendromeCheckerProps {}

class PalendromeChecker extends React.Component<IPalendromeCheckerProps> {
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
        <h1>Palindrome Checker</h1>

        <h4>Solution</h4>
        <pre>
          <code id="palindrome-code" className="language-js">
            {String(palindrome)}
          </code>
        </pre>

        <h4>Tests</h4>
        <pre>
          <code id="palindrome-test" className="language-js">
            {String(palindromeTest)}
          </code>
        </pre>

        <h4>
          Test Result:
          <span
            id="palindrome-test-result"
            role="img"
            aria-label="Test success display"
          >
            {this.runTests(palindromeTest)}
          </span>
        </h4>
      </div>
    );
  }
}

export { PalendromeChecker };
