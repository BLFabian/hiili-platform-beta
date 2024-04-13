interface PieGradientsProps {
  index: number;
}

function PieGradients({ index }: PieGradientsProps) {
  function renderGradient() {
    switch (index) {
      case 0:
        return (
          <linearGradient
            id="gradient-color-0"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#ff992d" }} />
            <stop offset="100%" style={{ stopColor: "#ffb464" }} />
          </linearGradient>
        );
      case 1:
        return (
          <linearGradient
            id="gradient-color-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#ffcc32" }} />
            <stop offset="100%" style={{ stopColor: "#ffd965" }} />
          </linearGradient>
        );
      case 2:
        return (
          <linearGradient
            id="gradient-color-2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#ebf02a" }} />
            <stop offset="100%" style={{ stopColor: "#ecf063" }} />
          </linearGradient>
        );
      case 3:
        return (
          <linearGradient
            id="gradient-color-3"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#b0f11f" }} />
            <stop offset="100%" style={{ stopColor: "#c0ed5b" }} />
          </linearGradient>
        );
      case 4:
        return (
          <linearGradient
            id="gradient-color-4"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#7ff02d" }} />
            <stop offset="100%" style={{ stopColor: "#9aeb5f" }} />
          </linearGradient>
        );
      case 5:
        return (
          <linearGradient
            id="gradient-color-5"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#47ff35" }} />
            <stop offset="100%" style={{ stopColor: "#97ff8d" }} />
          </linearGradient>
        );
      case 6:
        return (
          <linearGradient
            id="gradient-color-6"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#35ffb3" }} />
            <stop offset="100%" style={{ stopColor: "#81ffd0" }} />
          </linearGradient>
        );
      case 7:
        return (
          <linearGradient
            id="gradient-color-7"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#35ffe0" }} />
            <stop offset="100%" style={{ stopColor: "#8affed" }} />
          </linearGradient>
        );
      case 8:
        return (
          <linearGradient
            id="gradient-color-8"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#35ddff" }} />
            <stop offset="100%" style={{ stopColor: "#89ebff" }} />
          </linearGradient>
        );
      case 9:
        return (
          <linearGradient
            id="gradient-color-9"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#3596ff" }} />
            <stop offset="100%" style={{ stopColor: "#94c7ff" }} />
          </linearGradient>
        );
      default:
        return null; // Or provide a default gradient
    }
  }

  return <>{renderGradient()}</>;
}

export default PieGradients;
