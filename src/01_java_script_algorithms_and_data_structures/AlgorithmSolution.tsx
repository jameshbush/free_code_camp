import React from "react";
import { Link } from "react-router-dom";

const AlgorithmSolution = (): JSX.Element => {
  return (
    <div>
      <Link to="/">Home</Link>

      <div>Question</div>
      <br />
      <code>Solution</code>
      <br />
      <code>Test</code>
    </div>
  );
};

export { AlgorithmSolution };
