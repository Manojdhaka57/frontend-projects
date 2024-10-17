import React from "react";
import { useTheme } from "../contexts/theme-context";

const Home = () => {
  const { theme } = useTheme();
  return <div>Home theme {theme}</div>;
};

export default Home;
