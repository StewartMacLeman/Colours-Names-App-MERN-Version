import React from "react";
import ColourBar from "./ColourBar";

const Main = (props) => {
  return (
    <main className="main">
      <p className="sticky">Click the colour bars below to display the info!</p>
      {props.coloursInfo.map((item) => {
        return (
          <ColourBar
            key={item.hex}
            colName={item.name}
            colRgb={item.rgb}
            colHsl={item.hsl}
            colHex={item.hex}
            colourClicked={props.handleColourBarClick}
          />
        );
      })}
    </main>
  );
};

export default Main;
