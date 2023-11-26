import { useEffect, useState } from "react";
import "./App.css";

import useResizeScreen from "./utils/useResizeScreen";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import HomeMediwave from "../src/components/mediwave/AppMediwave/App";
import PageHomeVRme  from "../src/components/vrme/PageHomeVRme"
import SteriwaveHome from "./components/steriwave/home/Home";
import AppMedilink from "./components/medilink/AppMedilink";


const App = () => {
  const [vrmeImage, setVrmeImage] = useState();

  return (
    <div id="container">
       <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomeMediwave  />} />
          <Route path="/VRme" element={<PageHomeVRme />} />
          <Route path="/Medilink" element={<AppMedilink />} />
          <Route path="/Steriwave" element={<SteriwaveHome />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
};

export default App;





