import React from "react";
import {
  checkCashRegister,
  testCheckCashRegister,
} from "./04_cash_register.js";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const CashRegister = () => {
  return (
    <AlgorithmDisplay
      name="Cash Register"
      solution={checkCashRegister}
      test={testCheckCashRegister}
    />
  );
};

export { CashRegister };
