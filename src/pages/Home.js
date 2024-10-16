import React from "react";
import { useTheme } from "../contexts/theme-context";

const Home = () => {
  const theme = useTheme();
  console.log("@testing", theme);
  return <div>Home</div>;
};

export default Home;
