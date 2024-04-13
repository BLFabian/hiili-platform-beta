import React from "react";
import Home from "./Home";
import "../styles/CardStyles.css";

interface Tab {
  name: string;
  location: string;
}

interface BodyProps {
  selectedTab: Tab;
}

function Body({ selectedTab }: BodyProps) {
  // Render different content based on the selected tab
  const renderContent = () => {
    switch (selectedTab.location) {
      case "Home":
        return <Home></Home>;
      case "Tags":
        return <div>Tags Content</div>;
      case "Reports":
        return <div>Reports Content</div>;
      case "Sources":
        return <div>Sources Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bodyMain">
      <div className="bodyContainer">
        {/* Render content based on the selected tab */}
        {renderContent()}
      </div>
    </div>
  );
}

export default Body;
