import React from "react";
import { ROUTES } from "../constants";
import Home from "../pages/Home";
import { useRoutes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import GridLights from "../pages/GridLights/GridLights";
import Stepper from "../pages/Stepper/Stepper";
import Tab from "../pages/Tab/Tab";
import DragAndDropNotes from "../pages/DragAndDropNotes/DragAndDropNotes";

const AppRoutes = () => {
  const router = useRoutes([
    { path: ROUTES.home, element: <Home /> },
    { path: ROUTES.stepper, element: <Stepper /> },
    { path: ROUTES.gridLights, element: <GridLights /> },
    { path: ROUTES.tab, element: <Tab /> },
    { path: ROUTES.dragAndDropNotes, element: <DragAndDropNotes /> },
  ]);
  return <Layout>{router}</Layout>;
};

export default AppRoutes;
