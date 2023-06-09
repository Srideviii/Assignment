import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [tabs, setTabs] = useState([]); //declaring state variable to store tabs
  const [activeTab, setActiveTab] = useState(null); // state variable to store active tab

  const addTab = () => {
    const newTab = `Tab ${tabs.length + 1}`; //creating tab
    setTabs([...tabs, newTab]); // adding the created tab to the existing tabs
    setActiveTab(newTab); //setting the created tab as active tab
  };

  const closeTab = (tab) => {
    const updatedTabs = tabs.filter((t) => t !== tab); //deleting the tab
    setTabs(updatedTabs); //updating the tabs array
    setActiveTab(null); //reset the active tab
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab); //select the clicked tab as active tab
  };

  return (
    <div className="App">
      <Header /> {/*Rendering the Header component */}
      <div className="content">
        {activeTab && <h2>Welcome to {activeTab}</h2>}
      </div>
      <Footer
        onAddTab={addTab} // Pass the addTab function as a prop to the Footer component
        tabs={tabs}
        onCloseTab={closeTab}
        onTabClick={handleTabClick}
      />
    </div>
  );
}

export default App;
