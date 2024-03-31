import React, { useState } from "react";
import "../styles/CardStyles.css";

interface TopbarProps {
  dateRange: string;
  onDateRangeChange: (newDateRange: string) => void;
}

function Topbar({ dateRange, onDateRangeChange }: TopbarProps) {
  let dateRangeOptions = [
    { name: "This year" },
    { name: "This month" },
    { name: "This week" },
    { name: "Today" },
  ];

  const initialIndex = dateRangeOptions.findIndex(
    (option) => option.name === dateRange
  );

  const [activeIndex, setActiveIndex] = useState(
    initialIndex >= 0 ? initialIndex : 2
  ); // Defaults to "This month" if dateRange doesn't match

  const handleClick = (newDateRange: string, newIndex: number) => {
    onDateRangeChange(newDateRange);
    setActiveIndex(newIndex);
  };

  const selectorMovementStyle = {
    marginLeft: `calc(${activeIndex} * var(--value-wrapper-width) + (10px * ${
      activeIndex + 1
    })`,
  };

  return (
    <div className="topBar">
      <div className="topBarOptions">
        <div className="dateRangeContainer topBarOptionContainer">
          <div className="dateRangeHolder">
            <div
              className="dateRangeSelectorWrapper"
              style={selectorMovementStyle}
            >
              <div className="dateRangeSelector">{dateRange}</div>
            </div>
            {dateRangeOptions.map((option, index) => (
              <div key={index} className="valueWrapper">
                <div
                  className={`valueHolder ${
                    dateRange === option.name ? "activeValueHolder" : ""
                  }`}
                  onClick={() => handleClick(option.name, index)}
                >
                  {option.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
