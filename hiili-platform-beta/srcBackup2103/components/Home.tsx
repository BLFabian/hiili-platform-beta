import { useState } from "react";
import PieChart from "./chartsAndTables/PieChart";
// import Card from "./PieChart"; TBD
import { BsInfoCircle } from "react-icons/bs";
import React, { Component } from "react";

let PieData = [
  { name: "YouTube", amount: 75432 },
  { name: "TikTok", amount: 35447 },
  { name: "Display", amount: 15693 },
  { name: "Facebook", amount: 4598 },
  { name: "Instagram", amount: 3122 },
  { name: "Others", amount: 1259 },
  //Mock-up PieData
];

function Home() {
  return (
    <>
      <div className="bigCardContainer cardContainer breakdownCardContainer">
        <div className="bigCard card breakdownCard">
          <div className="cardExplainer">
            <div className="mainTitle">Breakdown</div>
            <div className="subTitle">This month</div>
          </div>
          <div className="cardContent pieCard">
            <div className="cardTitle">
              Emissions per channel
              <span className="carbonDioxide">
                {" "}
                (CO<sub>2</sub>)
              </span>
            </div>
            <div className="pieContainer">
              <PieChart sources={PieData} legacy={true} radius={100}></PieChart>
            </div>
          </div>
        </div>
      </div>
      <div className="smallCardContainer cardContainer gradeCardContainer">
        <div className="smallCard card gradeCard">
          <div className="infoIcon">{React.createElement(BsInfoCircle)}</div>
          <div className="cardExplainer">
            <div className="mainTitle">Grade</div>
            <div className="subTitle">This month</div>
          </div>
        </div>
      </div>
      <div className="fullCardContainer cardContainer overviewCardContainer">
        <div className="fullCard card overviewCard">
          <div className="cardExplainer">
            <div className="mainTitle">Overview</div>
            <div className="subTitle">This month</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
