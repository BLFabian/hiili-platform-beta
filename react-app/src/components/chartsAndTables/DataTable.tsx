import React, { useState } from "react";
import Grade from "./Grade";
import "../../styles/DataTableStyles.css";
import {
  BsEyeFill,
  BsFillFlagFill,
  BsBrushFill,
  BsLightningFill,
} from "react-icons/bs";
import {
  FaWeightHanging,
  FaCloud,
  FaPaintRoller,
  FaBalanceScaleRight,
  FaShare,
} from "react-icons/fa";
import { FaDownload, FaArrowsTurnRight } from "react-icons/fa6";
import { MdGrade } from "react-icons/md";

const headerIconMapping: { [columnName: string]: React.ReactNode } = {
  Campaign: <BsFillFlagFill />,
  Creatives: <FaPaintRoller />,
  Impressions: <BsEyeFill />,
  Requests: <FaArrowsTurnRight />,
  Transferred: <FaWeightHanging />,
  Emissions: <FaCloud />,
  Energy: <BsLightningFill />,
  Grade: <MdGrade />,
};

const cellUnitMapping: { [columnName: string]: JSX.Element } = {
  Transferred: <span className="megaBytes unitText">MB</span>,
  Emissions: <span className="kiloGram unitText">g</span>,
  Energy: <span className="kiloWatt unitText">Wh</span>,
};

const cellBigUnitMapping: { [columnName: string]: JSX.Element } = {
  Transferred: <span className="megaBytes unitText">GB</span>,
  Emissions: <span className="kiloGram unitText">t</span>,
  Energy: <span className="kiloWatt unitText">mWh</span>,
};

const headerUnitMapping: { [columnName: string]: JSX.Element } = {
  Emissions: (
    <span className="carbonDioxide unitText">
      {" "}
      (CO<sub>2</sub>)
    </span>
  ),
};

interface DataRow {
  [key: string]: any;
}

interface DataTableProps {
  data: DataRow[];
  downloadable: boolean;
}

const DataTable = ({ data, downloadable }: DataTableProps) => {
  if (data.length === 0) {
    return null;
  }
  const columnNames = Object.keys(data[0]);

  // Function to return the appropriate icon based on the column name
  const getIconForHeader = (columnName: string): React.ReactNode => {
    // Directly return the icon from the mapping, or null if it's not found
    return headerIconMapping[columnName] || null;
  };

  const checkUnitForHeader = (columnName: string): React.ReactNode => {
    return headerUnitMapping[columnName] || null;
  };

  const checkUnitForCell = (
    columnName: string,
    bigUnit: boolean
  ): React.ReactNode => {
    if (bigUnit) {
      return cellBigUnitMapping[columnName] || null;
    } else {
      return cellUnitMapping[columnName] || null;
    }
  };

  const [showRelative, setShowRelative] = useState(false); // State to manage toggle status

  const toggleRelative = () => setShowRelative(!showRelative);

  const getDisplayValue = (
    columnName: string,
    value: any,
    impressions: number,
    alwaysTotal: boolean
  ): JSX.Element => {
    let modifiedValue = value;
    /* This section converts values for legibility, in our exports, we won't do any conversions*/
    if (columnName === "Grade") {
      return <Grade grade={value}></Grade>;
    }

    if (
      !["Requests", "Transferred", "Emissions", "Energy"].includes(columnName)
    ) {
      //If we are not looking at the Requests, Transferred, Emissions or Energy, we just return the original value in a span
      return <span>{value.toLocaleString()}</span>;
    }

    if (showRelative && !alwaysTotal) {
      //when showing relative values, we return the original grams and wH divided by impressions
      modifiedValue = value / impressions;
      if (columnName === "Transferred") {
        //But we convert KB to MB for legibility
        modifiedValue = modifiedValue / 1000;
      }
      return (
        <span>
          {parseFloat(modifiedValue.toFixed(2)).toLocaleString()}
          {checkUnitForCell(columnName, false)}
        </span>
      );
    }
    switch (columnName) {
      case "Transferred":
        //when showing Total Values, we convert from KB to MB to GB
        modifiedValue = value / 1000 / 1000;
      case "Emissions":
        //when showing Total Values, we convert from g to kg to tons
        modifiedValue = value / 1000 / 1000;
      case "Energy":
        //when showing Total Values, we convert from wH to kWh to mWh
        modifiedValue = value / 1000 / 1000;
    }

    return (
      <span>
        {parseFloat(modifiedValue.toFixed(2)).toLocaleString()}
        {checkUnitForCell(columnName, true)}
      </span>
    );
  };

  return (
    <>
      <div className="tableOptions">
        <button
          onClick={toggleRelative}
          className={`relativeToggle tableToggle tableOptionsButton ${
            showRelative ? "toggledOn" : "toggledOff"
          }`}
        >
          <FaBalanceScaleRight />
        </button>

        <button className="tableOptionsButton">
          <FaDownload />
        </button>
      </div>
      <div className="dataTableContainer">
        <table className="dataTable">
          <thead>
            <tr>
              {columnNames.map((columnName, index) => (
                <th className="tableHeader" key={index}>
                  <div className="tableHeaderContent">
                    <span>
                      {columnName}
                      {checkUnitForHeader(columnName)}
                    </span>

                    {getIconForHeader(columnName)}
                  </div>
                </th>
              ))}{" "}
              {downloadable && (
                <th className="tableHeader">
                  <button className="tableOptionsButton unclickableOptionsButton">
                    <FaDownload />
                  </button>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr className="tableRow" key={rowIndex}>
                {columnNames.map((columnName) => (
                  <td className="tableCell" key={columnName}>
                    <span>
                      {getDisplayValue(
                        columnName,
                        row[columnName],
                        row["Impressions"],
                        false
                      )}
                    </span>
                    <div className="cellSizeInsurance">
                      {getDisplayValue(
                        columnName,
                        row[columnName],
                        row["Impressions"],
                        true
                      )}
                    </div>
                  </td>
                ))}
                {downloadable && (
                  <td className="tableCell">
                    <button className="tableOptionsButton">
                      <FaDownload />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tableOptionsText">
        <div className="relativeToggleText">
          {showRelative
            ? "Showing average values per impression"
            : "Showing total values"}
        </div>
      </div>
    </>
  );
};

export default DataTable;
