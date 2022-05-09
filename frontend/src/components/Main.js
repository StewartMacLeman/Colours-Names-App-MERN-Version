import React from "react";
import ColourBar from "./ColourBar";

const Main = () => {
  return (
    <main className="main">
      <p>Click the colour bars below to display the info!</p>
      <ColourBar />
      <ColourBar />
      <ColourBar />
      <ColourBar />
      <ColourBar />
    </main>
  );
};

export default Main;
