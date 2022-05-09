import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ModalCover from "./components/ModalCover";
import ColourModal from "./components/ColourModal";

const App = () => {
  const [coloursInfo, setColoursInfo] = useState([]);
  // -------------------
  const [showModalCover, setShowModalCover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // -------------------
  const [nameCol, setNameCol] = useState("");
  const [rgbCol, setRgbCol] = useState("");
  const [hslCol, setHslCol] = useState("");
  const [hexCol, setHexCol] = useState("");

  const [fetchError, setFetchError] = useState(null);
  const URL = "http://localhost:5000";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw Error("The data was not returned!");
        }
        const colours = await response.json();
        setColoursInfo(colours);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      }
    };
    fetchItems();
  }, []);

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
  };

  const closeModal = () => {
    setNameCol("");
    setRgbCol("");
    setHslCol("");
    setHexCol("");
    // ---------------------
    setShowModalCover(false);
    setShowModal(false);
  };

  return (
    <>
      <Header />
      {fetchError && <p>{fetchError}</p>}
      <Main
        coloursInfo={coloursInfo}
        handleColourBarClick={handleColourBarClick}
      />
      {showModalCover && <ModalCover />}
      {showModal && (
        <ColourModal
          nameCol={nameCol}
          rgbCol={rgbCol}
          hslCol={hslCol}
          hexCol={hexCol}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default App;
