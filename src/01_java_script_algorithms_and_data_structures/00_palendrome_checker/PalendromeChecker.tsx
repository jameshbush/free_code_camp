import React from "react";
import { palindrome, testPalindrome } from "./palindrome_checker";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const PalendromeChecker = () => {
  return (
    <AlgorithmDisplay
      name="Palendrome Checker"
      solution={palindrome}
      test={testPalindrome}
    />
  );
};

export { PalendromeChecker };
