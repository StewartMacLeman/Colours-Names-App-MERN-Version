import React from "react";

const ColourBar = () => {
    return (
        <div className="colourBar">
            <input type="hidden" className="colName"/>
            <input type="hidden" className="colRgb"/>
            <input type="hidden" className="colHsl"/>
            <input type="hidden" className="colHex"/>
        </div>
    )
}

export default ColourBar;