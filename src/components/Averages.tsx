import "../styles/CardStyles.css";
import Grade from "./chartsAndTables/Grade";
import React, { Component } from "react";
import { BsEyeFill, BsFillFlagFill, BsLightningFill } from "react-icons/bs";
import { FaWeightHanging, FaCloud, FaPaintRoller } from "react-icons/fa";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { MdGrade } from "react-icons/md";

interface AveragesProps {
  impressions: number;
  requests: number;
  transferred: number;
  emissions: number;
  energy: number;
}

const AveragesIconMapping: { [name: string]: React.ReactNode } = {
  Campaign: <BsFillFlagFill />,
  Creatives: <FaPaintRoller />,
  Impressions: <BsEyeFill />,
  Requests: <FaArrowsTurnRight />,
  Transferred: <FaWeightHanging />,
  Emissions: <FaCloud />,
  Energy: <BsLightningFill />,
  Grade: <MdGrade />,
};

const unitMapping: { [name: string]: string } = {
  Requests: "",
  Transferred: "KB",
  Emissions: "g",
  Energy: "Wh",
};

function getAdjustedAverage(value: number, impressions: number): string {
  value = value / impressions;
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

const getIconForAverages = (name: string): React.ReactNode => {
  return AveragesIconMapping[name] || null;
};

//THE BACK-END IS ASSUMED TO SEND KB FOR WEIGHT, GRAMS FOR EMISSIONS, WH FOR ENERGY

function Averages({
  impressions,
  requests,
  transferred,
  emissions,
  energy,
}: AveragesProps) {
  return (
    <>
      <div className="averagesContainer">
        <div className="averagesNameAndValue">
          <div className="averagesValue">
            {getAdjustedAverage(requests, impressions)}
          </div>
          <div className="averagesName">
            Requests {getIconForAverages("Requests")}
          </div>
        </div>
        <div className="averagesNameAndValue">
          <div className="averagesValue">
            {getAdjustedAverage(transferred, impressions)}
            <span className="unitText">KB</span>
          </div>
          <div className="averagesName">
            Transferred {getIconForAverages("Transferred")}
          </div>
        </div>
        <div className="averagesNameAndValue">
          <div className="averagesValue">
            {getAdjustedAverage(emissions, impressions)}
            <span className="unitText">g</span>
          </div>
          <div className="averagesName">
            Emissions {getIconForAverages("Emissions")}
          </div>
        </div>
        <div className="averagesNameAndValue">
          <div className="averagesValue">
            {getAdjustedAverage(energy, impressions)}
            <span className="unitText">Wh</span>
          </div>
          <div className="averagesName">
            Energy {getIconForAverages("Energy")}
          </div>
        </div>
      </div>
    </>
  );
}
export default Averages;
