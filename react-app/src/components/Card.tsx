import "../styles/CardStyles.css";
import { BsInfoCircle } from "react-icons/bs";
import React from "react";

interface CardProps {
  size: string;
  type: string;
  subtype?: string;
  explainer: boolean;
  colored?: boolean;
  children?: React.ReactNode;
  cardTitle?: string | JSX.Element;
  info?: boolean;
  view?: string;
}

interface Source {
  name: string;
  amount: number;
  percent?: number;
}

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function Card({
  size,
  type,
  subtype,
  explainer,
  colored,
  cardTitle,
  view,
  info,
  children,
}: CardProps) {
  return (
    <>
      <div
        className={`${size}CardContainer cardContainer ${type}CardContainer`}
      >
        <div
          className={`${size}Card card ${type}Card ${
            colored ? "coloredCard" : ""
          }`}
        >
          {info && (
            <div className="infoIcon">
              <BsInfoCircle />
            </div>
          )}
          {explainer && (
            <div className="cardExplainer">
              <div className="mainTitle">{capitalizeFirstLetter(type)}</div>
              <div className="subTitle">{subtype}</div>
            </div>
          )}
          <div className={`${view}Content cardContent`}>
            {cardTitle && <div className="cardTitle">{cardTitle}</div>}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
