import "../styles/CardStyles.css";
import Grade from "./chartsAndTables/Grade";
import React, { Component } from "react";
import { BsEyeFill, BsFillFlagFill, BsLightningFill } from "react-icons/bs";
import { FaWeightHanging, FaCloud, FaPaintRoller } from "react-icons/fa";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { MdGrade } from "react-icons/md";

interface InsightProps {
  name: string;
  value: number | string;
}

const insightIconMapping: { [name: string]: React.ReactNode } = {
  Campaign: <BsFillFlagFill />,
  Creatives: <FaPaintRoller />,
  Impressions: <BsEyeFill />,
  Requests: <FaArrowsTurnRight />,
  Transferred: <FaWeightHanging />,
  Emissions: <FaCloud />,
  Energy: <BsLightningFill />,
  Grade: <MdGrade />,
};

const insightDefaultUnitMapping: UnitMapping = {
  1: {
    Impressions: "",
    Requests: "",
    Transferred: "KB",
    Emissions: "g",
    Energy: "Wh",
    Grade: "",
  },
  1000: {
    Impressions: "",
    Requests: "",
    Transferred: "MB",
    Emissions: "kg",
    Energy: "kWh",
    Grade: "",
  },
  1000000: {
    Impressions: "M",
    Requests: "M",
    Transferred: "GB",
    Emissions: "t",
    Energy: "gWh",
    Grade: "",
  },
  1000000000: {
    Impressions: "B",
    Requests: "B",
    Transferred: "TB",
    Emissions: "" /* STOP EMISSIONS AT TONNES 1000000/  */,
    Energy: "tWh",
    Grade: "",
  },
};

// Function to get unit mapping based on the number
const getUnitMapping = (number: number): { [field: string]: string } => {
  if (number >= 1000000000) {
    return insightDefaultUnitMapping["1000000000"];
  } else if (number >= 1000000) {
    return insightDefaultUnitMapping["1000000"];
  } else if (number >= 1000) {
    return insightDefaultUnitMapping["1000"];
  } else {
    return insightDefaultUnitMapping["1"];
  }
};

interface UnitMapping {
  [key: string]: {
    [field: string]: string;
  };
}

function getAdjustedValue(name: string, value: number): JSX.Element {
  let scale = 1;
  let divisions = 0; // Keep track of how many times we divide by 1000
  //Maximum 4 divisions
  while (value >= 1000 && divisions < 3) {
    if (name === "Emissions" && divisions >= 2) {
      break;
    }
    value /= 1000;
    divisions++;
    scale *= 1000;
  }

  const unitMapping = getUnitMapping(scale);
  const unit = unitMapping[name] || "";

  return (
    <>
      {value.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}{" "}
      <span className="unitText">{unit}</span>
    </>
  );
}

const getIconForInsight = (name: string): React.ReactNode => {
  return insightIconMapping[name] || null;
};

//THE BACK-END IS ASSUMED TO SEND KB FOR WEIGHT, GRAMS FOR EMISSIONS, WH FOR ENERGY

function Insight({ name, value }: InsightProps) {
  let insightIcon = getIconForInsight(name);
  let displayValue;

  let numericValue = typeof value === "number" ? value : parseFloat(value);

  if (name !== "Grade") {
    displayValue = getAdjustedValue(name, numericValue);
  }

  return (
    <>
      {name !== "Grade" ? (
        <>
          <div className="insightNameAndValues">
            <div className="insightValue">{displayValue}</div>
            <div className="insightName">
              {name === "Emissions" ? (
                <span>
                  Emissions
                  <span className="unitText">
                    {" "}
                    (CO<sub>2</sub>)
                  </span>
                </span>
              ) : (
                name
              )}
            </div>
          </div>
          <div className="insightIcon">{insightIcon}</div>
        </>
      ) : (
        <Grade grade={value.toString()} />
      )}
    </>
  );
}
export default Insight;
