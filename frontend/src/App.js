import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ModalCover from "./components/ModalCover";
import ColourModal from "./components/ColourModal";

const App = () => {

  // const [coloursInfo, setColoursInfo] = useState([]);
  const [showModalCover, setShowModalCover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [nameCol, setNameCol] = useState("");
  const [rgbCol, setRgbCol] = useState("");
  const [hslCol, setHslCol] = useState("");
  const [hexCol, setHexCol] = useState("");

  const testData = [
    { name: "lavenderblush", rgb: "(255,240,245)", hsl: "(340, 100%, 97.1%)", hex: "#FFF0F5" },
    { name: "mistyrose", rgb: "(255,228,225)", hsl: "(6, 100%, 94.1%)", hex: "#FFE4E1" },
    { name: "cornsilk", rgb: "(255,248,220)", hsl: "(48, 100%, 93.1%)", hex: "#FFF8DC" },
    { name: "blanchedalmond", rgb: "(255,235,205)", hsl: "(36, 100%, 90.2%)", hex: "#FFEBCD" },
    { name: "bisque", rgb: "(255,228,196)", hsl: "(33, 100%, 88.4%)", hex: "#FFE4C4" },
    { name: "navajowhite", rgb: "(255,222,173)", hsl: "(36, 100%, 83.9%)", hex: "#FFDEAD" },
    { name: "wheat", rgb: "(245,222,179)", hsl: "(39, 76.7%, 83.1%)", hex: "#F5DEB3" },
    { name: "burlywood", rgb: "(222,184,135)", hsl: "(34, 56.9%, 70%)", hex: "#DEB887" },
    { name: "tan", rgb: "(210,180,140)", hsl: "(34, 43.7%, 68.6%)", hex: "#D2B48C" },
    { name: "rosybrown", rgb: "(188,143,143)", hsl: "(0, 25.1%, 64.9%)", hex: "#BC8F8F" },
    { name: "sandybrown", rgb: "(244,164,96)", hsl: "(28, 87.1%, 66.7%)", hex: "#F4A460" },
    { name: "goldenrod", rgb: "(218,165,32)", hsl: "(43, 74.4%, 49.0%)", hex: "#DAA520" },
    { name: "darkgoldenrod", rgb: "(184,134,11)", hsl: "(43, 88.7%, 38.2%)", hex: "#B8860B" },
    { name: "peru", rgb: "(205,133,63)", hsl: "(30, 58.7%, 52.5%)", hex: "#CD853F" },
    { name: "chocolate", rgb: "(210,105,30)", hsl: "(25, 75.0%, 47.1%)", hex: "#D2691E" },
  ];

  const handleColourBarClick = (e) => {
    const clickedBar = e.target;
    const nameColour = clickedBar.querySelector(".colName").value;
    setNameCol(nameColour);
    const rgbColour = clickedBar.querySelector(".colRgb").value;
    setRgbCol(rgbColour);
    const hslColour = clickedBar.querySelector(".colHsl").value;
    setHslCol(hslColour);
    const hexColour = clickedBar.querySelector(".colHex").value;
    setHexCol(hexColour);
    // ----------------------
    setShowModalCover(true);
    setShowModal(true);
  }

  const closeModal = () => {
    setNameCol("");
    setRgbCol("");
    setHslCol("");
    setHexCol("");
    // ---------------------
    setShowModalCover(false);
    setShowModal(false);
  }

  return (
  <>
  <Header />
  <Main coloursInfo={testData} handleColourBarClick={handleColourBarClick} />
  {showModalCover && <ModalCover />}
  {showModal && <ColourModal nameCol={nameCol} rgbCol={rgbCol} hslCol={hslCol} hexCol={hexCol} closeModal={closeModal} />}
  </>
  )
}

export default App;