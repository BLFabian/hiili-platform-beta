import Home from "./Home";
import Reports from "./Reports";
import Sources from "./Sources";
import Tags from "./Tags";
import Support from "./Support";

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
        return <Tags></Tags>;
      case "Reports":
        return <Reports></Reports>;
      case "Sources":
        return <Sources></Sources>;
      case "Support":
        return <Support></Support>;
      default:
        return null;
    }
  };

  return <div className="bodyMain">{renderContent()}</div>;
}

export default Body;
