import { useState } from "react";
import CSS from "csstype";

interface PieLegacyProps {
  pieslice: PieSlice;
  onMouseEnter: (name: string) => void;
  onMouseLeave: (name: string) => void;
  sliceIsHovered: boolean;
}

interface PieSlice {
  name: string;
  amount: number;
  percent: number;
}

function PieLegacy({
  pieslice,
  onMouseEnter,
  onMouseLeave,
  sliceIsHovered,
}: PieLegacyProps) {
  /* The legacy is presented in tonnes*/
  return (
    <div
      className={`pieLegacyWrapper ${sliceIsHovered ? "hoveredLegacy" : ""}`}
      id={`${pieslice.name}Legacy`}
      onMouseEnter={() => onMouseEnter(pieslice.name)}
      onMouseLeave={() => onMouseLeave(pieslice.name)}
    >
      <div className={`pieLegacyColorAndTitle`}>
        <div className={`pieLegacyColor`}></div>
        <div className={`pieLegacyTitle`}>{pieslice.name}</div>
      </div>
      <div className={`pieLegacyAmount`}>
        {(pieslice.amount / 1000 / 1000).toFixed(2)}
        <span className="unitText">t</span>
      </div>
      <div className={`pieLegacyPercent`}>
        {((pieslice.percent * 100) / 100).toFixed(1)}%
      </div>
    </div>
  );
}

export default PieLegacy;
