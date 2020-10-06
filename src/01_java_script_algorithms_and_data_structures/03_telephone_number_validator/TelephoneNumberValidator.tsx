import React from "react";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const TelephoneNumberValidator = () => {
  const { telephoneCheck, testTelephoneCheck } = (window as any).algorithms;

  return (
    <AlgorithmDisplay
      name="Telephone Number Validator"
      solution={telephoneCheck}
      test={testTelephoneCheck}
    />
  );
};

export { TelephoneNumberValidator };
