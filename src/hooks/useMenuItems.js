import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { ROUTES } from "../constants";
export default () => {
  const { pathname } = useLocation();
  return useMemo(() => {
    return [
      {
        id: "home",
        title: "Home",
        path: ROUTES.home,
        selected: pathname === ROUTES.home,
      },
      {
        id: "stepper",
        title: "Stepper",
        path: ROUTES.stepper,
        selected: pathname === ROUTES.stepper,
      },
      {
        id: "gridLights",
        title: "Grid Lights",
        path: ROUTES.gridLights,
        selected: pathname === ROUTES.gridLights,
      },
      {
        id: "tab",
        title: "Tab",
        path: ROUTES.tab,
        selected: pathname === ROUTES.tab,
      },
      {
        id: "dragAndDropNotes",
        title: "Drag and Drop Notes",
        path: ROUTES.dragAndDropNotes,
        selected: pathname === ROUTES.dragAndDropNotes,
      },
    ];
  }, [pathname]);
};
