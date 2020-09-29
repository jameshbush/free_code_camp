import React from "react";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const CashRegister = () => {
  const {
    checkCashRegister,
    testCheckCashRegister,
  } = (window as any).algorithms;
  return (
    <AlgorithmDisplay
      name="Cash Register"
      solution={checkCashRegister}
      test={testCheckCashRegister}
    />
  );
};

export { CashRegister };
