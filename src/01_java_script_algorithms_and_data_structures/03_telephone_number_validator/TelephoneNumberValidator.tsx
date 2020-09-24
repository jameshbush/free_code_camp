import React from "react";
import {
  telephoneCheck,
  testTelephoneCheck,
} from "./03_telephone_number_validator.js";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const TelephoneNumberValidator = () => {
  return (
    <AlgorithmDisplay
      name="Telephone Number Validator"
      solution={telephoneCheck}
      test={testTelephoneCheck}
    />
  );
};

export { TelephoneNumberValidator };
