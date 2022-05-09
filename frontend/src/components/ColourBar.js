import React from "react";

const ColourBar = (props) => {
  return (
    <div
      className="colourBar"
      style={{ backgroundColor: `${props.colHex}` }}
      onClick={props.colourClicked}
    >
      <input type="hidden" className="colName" value={props.colName} />
      <input type="hidden" className="colRgb" value={props.colRgb} />
      <input type="hidden" className="colHsl" value={props.colHsl} />
      <input type="hidden" className="colHex" value={props.colHex} />
    </div>
  );
};

export default ColourBar;
