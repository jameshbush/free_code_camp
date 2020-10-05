import React from "react";

interface ICalcButtonProps {
  id: string;
  text: string;
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function CalcButton({ id, text, handleClick }: ICalcButtonProps) {
  return (
    <div id={id} className="input" onClick={handleClick}>
      {text}
    </div>
  );
}

export { CalcButton };
