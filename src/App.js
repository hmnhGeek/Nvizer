import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import axios from "axios";
import { conf } from "./conf/conf";
import Api from "./Api/Api";
import SourcesSlider from "./components/SourcesSlider/SourcesSlider";

function App(props) {
  return (
    <>
      <Header />
      <SourcesSlider />
    </>
  );
}

export default App;
