import React, { useState } from "react";
import CSS from "csstype";
import PieSlice from "./PieSlice";
import PieLegacy from "./PieLegacy";
import "../../styles/PieChartStyles.css";

interface PieChartProps {
  sources: Source[];
  legacy: boolean;
  radius: number;
}

interface Source {
  name: string;
  amount: number;
  percent?: number;
}

function PieChart({ sources, legacy, radius }: PieChartProps) {
  const [hoveredLegacy, setHoveredSlice] = useState<string | null>(null);
  const [hoveredSlice, setHoveredLegacy] = useState<string | null>(null);

  let accumulatedDegrees = 0;

  const sortedSources = sources.sort((a, b) => b.amount - a.amount); // Correct sorting order
  function calculateTotalAmount(data: Source[]): number {
    return data.reduce((total, current) => total + current.amount, 0);
  }

  const totalAmount = calculateTotalAmount(sortedSources);

  // Calculate and append percentage to each source
  const sourcesWithPercentage = sortedSources.map((source) => ({
    ...source,
    percent: (source.amount / totalAmount) * 100,
  }));

  return (
    <>
      <div
        className="pieChartWrapper"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          minWidth: `${radius * 2}px`,
          minHeight: `${radius * 2}px`,
        }}
      >
        <div className="pieChartShape">
          {sourcesWithPercentage.map((source, index) => (
            <PieSlice
              key={source.name}
              index={index}
              pieslice={source}
              radius={radius}
              accumulatedPercentage={
                index > 0
                  ? (accumulatedDegrees +=
                      sourcesWithPercentage[index - 1].percent)
                  : 0
              }
              onMouseEnter={() => setHoveredLegacy(source.name)}
              onMouseLeave={() => setHoveredLegacy(null)}
              legacyIsHovered={hoveredLegacy === source.name}
            ></PieSlice>
          ))}
        </div>
      </div>
      {legacy == true ? (
        <div className="pieLegacyContainer">
          {sourcesWithPercentage.map((source) => (
            <PieLegacy
              key={source.name}
              pieslice={source}
              onMouseEnter={() => setHoveredSlice(source.name)}
              onMouseLeave={() => setHoveredSlice(null)}
              sliceIsHovered={hoveredSlice === source.name}
            ></PieLegacy>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default PieChart;
