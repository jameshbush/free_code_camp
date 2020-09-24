import React from "react";
import { rot13, testRot13 } from "./02_caesars_cipher";
import { AlgorithmDisplay } from "../AlgorithmDisplay";

const CaesarsCipher = () => {
  return (
    <AlgorithmDisplay
      name="Caesar's Cipher"
      solution={rot13}
      test={testRot13}
    />
  );
};

export { CaesarsCipher };
