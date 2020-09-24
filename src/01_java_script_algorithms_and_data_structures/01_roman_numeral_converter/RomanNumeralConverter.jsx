import React from "react";
import {
  convertToRoman,
  testConvertToRoman,
} from "./01_roman_numeral_converter";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const RomanNumeralConverter = () => {
  return (
    <AlgorithmDisplay
      name="Roman Numeral Converter"
      solution={convertToRoman}
      test={testConvertToRoman}
    />
  );
};

export { RomanNumeralConverter };
