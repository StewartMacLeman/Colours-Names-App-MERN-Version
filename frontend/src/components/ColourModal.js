import React from "react";

const ColourModal = () => {
  return (
    <div className="colourModal">
      <div className="colourBox"></div>

      <div>
        <h3>Name</h3>
        <p>The name value</p>
      </div>

      <div>
        <h3>RGB</h3>
        <p>The rgb value</p>
      </div>

      <div>
        <h3>HSL</h3>
        <p>The hsl value</p>
      </div>

      <div>
        <h3>Hexadecimal</h3>
        <p>The hex value</p>
      </div>

      <button type="button" name="button">
        Click to close!
      </button>
    </div>
  );
}

export default ColourModal;
