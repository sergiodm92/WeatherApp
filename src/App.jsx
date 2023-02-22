import React from "react";
import { Route } from "react-router-dom";
import CitiesBox from "./components/CitiesBox.jsx";
import CityInfo from "./components/CityInfo.jsx";

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className=" bg-sky-600 h-screen ">
      <div className=" flex flex-col items-center h-[95vh]">
        <Route path="/" render={() => <Nav />} />
        <Route exact path={"/"} render={() => <CitiesBox />} />
        <Route
          path={"/city/:cityId"}
          render={({ match }) => <CityInfo id={Number(match.params.cityId)} />}
        />
      </div>
      <Footer/>
    </div>
  );
}
