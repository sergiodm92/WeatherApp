import React from "react";
import { Route, Routes } from "react-router-dom";
import CitiesBox from "./components/CitiesBox.jsx";
import CityInfo from "./components/CityInfo.jsx";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className=" bg-sky-600 h-screen ">
      <div className=" flex flex-col items-center h-[95vh]">
        <Routes>
        <Route path={"/"} element={<CitiesBox />}  />
        <Route path={"/:id"} element={<CityInfo/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
