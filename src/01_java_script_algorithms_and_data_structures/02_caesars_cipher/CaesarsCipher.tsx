import React from "react";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const CaesarsCipher = () => {
  const { rot13, testRot13 } = (window as any).algorithms;

  return (
    <AlgorithmDisplay
      name="Caesar's Cipher"
      solution={rot13}
      test={testRot13}
    />
  );
};

export { CaesarsCipher };
