import React from "react";

const ColourModal = (props) => {
  return (
    <div className="colourModal">

      <div className="colourBox" style={{backgroundColor: `${props.hexCol}`}}></div>

      <div>
        <h3>Name</h3>
        <p>{props.nameCol}</p>
      </div>

      <div>
        <h3>RGB</h3>
        <p>{props.rgbCol}</p>
      </div>

      <div>
        <h3>HSL</h3>
        <p>{props.hslCol}</p>
      </div>

      <div>
        <h3>Hexadecimal</h3>
        <p>{props.hexCol}</p>
      </div>

      <button type="button" onClick={props.closeModal}>
        Click to close!
      </button>
    </div>
  );
}

export default ColourModal;
