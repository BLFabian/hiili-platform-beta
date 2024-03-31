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
        {Math.round(pieslice.amount).toFixed(0)}
        <span className="kiloGram">kg</span>
      </div>
      <div className={`pieLegacyPercent`}>
        {(Math.round(pieslice.percent * 100) / 100).toFixed(1)}%
      </div>
    </div>
  );
}

export default PieLegacy;
