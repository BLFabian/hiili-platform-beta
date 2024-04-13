interface LineGradientProps {
  legacyDotX: number;
  legacyDotY: number;
  lineEndX: number;
  lineEndY: number;
}

function LineGradient({
  legacyDotX,
  legacyDotY,
  lineEndX,
  lineEndY,
}: LineGradientProps) {
  return (
    <linearGradient
      id={`lineGradient`}
      x1={legacyDotX}
      y1={legacyDotY}
      x2={lineEndX}
      y2={lineEndY}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" style={{ stopColor: "#222222", stopOpacity: 0.15 }} />
      <stop offset="100%" style={{ stopColor: "#222222", stopOpacity: 0 }} />
    </linearGradient>
  );
}

export default LineGradient;
