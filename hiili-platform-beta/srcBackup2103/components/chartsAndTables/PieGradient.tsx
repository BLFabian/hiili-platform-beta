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
            <stop offset="0%" style={{ stopColor: "#ff9d35" }} />
            <stop offset="100%" style={{ stopColor: "#cc7d2a" }} />
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
            <stop offset="0%" style={{ stopColor: "#ffc035" }} />
            <stop offset="100%" style={{ stopColor: "#cc992a" }} />
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
            <stop offset="0%" style={{ stopColor: "#ffea35" }} />
            <stop offset="100%" style={{ stopColor: "#ccbb2a" }} />
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
            <stop offset="0%" style={{ stopColor: "#e8ff35" }} />
            <stop offset="100%" style={{ stopColor: "#b9cc2a" }} />
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
            <stop offset="0%" style={{ stopColor: "#b8ff35" }} />
            <stop offset="100%" style={{ stopColor: "#93cc2a" }} />
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
            <stop offset="100%" style={{ stopColor: "#38cc2a" }} />
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
            <stop offset="100%" style={{ stopColor: "#2acc8f" }} />
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
            <stop offset="100%" style={{ stopColor: "#2accb3" }} />
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
            <stop offset="100%" style={{ stopColor: "#2ab0cc" }} />
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
            <stop offset="100%" style={{ stopColor: "#2a78cc" }} />
          </linearGradient>
        );
      default:
        return null; // Or provide a default gradient
    }
  }

  return <>{renderGradient()}</>;
}

export default PieGradients;
