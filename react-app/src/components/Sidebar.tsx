import React, { Component } from "react";

interface SidebarProps {
  tabs: Tab[];
  selectedIndex: number;
  onSelectTab: (index: number, name: string) => void;
}

interface Tab {
  name: string;
  location: string;
  icon: React.ElementType;
}

var toggledAnimation = false;

function Sidebar({ tabs, selectedIndex, onSelectTab }: SidebarProps) {
  const handleTabClick = (index: number, name: string) => {
    onSelectTab(index, name);
  };

  const handleAnimationToggle = () => {
    if (toggledAnimation) {
      toggledAnimation = false;
    } else {
      toggledAnimation = true;
    }
  };

  const selectorMovementStyle = {
    marginTop: `calc(${selectedIndex} * var(--tab-height))`,
  };

  return (
    <div className="sidebarMain">
      <div className="hiiliLogo"></div>
      <div className="sidebarTabs">
        <div className={`sidebarSelectorWrapper`}>
          <div
            className={
              `sidebarSelector ` +
              (toggledAnimation ? `sideBarSelectorToggle1` : ``) +
              (!toggledAnimation ? `sideBarSelectorToggle2` : ``)
            }
            style={selectorMovementStyle}
          ></div>
        </div>
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className={
              `sidebarTab ${tab.name.toLowerCase()}Tab ` +
              (selectedIndex === index ? `activeTab` : ``)
            }
            onClick={() => {
              handleTabClick(index, tab.name);
              handleAnimationToggle();
            }}
          >
            <div className="tabContent">
              <div className="tabIcon">{React.createElement(tab.icon)}</div>
              <div className="tabName">{tab.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="logOut"></div>
      <div className="bottomSectionWrapper">
        <span>Copyright © 2024 Hiili</span>
        <span>All rights reserved.</span>
        <a className="privacyPolicy" href="https://hiili.org/privacy">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
