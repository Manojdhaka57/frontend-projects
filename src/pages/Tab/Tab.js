import React, { useState, useMemo } from "react";
import "./Tab.css";
const Tab = () => {
  const data = [
    {
      id: 1,
      value: "tab1",
      label: "Tab 1",
      description: "tooltip text for tab 1",
      lazy: true,
      selected: false,
      disabled: false,
      content: <div>tab 1</div>,
    },
    {
      id: 2,
      value: "tab2",
      label: "Tab 2",
      description: "tooltip text for tab 2",
      lazy: true,
      selected: true,
      disabled: false,
      content: <div>tab content 2</div>,
    },
    {
      id: 3,
      value: "tab3",
      label: "Tab 3",
      description: "tooltip text for tab 3",
      lazy: true,
      disabled: false,
      content: <div>tab content 3</div>,
    },
  ];

  const selected = useMemo(() => {
    const selected = data.find((item) => item.selected);
    return selected.value ? selected.value : data[0].value;
  }, [data]);
  const [selectedTab, setSelectedTab] = useState(selected);

  const handleOnTabSelect = (event, tabValue) => {
    setSelectedTab(tabValue);
  };
  return (
    <div className="tabs">
      <div className="tabs-list">
        {data.map((tab, index) => {
          return (
            <button
              key={tab.value}
              type="button"
              className={`tab-list-item ${
                selectedTab === tab.value ? "tab-list-item--active" : ""
              }`}
              onClick={(event) => handleOnTabSelect(event, tab.value)}
              disabled={tab.disabled}
              title={tab.description}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="tabs-content">
        {data.map(({ value: itemValue, content }) => {
          return (
            <div key={itemValue} hidden={itemValue !== selectedTab}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
