import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import axios from "axios";
import { conf } from "./conf/conf";
import Api from "./Api/Api";
import SourcesSlider from "./components/SourcesSlider/SourcesSlider";
import HomeHeadlines from "./components/HomeHeadlines/HomeHeadlines";

function App(props) {
  return (
    <>
      <Header />
      <SourcesSlider />
      <div className="h-[1px] bg-gray-300 m-8"></div>
      <HomeHeadlines />
    </>
  );
}

export default App;
