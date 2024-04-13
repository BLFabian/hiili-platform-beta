import LineGradient from "./LineGradient";
import PieGradient from "./PieGradient";

interface PieSliceProps {
  pieslice: PieSlice;
  index: number;
  accumulatedPercentage: number;
  radius: number;
  onMouseEnter: (name: string) => void;
  onMouseLeave: (name: string) => void;
  legacyIsHovered: boolean;
}

interface PieSlice {
  name: string;
  amount: number;
  percent: number;
}

function percentageToDegrees(percentage: number): number {
  return (percentage / 100) * 360;
}

// Corrected TypeScript function signature and return type
function createDotSvg(
  percentage: number,
  radius: number
): {
  legacyDotX: number;
  legacyDotY: number;
} {
  const angle = (percentage / 100) * 2 * Math.PI;

  const midAngle = angle / 2;
  const midX = radius + radius * Math.cos(midAngle);
  const midY = radius + radius * Math.sin(midAngle);

  const legacyDotX = midX;
  const legacyDotY = midY;

  // Return the path data directly
  return { legacyDotX, legacyDotY };
}

function createLineSvg(
  percentage: number,
  radius: number
): { lineEndX: number; lineEndY: number } {
  const angle = (percentage / 100) * 2 * Math.PI;
  const midAngle = angle / 2;

  const startX = radius + radius * Math.cos(midAngle);
  const startY = radius + radius * Math.sin(midAngle);

  const lineEndX = startX + 4 * radius * Math.cos(midAngle);
  const lineEndY = startY + 4 * radius * Math.sin(midAngle);

  return { lineEndX, lineEndY };
}

function scaleTransform(percentage: number): string {
  const scaleString = `scale(` + (0.0025 * percentage + 0.75) + `)`;
  // `scale(1)`
  return scaleString;
}

function createPieSliceSvg(percentage: number, radius: number): string {
  const angle = (percentage / 100) * 2 * Math.PI;
  const endX = radius + radius * Math.cos(angle);
  const endY = radius + radius * Math.sin(angle);
  const largeArcFlag = percentage > 50 ? 1 : 0;
  const sweepFlag = 1;

  return `M ${radius},${radius} L ${
    radius * 2
  },${radius} A ${radius},${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY} Z`;
}

function PieSlice({
  pieslice,
  index,
  radius,
  accumulatedPercentage,
  onMouseEnter,
  onMouseLeave,
  legacyIsHovered,
}: PieSliceProps) {
  const rotateDegree = (accumulatedPercentage / 100) * 360;
  const startAngle = percentageToDegrees(accumulatedPercentage);
  const endAngle = percentageToDegrees(
    accumulatedPercentage + pieslice.percent
  );
  const bisectionAngle = (startAngle + endAngle) / 2;
  const scaleString = scaleTransform(pieslice.percent);

  const pieSliceWrapperStyle = {
    transform: `rotate(${rotateDegree}deg) ${scaleString}`,
    transformOrigin: `${radius}px ${radius}px`,
  };
  const svgStyle = {
    transform: ``,
  };

  const pieSlicePathData = createPieSliceSvg(pieslice.percent, radius);

  const { legacyDotX, legacyDotY } = createDotSvg(pieslice.percent, radius);
  const { lineEndX, lineEndY } = createLineSvg(pieslice.percent, radius);

  return (
    <div
      id={`${pieslice.name}Slice`}
      className="pieSliceWrapper"
      style={pieSliceWrapperStyle}
      data-percent={pieslice.percent}
      data-bisection={bisectionAngle}
      onMouseEnter={() => console.log(pieslice.name)}
      onMouseLeave={() => console.log("left")}
    >
      <svg
        width={`${radius * 2}px`}
        height={`${radius * 2}px`}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        style={svgStyle}
        className={legacyIsHovered ? "hoveredSlice" : ""}
        onMouseEnter={() => onMouseEnter(pieslice.name)}
        onMouseLeave={() => onMouseLeave(pieslice.name)}
      >
        <defs>
          <LineGradient
            legacyDotX={legacyDotX}
            legacyDotY={legacyDotY}
            lineEndX={lineEndX}
            lineEndY={lineEndY}
          ></LineGradient>
          <PieGradient index={index}></PieGradient>
        </defs>
        <path
          d={`M${legacyDotX},${legacyDotY} L${lineEndX},${lineEndY}`}
          style={{
            strokeDasharray: "5,5",
            stroke: `url(#lineGradient)`,
          }}
          className={"mainShape"}
        />
        <path
          d={pieSlicePathData}
          style={{
            transformOrigin: `center`,
            fill: `url(#gradient-color-${index})`,
          }}
        />
        <circle cx={legacyDotX} cy={legacyDotY} r={radius / 33} fill="yellow" />
      </svg>
    </div>
  );
}

export default PieSlice;
