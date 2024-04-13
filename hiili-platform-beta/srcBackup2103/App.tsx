import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsTagFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { BsPinFill } from "react-icons/bs";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let SidebarTabs = [
    { name: "Home", location: "Home", icon: BsFillHouseDoorFill },
    { name: "Tags", location: "Tags", icon: BsTagFill },
    { name: "Reports", location: "Reports", icon: BsBarChartFill },
    { name: "Sources", location: "Sources", icon: BsPinFill },
    //Sources is the home for all API connections / integrations
  ];

  const handleSelectTab = (index: number, name: string) => {
    setSelectedIndex(index);
    console.log(name);
  };

  return (
    <>
      <Sidebar
        tabs={SidebarTabs}
        selectedIndex={selectedIndex}
        onSelectTab={handleSelectTab}
      ></Sidebar>
      <Body selectedTab={SidebarTabs[selectedIndex]} />
    </>
  );
}

export default App;
