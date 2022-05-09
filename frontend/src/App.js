import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ModalCover from "./components/ModalCover";
import ColourModal from "./components/ColourModal";

const App = () => {

  const [showModalCover, setShowModalCover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
  <>
  <Header />
  <Main />
  {showModalCover && <ModalCover />}
  {showModal && <ColourModal />}
  </>
  )
}

export default App;