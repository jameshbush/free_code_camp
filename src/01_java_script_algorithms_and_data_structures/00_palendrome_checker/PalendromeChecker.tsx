import React from "react";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const PalendromeChecker = () => {
  const { palindrome, testPalindrome } = (window as any).algorithms;

  return (
    <AlgorithmDisplay
      name="Palendrome Checker"
      solution={palindrome}
      test={testPalindrome}
    />
  );
};

export { PalendromeChecker };
