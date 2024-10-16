import React, { useCallback } from "react";
import useMenuItems from "../../hooks/useMenuItems";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useTheme } from "../../contexts/theme-context";

const Sidebar = () => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  console.log("theme", theme);

  const menuItems = useMenuItems();

  const navigate = useNavigate();

  const handleOnMenuClick = useCallback((event, item) => {
    event.preventDefault();
    if (item.path) {
      navigate(item.path);
    }
  }, []);

  return (
    <div className="sidebar-menuitems">
      <div className="set-theme">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
      {menuItems.map((item, index) => {
        return (
          <div
            onClick={(event) => handleOnMenuClick(event, item)}
            key={`${item.id}-${index}`}
            className={`sidebar-menuitem ${
              item.selected ? "sidebar-menuitem-selected" : ""
            }`}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
