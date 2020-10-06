import React from "react";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const RomanNumeralConverter = () => {
  const { convertToRoman, testConvertToRoman } = (window as any).algorithms;

  return (
    <AlgorithmDisplay
      name="Roman Numeral Converter"
      solution={convertToRoman}
      test={testConvertToRoman}
    />
  );
};

export { RomanNumeralConverter };
