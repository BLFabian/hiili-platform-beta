import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsTagFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { BsPinFill } from "react-icons/bs";
import { BiSolidHelpCircle } from "react-icons/bi";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let SidebarTabs = [
    { name: "Home", location: "Home", icon: BsFillHouseDoorFill },
    { name: "Tags", location: "Tags", icon: BsTagFill },
    { name: "Reports", location: "Reports", icon: BsBarChartFill },
    { name: "Sources", location: "Sources", icon: BsPinFill },
    { name: "Support", location: "Support", icon: BiSolidHelpCircle },
    //Sources is the home for all API connections / integrations
  ];

  // This is assumed to be fetched from the back-end
  let userOrganization = "";

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
        userOrganization={userOrganization}
      ></Sidebar>
      <Body selectedTab={SidebarTabs[selectedIndex]} />
    </>
  );
}

export default App;
