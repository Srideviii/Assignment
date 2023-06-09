import React, { useState } from "react";
const Footer = ({ onAddTab, tabs, onCloseTab, onTabClick }) => {
  const closeTab = (tab) => {
    onCloseTab(tab); //closing the tab from list of tabs
    onTabClick(null); //reset active tab
  };

  const visibleTabs = 15; // Number of tabs to display before showing the ellipsis
  const [showAllTabs, setShowAllTabs] = useState(false);

  const toggleShowAllTabs = () => {
    setShowAllTabs(!showAllTabs); //show tabs when ellipse is clicked
  };

  return (
    <footer className="footer">
      <button className="add-tab-button" onClick={onAddTab}>
        +
      </button>
      <div className="tabs-container">
        {tabs.slice(0, visibleTabs).map((tab) => (
          <div key={tab} className="tab" onClick={() => onTabClick(tab)}>
            <span className="tab-close" onClick={() => closeTab(tab)}>
              &#10006;
            </span>
            <h2>{tab}</h2>
          </div>
        ))}
        {tabs.length > visibleTabs && (
          <div className="tab ellipsis-tab" onClick={toggleShowAllTabs}>
            <h2>...</h2>
          </div>
        )}
        {showAllTabs &&
          tabs.slice(visibleTabs).map((tab) => (
            <div key={tab} className="tab" onClick={() => onTabClick(tab)}>
              <span className="tab-close" onClick={() => closeTab(tab)}>
                &#10006;
              </span>
              <h2>{tab}</h2>
            </div>
          ))}
      </div>
    </footer>
  );
};

export default Footer;
